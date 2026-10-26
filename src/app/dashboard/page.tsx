"use client";

import { useState } from "react";
import { ListViewComponent } from "@/components/dashboard/list/ListViewComponent";
import { Fuel } from "lucide-react";

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"map" | "list">("list");

  return (
    <div className="space-y-6 w-full min-h-screen bg-slate-50/50 ">
      {/* Top Header Bar */}
      <div className="bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Monitored Stations Indicator */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A59] animate-pulse"></span>
          <div className="flex items-center gap-2">
            <Fuel size={18} className="text-slate-500" />
            <span className="text-sm font-bold text-slate-800">2/3</span>
            <span className="text-xs text-slate-400 font-medium">
              Monitored Stations
            </span>
          </div>
        </div>

        {/* View Mode Toggle Buttons (Map View / List View) */}
        <div className="bg-slate-100 p-1 rounded-full flex items-center gap-1">
          <button
            onClick={() => setViewMode("map")}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              viewMode === "map"
                ? "bg-[#FF7A59] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            MAP VIEW
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              viewMode === "list"
                ? "bg-[#FF7A59] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            LIST VIEW
          </button>
        </div>

        {/* Last Update Timer (Fixed SVG Icon without spinning) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A59]"></span>
            <div className="relative flex items-center justify-center">
              <svg
                className="w-7 h-7 text-slate-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="2 3"
                  d="M12 2a10 10 0 0 1 7.54 16.63L21 20M21 15v5h-5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 20l-4-4"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-baseline gap-1.5">
            <div className="flex flex-col text-[10px] text-slate-500 font-medium leading-tight">
              <span>Last</span>
              <span>Update</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="w-full">
        {viewMode === "map" ? (
          <></>
        ) : (
          <ListViewComponent />
        )}
      </div>
    </div>
  );
}
