"use client";

import { useState } from "react";
import StationHeader from "@/components/station/StationHeader";
import FinanceTabContent from "@/components/station/finance/FinanceTabContent";
import OperationTabContent from "@/components/station/operation/OperationTabContent";


export default function DynamicStationPage() {
  const [activeTab, setActiveTab] = useState<"finance" | "operation">(
    "finance",
  );

  return (
    <div className="space-y-6 w-full  lg:px-8">
      <StationHeader />

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 text-center font-bold text-sm cursor-pointer">
          <div
            onClick={() => setActiveTab("finance")}
            className={`py-4 transition-all border-b-4 ${
              activeTab === "finance"
                ? "text-slate-900 border-[#FF7A59] bg-orange-50/20"
                : "text-slate-400 border-transparent hover:text-slate-700"
            }`}
          >
            FINANCE
          </div>
          <div
            onClick={() => setActiveTab("operation")}
            className={`py-4 transition-all border-b-4 ${
              activeTab === "operation"
                ? "text-slate-900 border-[#FF7A59] bg-orange-50/20"
                : "text-slate-400 border-transparent hover:text-slate-700"
            }`}
          >
            OPERATION
          </div>
        </div>
      </div>

      <div>{activeTab === "finance" ? <FinanceTabContent /> : <OperationTabContent />}</div>
    </div>
  );
}
