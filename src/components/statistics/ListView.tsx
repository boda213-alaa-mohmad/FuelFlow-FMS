import { MoreHorizontal, Fuel } from "lucide-react";

export default function ListViewSection() {

  const stations = [
    { id: 1, name: "STATION NAME DUMMY", active: true },
    { id: 2, name: "STATION NAME DUMMY", active: true },
    { id: 3, name: "STATION NAME DUMMY", active: false },
  ];

  return (
    <div className="space-y-4 w-full">
      {stations.map((station) => (
        <div
          key={station.id}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5 transition hover:shadow-md"
        >
      
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
    
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  station.active ? "bg-[#FF7A59]" : "bg-slate-300"
                }`}
              ></span>

              <Fuel
                className={`w-6 h-6 ${
                  station.active ? "text-[#FF7A59]" : "text-slate-400"
                }`}
              />


              <h4 className="text-sm font-bold text-slate-800 tracking-wide">
                {station.name}
              </h4>
            </div>


            <button className="text-slate-400 hover:text-slate-600 transition cursor-pointer p-1">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">

            <div className="space-y-3">
              <div className="flex justify-between md:justify-start md:gap-8">
                <span className="text-slate-400 font-medium">Total Sales</span>
                <span className="font-bold text-slate-800">
                  62,721 <span className="font-normal text-slate-500">m³</span>
                </span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8">
                <span className="text-slate-400 font-medium">Total Value</span>
                <span className="font-bold text-slate-800">
                  550 <span className="font-normal text-slate-500">EGP</span>
                </span>
              </div>
            </div>


            <div className="space-y-3">
              <div className="flex justify-between md:justify-start md:gap-8">
                <span className="text-slate-400 font-medium">
                  Compression State
                </span>
                <span className="font-bold text-slate-800">Compression</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8">
                <span className="text-slate-400 font-medium">
                  Total Transaction Count
                </span>
                <span className="font-bold text-slate-800">5161</span>
              </div>
            </div>


            <div className="space-y-3">
              <div className="flex justify-between md:justify-start md:gap-8">
                <span className="text-slate-400 font-medium">
                  Max Transaction / hour
                </span>
                <span className="font-bold text-slate-800">20</span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-8">
                <span className="text-slate-400 font-medium">
                  Max Transaction Date-Time
                </span>
                <span className="font-bold text-slate-800">
                  8-1-2021 | 10:16 
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
