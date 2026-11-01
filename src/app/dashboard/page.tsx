"use client";

import { useState, useContext } from "react";
import dynamic from "next/dynamic";
import { ListViewComponent } from "@/components/dashboard/list/ListViewComponent";
import { Fuel } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";

const MapViewComponent = dynamic(
  () =>
    import("@/components/dashboard/map/MapViewComponent").then(
      (mod) => mod.MapViewComponent,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[550px] flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Loading map...
        </p>
      </div>
    ),
  },
);

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-6 w-full min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#090D16] text-white" : "bg-slate-50/50 text-slate-900"
      }`}
    >
      {/* Top Header Bar */}
      <div
        className={`px-6 py-4 rounded-2xl border shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300 ${
          isDark ? "bg-[#0F172A] border-slate-800" : "bg-white border-slate-100"
        }`}
      >
        {/* Monitored Stations Indicator */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A59] animate-pulse" />

          <div className="flex items-center gap-2">
            <Fuel
              size={18}
              className={isDark ? "text-slate-400" : "text-slate-500"}
            />
            <span
              className={`text-sm font-bold ${isDark ? "text-white" : "text-slate-800"}`}
            >
              2/3
            </span>
            <span
              className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-400"}`}
            >
              Monitored Stations
            </span>
          </div>
        </div>

        {/* View Mode Toggle Buttons */}
        <div
          className={`p-1 rounded-full flex items-center gap-1 transition-colors duration-300 ${
            isDark ? "bg-slate-800/80" : "bg-slate-100"
          }`}
        >
          <button
            onClick={() => setViewMode("map")}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              viewMode === "map"
                ? "bg-[#FF7A59] text-white shadow-sm"
                : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-800"
            }`}
          >
            MAP VIEW
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              viewMode === "list"
                ? "bg-[#FF7A59] text-white shadow-sm"
                : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-800"
            }`}
          >
            LIST VIEW
          </button>
        </div>

        {/* Last Update */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A59]" />

            <div className="relative flex items-center justify-center">
              <svg
                className={`w-7 h-7 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="2 3"
                  d="M12 2a10 10 0 0 1 7.54 16.63L21 20M21 15v5h-5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 20l-4-4"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-baseline gap-1.5">
            <div
              className={`flex flex-col text-[10px] font-medium leading-tight ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <span>Last</span>
              <span>Update</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="w-full">
        {viewMode === "map" ? <MapViewComponent /> : <ListViewComponent />}
      </div>
    </div>
  );
}
