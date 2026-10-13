"use client";

import AddButton from "./AddButtonModal";

interface AddCompressorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCompressorModal({
  isOpen,
  onClose,
}: AddCompressorModalProps) {
  if (!isOpen) return null;

  return (
    <AddButton
      icon="compressor"
      label="compressor"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="py-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Station Name
            </label>
            <input
              type="text"
              placeholder="Placeholder ..."
              className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
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
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Station
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-gray-300 rounded-xl py-3 px-4 pr-10 text-sm text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 cursor-pointer">
                <option value="" disabled selected>
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
        </div>
      </div>
    </AddButton>
  );
}
