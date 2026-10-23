"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function OperationRightSidebar() {
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
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <h4 className="text-xs font-bold text-slate-800">Alerts</h4>
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
            {OpenAlert === true ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronRight size={14} />
            )}
          </span>
        </div>

        <div className="space-y-3">
          {OpenAlert && (
            <>
              {alertsData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-slate-50 pb-3 last:border-0 last:pb-0"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-800">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                  </div>
                  <div className="text-right space-y-0.5">
                    <p className="text-[11px] font-semibold text-slate-600">
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

      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <h4 className="text-xs font-bold text-slate-800">Warnings</h4>
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
            {OpenWarning === true ? (
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
                  className="flex items-center justify-between border-b border-slate-50 pb-3 last:border-0 last:pb-0"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-800">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                  </div>
                  <div className="text-right space-y-0.5">
                    <p className="text-[11px] font-semibold text-slate-600">
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
