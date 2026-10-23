"use client";

import { useState } from "react";
import { BarChart2, Layers, Radar } from "lucide-react";
import { ChartRadarGridCircleNoLines } from "./OperationGraph";

export default function OperationMainContent() {
  const [activeTab, setActiveTab] = useState<"compressor" | "dispenser">(
    "compressor",
  );

  const overallBars = [
    { label: "Idle", color: "bg-amber-400", height: "h-20" },
    { label: "Compression", color: "bg-teal-400", height: "h-36" },
    { label: "Recirculating", color: "bg-sky-500", height: "h-44" },
    { label: "Others", color: "bg-slate-700", height: "h-24" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 gap-4">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          STATION DETAILS
        </h4>

        <div className="flex items-center gap-6">
          <div className="flex gap-6 text-xs font-bold">
            <button
              onClick={() => setActiveTab("compressor")}
              className={`uppercase cursor-pointer transition ${
                activeTab === "compressor"
                  ? "text-[#FF7A59] border-b-2 border-[#FF7A59] pb-1"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              COMPRESSOR STATUS
            </button>
            <button
              onClick={() => setActiveTab("dispenser")}
              className={`uppercase cursor-pointer transition ${
                activeTab === "dispenser"
                  ? "text-[#FF7A59] border-b-2 border-[#FF7A59] pb-1"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              DISPENSER DETAILS
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <button className="p-1.5 bg-[#FF7A59] text-white rounded-lg shadow-xs">
              <BarChart2 size={16} />
            </button>
            <button className="p-1.5 hover:bg-slate-50 rounded-lg transition hover:text-slate-700">
              <Layers size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
        <ChartRadarGridCircleNoLines />

        <div className="flex flex-col items-center justify-center space-y-3 p-4 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
          <div className="w-full h-56 flex items-end justify-center gap-6 pb-2">
            {overallBars.map((bar, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className={`w-6 rounded-t-sm ${bar.color} ${bar.height} transition-all duration-300`}
                ></div>
                <span className="text-[10px] font-medium text-slate-600">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
            OVERALL
          </span>
        </div>
      </div>
    </div>
  );
}
