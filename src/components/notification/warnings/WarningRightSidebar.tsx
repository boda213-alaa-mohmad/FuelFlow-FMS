"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function WarningRightSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const warningsList = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: "Alert Dummy Name - code",
    date: "8/8/2021, 5:12:21 AM",
    type: "Pressure Alarm",
    intensity: "Alert Intensity",
  }));

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-full space-y-4">
      {/* Header: Title & Total Count & Toggle Button */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A59]"></span>
          <h3 className="text-sm font-bold text-slate-800 tracking-wider">
            Alerts
          </h3>
          <span className="text-xs text-slate-400 font-medium">
            Total {warningsList.length}
          </span>
        </div>

        {/* View All / Hide All Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold text-[#FF7A59] hover:underline flex items-center gap-1 cursor-pointer transition"
        >
          {isExpanded ? "Hide All" : "View All"}
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {isExpanded && (
        <div
          className="pr-2 space-y-3 max-h-[380px] overflow-y-auto custom-scrollbar transition-all duration-300"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#FF7A59 #f1f5f9",
          }}
        >
          {warningsList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border-b border-slate-50 transition"
            >
              {/* Left Info */}
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-800">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-400">{item.date}</p>
              </div>

              {/* Right Info */}
              <div className="text-right space-y-0.5">
                <span className="text-[11px] font-semibold text-slate-700 block">
                  {item.type}
                </span>
                <span className="text-[10px] text-[#FF7A59] font-medium block">
                  {item.intensity}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
