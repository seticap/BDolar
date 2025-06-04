"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, other: 45 },
  { month: "February", desktop: 305, mobile: 200, other: 100 },
  { month: "March", desktop: 237, mobile: 120, other: 150 },
  { month: "April", desktop: 73, mobile: 190, other: 50 },
  { month: "May", desktop: 209, mobile: 130, other: 100 },
  { month: "June", desktop: 214, mobile: 140, other: 160 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-3))",
  },
};

export function MiniChart() {
  return (
    <>


      <div className="h-50 w-full pt-4 mt-25">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ left: 12, right: 12, top: 12 }}
            stackOffset="expand"
            width={500}
            height={300}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            {/* Área para "other" */}
            <Area
              dataKey="other"
              type="natural"
              fill="hsl(var(--chart-3))"
              fillOpacity={0.1}
              stroke="hsl(var(--chart-3))"
              stackId="a"
              name={chartConfig.other.label}
            />

            {/* Área para "mobile" */}
            <Area
              dataKey="mobile"
              type="natural"
              fill="hsl(var(--chart-2))"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-2))"
              stackId="a"
              name={chartConfig.mobile.label}
            />

            {/* Área para "desktop" */}
            <Area
              dataKey="desktop"
              type="natural"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-1))"
              stackId="a"
              name={chartConfig.desktop.label}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </>
  );
}
