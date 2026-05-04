/*
 * DESIGN: ESPN "BREAKING NEWS" style alert banner
 * Red/gold Taco Time colors with pulsing animation
 * Diagonal clip-path styling
 */

import { getCurrentScore, getScoreStatus, SCORE_THRESHOLDS } from "@/lib/sobrietyData";
import { AlertTriangle, TrendingDown } from "lucide-react";

export default function WarningBanner() {
  const score = getCurrentScore();
  const status = getScoreStatus(score);

  if (status !== "warning" && status !== "critical") return null;

  const isCritical = status === "critical";
  const label = SCORE_THRESHOLDS[status].label;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: isCritical
          ? "linear-gradient(135deg, #A52019 0%, #7a1812 50%, #A52019 100%)"
          : "linear-gradient(135deg, #F5A623 0%, #d4900e 50%, #F5A623 100%)",
      }}
    >
      {/* Diagonal stripes overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.3) 10px,
            rgba(0,0,0,0.3) 20px
          )`,
        }}
      />

      <div className="relative z-10 container py-4 flex items-center gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <AlertTriangle className={`w-6 h-6 ${isCritical ? "text-white" : "text-[#1C2526]"} warning-pulse`} />
          <span
            className={`text-sm font-bold tracking-[0.25em] uppercase ${isCritical ? "text-white" : "text-[#1C2526]"}`}
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {label} LEVEL
          </span>
        </div>

        <div className="h-6 w-px opacity-30" style={{ backgroundColor: isCritical ? "#fff" : "#1C2526" }} />

        <div className="flex items-center gap-2 flex-1">
          <TrendingDown className={`w-4 h-4 ${isCritical ? "text-white" : "text-[#1C2526]"}`} />
          <p
            className={`text-sm font-medium ${isCritical ? "text-white/90" : "text-[#1C2526]/90"}`}
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            {isCritical
              ? "Sobriety score has dropped below critical threshold. Multiple heuristics in danger zone. Immediate intervention recommended."
              : "Sobriety score trending downward. Several key metrics approaching critical levels. Increased monitoring advised."}
          </p>
        </div>
      </div>
    </div>
  );
}
