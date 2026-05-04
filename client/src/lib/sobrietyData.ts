// ST.sober — Synthetic Sobriety Data
// 6-month downward trend reaching "warning" levels
// Score = 40% real recovery actions + 30% emotional regulation + 30% ridiculous life choices avoided

export interface HeuristicData {
  id: number;
  name: string;
  shortName: string;
  icon: string;
  category: "recovery" | "emotional" | "ridiculous";
  weight: number;
  description: string;
  jokeAngle: string;
  unit: string;
  goodDirection: "up" | "down";
  monthlyScores: number[]; // 6 months, index 0 = oldest (Nov), index 5 = newest (Apr)
  monthlyRaw: (number | string)[];
  currentStatus: "good" | "caution" | "warning" | "critical";
}

export const MONTHS = ["Nov '25", "Dec '25", "Jan '26", "Feb '26", "Mar '26", "Apr '26"];

export const SCORE_THRESHOLDS = {
  good: { min: 75, color: "#4CAF50", label: "STRONG", bgClass: "bg-tt-green" },
  caution: { min: 55, color: "#A5D46A", label: "CAUTION", bgClass: "bg-tt-green-light" },
  warning: { min: 35, color: "#F5A623", label: "WARNING", bgClass: "bg-tt-gold" },
  critical: { min: 0, color: "#A52019", label: "CRITICAL", bgClass: "bg-tt-red" },
};

export const heuristics: HeuristicData[] = [
  {
    id: 1,
    name: "Meetings Attended This Week",
    shortName: "Meetings",
    icon: "Users",
    category: "recovery",
    weight: 0.15,
    description: "Classic recovery metric. More meetings = higher score.",
    jokeAngle: "Unless he starts chairing every meeting unsolicited.",
    unit: "meetings/week",
    goodDirection: "up",
    monthlyScores: [88, 82, 74, 62, 48, 38],
    monthlyRaw: ["5-6", "4-5", "3-4", "2-3", "1-2", "0-1"],
    currentStatus: "warning",
  },
  {
    id: 2,
    name: "Sponsor Contact Frequency",
    shortName: "Sponsor Calls",
    icon: "Phone",
    category: "recovery",
    weight: 0.1,
    description: "Points for calling sponsor BEFORE questionable decisions.",
    jokeAngle: "Not after. Definitely not during.",
    unit: "calls/week",
    goodDirection: "up",
    monthlyScores: [85, 78, 70, 55, 42, 35],
    monthlyRaw: ["4x", "3x", "2-3x", "1-2x", "1x", "0-1x"],
    currentStatus: "warning",
  },
  {
    id: 3,
    name: "Number of Sponsees",
    shortName: "Sponsees",
    icon: "HeartHandshake",
    category: "recovery",
    weight: 0.08,
    description: "Shows service and responsibility.",
    jokeAngle: 'Deduct points if he calls them "my recovery portfolio."',
    unit: "active sponsees",
    goodDirection: "up",
    monthlyScores: [80, 80, 72, 65, 55, 42],
    monthlyRaw: [3, 3, 2, 2, 1, 1],
    currentStatus: "warning",
  },
  {
    id: 4,
    name: "Wordle Win Rate",
    shortName: "Wordle",
    icon: "Grid3x3",
    category: "emotional",
    weight: 0.07,
    description: "Mental clarity indicator. Bonus for 3 guesses or less.",
    jokeAngle: "Severe penalty for posting results before 7 a.m.",
    unit: "avg guesses",
    goodDirection: "down",
    monthlyScores: [90, 85, 78, 68, 52, 40],
    monthlyRaw: ["3.1", "3.4", "3.8", "4.2", "4.8", "5.3"],
    currentStatus: "warning",
  },
  {
    id: 5,
    name: "Coffee-to-Higher-Power Ratio",
    shortName: "Coffee:God",
    icon: "Coffee",
    category: "emotional",
    weight: 0.08,
    description: "Recovery runs on caffeine and faith.",
    jokeAngle: '"Spiritual awakening or just jitters?"',
    unit: "cups:prayers",
    goodDirection: "down",
    monthlyScores: [82, 75, 68, 58, 45, 33],
    monthlyRaw: ["3:4", "4:3", "5:3", "6:2", "7:2", "8:1"],
    currentStatus: "critical",
  },
  {
    id: 6,
    name: "Amends Avoidance Index",
    shortName: "Amends Dodge",
    icon: "ShieldAlert",
    category: "emotional",
    weight: 0.08,
    description: 'How many people he says he\'s "totally going to call soon."',
    jokeAngle: "Lower avoidance = higher sobriety score.",
    unit: "avoided amends",
    goodDirection: "down",
    monthlyScores: [78, 72, 65, 52, 40, 30],
    monthlyRaw: [2, 3, 4, 6, 8, 11],
    currentStatus: "critical",
  },
  {
    id: 7,
    name: "Parking-Lot Wisdom Score",
    shortName: "Lot Wisdom",
    icon: "MessageCircle",
    category: "ridiculous",
    weight: 0.1,
    description: "How long he stands outside giving deep advice nobody requested.",
    jokeAngle: "Recovery quality measured in unsolicited parking lot minutes.",
    unit: "min after meeting",
    goodDirection: "up",
    monthlyScores: [75, 70, 62, 55, 48, 38],
    monthlyRaw: ["45min", "40min", "30min", "25min", "15min", "5min"],
    currentStatus: "warning",
  },
  {
    id: 8,
    name: "Questionable Home-Improvement Decisions",
    shortName: "Home Chaos",
    icon: "Hammer",
    category: "ridiculous",
    weight: 0.1,
    description: "Putting soil where the Tesla parks.",
    jokeAngle: "Score drops when landscaping becomes a spiritual crisis.",
    unit: "incidents/month",
    goodDirection: "down",
    monthlyScores: [85, 78, 65, 52, 38, 28],
    monthlyRaw: [0, 1, 2, 3, 5, 7],
    currentStatus: "critical",
  },
  {
    id: 9,
    name: "Group Chat Serenity Level",
    shortName: "Chat Serenity",
    icon: "MessageSquare",
    category: "emotional",
    weight: 0.1,
    description: "Dramatic texts, all-caps gratitude lists, memes as emotional processing.",
    jokeAngle: "Deduct points for sending memes as emotional processing.",
    unit: "serenity index",
    goodDirection: "up",
    monthlyScores: [80, 72, 60, 50, 42, 32],
    monthlyRaw: ["Zen", "Chill", "Chatty", "Spicy", "ALL CAPS", "MEME STORM"],
    currentStatus: "critical",
  },
  {
    id: 10,
    name: "HALT Compliance",
    shortName: "HALT Score",
    icon: "Octagon",
    category: "ridiculous",
    weight: 0.14,
    description: "Avoids big decisions when Hungry, Angry, Lonely, or Tired.",
    jokeAngle: "Double penalty if all four AND ordering tools online.",
    unit: "compliance %",
    goodDirection: "up",
    monthlyScores: [82, 75, 65, 52, 40, 30],
    monthlyRaw: ["92%", "85%", "72%", "58%", "40%", "28%"],
    currentStatus: "critical",
  },
];

