"use client";

import { useContext } from "react";
import { Fuel } from "lucide-react";
import Link from "next/link";
import { ChartRadarLinesOnly } from "./ChartRadarLines";
import { ThemeContext } from "../../../context/ThemeContext";

export default function RightSidebarStats() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const stationsData = [
    {
      id: 1,
      name: "Station 1",
      value: "62,721",
      unit: "m³",
      percentage: "65%",
      status: "active",
    },
    {
      id: 2,
      name: "Station 2",
      value: "62,721",
      unit: "m³",
      percentage: "65%",
      status: "active",
    },
    {
      id: 3,
      name: "Station 3",
      value: "NM",
      unit: "",
      percentage: "20%",
      status: "nm",
    },
    {
      id: 4,
      name: "Station 4",
      value: "62,721",
      unit: "m³",
      percentage: "65%",
      status: "nm",
    },
    {
      id: 5,
      name: "Station 5",
      value: "62,721",
      unit: "m³",
      percentage: "65%",
      status: "active",
    },
    {
      id: 6,
      name: "Station 3",
      value: "NM",
      unit: "m³",
      percentage: "20%",
      status: "active",
    },
  ];

  return (
    <div className="space-y-4 w-full">
      {/* Hourly Sales Chart Card */}
      <div
        className={`p-5 rounded-2xl border shadow-sm space-y-3 transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-slate-800 text-white"
            : "bg-white border-gray-100 text-slate-900"
        }`}
      >
        <h4
          className={`text-sm font-bold text-center ${
            isDark ? "text-slate-200" : "text-slate-800"
          }`}
        >
          Hourly Sales
        </h4>
        <div
          className={`w-full h-56 border border-dashed rounded-xl flex flex-col items-center justify-center space-y-2 p-4 text-center transition-colors duration-300 ${
            isDark
              ? "bg-[#0B101D] border-slate-800 text-slate-400"
              : "bg-slate-50 border-slate-200 text-slate-400"
          }`}
        >
          <ChartRadarLinesOnly />
        </div>
      </div>

      {/* Sales by Station List Card */}
      <div
        className={`p-5 rounded-2xl border shadow-sm space-y-4 transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-slate-800 text-white"
            : "bg-white border-gray-100 text-slate-900"
        }`}
      >
        <h4
          className={`text-sm font-bold ${
            isDark ? "text-slate-200" : "text-slate-800"
          }`}
        >
          Sales by Station
        </h4>

        <div className="space-y-2.5">
          {stationsData.map((station) => {
            const isActive = station.status === "active";

            return (
              <Link
                key={station.id}
                href={`/dashboard/statistics/${station.id}`}
                className={`block p-3 rounded-xl border transition-all duration-200 cursor-pointer group space-y-2 ${
                  isActive
                    ? isDark
                      ? "bg-slate-800/40 border-slate-800 hover:bg-orange-500/10 hover:border-orange-500/30"
                      : "bg-slate-50/60 border-slate-100 hover:bg-orange-50/50 hover:border-orange-200"
                    : isDark
                      ? "bg-slate-800/20 border-slate-800/60 hover:bg-slate-800 hover:border-slate-700"
                      : "bg-slate-50/60 border-slate-100 hover:bg-slate-100/80 hover:border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`transition-colors ${
                        isActive
                          ? isDark
                            ? "text-slate-400 group-hover:text-[#FF7A59]"
                            : "text-slate-600 group-hover:text-[#FF7A59]"
                          : isDark
                            ? "text-slate-500 group-hover:text-slate-300"
                            : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      <Fuel size={20} />
                    </div>
                    <span
                      className={`text-xs font-bold transition-colors ${
                        isDark
                          ? "text-slate-200 group-hover:text-white"
                          : "text-slate-700 group-hover:text-slate-900"
                      }`}
                    >
                      {station.name}
                    </span>
                  </div>

                  {isActive ? (
                    <span
                      className={`text-xs font-bold ${
                        isDark ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {station.value}{" "}
                      <span
                        className={`text-[10px] font-medium ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {station.unit}
                      </span>
                    </span>
                  ) : (
                    <span
                      className={`text-xs font-bold ${
                        isDark ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      NM
                    </span>
                  )}
                </div>

                <div
                  className={`w-full h-1.5 rounded-full overflow-hidden ${
                    isActive
                      ? isDark
                        ? "bg-slate-800"
                        : "bg-orange-100/80"
                      : isDark
                        ? "bg-slate-800/50"
                        : "bg-slate-200"
                  }`}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#FF7A59] w-[65%] group-hover:w-[70%]"
                        : isDark
                          ? "bg-slate-600 w-[20%] group-hover:bg-slate-500"
                          : "bg-slate-300 w-[20%] group-hover:bg-slate-400"
                    }`}
                  ></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
