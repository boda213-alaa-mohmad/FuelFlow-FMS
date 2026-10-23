"use client";

import { useState } from "react";
import { LineChart, BarChart2, List } from "lucide-react";

export default function FinanceMainChart() {
  const [activeTab, setActiveTab] = useState<"sales" | "transaction" | "value">(
    "sales",
  );

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 gap-4">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          STATIONS ACTIVATES OVERVIEW
        </h4>

        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-xs font-bold">
            {(["sales", "transaction", "value"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase cursor-pointer transition ${
                  activeTab === tab
                    ? "text-[#FF7A59] border-b-2 border-[#FF7A59] pb-1"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <button className="p-1.5 bg-[#FF7A59] text-white rounded-lg shadow-xs">
              <LineChart size={14} />
            </button>
            <button className="p-1.5 text-slate-400 hover:text-slate-700 transition">
              <BarChart2 size={14} />
            </button>
            <button className="p-1.5 text-slate-400 hover:text-slate-700 transition">
              <List size={14} />
            </button>
          </div>

  
        </div>
      </div>

      <div className="w-full h-72 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 space-y-2 text-center p-4">
        <LineChart className="w-10 h-10 text-slate-300" />
        <p className="text-xs font-medium">Main Line Chart ({activeTab})</p>
      </div>
    </div>
  );
}
