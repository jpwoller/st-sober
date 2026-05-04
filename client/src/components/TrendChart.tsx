/*
 * DESIGN: ESPN-style trend line chart
 * Dark background, green-to-red gradient line
 * Taco Time colors with glowing data points
 */

import { getCompositeScores, getScoreColor, MONTHS } from "@/lib/sobrietyData";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TrendChart() {
  const scores = getCompositeScores();
  const data = MONTHS.map((month, i) => ({
    month,
    score: scores[i],
    fill: getScoreColor(scores[i]),
  }));

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1" style={{ backgroundColor: "#F5A62366" }} />
        <h3
          className="text-lg font-bold tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Oswald', sans-serif", color: "#F5A623" }}
        >
          6-Month Trend Analysis
        </h3>
        <div className="h-px flex-1" style={{ backgroundColor: "#F5A62366" }} />
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A52019" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#A52019" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#ffffff66", fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }}
            axisLine={{ stroke: "#ffffff15" }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: "#ffffff66", fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }}
            axisLine={{ stroke: "#ffffff15" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1C2526",
              border: "1px solid #F5A62366",
              borderRadius: "4px",
              fontFamily: "'Source Sans 3', sans-serif",
              color: "#fff",
            }}
            formatter={(value: number) => [`${value}/100`, "Sobriety Score"]}
          />
          {/* Warning threshold line */}
          <ReferenceLine
            y={35}
            stroke="#A52019"
            strokeDasharray="8 4"
            label={{
              value: "CRITICAL",
              fill: "#A52019",
              fontSize: 11,
              fontFamily: "'Oswald', sans-serif",
              position: "right",
            }}
          />
          <ReferenceLine
            y={55}
            stroke="#F5A623"
            strokeDasharray="8 4"
            label={{
              value: "WARNING",
              fill: "#F5A623",
              fontSize: 11,
              fontFamily: "'Oswald', sans-serif",
              position: "right",
            }}
          />
          <ReferenceLine
            y={75}
            stroke="#A5D46A"
            strokeDasharray="8 4"
            label={{
              value: "CAUTION",
              fill: "#A5D46A",
              fontSize: 11,
              fontFamily: "'Oswald', sans-serif",
              position: "right",
            }}
          />
          <Area
            type="monotone"
            dataKey="score"
            stroke="#A52019"
            strokeWidth={3}
            fill="url(#scoreGradient)"
            dot={{ fill: "#F5A623", stroke: "#F5A623", strokeWidth: 2, r: 5 }}
            activeDot={{ fill: "#F5A623", stroke: "#fff", strokeWidth: 2, r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
