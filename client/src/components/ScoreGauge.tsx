/*
 * DESIGN: Big sports-broadcast-style score display
 * Large Bebas Neue number, animated fill bar
 * Taco Time colors: green (good) -> gold (warning) -> red (critical)
 */

import { getCurrentScore, getScoreColor, getScoreStatus, SCORE_THRESHOLDS } from "@/lib/sobrietyData";
import { useEffect, useState } from "react";

export default function ScoreGauge() {
  const score = getCurrentScore();
  const status = getScoreStatus(score);
  const color = getScoreColor(score);
  const label = SCORE_THRESHOLDS[status].label;
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = score;
    const duration = 1500;
    const stepTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setDisplayScore(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Status badge */}
      <div
        className={`px-4 py-1 text-sm font-bold tracking-[0.3em] uppercase ${status === "warning" || status === "critical" ? "warning-pulse" : ""}`}
        style={{
          fontFamily: "'Oswald', sans-serif",
          backgroundColor: color,
          color: status === "warning" ? "#1C2526" : "#fff",
          clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
        }}
      >
        {label}
      </div>

      {/* Big score number */}
      <div className="relative">
        <span
          className="text-[120px] md:text-[180px] leading-none font-bold"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: color,
            textShadow: `0 0 40px ${color}44, 0 0 80px ${color}22`,
          }}
        >
          {displayScore}
        </span>
        <span
          className="absolute -right-8 top-4 text-2xl md:text-3xl font-bold opacity-60"
          style={{ fontFamily: "'Oswald', sans-serif", color: color }}
        >
          /100
        </span>
      </div>

      {/* Score bar */}
      <div className="w-full max-w-md">
        <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: "#2a2f30" }}>
          <div
            className="h-full rounded-full score-fill-animate"
            style={{
              width: `${score}%`,
              background: `linear-gradient(90deg, ${color}, ${color}cc)`,
              boxShadow: `0 0 12px ${color}66`,
            }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs opacity-50" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span>0</span>
          <span style={{ color: "#A52019" }}>CRITICAL</span>
          <span style={{ color: "#F5A623" }}>WARNING</span>
          <span style={{ color: "#A5D46A" }}>CAUTION</span>
          <span style={{ color: "#4CAF50" }}>STRONG</span>
          <span>100</span>
        </div>
      </div>

      {/* Formula reminder */}
      <p className="text-xs opacity-40 mt-2 text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        Score = 40% recovery actions + 30% emotional regulation + 30% ridiculous choices avoided
      </p>
    </div>
  );
}
