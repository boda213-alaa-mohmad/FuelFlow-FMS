"use client";
import AddButton from "./AddButtonModal";

interface AddStationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddStationModal({
  isOpen,
  onClose,
}: AddStationModalProps) {
  return (
    <AddButton
      icon="station"
      label="new Station"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="py-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-2">
              Station Name
            </label>
            <input
              type="text"
              placeholder="Placeholder ..."
              className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-2">
              Channel ID
            </label>
            <input
              type="text"
              placeholder="Placeholder ..."
              className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-2">
            Location
          </label>
          <input
            type="text"
            placeholder="Placeholder ..."
            className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-2">
            Description
          </label>
          <input
            type="text"
            placeholder="Placeholder ..."
            className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#FF7A59]/20 focus:border-[#FF7A59]"
          />
        </div>
      </div>
    </AddButton>
  );
}
