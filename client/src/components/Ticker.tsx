/*
 * DESIGN: Sports broadcast scrolling ticker
 * Taco Time Gold (#F5A623) background with dark text
 * Continuous scroll animation, ESPN-style lower-third
 */

import { tickerMessages } from "@/lib/sobrietyData";
import { AlertTriangle } from "lucide-react";

export default function Ticker() {
  const doubled = [...tickerMessages, ...tickerMessages];

  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: "#F5A623" }}>
      <div className="flex items-center">
        {/* Breaking label */}
        <div
          className="breaking-flash flex items-center gap-1.5 px-4 py-2 shrink-0 z-10"
          style={{ backgroundColor: "#A52019" }}
        >
          <AlertTriangle className="w-4 h-4 text-white" />
          <span
            className="text-white text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            ALERT
          </span>
        </div>

        {/* Scrolling content */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-animate flex whitespace-nowrap">
            {doubled.map((msg, i) => (
              <span
                key={i}
                className="inline-flex items-center px-8 py-2 text-sm font-semibold"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: "#1C2526",
                }}
              >
                <span className="inline-block w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#A52019" }} />
                {msg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
