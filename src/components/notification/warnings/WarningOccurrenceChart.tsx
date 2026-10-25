"use client";

import { MoreHorizontal } from "lucide-react";

export function WarningOccurrenceChart() {
  const chartData = [
    { label: "Class Dummy Name", value: 20, color: "bg-indigo-900" },
    { label: "Class Dummy Name", value: 55, color: "bg-amber-400" },
    { label: "Class Dummy Name", value: 48, color: "bg-teal-400" },
    { label: "Class Dummy Name", value: 20, color: "bg-orange-400" },
    { label: "Class Dummy Name", value: 45, color: "bg-sky-500" },
    { label: "Class Dummy Name", value: 76, color: "bg-rose-700" },
    { label: "Class Dummy Name", value: 41, color: "bg-amber-300/80" },
    { label: "Class Dummy Name", value: 62, color: "bg-indigo-700" },
    { label: "Class Dummy Name", value: 83, color: "bg-cyan-500" },
    { label: "Class Dummy Name", value: 76, color: "bg-teal-500" },
    { label: "Class Dummy Name", value: 60, color: "bg-amber-400" },
    { label: "Class Dummy Name", value: 105, color: "bg-orange-500" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h3 className="text-sm font-bold text-slate-800 tracking-wider">
          WARNING CLASSIFICATION
        </h3>
        <button className="text-slate-400 hover:text-slate-600 cursor-pointer p-1">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Chart Body */}
      <div className="relative h-64 w-full flex items-end justify-between gap-2 pt-6 px-2 border-b border-slate-200">
        {/* Horizontal grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
          <div className="w-full border-b border-slate-100 border-dashed"></div>
          <div className="w-full border-b border-slate-100 border-dashed"></div>
          <div className="w-full border-b border-slate-100 border-dashed"></div>
          <div className="w-full border-b border-slate-100 border-dashed"></div>
        </div>

        {/* Y-Axis labels */}
        <div className="absolute -left-6 inset-y-0 flex flex-col justify-between text-[10px] text-slate-400 py-1">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>

        {/* Bars */}
        {chartData.map((item, index) => {
          const heightPercentage = (item.value / 120) * 100;
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center h-full justify-end relative group z-10"
            >
              {/* Tooltip on hover */}
              <div className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-md">
                {item.value}
              </div>

              {/* Bar element */}
              <div
                className={`w-full max-w-[28px] rounded-t-sm transition-all duration-300 ${item.color}`}
                style={{ height: `${heightPercentage}%` }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* X-Axis Labels */}
      <div className="flex items-center justify-between gap-2 px-2 text-center">
        {chartData.map((item, index) => (
          <div key={index} className="flex-1 truncate">
            <span className="text-[9px] text-slate-400 block truncate leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
