"use client";

import { useContext } from "react";
import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "../EmptyState";
import { mockStations } from "@/data/mockStations";
import { ThemeContext } from "../../../../context/ThemeContext";

type Station = (typeof mockStations)[number];

interface StationsTableProps {
  stations: Station[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function StationsTable({
  stations,
  onDelete,
  onEdit,
}: StationsTableProps) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="mx-auto mt-20 w-full max-w-7xl px-4 py-6">
      {stations.length === 0 ? (
        <EmptyState />
      ) : (
        <div
          className={`overflow-hidden rounded-2xl border shadow-sm transition-colors duration-300 ${
            isDark
              ? "bg-[#0F172A] border-slate-800"
              : "bg-white border-gray-100"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr
                  className={`border-b text-sm font-semibold transition-colors duration-300 ${
                    isDark
                      ? "border-slate-800 text-slate-400"
                      : "border-gray-200 text-slate-500"
                  }`}
                >
                  <th className="px-6 py-4">Station Name</th>
                  <th className="px-6 py-4">Channel Id</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody
                className={`divide-y text-sm transition-colors duration-300 ${
                  isDark
                    ? "divide-slate-800 text-slate-200"
                    : "divide-gray-100 text-slate-700"
                }`}
              >
                {stations.map((station) => (
                  <tr
                    key={station.id}
                    className={`transition-colors ${
                      isDark ? "hover:bg-slate-800/50" : "hover:bg-slate-50/50"
                    }`}
                  >
                    <td className="flex items-center gap-3 px-6 py-4 font-medium">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          station.status === "active"
                            ? "bg-[#FF7A59]"
                            : isDark
                              ? "bg-slate-700"
                              : "bg-blue-200"
                        }`}
                      />
                      <span
                        className={isDark ? "text-white" : "text-slate-800"}
                      >
                        {station.name}
                      </span>
                    </td>

                    <td
                      className={`px-6 py-4 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {station.channelId}
                    </td>

                    <td
                      className={`px-6 py-4 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {station.location}
                    </td>

                    <td
                      className={`max-w-xs truncate px-6 py-4 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {station.description}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          title="Edit"
                          onClick={() => onEdit(station.id)}
                          className={`cursor-pointer rounded-xl p-2 transition-colors ${
                            isDark
                              ? "bg-slate-800 hover:bg-slate-700 text-slate-300"
                              : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                          }`}
                        >
                          <Edit3 size={16} />
                        </button>

                        <button
                          type="button"
                          title="Delete"
                          onClick={() => onDelete(station.id)}
                          className={`cursor-pointer rounded-xl p-2 transition-colors ${
                            isDark
                              ? "bg-orange-500/10 hover:bg-orange-500/20 text-[#FF7A59]"
                              : "bg-orange-50 hover:bg-orange-100 text-[#FF7A59]"
                          }`}
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
