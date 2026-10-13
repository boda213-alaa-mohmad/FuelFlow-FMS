"use client";

import { Edit3, Trash2 } from "lucide-react";
import { EmptyState } from "./EmptyState";

interface StationItem {
  id: string;
  name: string;
  channelId: string;
  location: string;
  description: string;
  status: "active" | "inactive";
}

const mockStations: StationItem[] = [
  {
    id: "1",
    name: "Name",
    channelId: "1000",
    location: "2 Street, City, Country",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    status: "active",
  },
  {
    id: "2",
    name: "Name",
    channelId: "1000",
    location: "2 Street, City, Country",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    status: "inactive",
  },
  {
    id: "3",
    name: "Name",
    channelId: "1000",
    location: "2 Street, City, Country",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    status: "inactive",
  },
  {
    id: "4",
    name: "Name",
    channelId: "1000",
    location: "2 Street, City, Country",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    status: "active",
  },
  {
    id: "5",
    name: "Name",
    channelId: "1000",
    location: "2 Street, City, Country",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    status: "active",
  },
  {
    id: "6",
    name: "Name",
    channelId: "1000",
    location: "2 Street, City, Country",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    status: "inactive",
  },
  {
    id: "7",
    name: "Name",
    channelId: "1000",
    location: "2 Street, City, Country",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    status: "active",
  },
];

export default function StationsTable() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 mt-20 ">
      {mockStations.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-slate-500 text-sm font-semibold">
                  <th className="py-4 px-6">Station Name</th>
                  <th className="py-4 px-6">Channel Id</th>
                  <th className="py-4 px-6">Location</th>
                  <th className="py-4 px-6">Description</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm text-slate-700">
                {mockStations.map((station) => (
                  <tr
                    key={station.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          station.status === "active"
                            ? "bg-[#FF7A59]"
                            : "bg-blue-200"
                        }`}
                      />
                      {station.name}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {station.channelId}
                    </td>

                    <td className="py-4 px-6 text-slate-600">
                      {station.location}
                    </td>

                    <td className="py-4 px-6 text-slate-500 max-w-xs truncate">
                      {station.description}
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
