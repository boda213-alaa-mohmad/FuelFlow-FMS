"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

export function WarningOverallCard() {
  const [activeTab, setActiveTab] = useState<
    "stationDetails" | "pressure" | "kpi" | "temperature"
  >("kpi");

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-full space-y-6">
      {/* Top Tabs Bar */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-8 text-xs font-bold text-slate-400">
          <button
            onClick={() => setActiveTab("stationDetails")}
            className={`transition cursor-pointer tracking-wider ${
              activeTab === "stationDetails"
                ? "text-slate-800 border-b-2 border-[#FF7A59] pb-3 -mb-3"
                : "hover:text-slate-600"
            }`}
          >
            STATION DETAILS
          </button>
          <button
            onClick={() => setActiveTab("pressure")}
            className={`transition cursor-pointer tracking-wider ${
              activeTab === "pressure"
                ? "text-slate-800 border-b-2 border-[#FF7A59] pb-3 -mb-3"
                : "hover:text-slate-600"
            }`}
          >
            PRESSURE
          </button>
          <button
            onClick={() => setActiveTab("kpi")}
            className={`transition cursor-pointer tracking-wider ${
              activeTab === "kpi"
                ? "text-slate-800 border-b-2 border-[#FF7A59] pb-3 -mb-3"
                : "hover:text-slate-600"
            }`}
          >
            KPI
          </button>
          <button
            onClick={() => setActiveTab("temperature")}
            className={`transition cursor-pointer tracking-wider ${
              activeTab === "temperature"
                ? "text-slate-800 border-b-2 border-[#FF7A59] pb-3 -mb-3"
                : "hover:text-slate-600"
            }`}
          >
            TEMPERTURE
          </button>
        </div>

        <button className="text-slate-400 hover:text-slate-600 cursor-pointer p-1">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Main Card Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between py-4 gap-6">
        {/* Left: Donut Chart Representation */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* SVG Donut Chart */}
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                className="text-orange-100"
                strokeWidth="3.8"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#FF7A59]"
                strokeDasharray="86, 100"
                strokeWidth="3.8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold text-slate-800">86%</span>
            </div>
          </div>
          <span className="text-sm font-bold text-slate-700 mt-2 tracking-wide">
            CT / RT
          </span>
        </div>

        {/* Middle: Total Working Time */}
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-slate-800">4322</span>
          <span className="text-xs font-bold text-slate-500 mt-1">
            Total working Time
          </span>
        </div>

        {/* Right: Total Power On Time */}
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-slate-800">5334</span>
          <span className="text-xs font-bold text-slate-500 mt-1">
            Total Power On Time
          </span>
        </div>
      </div>
    </div>
  );
}
