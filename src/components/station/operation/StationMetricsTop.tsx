"use client";

import { useState, useContext } from "react";
import { Gauge, SlidersHorizontal } from "lucide-react";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function StationMetricsTop() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [activeSubTab, setActiveSubTab] = useState<
    "pressure" | "kpi" | "temperture"
  >("temperture");

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm space-y-6 w-full transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-gray-100 text-slate-900"
      }`}
    >
      <div
        className={`flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 gap-4 transition-colors duration-300 ${
          isDark ? "border-slate-800" : "border-slate-100"
        }`}
      >
        <h4
          className={`text-xs font-bold uppercase tracking-wider ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          STATION DETAILS
        </h4>

        <div className="flex items-center gap-6">
          <div className="flex gap-6 text-xs font-bold">
            {(["pressure", "kpi", "temperture"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`uppercase cursor-pointer transition ${
                  activeSubTab === tab
                    ? "text-[#FF7A59] border-b-2 border-[#FF7A59] pb-1"
                    : isDark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            className={`flex items-center gap-1.5 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <button
              className={`p-1.5 rounded-lg transition text-[#FF7A59] ${
                isDark ? "hover:bg-slate-800" : "hover:bg-slate-50"
              }`}
            >
              <Gauge size={16} />
            </button>
            <button
              className={`p-1.5 rounded-lg transition ${
                isDark
                  ? "hover:bg-slate-800 hover:text-white"
                  : "hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Metric Card 1 */}
        <div
          className={`flex flex-col items-center justify-center p-4 rounded-2xl border border-dashed space-y-3 transition-colors duration-300 ${
            isDark
              ? "bg-slate-900/60 border-slate-800"
              : "bg-slate-50/50 border-slate-200"
          }`}
        >
          <div className="relative w-28 h-14 overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-28 h-28 rounded-full border-8 border-t-amber-400 border-r-amber-400 border-b-transparent border-l-transparent transform -rotate-45 ${
                isDark ? "border-slate-800" : "border-slate-200"
              }`}
            ></div>
          </div>
          <div className="text-center space-y-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              INLET TEMPERTURE
            </p>
            <h3
              className={`text-lg font-bold ${
                isDark ? "text-white" : "text-slate-800"
              }`}
            >
              25 Pa{" "}
              <span
                className={`text-xs font-normal ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                (25%)
              </span>
            </h3>
          </div>
        </div>

        {/* Metric Card 2 */}
        <div
          className={`flex flex-col items-center justify-center p-4 rounded-2xl border border-dashed space-y-3 transition-colors duration-300 ${
            isDark
              ? "bg-slate-900/60 border-slate-800"
              : "bg-slate-50/50 border-slate-200"
          }`}
        >
          <div className="relative w-28 h-14 overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-28 h-28 rounded-full border-8 border-t-amber-400 border-r-amber-400 border-b-amber-400 border-l-transparent transform rotate-12 ${
                isDark ? "border-slate-800" : "border-slate-200"
              }`}
            ></div>
          </div>
          <div className="text-center space-y-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              OIL TEMPERTURE
            </p>
            <h3
              className={`text-lg font-bold ${
                isDark ? "text-white" : "text-slate-800"
              }`}
            >
              80 Pa{" "}
              <span
                className={`text-xs font-normal ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                (80%)
              </span>
            </h3>
          </div>
        </div>

        {/* Metric Card 3 */}
        <div
          className={`flex flex-col items-center justify-center p-4 rounded-2xl border border-dashed space-y-3 transition-colors duration-300 ${
            isDark
              ? "bg-slate-900/60 border-slate-800"
              : "bg-slate-50/50 border-slate-200"
          }`}
        >
          <div className="relative w-28 h-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-28 h-28 rounded-full border-8 border-amber-400"></div>
          </div>
          <div className="text-center space-y-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              STAGES TEMPERTURE
            </p>
            <h3
              className={`text-lg font-bold ${
                isDark ? "text-white" : "text-slate-800"
              }`}
            >
              100 Pa avg{" "}
              <span
                className={`text-xs font-normal ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                (100%)
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
