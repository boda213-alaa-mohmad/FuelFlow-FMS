"use client";
import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "./EmptyState";

import { NozzleItem } from "@/types/nozzle";

interface NozzlesTableType {
  nozzles: NozzleItem[];
  onDelete: (id: string) => void;
}

export default function NozzlesTable({ nozzles, onDelete }: NozzlesTableType) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 mt-20">
      {nozzles.length === 0 ? (
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
                {nozzles.map((nozzle) => (
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
                            onDelete(nozzle.id);
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
