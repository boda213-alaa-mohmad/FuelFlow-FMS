"use client";

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

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 203 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#ff7a59",
  },
} satisfies ChartConfig;

export function ChartRadarGridCircleNoLines() {
  return (
    <Card className="w-full border-none shadow-none bg-transparent overflow-hidden">
      <CardHeader className="items-center pb-2 pt-0 px-0">
        <CardTitle className="text-sm font-bold text-slate-700">
          Radar Chart - Grid Circle
        </CardTitle>
        <CardDescription className="text-xs text-slate-400">
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0 px-0">
        <ChartContainer
          config={chartConfig}
          className="w-full h-[220px] mx-auto"
        >
          <RadarChart
            data={chartData}
            margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" radialLines={false} stroke="#e2e8f0" />
            <PolarAngleAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: "#64748b" }}
            />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              stroke="var(--color-desktop)"
              dot={{
                r: 3,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
