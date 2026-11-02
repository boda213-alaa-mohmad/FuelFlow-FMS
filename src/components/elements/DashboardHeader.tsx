"use client";

import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../../context/ThemeContext";

import AddStationModal, { type NewStation } from "./station/AddStationModal";
import AddDispenserModal, {
  type DispenserProps,
} from "./dispenser/AddDispenserModal";
import AddCompressorModal, {
  type NewCompressor,
} from "./compressor/AddCompressorModal";
import AddNozzleModal, { type newNozzle } from "./nozzle/AddNozzleModal";

import StationsTable from "./station/tableStation";
import DispensersTable from "./dispenser/tableDispenser";
import CompressorsTable from "./compressor/tableCompressor";
import NozzlesTable from "./nozzle/tableNozzle";

import { mockStations } from "@/data/mockStations";
import { mockDispensers } from "@/data/mockDispensers";
import { DispenserItem } from "@/types/dispenser";
import { StationItem } from "@/types/StationItem";
import { CompressorItem } from "@/types/compressor";
import { mockCompressors } from "@/data/mockCompressor";
import { NozzleItem } from "@/types/nozzle";
import { mockNozzles } from "@/data/mockNozzles";

const TABS = [
  { id: "station", label: "Stations", icon: "/icons/station.png" },
  { id: "dispenser", label: "Dispenser", icon: "/icons/dispenser.png" },
  { id: "compressor", label: "Compressor", icon: "/icons/compressor.png" },
  { id: "nozzle", label: "Nozzle", icon: "/icons/nozzle.png" },
] as const;

type TabId = (typeof TABS)[number]["id"];
type Station = StationItem;
type Dispenser = DispenserProps;

export default function DashboardHeader() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [stations, setStations] = useState<Station[]>(mockStations);
  const [dispensers, setDispensers] = useState<DispenserItem[]>(mockDispensers);
  const [compressors, setCompressors] =
    useState<CompressorItem[]>(mockCompressors);
  const [nozzles, setNozzles] = useState<NozzleItem[]>(mockNozzles);

  const [activeTab, setActiveTab] = useState<TabId>("station");

  // Restore the saved tab safely from localStorage
  useEffect(() => {
    const savedTab = localStorage.getItem("tab");

    const isValidTab = TABS.some((tab) => tab.id === savedTab);

    if (isValidTab) {
      setActiveTab(savedTab as TabId);
    }
  }, []);

  function handleSaveLocalStorage(id: TabId) {
    localStorage.setItem("tab", id);
  }

  function handleTabChange(id: TabId) {
    setActiveTab(id);
    handleSaveLocalStorage(id);
  }

  // Stations
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

  // Dispensers
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

  // Compressors
  function handleAddCompressor(newCompressor: NewCompressor) {
    const compressor: CompressorItem = {
      ...newCompressor,
      id: crypto.randomUUID(),
      status: "active",
    };

    setCompressors((previousCompressors) => [
      ...previousCompressors,
      compressor,
    ]);

    setIsModalOpen(false);
  }

  function handleDeleteCompressor(id: string) {
    setCompressors((previousCompressors) =>
      previousCompressors.filter((compressor) => compressor.id !== id),
    );
  }

  // todo: function compressor
  function handleEditCompressor(id: string) {
    console.log(id);
    setIsModalOpen(true);
  }

  // Nozzles
  function handleAddNozzle(nozzleData: newNozzle) {
    const nozzle: NozzleItem = {
      ...nozzleData,
      id: crypto.randomUUID(),
      status: "active",
    };

    setNozzles((previousNozzles) => [...previousNozzles, nozzle]);
    setIsModalOpen(false);
  }

  function handleDeleteNozzle(id: string) {
    setNozzles((previousNozzles) =>
      previousNozzles.filter((nozzle) => nozzle.id !== id),
    );
  }

  return (
    <div className="space-y-6">
      {/* Dashboard tabs */}
      <div className="flex flex-wrap justify-center gap-5 items-center">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              role="button"
              tabIndex={0}
              className={`flex items-center justify-center gap-4 rounded-2xl p-4 transition-all duration-200 cursor-pointer ${
                isActive
                  ? isDark
                    ? "h-[160px] w-[270px] bg-[#371007]/15 border-2 border-[#FF7A59] text-white shadow-md backdrop-blur-sm"
                    : "h-[160px] w-[270px] bg-[#FFF2EE] border-2 border-[#FF7A59] text-[#2B3A4A] shadow-sm"
                  : isDark
                    ? "h-[140px] w-[270px] bg-slate-900/60 border border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200"
                    : "h-[140px] w-[270px] bg-[#FBE8E2]/60 border border-transparent text-slate-600 hover:bg-[#FBE8E2]"
              }`}
              onClick={() => handleTabChange(tab.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleTabChange(tab.id);
                }
              }}
            >
              <Image src={tab.icon} alt="" width={44} height={44} />
              <p className="text-xl font-semibold">{tab.label}</p>
            </div>
          );
        })}
      </div>

      {/* Stations section */}
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

      {/* Dispensers section */}
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

      {/* Compressors section */}
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
            onEdit={handleEditCompressor}
          />
        </>
      )}

      {/* Nozzles section */}
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

      {/* Add button */}
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <button
          type="button"
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
