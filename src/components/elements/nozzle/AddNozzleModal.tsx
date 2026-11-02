"use client";

import { useState, useEffect, useContext } from "react";
import AddButton from "../AddButtonModal";
import { ThemeContext } from "../../../../context/ThemeContext";
import { NozzleItem } from "@/types/nozzle";

interface AddNozzleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newNozzle: newNozzle) => void;
  nozzle: NozzleItem | null;
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
  nozzle,
}: AddNozzleModalProps) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [formData, setFormData] = useState<newNozzle>({
    name: "",
    channelId: "",
    station: "",
    dispenser: "",
  });

  // Fill inputs when editing, clear when adding
  useEffect(() => {
    if (!isOpen) return;

    if (nozzle) {
      setFormData({
        name: nozzle.name || "",
        channelId: nozzle.channelId || "",
        station: nozzle.station || "",
        dispenser: nozzle.dispenser || "",
      });
    } else {
      setFormData({
        name: "",
        channelId: "",
        station: "",
        dispenser: "",
      });
    }
  }, [nozzle, isOpen]);

  function handleSaveData() {
    if (
      !formData.channelId.trim() ||
      !formData.name.trim() ||
      !formData.dispenser ||
      !formData.station
    ) {
      alert("You have to fill all fields");
      return;
    }

    onSave({
      name: formData.name.trim(),
      channelId: formData.channelId.trim(),
      dispenser: formData.dispenser.trim(),
      station: formData.station.trim(),
    });
  }

  return (
    <AddButton
      icon="nozzle"
      label={nozzle ? "Edit Nozzle" : "New Nozzle"}
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSaveData}
      saveLabel={nozzle ? "Update" : "Save"}
    >
      <div className="py-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-xs font-semibold mb-2 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Nozzle Name
            </label>
            <input
              type="text"
              placeholder="Enter nozzle name..."
              className={`w-full rounded-xl py-3 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-300 text-slate-700 placeholder-slate-400"
              }`}
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
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
              value={formData.channelId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  channelId: e.target.value,
                })
              }
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
                } ${!formData.station ? (isDark ? "text-slate-500" : "text-slate-400") : ""}`}
                value={formData.station}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    station: e.target.value,
                  })
                }
              >
                <option
                  value=""
                  disabled
                  className={isDark ? "bg-[#0F172A] text-slate-400" : ""}
                >
                  Choose station
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
                <option
                  value="station3"
                  className={isDark ? "bg-[#0F172A] text-white" : ""}
                >
                  Station 3
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
              Dispenser
            </label>
            <div className="relative">
              <select
                className={`w-full appearance-none rounded-xl py-3 px-4 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border cursor-pointer transition-colors duration-200 ${
                  isDark
                    ? "bg-slate-900/60 border-slate-700 text-slate-200"
                    : "bg-white border-gray-300 text-slate-700"
                } ${!formData.dispenser ? (isDark ? "text-slate-500" : "text-slate-400") : ""}`}
                value={formData.dispenser}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dispenser: e.target.value,
                  })
                }
              >
                <option
                  value=""
                  disabled
                  className={isDark ? "bg-[#0F172A] text-slate-400" : ""}
                >
                  Choose dispenser
                </option>
                <option
                  value="dispenser1"
                  className={isDark ? "bg-[#0F172A] text-white" : ""}
                >
                  Dispenser 1
                </option>
                <option
                  value="dispenser2"
                  className={isDark ? "bg-[#0F172A] text-white" : ""}
                >
                  Dispenser 2
                </option>
                <option
                  value="dispenser3"
                  className={isDark ? "bg-[#0F172A] text-white" : ""}
                >
                  Dispenser 3
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
        </div>
      </div>
    </AddButton>
  );
}
