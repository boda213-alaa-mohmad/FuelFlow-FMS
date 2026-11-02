"use client";

import { useState, useContext } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function OperationRightSidebar() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [OpenAlert, setOpenAlert] = useState<boolean>(false);
  const [OpenWarning, setOpenWarning] = useState<boolean>(false);

  const alertsData = [
    {
      title: "Alert Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Alarm",
      intensity: "Alert Intensity",
    },
    {
      title: "Alert Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Alarm",
      intensity: "Alert Intensity",
    },
    {
      title: "Alert Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Alarm",
      intensity: "Alert Intensity",
    },
    {
      title: "Alert Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Alarm",
      intensity: "Alert Intensity",
    },
    {
      title: "Alert Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Alarm",
      intensity: "Alert Intensity",
    },
  ];

  const warningsData = [
    {
      title: "Warning Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Warning",
      intensity: "Warning Intensity",
    },
    {
      title: "Warning Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Warning",
      intensity: "Warning Intensity",
    },
    {
      title: "Warning Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Warning",
      intensity: "Warning Intensity",
    },
    {
      title: "Warning Dummy Name - code",
      date: "8/8/2021, 5:12:21 AM",
      type: "Pressure Warning",
      intensity: "Warning Intensity",
    },
  ];

  return (
    <div className="space-y-6 w-full">
      {/* Alerts Section */}
      <div
        className={`p-5 rounded-2xl border shadow-sm space-y-4 transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-slate-800 text-white"
            : "bg-white border-gray-100 text-slate-900"
        }`}
      >
        <div
          className={`flex items-center justify-between border-b pb-3 transition-colors duration-300 ${
            isDark ? "border-slate-800" : "border-slate-100"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <h4
              className={`text-xs font-bold ${
                isDark ? "text-slate-200" : "text-slate-800"
              }`}
            >
              Alerts
            </h4>
            <span className="text-[11px] font-medium text-slate-400">
              Total 100
            </span>
          </div>
          <span
            className="text-xs font-bold text-[#FF7A59] hover:underline cursor-pointer flex items-center gap-0.5"
            onClick={() => {
              setOpenAlert(!OpenAlert);
            }}
          >
            View all
            {OpenAlert ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        </div>

        <div className="space-y-3">
          {OpenAlert && (
            <>
              {alertsData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between border-b pb-3 last:border-0 last:pb-0 transition-colors ${
                    isDark ? "border-slate-800/60" : "border-slate-50"
                  }`}
                >
                  <div className="space-y-0.5">
                    <p
                      className={`text-xs font-bold ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                  </div>
                  <div className="text-right space-y-0.5">
                    <p
                      className={`text-[11px] font-semibold ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.type}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {item.intensity}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Warnings Section */}
      <div
        className={`p-5 rounded-2xl border shadow-sm space-y-4 transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-slate-800 text-white"
            : "bg-white border-gray-100 text-slate-900"
        }`}
      >
        <div
          className={`flex items-center justify-between border-b pb-3 transition-colors duration-300 ${
            isDark ? "border-slate-800" : "border-slate-100"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <h4
              className={`text-xs font-bold ${
                isDark ? "text-slate-200" : "text-slate-800"
              }`}
            >
              Warnings
            </h4>
            <span className="text-[11px] font-medium text-slate-400">
              Total 200
            </span>
          </div>

          <span
            className="text-xs font-bold text-[#FF7A59] hover:underline cursor-pointer flex items-center gap-0.5"
            onClick={() => {
              setOpenWarning(!OpenWarning);
            }}
          >
            View all{" "}
            {OpenWarning ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronRight size={14} />
            )}
          </span>
        </div>

        <div className="space-y-3">
          {OpenWarning && (
            <>
              {warningsData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between border-b pb-3 last:border-0 last:pb-0 transition-colors ${
                    isDark ? "border-slate-800/60" : "border-slate-50"
                  }`}
                >
                  <div className="space-y-0.5">
                    <p
                      className={`text-xs font-bold ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                  </div>
                  <div className="text-right space-y-0.5">
                    <p
                      className={`text-[11px] font-semibold ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.type}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {item.intensity}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
