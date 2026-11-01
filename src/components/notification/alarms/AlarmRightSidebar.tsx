"use client";

import { useState, useContext } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../../context/ThemeContext";

const hourlyData = [
  { hour: "24:00", value: 40 },
  { hour: "02:00", value: 60 },
  { hour: "04:00", value: 30 },
  { hour: "06:00", value: 80 },
  { hour: "08:00", value: 50 },
  { hour: "10:00", value: 70 },
  { hour: "12:00", value: 90 },
  { hour: "14:00", value: 40 },
  { hour: "16:00", value: 75 },
  { Hour: "18:00", value: 50 },
  { hour: "20:00", value: 65 },
  { hour: "22:00", value: 85 },
];

export function AlarmRightSidebar() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [activeTab, setActiveTab] = useState<"compressor" | "compression">(
    "compressor",
  );

  const bars = [
    { label: "Idle", color: "bg-amber-400", height: "h-16" },
    { label: "Compression", color: "bg-teal-400", height: "h-32" },
    { label: "Recirculating", color: "bg-sky-500", height: "h-36" },
    { label: "Others", color: "bg-blue-600", height: "h-20" },
  ];

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm space-y-8 w-full transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      {/* 1. Tabs Header */}
      <div
        className={`flex p-1 rounded-2xl transition-colors duration-300 ${
          isDark ? "bg-slate-800/80" : "bg-[#F8F5F4]"
        }`}
      >
        <button
          onClick={() => setActiveTab("compressor")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeTab === "compressor"
              ? "bg-[#FF7A59] text-white shadow-sm"
              : isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
            <path d="M14 9h4l4 4v4h-8z" />
          </svg>
          <span>Compressor Status</span>
        </button>

        <button
          onClick={() => setActiveTab("compression")}
          className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeTab === "compression"
              ? "bg-[#FF7A59] text-white shadow-sm"
              : isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-700 hover:text-slate-900"
          }`}
        >
          Compression
        </button>
      </div>

      {/* 2. Bar Chart Section */}
      <div className="flex flex-col items-center justify-center pt-2 space-y-4">
        <div className="w-full h-48 flex items-end justify-around px-4">
          {bars.map((bar, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div
                className={`w-8 rounded-t-md ${bar.color} ${bar.height} transition-all duration-300 shadow-sm`}
              ></div>
              <span
                className={`text-[11px] font-medium ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <hr className={isDark ? "border-slate-800" : "border-slate-100"} />

      {/* 3. Hourly Occurrence Radar Chart */}
      <div className="space-y-4">
        <h4
          className={`text-sm font-bold text-center ${
            isDark ? "text-white" : "text-slate-800"
          }`}
        >
          Hourly Occurrence
        </h4>

        <div className="w-full h-[260px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={hourlyData} outerRadius={80}>
              <PolarGrid
                gridType="polygon"
                stroke={isDark ? "#1E293B" : "#cbd5e1"}
              />
              <PolarAngleAxis
                dataKey="hour"
                tick={{
                  fontSize: 10,
                  fill: isDark ? "#94A3B8" : "#64748b",
                  fontWeight: 500,
                }}
              />
              <Radar
                dataKey="value"
                stroke="transparent"
                fill="#FF7A59"
                fillOpacity={0.25}
                dot={{
                  r: 5,
                  fill: "#DC2626",
                  stroke: "#DC2626",
                  strokeWidth: 1,
                  fillOpacity: 1,
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
