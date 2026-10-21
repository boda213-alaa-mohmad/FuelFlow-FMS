import { TrendingDown, TrendingUp } from "lucide-react";

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      <div className="bg-[#FDF2F0] p-6 rounded-2xl border border-orange-100 shadow-sm space-y-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Total Value
        </span>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-slate-800">71,028</h3>
          <span className="text-sm font-semibold text-slate-600">EGP</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-red-500">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>2%</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Total Sales
        </span>
        <div className="flex items-baseline gap-1">
          <h3 className="text-2xl font-bold text-slate-800">20,000</h3>
          <span className="text-sm font-semibold text-slate-600">m³</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-emerald-500">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>50 m³</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Avg Sales
        </span>
        <div className="flex items-baseline gap-1">
          <h3 className="text-2xl font-bold text-slate-800">20,000</h3>
          <span className="text-sm font-semibold text-slate-600">m³</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-red-500">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>50 m³</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Total Transaction Count
        </span>
        <div className="flex items-baseline gap-1">
          <h3 className="text-2xl font-bold text-slate-800">1567</h3>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-emerald-500">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>20</span>
        </div>
      </div>
    </div>
  );
}
