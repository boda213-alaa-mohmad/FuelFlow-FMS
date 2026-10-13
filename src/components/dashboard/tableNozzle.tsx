"use client";
import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "./EmptyState";
import { useTableData } from "@/hooks/useTableData";

interface NozzleItem {
  id: string;
  name: string;
  channelId: string;
  station: string;
  dispenser: string;
  status: "active" | "inactive";
}

const mockNozzles: NozzleItem[] = [
  {
    id: "1",
    name: "Nozzle A1",
    channelId: "3001",
    station: "Station 1",
    dispenser: "Dispenser A1",
    status: "active",
  },
  {
    id: "2",
    name: "Nozzle A2",
    channelId: "3002",
    station: "Station 1",
    dispenser: "Dispenser A1",
    status: "active",
  },
  {
    id: "3",
    name: "Nozzle A3",
    channelId: "3003",
    station: "Station 1",
    dispenser: "Dispenser A2",
    status: "inactive",
  },
  {
    id: "4",
    name: "Nozzle B1",
    channelId: "3004",
    station: "Station 2",
    dispenser: "Dispenser B1",
    status: "active",
  },
  {
    id: "5",
    name: "Nozzle B2",
    channelId: "3005",
    station: "Station 2",
    dispenser: "Dispenser B1",
    status: "inactive",
  },
  {
    id: "6",
    name: "Nozzle B3",
    channelId: "3006",
    station: "Station 2",
    dispenser: "Dispenser B2",
    status: "active",
  },
  {
    id: "7",
    name: "Nozzle C1",
    channelId: "3007",
    station: "Station 3",
    dispenser: "Dispenser C1",
    status: "active",
  },
  {
    id: "8",
    name: "Nozzle C2",
    channelId: "3008",
    station: "Station 3",
    dispenser: "Dispenser C2",
    status: "inactive",
  },
  {
    id: "9",
    name: "Nozzle D1",
    channelId: "3009",
    station: "Station 4",
    dispenser: "Dispenser D1",
    status: "active",
  },
];
export default function NozzlesTable() {
  const { data, filter } = useTableData(mockNozzles);
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 mt-20">
      {data.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-slate-500 text-sm font-semibold">
                  <th className="py-4 px-6">Nozzle Name</th>
                  <th className="py-4 px-6">Channel Id</th>
                  <th className="py-4 px-6">Station</th>
                  <th className="py-4 px-6">Dispenser</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-slate-700">
                {data.map((nozzle) => (
                  <tr
                    key={nozzle.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          nozzle.status === "active"
                            ? "bg-[#FF7A59]"
                            : "bg-blue-200"
                        }`}
                      />
                      {nozzle.name}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {nozzle.channelId}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {nozzle.station}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {nozzle.dispenser}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          title="Edit"
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          title="Delete"
                          className="p-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#FF7A59] transition-colors cursor-pointer"
                          onClick={() => {
                            filter(nozzle.id);
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
