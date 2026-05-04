/*
 * DESIGN: Sports stat card with diagonal accent stripe
 * Dark card with colored left border based on status
 * Taco Time colors, Oswald headings, JetBrains Mono data
 * Sparkline mini-chart showing 6-month trend
 */

import type { HeuristicData } from "@/lib/sobrietyData";
import { getScoreColor, MONTHS, SCORE_THRESHOLDS, getScoreStatus } from "@/lib/sobrietyData";
import {
  Users,
  Phone,
  HeartHandshake,
  Grid3x3,
  Coffee,
  ShieldAlert,
  MessageCircle,
  Hammer,
  MessageSquare,
  Octagon,
} from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Users,
  Phone,
  HeartHandshake,
  Grid3x3,
  Coffee,
  ShieldAlert,
  MessageCircle,
  Hammer,
  MessageSquare,
  Octagon,
};

interface Props {
  heuristic: HeuristicData;
  index: number;
}

export default function HeuristicCard({ heuristic, index }: Props) {
  const Icon = iconMap[heuristic.icon] || Users;
  const currentScore = heuristic.monthlyScores[5];
  const prevScore = heuristic.monthlyScores[4];
  const change = currentScore - prevScore;
  const color = getScoreColor(currentScore);
  const status = getScoreStatus(currentScore);
  const statusLabel = SCORE_THRESHOLDS[status].label;

  const sparkData = MONTHS.map((month, i) => ({
    month,
    score: heuristic.monthlyScores[i],
  }));

  const isWarningOrCritical = status === "warning" || status === "critical";

  return (
    <div
      className={`relative overflow-hidden rounded-sm fade-up ${isWarningOrCritical ? "ring-1" : ""}`}
      style={{
        animationDelay: `${index * 0.08}s`,
        opacity: 0,
        backgroundColor: "#1C2526",
        borderLeft: `4px solid ${color}`,
        boxShadow: isWarningOrCritical ? `0 0 0 1px ${color}44` : "none",
      }}
    >
      {/* Diagonal accent stripe */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-[0.07]"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, transparent 60%)`,
        }}
      />

      <div className="p-4 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded flex items-center justify-center"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="w-4.5 h-4.5" style={{ color: color }} />
            </div>
            <div>
              <h4
                className="text-sm font-bold tracking-wide uppercase leading-tight"
                style={{ fontFamily: "'Oswald', sans-serif", color: "#ffffffdd" }}
              >
                {heuristic.shortName}
              </h4>
              <span className="text-[10px] uppercase tracking-wider opacity-40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                #{heuristic.id} — {heuristic.category}
              </span>
            </div>
          </div>

          {/* Status badge */}
          <span
            className={`text-[10px] font-bold tracking-wider px-2 py-0.5 uppercase ${isWarningOrCritical ? "warning-pulse" : ""}`}
            style={{
              fontFamily: "'Oswald', sans-serif",
              backgroundColor: `${color}25`,
              color,
              borderRadius: "2px",
            }}
          >
            {statusLabel}
          </span>
        </div>

        {/* Score + Change */}
        <div className="flex items-end gap-3 mb-2">
          <span
            className="text-4xl leading-none font-bold"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color }}
          >
            {currentScore}
          </span>
          <div className="flex flex-col pb-0.5">
            <span
              className="text-xs font-semibold"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: change >= 0 ? "#4CAF50" : "#A52019",
              }}
            >
              {change >= 0 ? "+" : ""}{change}
            </span>
            <span className="text-[10px] opacity-40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              vs last month
            </span>
          </div>
        </div>

        {/* Current raw value */}
        <div className="text-xs mb-3 opacity-60" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
          Current: <strong>{heuristic.monthlyRaw[5]}</strong> {heuristic.unit}
        </div>

        {/* Sparkline */}
        <div className="h-12 -mx-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparkData}>
              <XAxis dataKey="month" hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1C2526",
                  border: `1px solid ${color}44`,
                  borderRadius: "3px",
                  fontSize: "11px",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#fff",
                  padding: "4px 8px",
                }}
                formatter={(value: number) => [`${value}`, "Score"]}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke={color}
                strokeWidth={2}
                dot={false}
                activeDot={{ fill: color, stroke: "#fff", r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Joke angle */}
        <p className="text-[11px] italic mt-2 opacity-40 leading-snug" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
          "{heuristic.jokeAngle}"
        </p>
      </div>
    </div>
  );
}
