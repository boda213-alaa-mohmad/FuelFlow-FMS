"use client";

import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "./EmptyState";
import type { DispenserItem } from "@/types/dispenser";

interface DispenserTableProps {
  dispensers: DispenserItem[];
  onDelete: (id: string) => void;
}

export default function DispensersTable({
  dispensers,
  onDelete,
}: DispenserTableProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 mt-20">
      {dispensers.length === 0 ? (
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
                {dispensers.map((dispenser) => (
                  <tr
                    key={dispenser.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            dispenser.status === "active"
                              ? "bg-[#FF7A59]"
                              : "bg-blue-200"
                          }`}
                        />
                        {dispenser.name}
                      </div>
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
                          type="button"
                          title="Edit"
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                        >
                          <Edit3 size={16} />
                        </button>

                        <button
                          type="button"
                          title="Delete"
                          className="p-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#FF7A59] transition-colors cursor-pointer"
                          onClick={() => onDelete(dispenser.id)}
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
