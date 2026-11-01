"use client";

import { useContext } from "react";
import { Wallet, Tag, Repeat } from "lucide-react";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function FinanceOverviewCards() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const cards = [
    {
      title: "Total Value",
      value: "71,028",
      unit: "EGP",
      icon: Wallet,
    },
    {
      title: "Total Sales",
      value: "20,000",
      unit: "m³",
      icon: Tag,
    },
    {
      title: "Avg Sales",
      value: "20,000",
      unit: "m³",
      icon: Tag,
    },
    {
      title: "Transaction Count",
      value: "1567",
      unit: "",
      icon: Repeat,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className={`p-5 rounded-2xl border shadow-sm space-y-3 transition hover:shadow-md duration-300 ${
              isDark
                ? "bg-[#0F172A] border-slate-800 text-white"
                : "bg-white border-gray-100 text-slate-900"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                {card.value}
              </h3>
              {card.unit && (
                <span
                  className={`text-xs font-semibold ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {card.unit}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Icon size={16} className="text-[#FF7A59]" />
              <span
                className={`text-xs font-bold ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {card.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
