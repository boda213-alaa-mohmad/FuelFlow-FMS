"use client";

import { useContext } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";

interface CardType {
  icon: string;
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  saveLabel?: string;
}

export default function AddButton({
  icon,
  label,
  children,
  isOpen,
  onClose,
  onSave,
  saveLabel = "Save",
}: CardType) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div
        className={`w-full max-w-4xl rounded-2xl p-6 shadow-xl md:p-8 border transition-colors duration-300 ${
          isDark
            ? "bg-[#0F172A] border-slate-800 text-white"
            : "bg-white border-gray-100 text-slate-900"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between border-b pb-4 transition-colors duration-300 ${
            isDark ? "border-slate-800" : "border-gray-100"
          }`}
        >
          <div className="flex items-center gap-3">
            <Image
              src={`/icons/${icon}.png`}
              alt={`${label} icon`}
              width={32}
              height={32}
            />

            <h2
              className={`text-lg font-bold ${
                isDark ? "text-white" : "text-slate-700"
              }`}
            >
              {label}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`cursor-pointer p-1 transition-colors ${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="py-4">{children}</div>

        {/* Footer */}
        <div
          className={`flex justify-end gap-3 border-t pt-4 transition-colors duration-300 ${
            isDark ? "border-slate-800" : "border-gray-100"
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className={`cursor-pointer rounded-xl border px-8 py-2.5 font-medium transition-colors ${
              isDark
                ? "border-[#FF7A59] text-[#FF7A59] hover:bg-orange-500/10"
                : "border-[#FF7A59] text-[#FF7A59] hover:bg-orange-50"
            }`}
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onSave}
            className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#FF7A59] px-8 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-[#ff653c]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
              />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>

            {saveLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
