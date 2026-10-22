import { Fuel, ChevronRight } from "lucide-react";
import Link from "next/link";

interface StationHeaderProps {
  stationName?: string;
}

export default function StationHeader({
  stationName = "Station Name Compressor",
}: StationHeaderProps) {
  return (
    <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-3">
        <div className="text-[#FF7A59]">
          <Fuel size={28} />
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-800 tracking-wide">
          {stationName}
        </h2>
      </div>

      <Link
        href="/dashboard/statistics"
        className="flex items-center gap-3 bg-[#FF7A59] hover:bg-[#e0694b] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition shadow-sm cursor-pointer"
      >
        <span>Back</span>
        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
          <ChevronRight size={14} />
        </div>
      </Link>
    </div>
  );
}
