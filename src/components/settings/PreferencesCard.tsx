"use client";

import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

export default function PreferencesCard() {
  const themeUse = useContext(ThemeContext);
  const isDark = themeUse.theme === "dark";

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm space-y-6 transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-gray-100 text-slate-900"
      }`}
    >
      <h2
        className={`text-lg font-semibold ${
          isDark ? "text-white" : "text-slate-800"
        }`}
      >
        Account Preferences
      </h2>

      {/* Theme Toggle */}
      <div>
        <label
          className={`block text-sm font-medium mb-2 ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          Theme
        </label>
        <div
          className={`flex p-1 rounded-xl w-fit transition-colors duration-300 ${
            isDark ? "bg-slate-800/80" : "bg-slate-100"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              themeUse.setTheme("light");
            }}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg cursor-pointer transition-all ${
              !isDark
                ? "bg-white text-slate-800 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ☀️ Light Mode
          </button>

          <button
            type="button"
            onClick={() => {
              themeUse.setTheme("dark");
            }}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg cursor-pointer transition-all ${
              isDark
                ? "bg-slate-700 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            🌙 Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
}
