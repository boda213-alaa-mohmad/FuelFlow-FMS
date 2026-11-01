"use client";

import { useContext } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";

export default function OverviewCards() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* Card 1: Total Value */}
      <div
        className={`p-6 rounded-2xl border shadow-sm space-y-2 transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-orange-500/30 text-white"
            : "bg-[#FDF2F0] border-orange-100 text-slate-900"
        }`}
      >
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? "text-orange-400/80" : "text-slate-500"
          }`}
        >
          Total Value
        </span>
        <div className="flex items-baseline gap-2">
          <h3
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}
          >
            71,028
          </h3>
          <span
            className={`text-sm font-semibold ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            EGP
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-red-500">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>2%</span>
        </div>
      </div>

      {/* Card 2: Total Sales */}
      <div
        className={`p-6 rounded-2xl border shadow-sm space-y-2 transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-slate-800 text-white"
            : "bg-white border-gray-100 text-slate-900"
        }`}
      >
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? "text-slate-400" : "text-slate-400"
          }`}
        >
          Total Sales
        </span>
        <div className="flex items-baseline gap-1">
          <h3
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}
          >
            20,000
          </h3>
          <span
            className={`text-sm font-semibold ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            m³
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-emerald-500">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>50 m³</span>
        </div>
      </div>

      {/* Card 3: Avg Sales */}
      <div
        className={`p-6 rounded-2xl border shadow-sm space-y-2 transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-slate-800 text-white"
            : "bg-white border-gray-100 text-slate-900"
        }`}
      >
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? "text-slate-400" : "text-slate-400"
          }`}
        >
          Avg Sales
        </span>
        <div className="flex items-baseline gap-1">
          <h3
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}
          >
            20,000
          </h3>
          <span
            className={`text-sm font-semibold ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            m³
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-red-500">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>50 m³</span>
        </div>
      </div>

      {/* Card 4: Total Transaction Count */}
      <div
        className={`p-6 rounded-2xl border shadow-sm space-y-2 transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-slate-800 text-white"
            : "bg-white border-gray-100 text-slate-900"
        }`}
      >
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? "text-slate-400" : "text-slate-400"
          }`}
        >
          Total Transaction Count
        </span>
        <div className="flex items-baseline gap-1">
          <h3
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}
          >
            1567
          </h3>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-emerald-500">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>20</span>
        </div>
      </div>
    </div>
  );
}
