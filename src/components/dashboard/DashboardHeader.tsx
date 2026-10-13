"use client";
import { useState } from "react";
import Image from "next/image";
import AddStationModal from "./AddStationModal";
import AddDispenserModal from "./AddDispenserModal";
import AddCompressorModal from "./AddCompressorModal";
import AddNozzleModal from "./AddNozzleModal";

const TABS = [
  { id: "stations", label: "Stations", icon: "/icons/stationa.png" },
  { id: "dispenser", label: "Dispenser", icon: "/icons/dispenser.png" },
  { id: "compressor", label: "Compressor", icon: "/icons/compressor.png" },
  { id: "nozzle", label: "Nozzle", icon: "/icons/nozzle.png" },
];

export default function DashboardHeader() {
  const [activeTab, setActiveTab] = useState<string>("stations");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-center gap-5">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              className={`w-[270px] cursor-pointer flex items-center justify-center rounded-2xl p-4 gap-4 transition-all duration-200 ${
                isActive
                  ? "bg-[#FF7A59] h-[170px] text-white shadow-md"
                  : "bg-[#FBE8E2] h-[140px] text-[#2B3A4A]"
              }`}
              onClick={() => {
                setActiveTab(tab.id);
              }}
            >
              <Image src={tab.icon} alt="" width={49} height={49} />
              <p className="text-2xl font-medium">{tab.label}</p>
            </div>
          );
        })}
      </div>

      <div className="w-[1200px] ml-auto mr-auto">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="flex items-center justify-center gap-2 bg-[#FF7A59] hover:bg-[#ff653c] text-white font-medium py-3 px-6 rounded-xl shadow-sm transition-all duration-200 cursor-pointer ml-auto mt-6"
        >
          <span className="text-xl font-bold">+</span>
          <span>ADD NEW</span>
        </button>
      </div>

      {activeTab === "stations" && (
        <AddStationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {activeTab === "dispenser" && (
        <AddDispenserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {activeTab === "compressor" && (
        <AddCompressorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {activeTab === "nozzle" && (
        <AddNozzleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
