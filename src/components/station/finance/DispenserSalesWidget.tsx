import { BarChart3 } from "lucide-react";

export default function DispenserSalesWidget() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4 w-full">
      <h4 className="text-xs font-bold text-slate-800 text-center">
        Dispenser Sales
      </h4>
      <div className="w-full h-40 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 p-4 text-center">
        <BarChart3 className="w-8 h-8 text-slate-300" />
        <p className="text-xs font-medium mt-1">
          Dispenser Sales Bar Chart (D1, D2...)
        </p>
      </div>
    </div>
  );
}
