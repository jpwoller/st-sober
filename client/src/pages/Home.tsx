/*
 * ST.sober — Main Dashboard Page
 * DESIGN: ESPN sports broadcast aesthetic with Taco Time brand colors
 * Dark charcoal background, diagonal section dividers, bold typography
 * Sports-style stat cards, scrolling ticker, breaking news alerts
 */

import CategoryBreakdown from "@/components/CategoryBreakdown";
import HeuristicCard from "@/components/HeuristicCard";
import HeuristicTable from "@/components/HeuristicTable";
import ScoreGauge from "@/components/ScoreGauge";
import Ticker from "@/components/Ticker";
import TrendChart from "@/components/TrendChart";
import WarningBanner from "@/components/WarningBanner";
import { heuristics } from "@/lib/sobrietyData";
import { Activity, BarChart3, Shield } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663324464762/WxsCQaJXZtNftXfVci2dLV/hero-banner-9AkxdUES7wSxTbDnf3AayJ.webp";
const STATS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663324464762/WxsCQaJXZtNftXfVci2dLV/stats-bg-YduDLSZqZfCb7nUZChEEAQ.webp";
const WARNING_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663324464762/WxsCQaJXZtNftXfVci2dLV/warning-alert-4g27uPM2PXkiwDjNZrLrjV.webp";
const MASCOT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663324464762/WxsCQaJXZtNftXfVci2dLV/cactus-mascot-dfgupipeTUPnXHpBVzZEfe.webp";

export default function Home() {
  const recoveryHeuristics = heuristics.filter((h) => h.category === "recovery");
  const emotionalHeuristics = heuristics.filter((h) => h.category === "emotional");
  const ridiculousHeuristics = heuristics.filter((h) => h.category === "ridiculous");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141919" }}>
      {/* === TICKER === */}
      <Ticker />

      {/* === HERO SECTION === */}
      <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(20,25,25,0.4) 0%, rgba(20,25,25,0.85) 70%, rgba(20,25,25,1) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 container pt-12 pb-16 flex flex-col lg:flex-row items-center gap-8">
          {/* Left: Branding + Score */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo / Title */}
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div
                  className="px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    backgroundColor: "#F5A623",
                    color: "#1C2526",
                    clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0 100%)",
                  }}
                >
                  LIVE DASHBOARD
                </div>
                <span
                  className="text-[10px] tracking-wider opacity-40"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  SEASON 2025-26
                </span>
              </div>

              <h1
                className="text-6xl md:text-8xl font-bold leading-none tracking-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span style={{ color: "#4CAF50" }}>ST</span>
                <span style={{ color: "#F5A623" }}>.</span>
                <span style={{ color: "#ffffffee" }}>SOBER</span>
              </h1>
              <p
                className="text-lg mt-3 opacity-60 max-w-lg"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Real-time sobriety analytics powered by 10 semi-scientific heuristics.
                Because recovery deserves a scoreboard.
              </p>
            </div>

            {/* Score Gauge */}
            <ScoreGauge />
          </div>

          {/* Right: Mascot */}
          <div className="hidden lg:block shrink-0">
            <img
              src={MASCOT}
              alt="Sobriety Referee Cactus"
              className="w-64 h-64 object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 30px rgba(245,166,35,0.2))" }}
            />
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "#141919",
            clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </section>

      {/* === WARNING BANNER === */}
      <WarningBanner />

      {/* === TREND + CATEGORY SECTION === */}
      <section className="relative py-16 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-20">
          <img src={STATS_BG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(20,25,25,0.92)" }} />

        <div className="relative z-10 container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trend Chart */}
            <div className="rounded-sm p-6" style={{ backgroundColor: "rgba(28,37,38,0.8)", border: "1px solid #ffffff08" }}>
              <TrendChart />
            </div>

            {/* Category Breakdown */}
            <div className="rounded-sm p-6" style={{ backgroundColor: "rgba(28,37,38,0.8)", border: "1px solid #ffffff08" }}>
              <CategoryBreakdown />
            </div>
          </div>
        </div>
      </section>

      {/* === HEURISTIC CARDS SECTION === */}
      <section className="relative py-16">
        {/* Section header with diagonal accent */}
        <div className="container mb-10">
          <div className="flex items-center gap-4">
            <div
              className="w-1.5 h-12"
              style={{
                background: "linear-gradient(180deg, #4CAF50, #F5A623)",
              }}
            />
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight uppercase"
                style={{ fontFamily: "'Oswald', sans-serif", color: "#ffffffee" }}
              >
                The 10 Heuristics
              </h2>
              <p className="text-sm opacity-40 mt-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Individual metric breakdown — hover for details
              </p>
            </div>
          </div>
        </div>

        {/* Recovery Actions (40%) */}
        <div className="container mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4" style={{ color: "#4CAF50" }} />
            <h3
              className="text-sm font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#4CAF50" }}
            >
              Real Recovery Actions
            </h3>
            <span
              className="text-[10px] px-2 py-0.5 rounded-sm"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                backgroundColor: "#4CAF5020",
                color: "#4CAF50",
              }}
            >
              40% weight
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recoveryHeuristics.map((h, i) => (
              <HeuristicCard key={h.id} heuristic={h} index={i} />
            ))}
          </div>
        </div>

        {/* Emotional Regulation (30%) */}
        <div className="container mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4" style={{ color: "#F5A623" }} />
            <h3
              className="text-sm font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#F5A623" }}
            >
              Emotional Regulation
            </h3>
            <span
              className="text-[10px] px-2 py-0.5 rounded-sm"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                backgroundColor: "#F5A62320",
                color: "#F5A623",
              }}
            >
              30% weight
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emotionalHeuristics.map((h, i) => (
              <HeuristicCard key={h.id} heuristic={h} index={i + 3} />
            ))}
          </div>
        </div>

        {/* Ridiculous Life Choices (30%) */}
        <div className="container mb-10">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4" style={{ color: "#A5D46A" }} />
            <h3
              className="text-sm font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#A5D46A" }}
            >
              Ridiculous Life Choices Avoided
            </h3>
            <span
              className="text-[10px] px-2 py-0.5 rounded-sm"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                backgroundColor: "#A5D46A20",
                color: "#A5D46A",
              }}
            >
              30% weight
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ridiculousHeuristics.map((h, i) => (
              <HeuristicCard key={h.id} heuristic={h} index={i + 7} />
            ))}
          </div>
        </div>
      </section>

      {/* === DIAGONAL DIVIDER === */}
      <div
        className="h-20 -mt-4"
        style={{
          background: "linear-gradient(135deg, #A52019 0%, #7a1812 100%)",
          clipPath: "polygon(0 40%, 100% 0, 100% 60%, 0 100%)",
        }}
      />

      {/* === FULL STATS TABLE === */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={WARNING_BG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(20,25,25,0.95)" }} />

        <div className="relative z-10 container">
          <HeuristicTable />
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="py-8" style={{ backgroundColor: "#0f1313", borderTop: "1px solid #ffffff08" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span style={{ color: "#4CAF50" }}>ST</span>
                <span style={{ color: "#F5A623" }}>.</span>
                <span style={{ color: "#ffffff88" }}>SOBER</span>
              </h2>
              <span className="text-xs opacity-30" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                v1.0 — Season 2025-26
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs opacity-30" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Score = 40% real recovery actions + 30% emotional regulation + 30% ridiculous life choices avoided
              </p>
              <p className="text-[10px] opacity-20 mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Powered by caffeine, faith, and questionable home improvement decisions
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
