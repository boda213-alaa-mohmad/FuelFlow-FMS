"use client";

import { BarChart3 } from "lucide-react";
import { useState } from "react";

export default function GraphChartSection() {
  const [activeTab, setActiveTab] = useState<
    "sales" | "transaction" | "value" | "compression"
  >("sales");

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6 w-full">

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 gap-4">
        <h4 className="text-xs font-bold text-slate-700 tracking-wider">
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
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="w-full h-80 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 space-y-2 p-4 text-center">
        <BarChart3 className="w-10 h-10 text-slate-300" />
        <p className="text-sm font-medium">
        graph (Main Bar/Line Chart)
        </p>
        <span className="text-xs text-slate-300">
         active tab {activeTab}
        </span>
      </div>
    </div>
  );
}
