"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

export const description = "Daily desktop visitors for May 2026";

const chartData = [
  { date: "2026-05-01", desktop: 222 },
  { date: "2026-05-02", desktop: 97 },
  { date: "2026-05-03", desktop: 167 },
  { date: "2026-05-04", desktop: 242 },
  { date: "2026-05-05", desktop: 373 },
  { date: "2026-05-06", desktop: 301 },
  { date: "2026-05-07", desktop: 245 },
  { date: "2026-05-08", desktop: 409 },
  { date: "2026-05-09", desktop: 59 },
  { date: "2026-05-10", desktop: 261 },
  { date: "2026-05-11", desktop: 327 },
  { date: "2026-05-12", desktop: 292 },
  { date: "2026-05-13", desktop: 342 },
  { date: "2026-05-14", desktop: 137 },
  { date: "2026-05-15", desktop: 120 },
  { date: "2026-05-16", desktop: 138 },
  { date: "2026-05-17", desktop: 446 },
  { date: "2026-05-18", desktop: 364 },
  { date: "2026-05-19", desktop: 243 },
  { date: "2026-05-20", desktop: 89 },
  { date: "2026-05-21", desktop: 137 },
  { date: "2026-05-22", desktop: 224 },
  { date: "2026-05-23", desktop: 138 },
  { date: "2026-05-24", desktop: 387 },
  { date: "2026-05-25", desktop: 215 },
  { date: "2026-05-26", desktop: 75 },
  { date: "2026-05-27", desktop: 383 },
  { date: "2026-05-28", desktop: 122 },
  { date: "2026-05-29", desktop: 315 },
  { date: "2026-05-30", desktop: 454 },
  { date: "2026-05-31", desktop: 165 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#db816b",
  },
} satisfies ChartConfig;

export function ChartLineInteractive() {
  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.desktop, 0),
    [],
  );

  return (
    <Card className="py-4 sm:py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
          <CardTitle>Desktop Visitors</CardTitle>
          <CardDescription>Daily visitors for May 2026</CardDescription>
        </div>

        <div className="flex">
          <div className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left data-[active=true]:bg-muted/50 sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              {chartConfig.desktop.label}
            </span>
            <span className="text-lg leading-none font-bold sm:text-3xl">
              {total.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(`${value}T12:00:00`);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="desktop"
                  labelFormatter={(value) => {
                    return new Date(`${value}T12:00:00`).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    );
                  }}
                />
              }
            />

            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
