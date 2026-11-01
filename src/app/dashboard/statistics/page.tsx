"use client";

import { useState, useEffect, useContext } from "react";
import StatsHeader from "@/components/statistics/StatsHeader";
import OverviewCards from "@/components/statistics/OverviewCards";
import RightSidebarStats from "@/components/statistics/RightSidebarStats";
import GraphChartSection from "@/components/statistics/GraphView";
import ListViewSection from "@/components/statistics/ListView";
import { BarChart3, List } from "lucide-react";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function StatisticsPage() {
  const [choose, setChoose] = useState<"graph" | "list">("graph");
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Load saved view on mount
  useEffect(() => {
    const savedView = localStorage.getItem("statistics-view");

    if (savedView === "graph" || savedView === "list") {
      setChoose(savedView);
    }

    setIsLoaded(true);
  }, []);

  // Save selected view
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("statistics-view", choose);
    }
  }, [choose, isLoaded]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#090D16] text-white" : "bg-slate-50/50 text-slate-900"
      }`}
    >
      <StatsHeader />

      <div className="space-y-6 w-full p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <OverviewCards />

            <div className="flex justify-end">
              <div
                className={`inline-flex p-1 rounded-xl shadow-inner transition-colors duration-300 ${
                  isDark ? "bg-slate-800/80" : "bg-slate-100"
                }`}
              >
                <button
                  onClick={() => setChoose("graph")}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    choose === "graph"
                      ? "bg-[#FF7A59] text-white shadow-sm"
                      : isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  GRAPH
                </button>

                <button
                  onClick={() => setChoose("list")}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    choose === "list"
                      ? "bg-[#FF7A59] text-white shadow-sm"
                      : isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  LIST
                </button>
              </div>
            </div>

            <div>
              {choose === "graph" ? <GraphChartSection /> : <ListViewSection />}
            </div>
          </div>

          <div className="lg:col-span-1">
            <RightSidebarStats />
          </div>
        </div>
      </div>
    </div>
  );
}
