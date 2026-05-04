/*
 * DESIGN: Sports-style category breakdown bars
 * Three categories with weighted contribution display
 * Taco Time colors, diagonal accent styling
 */

import { getCategoryBreakdown, getScoreColor } from "@/lib/sobrietyData";
import { Activity, Brain, Zap } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  recovery: Activity,
  emotional: Brain,
  ridiculous: Zap,
};

export default function CategoryBreakdown() {
  const categories = getCategoryBreakdown();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px flex-1" style={{ backgroundColor: "#4CAF5066" }} />
        <h3
          className="text-lg font-bold tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Oswald', sans-serif", color: "#4CAF50" }}
        >
          Category Breakdown
        </h3>
        <div className="h-px flex-1" style={{ backgroundColor: "#4CAF5066" }} />
      </div>

      {categories.map((cat) => {
        const Icon = categoryIcons[cat.key] || Activity;
        const color = getScoreColor(cat.score);

        return (
          <div key={cat.key} className="rounded-sm p-4" style={{ backgroundColor: "#1C2526" }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4" style={{ color: color }} />
                <span
                  className="text-sm font-bold tracking-wide uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "#ffffffcc" }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="text-xs opacity-50"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {Math.round(cat.weight * 100)}% weight
                </span>
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color }}
                >
                  {cat.score}
                </span>
              </div>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#2a2f30" }}>
              <div
                className="h-full rounded-full score-fill-animate"
                style={{
                  width: `${cat.score}%`,
                  backgroundColor: color,
                  boxShadow: `0 0 8px ${color}44`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
