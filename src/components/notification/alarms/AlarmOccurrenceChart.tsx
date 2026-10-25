"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BarChart2, List, MoreHorizontal } from "lucide-react";

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
  const [viewMode, setViewMode] = useState<"chart" | "list">("chart");

  return (
    <div className="bg-white p-1 rounded-2xl border border-slate-100 shadow-sm space-y-6 w-full">
      {/* Header & View Mode Toggles */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          ALARM OCCURRENCE STATE
        </h3>

        <div className="flex items-center gap-3">
          {/* Toggle Buttons */}
          <div className="flex items-center bg-[#FAF6F5] p-1 rounded-xl">
            <button
              onClick={() => setViewMode("chart")}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                viewMode === "chart"
                  ? "bg-[#FF7A59] text-white shadow-xs"
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
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <List size={16} />
            </button>
          </div>

          <button className="text-slate-400 hover:text-slate-600 transition cursor-pointer">
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
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tick={{ fontSize: 10, fill: "#94a3b8" }}
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
