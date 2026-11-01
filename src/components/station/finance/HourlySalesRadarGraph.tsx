"use client";

import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A radar chart with dots";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#ff7a59",
  },
} satisfies ChartConfig;

export function ChartRadarDots() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <Card
      className={`transition-colors duration-300 ${
        isDark
          ? "bg-[#0F172A] border-slate-800 text-white"
          : "bg-white border-gray-100 text-slate-900"
      }`}
    >
      <CardHeader className="items-center">
        <CardTitle className={isDark ? "text-white" : "text-slate-800"}>
          Radar Chart - Dots
        </CardTitle>
        <CardDescription
          className={isDark ? "text-slate-400" : "text-slate-500"}
        >
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis
              dataKey="month"
              stroke={isDark ? "#94A3B8" : "#64748B"}
            />
            <PolarGrid stroke={isDark ? "#1E293B" : "#E2E8F0"} />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
