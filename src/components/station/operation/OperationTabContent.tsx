import StationMetricsTop from "./StationMetricsTop";
import OperationMainContent from "./OperationMainContent";
import OperationRightSidebar from "./OperationRightSidebar";

export default function OperationTabContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">

      <div className="lg:col-span-2 space-y-6">
        <StationMetricsTop />
         <OperationMainContent />
      </div>


      <div className="lg:col-span-1">
        <OperationRightSidebar />
      </div>
    </div>
  );
}
