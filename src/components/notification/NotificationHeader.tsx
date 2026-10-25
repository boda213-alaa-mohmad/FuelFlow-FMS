"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface AlarmHeaderProps {
  onBack?: () => void;
  activeTab: "alarms" | "warnings";
  onTabChange: (tab: "alarms" | "warnings") => void;
}

export function NotificationHeader({
  onBack,
  activeTab,
  onTabChange,
}: AlarmHeaderProps) {
  const [dateRange, setDateRange] = useState<
    "today" | "yesterday" | "lastWeek"
  >("today");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <div className="bg-white pt-6 px-6 rounded-2xl border border-gray-100 shadow-sm space-y-6 w-full overflow-hidden">
      {/* Top Bar: Title & Back Button */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#FF7A59] animate-pulse"></span>
          <h1 className="text-xl font-bold text-slate-800 tracking-wide">
            Alarm ID
          </h1>
        </div>

        <Button
          onClick={onBack}
          className="bg-[#FF7A59] hover:bg-[#e06849] text-white rounded-xl px-6 py-2 flex items-center gap-2 transition shadow-sm cursor-pointer"
        >
          <span>Back</span>
          <ArrowLeft size={16} className="rotate-180" />
        </Button>
      </div>

      {/* Middle Stats & Controls Bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-2">
        {/* Monitored Stations & Last Update Info */}
        <div className="flex items-center gap-8 text-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-orange-50 text-[#FF7A59] rounded-xl">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                <path d="M14 9h4l4 4v4h-8z" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800">2/3</span>
              <span className="text-xs text-slate-400 ml-1.5">
                Monitored Stations
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 border-l border-slate-200 pl-8">
            <div className="p-2 bg-slate-50 text-slate-600 rounded-xl">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.66-5.65" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800">20s</span>
              <span className="text-xs text-slate-400 ml-1.5">Last Update</span>
            </div>
          </div>
        </div>

        {/* Quick Date Filters (Today, Yesterday, Last Week) */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-full shadow-inner">
          <button
            onClick={() => setDateRange("today")}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
              dateRange === "today"
                ? "bg-[#FF7A59] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            TODAY
          </button>
          <button
            onClick={() => setDateRange("yesterday")}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
              dateRange === "yesterday"
                ? "bg-[#FF7A59] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            YESTERDAY
          </button>
          <button
            onClick={() => setDateRange("lastWeek")}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
              dateRange === "lastWeek"
                ? "bg-[#FF7A59] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            LAST WEEK
          </button>
        </div>

        {/* Start / End Date Time Pickers */}
        <div className="flex items-center gap-6 w-full lg:w-auto">
          {/* Start Date Picker */}
          <div className="flex items-center gap-2">
            <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-[#FF7A59]"></div>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "relative w-[190px] text-left bg-transparent border-b border-slate-300 pb-1 text-xs text-slate-700 focus:outline-none flex items-center justify-between cursor-pointer hover:border-slate-400 transition",
                    !startDate && "text-slate-400",
                  )}
                >
                  <span className="truncate">
                    <strong className="text-slate-800 font-bold mr-1.5">
                      Start
                    </strong>
                    {startDate ? format(startDate, "PP") : "date - time"}
                  </span>
                  <CalendarIcon className="w-4 h-4 text-slate-400 shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* End Date Picker */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[#FF7A59]"></span>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "relative w-[190px] text-left bg-transparent border-b border-slate-300 pb-1 text-xs text-slate-700 focus:outline-none flex items-center justify-between cursor-pointer hover:border-slate-400 transition",
                    !endDate && "text-slate-400",
                  )}
                >
                  <span className="truncate">
                    <strong className="text-slate-800 font-bold mr-1.5">
                      End
                    </strong>
                    {endDate ? format(endDate, "PP") : "date - time"}
                  </span>
                  <CalendarIcon className="w-4 h-4 text-slate-400 shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Alarms / Warnings Full Width Tabs Header Bar (Connected to parent state via props) */}
      <div className="border-t border-slate-100 pt-0 mt-4 -mx-6">
        <div className="grid grid-cols-2 w-full text-center font-bold text-sm">
          <button
            onClick={() => onTabChange("alarms")}
            className={`py-4 transition relative cursor-pointer tracking-wider ${
              activeTab === "alarms"
                ? "text-slate-800 bg-white"
                : "text-slate-400 hover:text-slate-600 bg-slate-50/50"
            }`}
          >
            ALARMS
            {activeTab === "alarms" && (
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FF7A59]" />
            )}
          </button>

          <button
            onClick={() => onTabChange("warnings")}
            className={`py-4 transition relative cursor-pointer tracking-wider ${
              activeTab === "warnings"
                ? "text-slate-800 bg-white"
                : "text-slate-400 hover:text-slate-600 bg-slate-50/50"
            }`}
          >
            WARNINGS
            {activeTab === "warnings" && (
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FF7A59]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
