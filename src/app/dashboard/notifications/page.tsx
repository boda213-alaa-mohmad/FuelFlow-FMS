"use client";

import { useState, useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { AlarmContent } from "@/components/notification/alarms/AlarmContent";
import { NotificationHeader } from "@/components/notification/NotificationHeader";

import { WarningContent } from "@/components/notification/warnings/WarningContent";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<"alarms" | "warnings">("alarms");
 const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#090D16] text-white" : "bg-slate-50/50 text-slate-900"
      }`}
    >
      <NotificationHeader
        onBack={() => window.history.back()}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />

      {activeTab === "alarms" ? (
        <div className="p-3">
          <AlarmContent />
        </div>
      ) : (
        <div className=" p-12 rounded-2xl border  shadow-sm text-center text-slate-500">
          <WarningContent />
        </div>
      )}
    </div>
  );
}
