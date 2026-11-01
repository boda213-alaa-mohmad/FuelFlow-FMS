"use client";

import { Fuel } from "lucide-react";
import { DropDownOption } from "./DropDownOption";
import { useState, useContext } from "react";
import { EmptyState } from "./EmptyList";
import { ThemeContext } from "../../../../context/ThemeContext";

export function ListViewComponent() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

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

  const [stationsDelete, setStationDelete] = useState(stationsList);

  function deleteItem(id: number) {
    setStationDelete(
      stationsDelete.filter((station) => {
        return station.id !== id;
      }),
    );
  }

  return (
    <div className="w-full space-y-4 px-2">
      {stationsDelete.length > 0 ? (
        stationsDelete.map((station) => (
          <div
            key={station.id}
            className={`px-6 py-5 rounded-2xl border shadow-sm relative flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all cursor-pointer w-full ${
              isDark
                ? "bg-[#0F172A] border-slate-800 text-white hover:border-slate-700"
                : "bg-white border-slate-100 text-slate-900"
            }`}
          >
            {/* Dropdown Menu Component Positioned Top-Right */}
            <div className="absolute top-3 right-4">
              <DropDownOption
                onDelete={() => {
                  deleteItem(station.id);
                }}
              />
            </div>

            {/* Left Side: Status Indicator, Fuel Icon & Station Name */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start pr-6 md:pr-0">
              <div className="flex items-center gap-3">
                <span
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    station.isActive ? "bg-[#FF7A59]" : "bg-slate-400"
                  }`}
                ></span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-xl border ${
                    station.isActive
                      ? isDark
                        ? "border-orange-500/30 text-[#FF7A59] bg-orange-500/10"
                        : "border-orange-100 text-[#FF7A59] bg-orange-50/50"
                      : isDark
                        ? "border-slate-800 text-slate-400 bg-slate-800/50"
                        : "border-slate-100 text-slate-400 bg-slate-50"
                  }`}
                >
                  <Fuel size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    STATION NAME
                  </h4>
                  <span
                    className={`text-sm font-bold tracking-wide ${isDark ? "text-white" : "text-slate-800"}`}
                  >
                    {station.name.replace("STATION NAME ", "")}
                  </span>
                </div>
              </div>
            </div>

            {/* Compressor State */}
            <div className="text-center md:text-left w-full md:w-auto">
              <span
                className={`text-sm font-bold block ${isDark ? "text-white" : "text-slate-800"}`}
              >
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
                <span
                  className={`text-sm font-bold block ${isDark ? "text-white" : "text-slate-800"}`}
                >
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
                <span
                  className={`text-sm font-bold block ${isDark ? "text-white" : "text-slate-800"}`}
                >
                  {station.warningCount}
                </span>
                <span className="text-xs font-bold text-slate-400 tracking-wide">
                  Warning Count
                </span>
              </div>
            </div>

            {/* Active Dispenser */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
              <Fuel
                size={20}
                className={
                  isDark ? "text-slate-300" : "text-slate-700 flex-shrink-0"
                }
              />
              <div>
                <span
                  className={`text-sm font-bold block ${isDark ? "text-white" : "text-slate-800"}`}
                >
                  {station.activeDispenser}
                </span>
                <span className="text-xs font-bold text-slate-400 tracking-wide">
                  Active Dispenser
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
