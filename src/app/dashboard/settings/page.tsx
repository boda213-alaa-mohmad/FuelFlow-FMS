"use client";

import { useState } from "react";
import ProfileForm from "@/components/settings/ProfileForm";
import PasswordForm from "@/components/settings/PasswordForm";
import PreferencesCard from "@/components/settings/PreferencesCard";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
      </div>

      <div className="flex gap-8 border-b border-gray-200 pb-1">
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-3 text-sm font-medium transition-all relative cursor-pointer ${
            activeTab === "profile"
              ? "text-[#FF7A59] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF7A59]"
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
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Password
        </button>
      </div>

      {activeTab === "profile" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          <div className="lg:col-span-2">
            <ProfileForm />
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
