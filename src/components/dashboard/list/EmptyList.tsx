"use client";

import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";

export function EmptyState() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-4 rounded-2xl shadow-sm border text-center transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-gray-100 text-slate-900"
      }`}
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
          isDark
            ? "bg-[#FF7A59]/10 text-[#FF7A59]"
            : "bg-[#FBE8E2] text-[#FF7A59]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>

      <h3
        className={`text-lg font-semibold mb-1 ${
          isDark ? "text-white" : "text-slate-700"
        }`}
      >
        No Lists Found
      </h3>
      <p
        className={`text-sm max-w-sm ${
          isDark ? "text-slate-400" : "text-slate-400"
        }`}
      >
        There are nothing added yet.
      </p>
    </div>
  );
}
