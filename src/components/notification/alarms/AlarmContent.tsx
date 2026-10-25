import { AlarmOverallCard } from "./AlarmOverallCard";
import { AlarmOccurrenceChart } from "./AlarmOccurrenceChart";
import { AlarmRightSidebar } from "./AlarmRightSidebar";

export function AlarmContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <div className="lg:col-span-2 space-y-6">
        <AlarmOverallCard />
        <AlarmOccurrenceChart />
      </div>

      <div className="lg:col-span-1 space-y-6">
        <AlarmRightSidebar />
      </div>
    </div>
  );
}
