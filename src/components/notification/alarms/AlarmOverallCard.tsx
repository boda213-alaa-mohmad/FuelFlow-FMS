"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function AlarmOverallCard() {
  const percentage = 86;
  const pieData = [
    { name: "Rate", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];
  const COLORS = ["#FF7A59", "#FDE8E2"];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          ALARM OVERALL
        </h3>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-2">
        {/* Donut Chart Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={48}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <span className="absolute text-2xl font-bold text-slate-800">
              {percentage}%
            </span>
          </div>
          <span className="text-sm font-bold text-slate-800 mt-1">
            Alarm Rate
          </span>
        </div>

        {/* Frequency Section */}
        <div className="space-y-3 border-l-0 md:border-l border-slate-100 md:pl-6">
          <h4 className="text-[11px] font-bold text-slate-700 text-center md:text-left mb-4">
            Frequency
          </h4>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-16 text-slate-400 font-medium">Today</span>
              <span className="font-bold text-slate-800">3 Times</span>
              <span className="text-slate-300">|</span>
              <span className="font-bold text-slate-800">10 min</span>
            </div>

            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-16 text-slate-400 font-medium">Yesterday</span>
              <span className="font-bold text-slate-800">4 Times</span>
              <span className="text-slate-300">|</span>
              <span className="font-bold text-slate-800">20 min</span>
            </div>

            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-16 text-slate-400 font-medium">Week</span>
              <span className="font-bold text-slate-800">5 Times</span>
              <span className="text-slate-300">|</span>
              <span className="font-bold text-slate-800">12 min</span>
            </div>
          </div>
        </div>

        {/* Last Occurred Section */}
        <div className="space-y-3 border-l-0 md:border-l border-slate-100 md:pl-6">
          <h4 className="text-[11px] font-bold text-slate-700 text-center md:text-left mb-4">
            Last Occurred
          </h4>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-20 text-slate-400 font-medium">Date Time</span>
              <span className="font-bold text-slate-800">2-8-2020</span>
              <span className="text-slate-300">|</span>
              <span className="font-bold text-slate-800">10:20:21</span>
            </div>

            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-20 text-slate-400 font-medium">
                Compressor
              </span>
              <span className="font-bold text-slate-800">Compressor id</span>
            </div>

            <div className="flex items-center justify-between md:justify-start gap-4">
              <span className="w-20 text-slate-400 font-medium">Dispenser</span>
              <span className="font-bold text-slate-800">Dispenser</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
