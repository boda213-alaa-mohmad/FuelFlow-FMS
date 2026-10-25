"use client";

import { WarningOccurrenceChart } from "./WarningOccurrenceChart";
import { WarningOverallCard } from "./WarningOverallCard";
import { WarningRightSidebar } from "./WarningRightSidebar";

export function WarningContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <div className="lg:col-span-2 space-y-6">
        <WarningOverallCard />
        <WarningOccurrenceChart />
      </div>

      {/* Right Column: Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <WarningRightSidebar />
      </div>
    </div>
  );
}
