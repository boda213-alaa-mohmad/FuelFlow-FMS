"use client";

import { useState, useContext } from "react";
import StationHeader from "@/components/station/StationHeader";
import FinanceTabContent from "@/components/station/finance/FinanceTabContent";
import OperationTabContent from "@/components/station/operation/OperationTabContent";
import { ThemeContext } from "../../../../../context/ThemeContext";

export default function DynamicStationPage() {
  const [activeTab, setActiveTab] = useState<"finance" | "operation">(
    "finance",
  );
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-6 w-full lg:px-8 min-h-screen p-6 transition-colors duration-300 ${
        isDark ? "bg-[#090D16] text-white" : "bg-slate-50/50 text-slate-900"
      }`}
    >
      <StationHeader />

      {/* Tabs Header Card */}
      <div
        className={`rounded-2xl border shadow-sm overflow-hidden transition-colors duration-300 ${
          isDark ? "bg-[#0F172A] border-slate-800" : "bg-white border-gray-100"
        }`}
      >
        <div className="grid grid-cols-2 text-center font-bold text-sm cursor-pointer">
          <div
            onClick={() => setActiveTab("finance")}
            className={`py-4 transition-all border-b-4 ${
              activeTab === "finance"
                ? isDark
                  ? "text-white border-[#FF7A59] bg-orange-500/10"
                  : "text-slate-900 border-[#FF7A59] bg-orange-50/20"
                : isDark
                  ? "text-slate-400 border-transparent hover:text-white"
                  : "text-slate-400 border-transparent hover:text-slate-700"
            }`}
          >
            FINANCE
          </div>
          <div
            onClick={() => setActiveTab("operation")}
            className={`py-4 transition-all border-b-4 ${
              activeTab === "operation"
                ? isDark
                  ? "text-white border-[#FF7A59] bg-orange-500/10"
                  : "text-slate-900 border-[#FF7A59] bg-orange-50/20"
                : isDark
                  ? "text-slate-400 border-transparent hover:text-white"
                  : "text-slate-400 border-transparent hover:text-slate-700"
            }`}
          >
            OPERATION
          </div>
        </div>
      </div>

      {/* Tab Content Area */}
      <div>
        {activeTab === "finance" ? (
          <FinanceTabContent />
        ) : (
          <OperationTabContent />
        )}
      </div>
    </div>
  );
}
