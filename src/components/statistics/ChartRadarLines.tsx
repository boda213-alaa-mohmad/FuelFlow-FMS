"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 160 },
  { month: "February", desktop: 185, mobile: 170 },
  { month: "March", desktop: 207, mobile: 180 },
  { month: "April", desktop: 173, mobile: 160 },
  { month: "May", desktop: 160, mobile: 190 },
  { month: "June", desktop: 174, mobile: 204 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FF7A59",
  },
} satisfies ChartConfig;

export function ChartRadarLinesOnly() {
  return (
    <div className="w-full flex flex-col items-center">
      <ChartContainer config={chartConfig} className="w-full h-[200px] mx-auto">
        <RadarChart
          data={chartData}
          margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <PolarAngleAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: "#64748b" }}
          />
          <PolarGrid radialLines={false} stroke="#e2e8f0" />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={0.1}
            stroke="var(--color-desktop)"
            strokeWidth={2}
          />
        </RadarChart>
      </ChartContainer>
    </div>
  );
}
