"use client";

import { useState, useEffect, useContext } from "react";
import AddButton from "../AddButtonModal";
import { ThemeContext } from "../../../../context/ThemeContext";
import type { DispenserItem } from "@/types/dispenser";

interface AddDispenserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newDispenser: DispenserProps) => void;
  dispenser: DispenserItem | null;
}

export interface DispenserProps {
  name: string;
  channelId: string;
  station: string;
  line: string;
  order: string;
  position: string;
}

export default function AddDispenserModal({
  isOpen,
  onClose,
  onSave,
  dispenser,
}: AddDispenserModalProps) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [dispenserName, setDispenserName] = useState("");
  const [channelId, setChannelId] = useState("");
  const [station, setStation] = useState("");
  const [line, setLine] = useState("");
  const [order, setOrder] = useState("");
  const [position, setPosition] = useState("");

  // Fill data when editing, clear when adding
  useEffect(() => {
    if (!isOpen) return;

    if (dispenser) {
      setDispenserName(dispenser.name || "");
      setChannelId(dispenser.channelId || "");
      setStation(dispenser.station || "");
      setLine(dispenser.line || "");
      setOrder(dispenser.order || "");
      setPosition(dispenser.position || "");
    } else {
      setDispenserName("");
      setChannelId("");
      setStation("");
      setLine("");
      setOrder("");
      setPosition("");
    }
  }, [dispenser, isOpen]);

  function handleSaveData() {
    if (
      !dispenserName.trim() ||
      !channelId.trim() ||
      !station ||
      !line.trim() ||
      !order.trim() ||
      !position.trim()
    ) {
      alert("You have to enter all fields");
      return;
    }

    onSave({
      channelId: channelId.trim(),
      station: station.trim(),
      line: line.trim(),
      order: order.trim(),
      position: position.trim(),
      name: dispenserName.trim(),
    });
  }

  return (
    <AddButton
      icon="dispenser"
      label={dispenser ? "Edit Dispenser" : "New Dispenser"}
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSaveData}
      saveLabel={dispenser ? "Update" : "Save"}
    >
      <div className="py-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-xs font-semibold mb-2 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Dispenser Name
            </label>
            <input
              type="text"
              placeholder="Enter dispenser name..."
              className={`w-full rounded-xl py-3 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-300 text-slate-700 placeholder-slate-400"
              }`}
              value={dispenserName}
              onChange={(e) => setDispenserName(e.target.value)}
            />
          </div>

          <div>
            <label
              className={`block text-xs font-semibold mb-2 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Channel ID
            </label>
            <input
              type="text"
              placeholder="Enter channel ID..."
              className={`w-full rounded-xl py-3 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-300 text-slate-700 placeholder-slate-400"
              }`}
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-xs font-semibold mb-2 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Station
            </label>
            <div className="relative">
              <select
                className={`w-full appearance-none rounded-xl py-3 px-4 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border cursor-pointer transition-colors duration-200 ${
                  isDark
                    ? "bg-slate-900/60 border-slate-700 text-slate-200"
                    : "bg-white border-gray-300 text-slate-700"
                } ${!station ? (isDark ? "text-slate-500" : "text-slate-400") : ""}`}
                value={station}
                onChange={(e) => setStation(e.target.value)}
              >
                <option
                  value=""
                  disabled
                  className={isDark ? "bg-[#0F172A] text-slate-400" : ""}
                >
                  Select Station
                </option>
                <option
                  value="station1"
                  className={isDark ? "bg-[#0F172A] text-white" : ""}
                >
                  Station 1
                </option>
                <option
                  value="station2"
                  className={isDark ? "bg-[#0F172A] text-white" : ""}
                >
                  Station 2
                </option>
              </select>

              <div
                className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 ${
                  isDark ? "text-slate-400" : "text-slate-700"
                }`}
              >
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
            <label
              className={`block text-xs font-semibold mb-2 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Line
            </label>
            <input
              type="text"
              placeholder="Enter line..."
              className={`w-full rounded-xl py-3 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-300 text-slate-700 placeholder-slate-400"
              }`}
              value={line}
              onChange={(e) => setLine(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-xs font-semibold mb-2 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Order
            </label>
            <input
              type="text"
              placeholder="Enter order..."
              className={`w-full rounded-xl py-3 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-300 text-slate-700 placeholder-slate-400"
              }`}
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>

          <div>
            <label
              className={`block text-xs font-semibold mb-2 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Position
            </label>
            <input
              type="text"
              placeholder="Enter position..."
              className={`w-full rounded-xl py-3 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-300 text-slate-700 placeholder-slate-400"
              }`}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>
      </div>
    </AddButton>
  );
}
