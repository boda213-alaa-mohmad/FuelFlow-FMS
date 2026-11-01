"use client";

import { useState, useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BarChart2, List, MoreHorizontal } from "lucide-react";
import { ThemeContext } from "../../../../context/ThemeContext";

const chartData = [
  { time: "Text", value: 85 },
  { time: "Text", value: 65 },
  { time: "Text", value: 15 },
  { time: "Text", value: 70 },
  { time: "Text", value: 85 },
  { time: "Text", value: 15 },
  { time: "Text", value: 12 },
  { time: "Text", value: 40 },
  { time: "Text", value: 95 },
  { time: "Text", value: 90 },
];

export function AlarmOccurrenceChart() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [viewMode, setViewMode] = useState<"chart" | "list">("chart");

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm space-y-6 w-full transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      {/* Header & View Mode Toggles */}
      <div
        className={`flex items-center justify-between border-b pb-4 transition-colors duration-300 ${
          isDark ? "border-slate-800" : "border-slate-100"
        }`}
      >
        <h3
          className={`text-xs font-bold uppercase tracking-wider ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          ALARM OCCURRENCE STATE
        </h3>

        <div className="flex items-center gap-3">
          {/* Toggle Buttons */}
          <div
            className={`flex items-center p-1 rounded-xl transition-colors duration-300 ${
              isDark ? "bg-slate-800/80" : "bg-[#FAF6F5]"
            }`}
          >
            <button
              onClick={() => setViewMode("chart")}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                viewMode === "chart"
                  ? "bg-[#FF7A59] text-white shadow-xs"
                  : isDark
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <BarChart2 size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                viewMode === "list"
                  ? "bg-[#FF7A59] text-white shadow-xs"
                  : isDark
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <List size={16} />
            </button>
          </div>

          <button
            className={`transition cursor-pointer ${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full h-[320px] pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={isDark ? "#1E293B" : "#f1f5f9"}
            />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: isDark ? "#94A3B8" : "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tick={{ fontSize: 10, fill: isDark ? "#94A3B8" : "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FF7A59"
              strokeWidth={2.5}
              dot={{
                r: 4,
                fill: "#FF7A59",
                stroke: "#FF7A59",
                strokeWidth: 2,
              }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
