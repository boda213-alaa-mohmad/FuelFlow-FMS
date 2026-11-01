"use client";

import { useState, useContext } from "react";
import { MoreHorizontal } from "lucide-react";
import { ThemeContext } from "../../../../context/ThemeContext";

export function WarningOverallCard() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [activeTab, setActiveTab] = useState<
    "stationDetails" | "pressure" | "kpi" | "temperature"
  >("kpi");

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm w-full space-y-6 transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      {/* Top Tabs Bar */}
      <div
        className={`flex items-center justify-between border-b pb-3 transition-colors duration-300 ${
          isDark ? "border-slate-800" : "border-slate-100"
        }`}
      >
        <div
          className={`flex items-center gap-8 text-xs font-bold ${
            isDark ? "text-slate-400" : "text-slate-400"
          }`}
        >
          {(
            [
              { key: "stationDetails", label: "STATION DETAILS" },
              { key: "pressure", label: "PRESSURE" },
              { key: "kpi", label: "KPI" },
              { key: "temperature", label: "TEMPERTURE" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`transition cursor-pointer tracking-wider ${
                activeTab === tab.key
                  ? `${
                      isDark ? "text-white" : "text-slate-800"
                    } border-b-2 border-[#FF7A59] pb-3 -mb-3`
                  : isDark
                    ? "hover:text-slate-200"
                    : "hover:text-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          className={`cursor-pointer p-1 transition ${
            isDark
              ? "text-slate-400 hover:text-white"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
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
                className={isDark ? "text-slate-800" : "text-orange-100"}
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
              <span
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                86%
              </span>
            </div>
          </div>
          <span
            className={`text-sm font-bold mt-2 tracking-wide ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`}
          >
            CT / RT
          </span>
        </div>

        {/* Middle: Total Working Time */}
        <div className="flex flex-col items-center justify-center text-center">
          <span
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            4322
          </span>
          <span
            className={`text-xs font-bold mt-1 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Total working Time
          </span>
        </div>

        {/* Right: Total Power On Time */}
        <div className="flex flex-col items-center justify-center text-center">
          <span
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            5334
          </span>
          <span
            className={`text-xs font-bold mt-1 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Total Power On Time
          </span>
        </div>
      </div>
    </div>
  );
}
