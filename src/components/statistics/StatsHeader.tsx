"use client";

import { useState, useContext } from "react";
import { Fuel, RotateCw, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { ThemeContext } from "../../../context/ThemeContext";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function StatsHeader() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`p-4 lg:p-6 rounded-2xl shadow-sm border flex flex-col xl:flex-row items-center justify-between gap-6 transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      {/* Monitored Stations & Last Update */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-10 w-full xl:w-auto justify-center xl:justify-start">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF7A59]"></span>
          <div className="flex items-center gap-2">
            <Fuel
              size={30}
              className={isDark ? "text-slate-400" : "text-slate-700"}
            />
            <div>
              <span
                className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-800"}`}
              >
                2/3
              </span>
              <span className="block text-[11px] text-slate-400 font-medium leading-none">
                Monitored Stations
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF7A59]"></span>
          <div className="flex items-center gap-2">
            <RotateCw
              size={30}
              className={isDark ? "text-slate-400" : "text-slate-700"}
            />
            <div>
              <span
                className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-800"}`}
              >
                20s
              </span>
              <span className="block text-[11px] text-slate-400 font-medium leading-none">
                Last Update
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Date Period Toggle Buttons (Today, Yesterday, Last Week) */}
      <div
        className={`p-1.5 rounded-full flex items-center w-full sm:w-auto justify-center transition-colors duration-300 ${
          isDark ? "bg-slate-800/80" : "bg-[#FAF6F5]"
        }`}
      >
        <button className="px-6 py-2 text-xs font-bold text-white bg-[#FF7A59] rounded-full shadow-sm cursor-pointer transition">
          TODAY
        </button>
        <button
          className={`px-6 py-2 text-xs font-semibold cursor-pointer transition ${
            isDark
              ? "text-slate-400 hover:text-white"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          YESTERDAY
        </button>
        <button
          className={`px-6 py-2 text-xs font-semibold cursor-pointer transition ${
            isDark
              ? "text-slate-400 hover:text-white"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          LAST WEEK
        </button>
      </div>

      {/* Start and End Date Pickers */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full xl:w-auto justify-center">
        {/* Start Date */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="w-2 h-2 bg-[#FF7A59] rounded-xs shrink-0"></span>
          <Popover>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "relative flex-1 sm:w-44 text-left bg-transparent border-b pb-1 text-xs focus:outline-none flex items-center justify-between cursor-pointer transition-colors",
                  isDark
                    ? "border-slate-700 text-slate-200"
                    : "border-slate-300 text-slate-600",
                  !startDate && "text-slate-400",
                )}
              >
                <span>
                  {startDate ? format(startDate, "PPP") : "Start date - time"}
                </span>
                <CalendarIcon className="w-4 h-4 text-slate-400" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className={cn(
                "w-auto p-0",
                isDark && "bg-[#0F172A] border-slate-800 text-white",
              )}
              align="start"
            >
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* End Date */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="w-2 h-2 bg-[#FF7A59] rounded-xs shrink-0"></span>
          <Popover>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "relative flex-1 sm:w-44 text-left bg-transparent border-b pb-1 text-xs focus:outline-none flex items-center justify-between cursor-pointer transition-colors",
                  isDark
                    ? "border-slate-700 text-slate-200"
                    : "border-slate-300 text-slate-600",
                  !endDate && "text-slate-400",
                )}
              >
                <span>
                  {endDate ? format(endDate, "PPP") : "End date - time"}
                </span>
                <CalendarIcon className="w-4 h-4 text-slate-400" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className={cn(
                "w-auto p-0",
                isDark && "bg-[#0F172A] border-slate-800 text-white",
              )}
              align="start"
            >
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
  );
}
