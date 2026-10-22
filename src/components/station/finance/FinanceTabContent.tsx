import FinanceOverviewCards from "./FinanceOverviewCards";
import FinanceMainChart from "./FinanceMainChart";
import DispenserSalesWidget from "./DispenserSalesWidget";
import HourlySalesRadarWidget from "./HourlySalesRadarWidget";

export default function FinanceTabContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">
      <div className="lg:col-span-2 space-y-6">
        <FinanceOverviewCards />
        <FinanceMainChart />
      </div>
      <div className="lg:col-span-1 space-y-6">
        <DispenserSalesWidget />
        <HourlySalesRadarWidget />
      </div>
    </div>
  );
}
