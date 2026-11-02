"use client";

import { useContext } from "react";
import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "../EmptyState";
import type { DispenserItem } from "@/types/dispenser";
import { ThemeContext } from "../../../../context/ThemeContext";

interface DispenserTableProps {
  dispensers: DispenserItem[];
  onDelete: (id: string) => void;
}

export default function DispensersTable({
  dispensers,
  onDelete,
}: DispenserTableProps) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 mt-20">
      {dispensers.length === 0 ? (
        <EmptyState />
      ) : (
        <div
          className={`rounded-2xl shadow-sm border overflow-hidden transition-colors duration-300 ${
            isDark
              ? "bg-[#0F172A] border-slate-800"
              : "bg-white border-gray-100"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className={`border-b text-sm font-semibold transition-colors duration-300 ${
                    isDark
                      ? "border-slate-800 text-slate-400"
                      : "border-gray-200 text-slate-500"
                  }`}
                >
                  <th className="py-4 px-6">Dispenser Name</th>
                  <th className="py-4 px-6">Channel Id</th>
                  <th className="py-4 px-6">Station</th>
                  <th className="py-4 px-6">Line</th>
                  <th className="py-4 px-6">Order</th>
                  <th className="py-4 px-6">Position</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody
                className={`divide-y text-sm transition-colors duration-300 ${
                  isDark
                    ? "divide-slate-800 text-slate-200"
                    : "divide-gray-100 text-slate-700"
                }`}
              >
                {dispensers.map((dispenser) => (
                  <tr
                    key={dispenser.id}
                    className={`transition-colors ${
                      isDark ? "hover:bg-slate-800/50" : "hover:bg-slate-50/50"
                    }`}
                  >
                    <td className="py-4 px-6 font-medium">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            dispenser.status === "active"
                              ? "bg-[#FF7A59]"
                              : isDark
                                ? "bg-slate-700"
                                : "bg-blue-200"
                          }`}
                        />
                        <span
                          className={isDark ? "text-white" : "text-slate-800"}
                        >
                          {dispenser.name}
                        </span>
                      </div>
                    </td>

                    <td
                      className={`py-4 px-6 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {dispenser.channelId}
                    </td>

                    <td
                      className={`py-4 px-6 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {dispenser.station}
                    </td>

                    <td
                      className={`py-4 px-6 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {dispenser.line}
                    </td>

                    <td
                      className={`py-4 px-6 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {dispenser.order}
                    </td>

                    <td
                      className={`py-4 px-6 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {dispenser.position}
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          title="Edit"
                          className={`p-2 rounded-xl transition-colors cursor-pointer ${
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
                          className={`p-2 rounded-xl transition-colors cursor-pointer ${
                            isDark
                              ? "bg-orange-500/10 hover:bg-orange-500/20 text-[#FF7A59]"
                              : "bg-orange-50 hover:bg-orange-100 text-[#FF7A59]"
                          }`}
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
