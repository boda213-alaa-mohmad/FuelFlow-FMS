import { Radar } from "lucide-react";

export default function HourlySalesRadarWidget() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4 w-full">
      <h4 className="text-xs font-bold text-slate-800 text-center">
        Hourly Sales
      </h4>
      <div className="w-full h-52 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 p-4 text-center">
        <Radar className="w-8 h-8 text-slate-300" />
        <p className="text-xs font-medium mt-1">Hourly Sales Radar Chart</p>
      </div>
    </div>
  );
}
