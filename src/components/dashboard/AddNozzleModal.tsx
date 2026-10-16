"use client";

import AddButton from "./AddButtonModal";
import { useState } from "react";

interface AddNozzleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newCompressor: newNozzle) => void;
}

export interface newNozzle {
  name: string;
  channelId: string;
  station: string;
  dispenser: string;
}

export default function AddNozzleModal({
  isOpen,
  onClose,
  onSave,
}: AddNozzleModalProps) {
  const [newNozzle, setNewNozzle] = useState<newNozzle>({
    name: "",
    channelId: "",
    station: "",
    dispenser: "",
  });

  function handleSaveData() {
    if (
      !newNozzle.channelId ||
      !newNozzle.name ||
      !newNozzle.dispenser ||
      !newNozzle.station
    ) {
      alert("you have to fill all fields");
      return;
    }
    onSave({
      name: newNozzle.name,
      channelId: newNozzle.channelId,
      dispenser: newNozzle.dispenser,
      station: newNozzle.station,
    });
    setNewNozzle({
      name: "",
      channelId: "",
      dispenser: "",
      station: "",
    });
  }

  return (
    <AddButton
      icon="nozzle"
      label="nozzle"
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSaveData}
    >
      <div className="py-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Station Name
            </label>
            <input
              type="text"
              placeholder="Enter station name..."
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
              value={newNozzle.name}
              onChange={(e) =>
                setNewNozzle({
                  ...newNozzle,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Channel ID
            </label>
            <input
              type="text"
              placeholder="Enter channel ID... "
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
              value={newNozzle.channelId}
              onChange={(e) =>
                setNewNozzle({
                  ...newNozzle,
                  channelId: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Station
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none bg-white border border-gray-300 rounded-xl py-3 px-4 pr-10 text-sm text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 cursor-pointer"
                value={newNozzle.dispenser}
                onChange={(e) =>
                  setNewNozzle({
                    ...newNozzle,
                    dispenser: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  choose stations
                </option>
                <option value="station1">Station 1</option>
                <option value="station2">Station 2</option>
                <option value="station3">Station 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Dispenser
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none bg-white border border-gray-300 rounded-xl py-3 px-4 pr-10 text-sm text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 cursor-pointer"
                value={newNozzle.station}
                onChange={(e) =>
                  setNewNozzle({
                    ...newNozzle,
                    station: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  choose dispensers
                </option>
                <option value="dispenser1">Dispenser 1</option>
                <option value="dispenser2">Dispenser 2</option>
                <option value="dispenser3">Dispenser 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AddButton>
  );
}
