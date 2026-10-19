import type { DesignConfig } from "auto-design";

/**
 * The source of truth for this design system. Change a value here, run
 * `npx auto-design build`, and every token, component and agent file updates.
 * Every field is checked: values outside the system's options fail the build.
 */
export default {
  name: "northwind",
  displayName: "Northwind",
  description: "Project planning with friends",
  personality: {
    energy: 0.89,
    warmth: 0.87,
    novelty: 0.73
  },
  texture: "technical",
  color: {
    brand: "oklch(0.400 0.068 63.2)",
    neutral: "warm",
    modes: "both",
    defaultMode: "light"
  },
  type: {
    sans: {
      family: "Instrument Sans Variable",
      fallback: [
        "Instrument Sans",
        "ui-sans-serif",
        "system-ui",
        "sans-serif"
      ],
      weights: [
        400,
        500,
        600
      ],
      package: "@fontsource-variable/instrument-sans",
      license: "OFL-1.1"
    },
    mono: {
      family: "JetBrains Mono Variable",
      fallback: [
        "JetBrains Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "monospace"
      ],
      weights: [
        400,
        500
      ],
      package: "@fontsource-variable/jetbrains-mono",
      license: "OFL-1.1"
    },
    baseSize: 16,
    ratio: 1.25,
    display: {
      family: "Instrument Serif",
      fallback: [
        "Instrument Serif",
        "ui-serif",
        "Georgia",
        "serif"
      ],
      weights: [
        400
      ],
      package: "@fontsource/instrument-serif",
      license: "OFL-1.1"
    }
  },
  shape: {
    radius: 8
  },
  density: "compact",
  motion: "expressive",
  surfaces: [
    "web-app",
    "marketing",
    "code",
    "chat",
    "messaging",
    "mcp-apps"
  ],
  voice: {
    uiCase: "sentence",
    emoji: "never",
    tone: "Considered and plain-spoken. Short sentences, precise numbers, no hype."
  },
  private: false
} satisfies DesignConfig;
