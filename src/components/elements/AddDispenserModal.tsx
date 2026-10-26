"use client";

import { useState } from "react";
import AddButton from "./AddButtonModal";
import { Dispenser } from "./DashboardHeader";

interface AddDispenserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newDispenser: Dispenser) => void;
}

export default function AddDispenserModal({
  isOpen,
  onClose,
  onSave,
}: AddDispenserModalProps) {
  const [dispenserName, setDispenserName] = useState("");
  const [channelId, setChannelId] = useState("");
  const [station, setStation] = useState("");
  const [line, setLine] = useState("");
  const [order, setOrder] = useState("");
  const [position, setPosition] = useState("");

  // if (!isOpen) return null;

  function handleSaveData() {
    if (
      dispenserName === "" ||
      channelId === "" ||
      station === "" ||
      line === "" ||
      order === "" ||
      position === ""
    ) {
      alert("you have to write all fields");
      return;
    } else {
      // don't forget close the window and reset the values
      onSave({
        channelId: channelId.trim(),
        station: station.trim(),
        line: line.trim(),
        order: order.trim(),
        position: position.trim(),
        name: dispenserName.trim(),
      });

      setDispenserName("");
      setChannelId("");
      setPosition("");
      setOrder("");
      setLine("");
      setStation("");
    }
  }

  return (
    <AddButton
      icon="dispenser"
      label="new Dispenser"
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSaveData}
    >
      <div className="py-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Dispenser Name
            </label>
            <input
              type="text"
              placeholder="Placeholder ..."
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
              value={dispenserName}
              onChange={(e) => setDispenserName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Channel ID
            </label>
            <input
              type="text"
              placeholder="Placeholder ..."
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
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
                className="w-full appearance-none bg-white border border-gray-300 rounded-xl py-3 px-4 pr-10 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 cursor-pointer"
                value={station}
                onChange={(e) => setStation(e.target.value)}
              >
                <option value="" disabled>
                  Placeholder ...
                </option>
                <option value="station1">Station 1</option>
                <option value="station2">Station 2</option>
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
              Line
            </label>
            <input
              type="text"
              placeholder="Placeholder ..."
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
              value={line}
              onChange={(e) => setLine(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Order
            </label>
            <input
              type="text"
              placeholder="Placeholder ..."
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Position
            </label>
            <input
              type="text"
              placeholder="Placeholder ..."
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>
      </div>
    </AddButton>
  );
}
