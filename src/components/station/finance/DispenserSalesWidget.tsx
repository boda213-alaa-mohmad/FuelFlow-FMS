import { ChartBarDefault } from "./DispenserSalesGraph";

export default function DispenserSalesWidget() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4 w-full">
      <h4 className="text-xs font-bold text-slate-800 text-center">
        Dispenser Sales
      </h4>

      <ChartBarDefault />
    </div>
  );
}
