"use client";

import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "./EmptyState";
import { mockStations } from "@/data/mockStations";

type Station = (typeof mockStations)[number];

interface StationsTableProps {
  stations: Station[];
  onDelete: (id: string) => void;
}

export default function StationsTable({
  stations,
  onDelete,
}: StationsTableProps) {
  return (
    <div className="mx-auto mt-20 w-full max-w-7xl px-4 py-6">
      {stations.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 text-sm font-semibold text-slate-500">
                  <th className="px-6 py-4">Station Name</th>
                  <th className="px-6 py-4">Channel Id</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm text-slate-700">
                {stations.map((station) => (
                  <tr
                    key={station.id}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <td className="flex items-center gap-3 px-6 py-4 font-medium">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          station.status === "active"
                            ? "bg-[#FF7A59]"
                            : "bg-blue-200"
                        }`}
                      />
                      {station.name}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {station.channelId}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {station.location}
                    </td>

                    <td className="max-w-xs truncate px-6 py-4 text-slate-500">
                      {station.description}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          title="Edit"
                          className="cursor-pointer rounded-xl bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200"
                        >
                          <Edit3 size={16} />
                        </button>

                        <button
                          type="button"
                          title="Delete"
                          onClick={() => onDelete(station.id)}
                          className="cursor-pointer rounded-xl bg-orange-50 p-2 text-[#FF7A59] transition-colors hover:bg-orange-100"
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
