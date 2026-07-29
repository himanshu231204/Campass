export const colors = {
  primary: "#1e3a8a",
  primaryDark: "#1e2a63",
  primaryLight: "#3b82f6",
  primaryMid: "#2563eb",

  primaryNavy: "#1B2A6B",
  primaryNavyDark: "#16225A",
  primaryNavyLight: "#2E4CA0",
  accentBlue: "#3B4FD6",
  deepPurple: "#3B1E8F",
  accentOrange: "#F26522",
  accentAmber: "#F59E0B",

  bgScreen: "#EEF1FB",
  bgScreenAlt: "#E9EBEF",
  bgLightBlue: "#EAF0FF",
  bgInput: "#F3F6FC",
  bgRedLight: "#FDECEC",
  bgOrangeLight: "#FEEDE3",
  bgGreenLight: "#E4F6EE",

  textDarkNavy: "#1F2A44",
  textBody: "#334155",
  textBodySecondary: "#475569",
  textMutedLight: "#9AA2B5",
  textMutedLabel: "#8A93A8",

  borderLightGray: "#E1E5EE",
  borderBottomNav: "#EEF1F6",

  gradientPrimary: ["#1e3a8a", "#243b7a"] as [string, string],
  gradientButton: ["#1e2a63", "#2a3f8f"] as [string, string],
  gradientHeader: ["#1E3A8A", "#1E40AF"] as [string, string],
  gradientNavy: ["#1B2A6B", "#16225A"] as [string, string],
  gradientNavyLight: ["#1B2A6B", "#2E4CA0"] as [string, string],
  gradientBlueSky: ["#1E40AF", "#0EA5E9"] as [string, string],
  gradientAmberOrange: ["#F5A623", "#F26522"] as [string, string],

  background: "#ffffff",
  backgroundMuted: "#EEF2F9",
  backgroundInput: "#f5f8fd",

  text: "#111827",
  textDark: "#0F172A",
  textSecondary: "#374151",
  textMuted: "#9ca3af",
  textLight: "#CBD5E1",
  textGray: "#94A3B8",
  textSub: "#64748B",
  textLink: "#3b82f6",

  border: "#e5e7eb",
  borderLight: "#eef2f9",
  borderMuted: "#f1f1f4",

  iconPrimary: "#3b82f6",
  iconNavy: "#1B2A6B",
  iconAccentBlue: "#3B4FD6",
  iconOrange: "#F26522",
  iconDeepPurple: "#3B1E8F",

  white: "#ffffff",
  whiteTransparent: (opacity: number) => `rgba(255,255,255,${opacity})`,
  black: "#000000",

  success: "#0E9F6E",
  successLight: "#0E9E6E",
  warning: "#F97316",
  error: "#EF4444",
  errorLight: "#E5484D",
  sos: ["#F97316", "#EF4444"] as [string, string],

  purple: "#6D28D9",
  indigo: "#4F46E5",
  switchTrackOff: "#D5D9E4",
}

export const fonts = {
  xs: 11,
  sm: 12,
  md: 13,
  base: 14,
  lg: 15,
  xl: 17,
  "2xl": 18,
  "3xl": 20,
  "4xl": 22,
  "5xl": 24,
  "6xl": 34,

  weight: {
    normal: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
    extrabold: "800" as const,
  },
}

export const spacing = {
  xs: 4,
  sm: 8,
  smMd: 12,
  md: 10,
  lg: 14,
  xl: 16,
  "2xl": 18,
  "3xl": 20,
  "4xl": 22,
  "5xl": 24,
  "6xl": 28,
  "7xl": 30,
  "8xl": 40,
  "9xl": 48,
  "10xl": 100,

  inputHeight: 52,
  buttonHeight: 54,
  buttonHeightLg: 56,
}

export const radius = {
  sm: 4,
  md: 12,
  lg: 16,
  xl: 18,
  "2xl": 20,
  full: 30,
  button: 16,
  pill: 24,
}

export const shadows = {
  card: {
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  button: {
    shadowColor: "#1e2a63",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
}

export const iconSize = {
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  "2xl": 30,
  "3xl": 40,
  "4xl": 24,
  detail: 22,
}
