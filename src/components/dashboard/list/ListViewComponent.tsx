"use client";

import { Fuel, MoreHorizontal } from "lucide-react";

export function ListViewComponent() {
  const stationsList = [
    {
      id: 1,
      name: "STATION NAME DUMMY",
      isActive: true,
      compressorState: "Compression",
      alarmCount: 120,
      warningCount: 1926,
      activeDispenser: "2/3",
    },
    {
      id: 2,
      name: "STATION NAME DUMMY",
      isActive: false,
      compressorState: "Compression",
      alarmCount: 120,
      warningCount: 1926,
      activeDispenser: "0/3",
    },
    {
      id: 3,
      name: "STATION NAME DUMMY",
      isActive: true,
      compressorState: "Recirculating",
      alarmCount: 120,
      warningCount: 1926,
      activeDispenser: "2/3",
    },
  ];

  return (
    <div className="w-full space-y-4 px-6 mt-10">
      {stationsList.map((station) => (
        <div
          key={station.id}
          className="bg-white px-6 py-5 rounded-2xl border border-slate-100 shadow-sm relative flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all cursor-pointer w-full"
        >
          {/* 3-Dots Action Button Positioned Top-Right */}
          <div className="absolute top-3 right-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition cursor-pointer"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* Left Side: Status Indicator, Fuel Icon & Station Name */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start pr-6 md:pr-0">
            <div className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                  station.isActive ? "bg-[#FF7A59]" : "bg-slate-300"
                }`}
              ></span>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-xl border ${
                  station.isActive
                    ? "border-orange-100 text-[#FF7A59] bg-orange-50/50"
                    : "border-slate-100 text-slate-400 bg-slate-50"
                }`}
              >
                <Fuel size={20} />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  STATION NAME
                </h4>
                <span className="text-sm font-bold text-slate-800 tracking-wide">
                  {station.name.replace("STATION NAME ", "")}
                </span>
              </div>
            </div>
          </div>

          {/* Compressor State */}
          <div className="text-center md:text-left w-full md:w-auto">
            <span className="text-sm font-bold text-slate-800 block">
              {station.compressorState}
            </span>
            <span className="text-xs font-bold text-slate-400 tracking-wide">
              Compressor State
            </span>
          </div>

          {/* Alarm Count */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 flex-shrink-0"></span>
            <div>
              <span className="text-sm font-bold text-slate-800 block">
                {station.alarmCount}
              </span>
              <span className="text-xs font-bold text-slate-400 tracking-wide">
                Alarm Count
              </span>
            </div>
          </div>

          {/* Warning Count */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0"></span>
            <div>
              <span className="text-sm font-bold text-slate-800 block">
                {station.warningCount}
              </span>
              <span className="text-xs font-bold text-slate-400 tracking-wide">
                Warning Count
              </span>
            </div>
          </div>

          {/* Active Dispenser */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <Fuel size={20} className="text-slate-700 flex-shrink-0" />
            <div>
              <span className="text-sm font-bold text-slate-800 block">
                {station.activeDispenser}
              </span>
              <span className="text-xs font-bold text-slate-400 tracking-wide">
                Active Dispenser
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
