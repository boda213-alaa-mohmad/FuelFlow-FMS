"use client";

import AddButton from "../AddButtonModal";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { CompressorItem } from "@/types/compressor";

interface AddCompressorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newCompressor: NewCompressor) => void;
  compressor: CompressorItem | null;
}

export interface NewCompressor {
  name: string;
  channelId: string;
  station: string;
}

export default function AddCompressorModal({
  isOpen,
  onClose,
  onSave,
  compressor,
}: AddCompressorModalProps) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [newCompressor, setNewCompressor] = useState<NewCompressor>({
    channelId: "",
    name: "",
    station: "",
  });

  // Fill inputs when editing, clear them when adding
  useEffect(() => {
    if (!isOpen) return;

    if (compressor) {
      setNewCompressor({
        name: compressor.name,
        channelId: compressor.channelId,
        station: compressor.station,
      });
    } else {
      setNewCompressor({
        name: "",
        channelId: "",
        station: "",
      });
    }
  }, [compressor, isOpen]);

  // Save or Update
  function handleSaveData() {
    if (
      !newCompressor.name.trim() ||
      !newCompressor.channelId.trim() ||
      !newCompressor.station
    ) {
      alert("You have to enter all fields");
      return;
    }

    onSave(newCompressor);
  }

  return (
    <AddButton
      icon="compressor"
      label={compressor ? "Edit Compressor" : "Add Compressor"}
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSaveData}
      saveLabel={compressor ? "Update" : "Save"}
    >
      <div className="py-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Compressor Name */}
          <div>
            <label
              className={`block text-xs font-semibold mb-2 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Compressor Name
            </label>

            <input
              type="text"
              placeholder="Enter compressor name..."
              className={`w-full rounded-xl py-3 px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] border transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-300 text-slate-700 placeholder-slate-400"
              }`}
              value={newCompressor.name}
              onChange={(e) =>
                setNewCompressor({
                  ...newCompressor,
                  name: e.target.value,
                })
              }
            />
          </div>

          {/* Channel ID */}
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
              value={newCompressor.channelId}
              onChange={(e) =>
                setNewCompressor({
                  ...newCompressor,
                  channelId: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Station */}
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
                } ${
                  !newCompressor.station
                    ? isDark
                      ? "text-slate-500"
                      : "text-slate-400"
                    : ""
                }`}
                value={newCompressor.station}
                onChange={(e) =>
                  setNewCompressor({
                    ...newCompressor,
                    station: e.target.value,
                  })
                }
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
        </div>
      </div>
    </AddButton>
  );
}
