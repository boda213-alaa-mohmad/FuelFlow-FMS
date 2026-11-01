"use client";

import { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ThemeContext } from "../../../../context/ThemeContext";

export function AlarmOverallCard() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const percentage = 86;
  const pieData = [
    { name: "Rate", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  // Custom colors for light/dark mode on the chart remaining part
  const COLORS = ["#FF7A59", isDark ? "#1E293B" : "#FDE8E2"];

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm space-y-4 w-full transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between border-b pb-3 transition-colors duration-300 ${
          isDark ? "border-slate-800" : "border-slate-100"
        }`}
      >
        <h3
          className={`text-xs font-bold uppercase tracking-wider ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          ALARM OVERALL
        </h3>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-2">
        {/* Donut Chart Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={48}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <span
              className={`absolute text-2xl font-bold ${
                isDark ? "text-white" : "text-slate-800"
              }`}
            >
              {percentage}%
            </span>
          </div>
          <span
            className={`text-sm font-bold mt-1 ${
              isDark ? "text-slate-200" : "text-slate-800"
            }`}
          >
            Alarm Rate
          </span>
        </div>

        {/* Frequency Section */}
        <div
          className={`space-y-3 border-l-0 md:border-l md:pl-6 transition-colors duration-300 ${
            isDark ? "border-slate-800" : "border-slate-100"
          }`}
        >
          <h4
            className={`text-[11px] font-bold text-center md:text-left mb-4 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Frequency
          </h4>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-16 text-slate-400 font-medium">Today</span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                3 Times
              </span>
              <span className={isDark ? "text-slate-600" : "text-slate-300"}>
                |
              </span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                10 min
              </span>
            </div>

            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-16 text-slate-400 font-medium">Yesterday</span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                4 Times
              </span>
              <span className={isDark ? "text-slate-600" : "text-slate-300"}>
                |
              </span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                20 min
              </span>
            </div>

            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-16 text-slate-400 font-medium">Week</span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                5 Times
              </span>
              <span className={isDark ? "text-slate-600" : "text-slate-300"}>
                |
              </span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                12 min
              </span>
            </div>
          </div>
        </div>

        {/* Last Occurred Section */}
        <div
          className={`space-y-3 border-l-0 md:border-l md:pl-6 transition-colors duration-300 ${
            isDark ? "border-slate-800" : "border-slate-100"
          }`}
        >
          <h4
            className={`text-[11px] font-bold text-center md:text-left mb-4 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Last Occurred
          </h4>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-20 text-slate-400 font-medium">Date Time</span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                2-8-2020
              </span>
              <span className={isDark ? "text-slate-600" : "text-slate-300"}>
                |
              </span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                10:20:21
              </span>
            </div>

            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-20 text-slate-400 font-medium">
                Compressor
              </span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                Compressor id
              </span>
            </div>

            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-20 text-slate-400 font-medium">Dispenser</span>
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                Dispenser
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
