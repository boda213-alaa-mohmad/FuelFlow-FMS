"use client";

import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "./EmptyState";
import { useTableData } from "@/hooks/useTableData";

interface DispenserItem {
  id: string;
  name: string;
  channelId: string;
  station: string;
  line: string;
  order: string;
  position: string;
  status: "active" | "inactive";
}

const mockDispensers: DispenserItem[] = [
  {
    id: "1",
    name: "Dispenser A1",
    channelId: "1001",
    station: "Station 1",
    line: "Line 1",
    order: "1",
    position: "Front",
    status: "active",
  },
  {
    id: "2",
    name: "Dispenser A2",
    channelId: "1002",
    station: "Station 1",
    line: "Line 1",
    order: "2",
    position: "Back",
    status: "inactive",
  },
  {
    id: "3",
    name: "Dispenser B1",
    channelId: "1003",
    station: "Station 2",
    line: "Line 2",
    order: "3",
    position: "Side",
    status: "active",
  },
  {
    id: "4",
    name: "Dispenser B2",
    channelId: "1004",
    station: "Station 2",
    line: "Line 2",
    order: "4",
    position: "Front",
    status: "active",
  },
  {
    id: "5",
    name: "Dispenser C1",
    channelId: "1005",
    station: "Station 3",
    line: "Line 3",
    order: "5",
    position: "Back",
    status: "inactive",
  },
  {
    id: "6",
    name: "Dispenser C2",
    channelId: "1006",
    station: "Station 3",
    line: "Line 3",
    order: "6",
    position: "Side",
    status: "active",
  },
  {
    id: "7",
    name: "Dispenser D1",
    channelId: "1007",
    station: "Station 4",
    line: "Line 4",
    order: "7",
    position: "Front",
    status: "active",
  },
  {
    id: "8",
    name: "Dispenser D2",
    channelId: "1008",
    station: "Station 4",
    line: "Line 4",
    order: "8",
    position: "Back",
    status: "inactive",
  },
];
export default function DispensersTable() {
  const { data, filter } = useTableData(mockDispensers);
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
                  <th className="py-4 px-6">Dispenser Name</th>
                  <th className="py-4 px-6">Channel Id</th>
                  <th className="py-4 px-6">Station</th>
                  <th className="py-4 px-6">Line</th>
                  <th className="py-4 px-6">Order</th>
                  <th className="py-4 px-6">Position</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm text-slate-700">
                {data.map((dispenser) => (
                  <tr
                    key={dispenser.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          dispenser.status === "active"
                            ? "bg-[#FF7A59]"
                            : "bg-blue-200"
                        }`}
                      />
                      {dispenser.name}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {dispenser.channelId}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {dispenser.station}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {dispenser.line}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {dispenser.order}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {dispenser.position}
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
                            filter(dispenser.id);
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
