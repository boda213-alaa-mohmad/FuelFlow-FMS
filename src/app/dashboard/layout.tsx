"use client";
import ThemeProvider from "../../../context/ThemeContext";
import { ThemeContext } from "../../../context/ThemeContext";
import Sidebar from "@/components/layout/sidebar";
import { useContext } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <DashboardContent>{children}</DashboardContent>
    </ThemeProvider>
  );
}

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex h-screen overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#090D16] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Sidebar />

      <main
        className={`flex-1 overflow-y-auto transition-colors duration-300 ${
          isDark ? "bg-[#0F172A] text-slate-100" : "bg-gray-50 text-gray-900"
        }`}
      >
        {children}
      </main>
    </div>
  );
}