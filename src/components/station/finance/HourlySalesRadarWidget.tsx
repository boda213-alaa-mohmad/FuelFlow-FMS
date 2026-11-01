"use client";

import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { ChartRadarDots } from "./HourlySalesRadarGraph";

export default function HourlySalesRadarWidget() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`p-5 rounded-2xl border shadow-sm space-y-4 w-full transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-gray-100 text-slate-900"
      }`}
    >
      <h4
        className={`text-xs font-bold text-center ${
          isDark ? "text-slate-200" : "text-slate-800"
        }`}
      >
        Hourly Sales
      </h4>
      <ChartRadarDots />
    </div>
  );
}
