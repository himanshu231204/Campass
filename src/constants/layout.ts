import { Dimensions } from "react-native"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

export const layout = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,

  padding: {
    screen: 20,
    screenLg: 24,
    screenXl: 28,
  },

  card: {
    gap: 14,
    marginHorizontal: 20,
  },

  header: {
    height: 90,
  },

  tab: {
    barHeight: 88,
    iconSize: 24,
  },

  avatar: {
    size: 40,
    radius: 20,
    large: 84,
    largeRadius: 42,
  },

  iconButton: {
    size: 40,
    radius: 20,
    small: 34,
    smallRadius: 17,
  },

  quickItem: {
    width: 62,
  },

  quickIcon: {
    size: 58,
    radius: 16,
  },

  popularCard: {
    width: 170,
  },

  popularImage: {
    height: 110,
  },

  askAiCircle: {
    size: 56,
    radius: 28,
  },

  input: {
    height: 56,
    heightSm: 52,
  },

  tabBar: {
    paddingVertical: 10,
    paddingBottom: 18,
  },

  button: {
    heightLg: 58,
  },

  statIcon: {
    size: 44,
    radius: 22,
  },

  divider: {
    height: 6,
    radius: 3,
  },
}

export function scaleFont(size: number): number {
  return Math.round((SCREEN_WIDTH / 412) * size)
}
