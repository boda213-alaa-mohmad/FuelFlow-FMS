"use client";

import { useState, useEffect, useContext } from "react";
import AddButton from "../AddButtonModal";
import { ThemeContext } from "../../../../context/ThemeContext";
import { StationItem } from "@/types/StationItem";

export interface NewStation {
  name: string;
  channelId: string;
  location: string;
  description: string;
}

interface AddStationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (station: NewStation) => void;
  station: StationItem | null;
}

export default function AddStationModal({
  isOpen,
  onClose,
  onSave,
  station,
}: AddStationModalProps) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [name, setName] = useState("");
  const [channelId, setChannelId] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    if (station) {
      setName(station.name || "");
      setChannelId(station.channelId || "");
      setLocation(station.location || "");
      setDescription(station.description || "");
    } else {
      setName("");
      setChannelId("");
      setLocation("");
      setDescription("");
    }
  }, [station, isOpen]);

  function handleSave() {
    if (!name.trim() || !channelId.trim() || !location.trim()) {
      alert("Please fill in Station Name, Channel ID, and Location.");
      return;
    }

    onSave({
      name: name.trim(),
      channelId: channelId.trim(),
      location: location.trim(),
      description: description.trim(),
    });
  }

  return (
    <AddButton
      icon="station"
      label={station ? "Edit Station" : "New Station"}
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      saveLabel={station ? "Update" : "Save"}
    >
      <div className="space-y-5 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              className={`mb-2 block text-xs font-semibold ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Station Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter station name"
              className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-200 text-slate-700 placeholder-slate-400"
              }`}
            />
          </div>

          <div>
            <label
              className={`mb-2 block text-xs font-semibold ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Channel ID
            </label>
            <input
              type="text"
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              placeholder="Enter channel ID"
              className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] transition-colors duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                  : "bg-white border-gray-200 text-slate-700 placeholder-slate-400"
              }`}
            />
          </div>
        </div>

        <div>
          <label
            className={`mb-2 block text-xs font-semibold ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] transition-colors duration-200 ${
              isDark
                ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                : "bg-white border-gray-200 text-slate-700 placeholder-slate-400"
            }`}
          />
        </div>

        <div>
          <label
            className={`mb-2 block text-xs font-semibold ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className={`w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59] transition-colors duration-200 ${
              isDark
                ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500"
                : "bg-white border-gray-200 text-slate-700 placeholder-slate-400"
            }`}
          />
        </div>
      </div>
    </AddButton>
  );
}
