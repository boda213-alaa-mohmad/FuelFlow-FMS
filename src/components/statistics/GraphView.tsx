"use client";

import { useState, useContext } from "react";
import { ChartAreaDefault } from "./areaGraph";
import { ThemeContext } from "../../../context/ThemeContext";

export default function GraphChartSection() {
  const [activeTab, setActiveTab] = useState<
    "sales" | "transaction" | "value" | "compression"
  >("sales");
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm space-y-6 w-full transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-gray-100 text-slate-900"
      }`}
    >
      {/* Header & Tabs */}
      <div
        className={`flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 gap-4 transition-colors duration-300 ${
          isDark ? "border-slate-800" : "border-slate-100"
        }`}
      >
        <h4
          className={`text-xs font-bold tracking-wider ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          STATIONS ACTIVATES OVERVIEW
        </h4>
        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs font-bold">
          {(["sales", "transaction", "value", "compression"] as const).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase cursor-pointer pb-2 sm:pb-4 transition ${
                  activeTab === tab
                    ? "text-[#FF7A59] border-b-2 border-[#FF7A59]"
                    : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Chart Container Area */}
      <div
        className={`w-full border border-dashed rounded-2xl p-6 transition-colors duration-300 ${
          isDark
            ? "bg-[#0B101D] border-slate-800"
            : "bg-slate-50/50 border-slate-200"
        }`}
      >
        <ChartAreaDefault />
        <div
          className={`mt-4 pt-3 border-t text-right transition-colors duration-300 ${
            isDark ? "border-slate-800/80" : "border-slate-200/60"
          }`}
        >
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
            Active Tab:{" "}
            <span className="text-[#FF7A59] font-bold">{activeTab}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
