"use client";
import { useState } from "react";

import Image from "next/image";
const TABS = [
  {
    id: "stations",
    label: "Stations",
    icon: "/icons/stationa.png",
    isClicked: true,
  },
  {
    id: "dispenser",
    label: "Dispenser",
    icon: "/icons/dispenser.png",
    isClicked: false,
  },
  {
    id: "compressor",
    label: "Compressor",
    icon: "/icons/compressor.png",
    isClicked: false,
  },
  {
    id: "nozzle",
    label: "Nozzle",
    icon: "/icons/nozzle.png",
    isClicked: false,
  },
];

export default function DashboardHeader() {
  const [activeTab, setActiveTab] = useState<string>("stations");
  return (
    <div>
      <div className="flex justify-center gap-5">
        {/* card */}
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
    </div>
  );
}
