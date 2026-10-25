"use client";

import { useState } from "react";

import { AlarmContent } from "@/components/notification/alarms/AlarmContent";
import { NotificationHeader } from "@/components/notification/NotificationHeader";

// todo: later
// import { WarningContent } from "@/components/notification/warnings/WarningContent";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<"alarms" | "warnings">("alarms");

  return (
    <div className="space-y-6 bg-slate-50 min-h-screen">
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
        <div className="bg-white p-12 rounded-2xl border border-slate-100 shadow-sm text-center text-slate-500">
          <h3 className="text-lg font-bold text-slate-700">
            Warnings View Content
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            later componet wanings will be
          </p>
        </div>
      )}
    </div>
  );
}
