import { Fuel } from "lucide-react";
import Link from "next/link";
import { ChartRadarLinesOnly } from "./ChartRadarLines";

export default function RightSidebarStats() {
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
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3">
        <h4 className="text-sm font-bold text-slate-800 text-center">
          Hourly Sales
        </h4>
        <div className="w-full h-56 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 space-y-2 p-4 text-center">
         <ChartRadarLinesOnly />
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <h4 className="text-sm font-bold text-slate-800">Sales by Station</h4>

        <div className="space-y-2.5">
          {stationsData.map((station) => {
            const isActive = station.status === "active";

            return (
              <Link
                key={station.id}
                href={`/dashboard/statistics/${station.id}`}
                className={`block p-3 rounded-xl border transition-all duration-200 cursor-pointer group space-y-2 ${
                  isActive
                    ? "bg-slate-50/60 border-slate-100 hover:bg-orange-50/50 hover:border-orange-200"
                    : "bg-slate-50/60 border-slate-100 hover:bg-slate-100/80 hover:border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`transition-colors ${
                        isActive
                          ? "text-slate-600 group-hover:text-[#FF7A59]"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      <Fuel size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-700 transition-colors group-hover:text-slate-900">
                      {station.name}
                    </span>
                  </div>

                  {isActive ? (
                    <span className="text-xs font-bold text-slate-800">
                      {station.value}{" "}
                      <span className="text-[10px] font-medium text-slate-500">
                        {station.unit}
                      </span>
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-300">NM</span>
                  )}
                </div>

                <div
                  className={`w-full h-1.5 rounded-full overflow-hidden ${
                    isActive ? "bg-orange-100/80" : "bg-slate-200"
                  }`}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#FF7A59] w-[65%] group-hover:w-[70%]"
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
