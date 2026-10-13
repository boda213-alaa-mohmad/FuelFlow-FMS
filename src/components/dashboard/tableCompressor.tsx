"use client";

import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "./EmptyState";
import { useTableData } from "@/hooks/useTableData";

interface CompressorItem {
  id: string;
  name: string;
  channelId: string;
  station: string;
  status: "active" | "inactive";
}

const mockCompressors: CompressorItem[] = [
  {
    id: "1",
    name: "Compressor A1",
    channelId: "2001",
    station: "Station 1",
    status: "active",
  },
  {
    id: "2",
    name: "Compressor A2",
    channelId: "2002",
    station: "Station 1",
    status: "inactive",
  },
  {
    id: "3",
    name: "Compressor B1",
    channelId: "2003",
    station: "Station 2",
    status: "active",
  },
  {
    id: "4",
    name: "Compressor B2",
    channelId: "2004",
    station: "Station 2",
    status: "active",
  },
  {
    id: "5",
    name: "Compressor C1",
    channelId: "2005",
    station: "Station 3",
    status: "inactive",
  },
  {
    id: "6",
    name: "Compressor C2",
    channelId: "2006",
    station: "Station 3",
    status: "active",
  },
  {
    id: "7",
    name: "Compressor D1",
    channelId: "2007",
    station: "Station 4",
    status: "active",
  },
];
export default function CompressorsTable() {
  const { data, filter } = useTableData(mockCompressors);
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
                  <th className="py-4 px-6">Compressor Name</th>
                  <th className="py-4 px-6">Channel Id</th>
                  <th className="py-4 px-6">Station</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm text-slate-700">
                {data.map((compressor) => (
                  <tr
                    key={compressor.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          compressor.status === "active"
                            ? "bg-[#FF7A59]"
                            : "bg-blue-200"
                        }`}
                      />
                      {compressor.name}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {compressor.channelId}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {compressor.station}
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
                            filter(compressor.id);
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
