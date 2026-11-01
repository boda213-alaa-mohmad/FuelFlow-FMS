"use client";

import { useState, useContext } from "react";
import ProfileForm from "@/components/settings/ProfileForm";
import PasswordForm from "@/components/settings/PasswordForm";
import PreferencesCard from "@/components/settings/PreferencesCard";
import { ThemeContext } from "../../../context/ThemeContext";

interface SettingsContentProps {
  user: {
    email: string;
    fullName: string;
  };
}

export default function SettingsContent({ user }: SettingsContentProps) {
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`p-8 max-w-7xl mx-auto space-y-6 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#090D16] text-white" : "bg-slate-50/50 text-slate-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <h1
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-slate-800"
          }`}
        >
          Settings
        </h1>
      </div>

      <div
        className={`flex gap-8 border-b pb-1 transition-colors duration-300 ${
          isDark ? "border-slate-800" : "border-gray-200"
        }`}
      >
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-3 text-sm font-medium transition-all relative cursor-pointer ${
            activeTab === "profile"
              ? "text-[#FF7A59] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF7A59]"
              : isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Profile Settings
        </button>

        <button
          onClick={() => setActiveTab("password")}
          className={`pb-3 text-sm font-medium transition-all relative cursor-pointer ${
            activeTab === "password"
              ? "text-[#FF7A59] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF7A59]"
              : isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Password
        </button>
      </div>

      {activeTab === "profile" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          <div className="lg:col-span-2">
            <ProfileForm user={user} />
          </div>
          <div className="lg:col-span-1">
            <PreferencesCard />
          </div>
        </div>
      ) : (
        <div className="max-w-2xl pt-2">
          <PasswordForm />
        </div>
      )}
    </div>
  );
}
