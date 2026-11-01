"use client";

import { useState, useContext } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ThemeContext } from "../../../../context/ThemeContext";

export function WarningRightSidebar() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [isExpanded, setIsExpanded] = useState(true);

  const warningsList = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: "Alert Dummy Name - code",
    date: "8/8/2021, 5:12:21 AM",
    type: "Pressure Alarm",
    intensity: "Alert Intensity",
  }));

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm w-full space-y-4 transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      {/* Header: Title & Total Count & Toggle Button */}
      <div
        className={`flex items-center justify-between border-b pb-3 transition-colors duration-300 ${
          isDark ? "border-slate-800" : "border-slate-100"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A59]"></span>
          <h3
            className={`text-sm font-bold tracking-wider ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
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
            scrollbarColor: isDark ? "#FF7A59 #1E293B" : "#FF7A59 #f1f5f9",
          }}
        >
          {warningsList.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3 rounded-xl transition ${
                isDark
                  ? "hover:bg-slate-800/60 border-b border-slate-800/50"
                  : "hover:bg-slate-50 border-b border-slate-50"
              }`}
            >
              {/* Left Info */}
              <div className="space-y-0.5">
                <h4
                  className={`text-xs font-bold ${
                    isDark ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-400">{item.date}</p>
              </div>

              {/* Right Info */}
              <div className="text-right space-y-0.5">
                <span
                  className={`text-[11px] font-semibold block ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
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
