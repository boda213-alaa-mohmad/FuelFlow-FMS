import { Fuel, RotateCw, Calendar } from "lucide-react";

export default function StatsHeader() {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col xl:flex-row items-center justify-between gap-6">
      <div className="flex flex-wrap items-center gap-6 sm:gap-10 w-full xl:w-auto justify-center xl:justify-start">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF7A59]"></span>
          <div className="flex items-center gap-2">
            <Fuel size={30} />
            <div>
              <span className="text-lg font-bold text-slate-800">2/3</span>
              <span className="block text-[11px] text-slate-400 font-medium leading-none">
                Monitored Stations
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF7A59]"></span>
          <div className="flex items-center gap-2">
            <RotateCw size={30} />
            <div>
              <span className="text-lg font-bold text-slate-800">20s</span>
              <span className="block text-[11px] text-slate-400 font-medium leading-none">
                Last Update
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-[#FAF6F5] p-1.5 rounded-full w-full sm:w-auto justify-center">
        <button className="px-6 py-2 text-xs font-bold text-white bg-[#FF7A59] rounded-full shadow-sm cursor-pointer transition">
          TODAY
        </button>
        <button className="px-6 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer transition">
          YESTERDAY
        </button>
        <button className="px-6 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer transition">
          LAST WEEK
        </button>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full xl:w-auto justify-center">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="w-2 h-2 bg-[#FF7A59] rounded-xs shrink-0"></span>
          <div className="relative flex-1 sm:w-44">
            <input
              type="text"
              readOnly
              placeholder="Start date - time"
              className="w-full bg-transparent border-b border-slate-300 pb-1 text-xs text-slate-600 focus:outline-none placeholder:text-slate-400 cursor-pointer pr-6"
            />
            <Calendar className="w-4 h-4 text-slate-400 absolute right-0 bottom-1 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="w-2 h-2 bg-[#FF7A59] rounded-xs shrink-0"></span>
          <div className="relative flex-1 sm:w-44">
            <input
              type="text"
              readOnly
              placeholder="End date - time"
              className="w-full bg-transparent border-b border-slate-300 pb-1 text-xs text-slate-600 focus:outline-none placeholder:text-slate-400 cursor-pointer pr-6"
            />
            <Calendar className="w-4 h-4 text-slate-400 absolute right-0 bottom-1 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
