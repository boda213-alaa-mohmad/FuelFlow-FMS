"use client";

import { useState } from "react";
import AddButton from "./AddButtonModal";

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
}

export default function AddStationModal({
  isOpen,
  onClose,
  onSave,
}: AddStationModalProps) {
  const [name, setName] = useState("");
  const [channelId, setChannelId] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleSave() {
    // Basic validation
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

    setName("");
    setChannelId("");
    setLocation("");
    setDescription("");
  }

  return (
    <AddButton
      icon="station"
      label="New Station"
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="space-y-5 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600">
              Station Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter station name"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#FF7A59] focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-slate-600">
              Channel ID
            </label>
            <input
              type="text"
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              placeholder="Enter channel ID"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#FF7A59] focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-600">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#FF7A59] focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-600">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-[#FF7A59] focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20"
          />
        </div>
      </div>
    </AddButton>
  );
}
