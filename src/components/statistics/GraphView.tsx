"use client";

import { useState } from "react";
import { ChartAreaDefault } from "./areaGraph";

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

      <div className="w-full bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl p-6">
        <ChartAreaDefault />
        <div className="mt-4 pt-3 border-t border-slate-200/60 text-right">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
            Active Tab:{" "}
            <span className="text-[#FF7A59] font-bold">{activeTab}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
