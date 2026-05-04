/*
 * DESIGN: Sports stats table — ESPN box score style
 * Dark rows with alternating subtle stripes
 * Taco Time colors for status indicators
 */

import { heuristics, MONTHS, getScoreColor, getScoreStatus, SCORE_THRESHOLDS } from "@/lib/sobrietyData";

export default function HeuristicTable() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1" style={{ backgroundColor: "#A5D46A66" }} />
        <h3
          className="text-lg font-bold tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Oswald', sans-serif", color: "#A5D46A" }}
        >
          Full Season Stats
        </h3>
        <div className="h-px flex-1" style={{ backgroundColor: "#A5D46A66" }} />
      </div>

      <table className="w-full text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
        <thead>
          <tr style={{ backgroundColor: "#1a1f20" }}>
            <th
              className="text-left py-3 px-3 text-xs font-bold tracking-wider uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#F5A623" }}
            >
              #
            </th>
            <th
              className="text-left py-3 px-3 text-xs font-bold tracking-wider uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#F5A623" }}
            >
              Heuristic
            </th>
            {MONTHS.map((m) => (
              <th
                key={m}
                className="text-center py-3 px-2 text-xs font-bold tracking-wider uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "#ffffff66" }}
              >
                {m}
              </th>
            ))}
            <th
              className="text-center py-3 px-3 text-xs font-bold tracking-wider uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#F5A623" }}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {heuristics.map((h, idx) => {
            const status = getScoreStatus(h.monthlyScores[5]);
            const statusLabel = SCORE_THRESHOLDS[status].label;
            const statusColor = getScoreColor(h.monthlyScores[5]);

            return (
              <tr
                key={h.id}
                style={{
                  backgroundColor: idx % 2 === 0 ? "#1C2526" : "#1f2a2b",
                }}
                className="hover:bg-[#243030] transition-colors"
              >
                <td className="py-2.5 px-3 font-mono text-xs opacity-40">{h.id}</td>
                <td className="py-2.5 px-3">
                  <div>
                    <span className="font-semibold text-white/90">{h.shortName}</span>
                    <span className="text-[10px] ml-2 opacity-30 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {h.category}
                    </span>
                  </div>
                </td>
                {h.monthlyScores.map((score, i) => (
                  <td key={i} className="py-2.5 px-2 text-center">
                    <span
                      className="font-bold text-sm"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        color: getScoreColor(score),
                        fontSize: "16px",
                      }}
                    >
                      {score}
                    </span>
                  </td>
                ))}
                <td className="py-2.5 px-3 text-center">
                  <span
                    className="text-[10px] font-bold tracking-wider px-2 py-0.5 uppercase inline-block"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      backgroundColor: `${statusColor}20`,
                      color: statusColor,
                      borderRadius: "2px",
                    }}
                  >
                    {statusLabel}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