// Calculate overall composite scores per month
export function getCompositeScores(): number[] {
  return MONTHS.map((_, monthIdx) => {
    let totalWeight = 0;
    let weightedSum = 0;
    heuristics.forEach((h) => {
      weightedSum += h.monthlyScores[monthIdx] * h.weight;
      totalWeight += h.weight;
    });
    return Math.round(weightedSum / totalWeight);
  });
}

// Get current overall score (latest month)
export function getCurrentScore(): number {
  return getCompositeScores()[5];
}

// Get score status
export function getScoreStatus(score: number): keyof typeof SCORE_THRESHOLDS {
  if (score >= SCORE_THRESHOLDS.good.min) return "good";
  if (score >= SCORE_THRESHOLDS.caution.min) return "caution";
  if (score >= SCORE_THRESHOLDS.warning.min) return "warning";
  return "critical";
}

// Get score color
export function getScoreColor(score: number): string {
  const status = getScoreStatus(score);
  return SCORE_THRESHOLDS[status].color;
}

// Category breakdown for current month
export function getCategoryBreakdown() {
  const categories = {
    recovery: { label: "Real Recovery Actions", weight: 0.4, score: 0, totalWeight: 0 },
    emotional: { label: "Emotional Regulation", weight: 0.3, score: 0, totalWeight: 0 },
    ridiculous: { label: "Ridiculous Life Choices Avoided", weight: 0.3, score: 0, totalWeight: 0 },
  };

  heuristics.forEach((h) => {
    const cat = categories[h.category];
    cat.score += h.monthlyScores[5] * h.weight;
    cat.totalWeight += h.weight;
  });

  return Object.entries(categories).map(([key, cat]) => ({
    key,
    label: cat.label,
    weight: cat.weight,
    score: Math.round(cat.score / cat.totalWeight),
  }));
}

// Ticker messages
export const tickerMessages = [
  "BREAKING: ST's Wordle average hits 5.3 guesses — mental clarity at all-time low",
  "ALERT: Coffee-to-Higher-Power ratio now 8:1 — spiritual awakening or just jitters?",
  "UPDATE: 11 people still waiting for amends calls — 'I'll get to it' streak continues",
  "DEVELOPING: Home improvement incidents up 600% — Tesla now parked on soil",
  "FLASH: Group chat serenity level downgraded to MEME STORM",
  "URGENT: HALT compliance at 28% — ordered a table saw while hungry, angry, lonely, AND tired",
  "REPORT: Parking lot wisdom sessions down to 5 minutes — who will give unsolicited advice now?",
  "LIVE: Sponsor contact frequency approaching zero — voicemail box is full anyway",
  "ANALYSIS: Meeting attendance drops to 0-1 per week — 'I'll go next week' on 24-week streak",
  "EXCLUSIVE: Sponsee count at 1 — last one reportedly 'doing their own thing now'",
];
