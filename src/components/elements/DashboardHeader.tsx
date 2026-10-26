"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import AddStationModal, { type NewStation } from "./AddStationModal";
import AddDispenserModal from "./AddDispenserModal";
import AddCompressorModal, { NewCompressor } from "./AddCompressorModal";
import AddNozzleModal, { newNozzle } from "./AddNozzleModal";

import StationsTable from "./tableStation";
import DispensersTable from "./tableDispenser";
import CompressorsTable from "./tableCompressor";
import NozzlesTable from "./tableNozzle";

import { mockStations } from "@/data/mockStations";
import { mockDispensers } from "@/data/mockDispensers";
import { DispenserItem } from "@/types/dispenser";
import { StationItem } from "@/types/StationItem";
import { CompressorItem } from "@/types/compressor";
import { mockCompressors } from "@/data/mockCompressor";
import { NozzleItem } from "@/types/nozzle";
import { mockNozzles } from "@/data/mockNozzles";

const TABS = [
  { id: "station", label: "Stations", icon: "/icons/stationa.png" },
  { id: "dispenser", label: "Dispenser", icon: "/icons/dispenser.png" },
  { id: "compressor", label: "Compressor", icon: "/icons/compressor.png" },
  { id: "nozzle", label: "Nozzle", icon: "/icons/nozzle.png" },
];

type Station = StationItem;
type Dispenser = DispenserItem;

export default function DashboardHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stations, setStations] = useState<Station[]>(mockStations);
  const [dispensers, setDispensers] = useState<Dispenser[]>(mockDispensers);
  const [compressors, setCompressors] =
    useState<CompressorItem[]>(mockCompressors);

  const [nozzles, setNozzles] = useState<NozzleItem[]>(mockNozzles);
  const [activeTab, setActiveTab] = useState<
    "station" | "dispenser" | "compressor" | "nozzle"
  >();

  useEffect(() => {
    const savedTab = localStorage.getItem("tab");

    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  // ? for saving localStorage
  function handleSaveLocalStorage(id: string) {
    localStorage.setItem("tab", id);
  }

  // * this is station section code
  function handleAddStation(newStation: NewStation) {
    const station: Station = {
      ...newStation,
      id: crypto.randomUUID(),
      status: "active",
    };
    setStations((previousStations) => [...previousStations, station]);
    setIsModalOpen(false);
  }
  function handleDeleteStation(id: string) {
    setStations((previousStations) =>
      previousStations.filter((station) => station.id !== id),
    );
  }

  // ********************************************** //
  // * this is dispenser section code
  function handleAddDispenser(newDispenser: Dispenser) {
    const dispenser: DispenserItem = {
      ...newDispenser,
      id: crypto.randomUUID(),
      status: "active",
    };
    setDispensers((previousDispensers) => [...previousDispensers, dispenser]);
    setIsModalOpen(false);
  }
  function handleDeleteDispenser(id: string) {
    setDispensers((previousDispensers) =>
      previousDispensers.filter((dispenser) => dispenser.id !== id),
    );
  }

  // ********************************************** //
  // * this is comporessor section code

  function handleAddCompressor(newCompressor: NewCompressor) {
    const compressor: CompressorItem = {
      ...newCompressor,
      id: crypto.randomUUID(),
      status: "active",
    };
    setCompressors([...compressors, compressor]);
    setIsModalOpen(false);
  }

  function handleDeleteCompressor(id: string) {
    setCompressors((previousCompressors) =>
      previousCompressors.filter((compressor) => compressor.id !== id),
    );
  }

  // ********************************************** //
  // * this is nozzle section code
  function handleAddNozzle(newNozzle: newNozzle) {
    const nozzle: NozzleItem = {
      ...newNozzle,
      id: crypto.randomUUID(),
      status: "active",
    };
    setNozzles([...nozzles, nozzle]);
    setIsModalOpen(false);
  }

  function handleDeleteNozzle(id: string) {
    setNozzles((previousNozzles) =>
      previousNozzles.filter((nozzle) => nozzle.id !== id),
    );
  }

  return (
    <div>
      {/* Dashboard tabs */}
      <div className="flex justify-center gap-5">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              className={`flex h-[140px] w-[270px] cursor-pointer items-center justify-center gap-4 rounded-2xl p-4 transition-all duration-200 ${
                isActive
                  ? "h-[170px] bg-[#FF7A59] text-white shadow-md"
                  : "bg-[#FBE8E2] text-[#2B3A4A]"
              }`}
              onClick={() => {
                setActiveTab(tab.id);

                handleSaveLocalStorage(tab.id);
              }}
            >
              <Image src={tab.icon} alt="" width={49} height={49} />
              <p className="text-2xl font-medium">{tab.label}</p>
            </div>
          );
        })}
      </div>

      {activeTab === "station" && (
        <>
          <AddStationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddStation}
          />

          <StationsTable stations={stations} onDelete={handleDeleteStation} />
        </>
      )}

      {activeTab === "dispenser" && (
        <>
          <AddDispenserModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddDispenser}
          />

          <DispensersTable
            dispensers={dispensers}
            onDelete={handleDeleteDispenser}
          />
        </>
      )}

      {activeTab === "compressor" && (
        <>
          <AddCompressorModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddCompressor}
          />
          <CompressorsTable
            compressors={compressors}
            onDelete={handleDeleteCompressor}
          />
        </>
      )}

      {/* ************************************** */}

      {activeTab === "nozzle" && (
        <>
          <AddNozzleModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddNozzle}
          />
          <NozzlesTable nozzles={nozzles} onDelete={handleDeleteNozzle} />
        </>
      )}
      {/* ****************************** */}

      {/* Add button */}
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-auto mt-6 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FF7A59] px-6 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#ff653c]"
        >
          <span className="text-xl font-bold">+</span>
          <span>ADD NEW</span>
        </button>
      </div>
    </div>
  );
}
