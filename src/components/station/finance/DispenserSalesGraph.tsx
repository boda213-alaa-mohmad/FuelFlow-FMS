"use client";

import { useContext } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ThemeContext } from "../../../../context/ThemeContext";

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

export const description = "A bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#ef866c",
  },
} satisfies ChartConfig;

export function ChartBarDefault() {
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
      <CardHeader>
        <CardTitle className={isDark ? "text-white" : "text-slate-800"}>
          Bar Chart
        </CardTitle>
        <CardDescription
          className={isDark ? "text-slate-400" : "text-slate-500"}
        >
          January - June 2026
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid
              vertical={false}
              stroke={isDark ? "#1E293B" : "#E2E8F0"}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              stroke={isDark ? "#94A3B8" : "#64748B"}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
