"use client";

import { useState, useContext } from "react";
import { LineChart, BarChart2, List } from "lucide-react";
import { ChartLineInteractive } from "./financeMainGraph";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function FinanceMainChart() {
  const [activeTab, setActiveTab] = useState<"sales" | "transaction" | "value">(
    "sales",
  );
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
          STATIONS ACTIVATES OVERVIEW
        </h4>

        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-xs font-bold">
            {(["sales", "transaction", "value"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase cursor-pointer transition ${
                  activeTab === tab
                    ? "text-[#FF7A59] border-b-2 border-[#FF7A59] pb-1"
                    : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            className={`flex items-center gap-1 p-1 rounded-xl transition-colors duration-300 ${
              isDark ? "bg-slate-800/80" : "bg-slate-100"
            }`}
          >
            <button className="p-1.5 bg-[#FF7A59] text-white rounded-lg shadow-xs cursor-pointer">
              <LineChart size={14} />
            </button>
            <button
              className={`p-1.5 transition cursor-pointer ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <BarChart2 size={14} />
            </button>
            <button
              className={`p-1.5 transition cursor-pointer ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <List size={14} />
            </button>
          </div>
        </div>
      </div>

      <ChartLineInteractive />
    </div>
  );
}
