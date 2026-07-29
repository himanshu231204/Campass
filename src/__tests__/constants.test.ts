import { colors, fonts, spacing, radius, shadows, iconSize } from "@/constants/theme"
import { layout } from "@/constants/layout"
import { en } from "@/translation/en"

describe("Theme Colors", () => {
  it("should export all required colors", () => {
    expect(colors.primary).toBe("#1e3a8a")
    expect(colors.primaryDark).toBe("#1e2a63")
    expect(colors.primaryLight).toBe("#3b82f6")
    expect(colors.primaryMid).toBe("#2563eb")
    expect(colors.white).toBe("#ffffff")
    expect(colors.black).toBe("#000000")
    expect(colors.background).toBe("#ffffff")
    expect(colors.success).toBe("#0E9F6E")
    expect(colors.error).toBe("#EF4444")
    expect(colors.warning).toBe("#F97316")
  })

  it("should export screen-specific colors", () => {
    expect(colors.primaryNavy).toBe("#1B2A6B")
    expect(colors.accentBlue).toBe("#3B4FD6")
    expect(colors.deepPurple).toBe("#3B1E8F")
    expect(colors.accentOrange).toBe("#F26522")
    expect(colors.bgScreen).toBe("#EEF1FB")
    expect(colors.textDarkNavy).toBe("#1F2A44")
    expect(colors.textBody).toBe("#334155")
    expect(colors.textMutedLight).toBe("#9AA2B5")
  })

  it("should export gradients without circular reference", () => {
    expect(Array.isArray(colors.gradientHeader)).toBe(true)
    expect(colors.gradientHeader).toHaveLength(2)
    expect(typeof colors.gradientHeader[0]).toBe("string")
    expect(typeof colors.gradientHeader[1]).toBe("string")

    expect(Array.isArray(colors.gradientNavy)).toBe(true)
    expect(colors.gradientNavy[0]).toBe("#1B2A6B")
    expect(colors.gradientNavy[1]).toBe("#16225A")
  })

  it("should have whiteTransparent function", () => {
    expect(typeof colors.whiteTransparent).toBe("function")
    expect(colors.whiteTransparent(0.5)).toBe("rgba(255,255,255,0.5)")
    expect(colors.whiteTransparent(0)).toBe("rgba(255,255,255,0)")
    expect(colors.whiteTransparent(1)).toBe("rgba(255,255,255,1)")
  })
})

describe("Theme Fonts", () => {
  it("should export font sizes", () => {
    expect(fonts.xs).toBe(11)
    expect(fonts.sm).toBe(12)
    expect(fonts.md).toBe(13)
    expect(fonts.base).toBe(14)
    expect(fonts.lg).toBe(15)
    expect(fonts.xl).toBe(17)
    expect(fonts["2xl"]).toBe(18)
    expect(fonts["3xl"]).toBe(20)
    expect(fonts["4xl"]).toBe(22)
    expect(fonts["5xl"]).toBe(24)
  })

  it("should export font weights", () => {
    expect(fonts.weight.normal).toBe("400")
    expect(fonts.weight.bold).toBe("700")
    expect(fonts.weight.extrabold).toBe("800")
  })
})

describe("Theme Spacing", () => {
  it("should export spacing values", () => {
    expect(spacing.xs).toBe(4)
    expect(spacing.sm).toBe(8)
    expect(spacing.md).toBe(10)
    expect(spacing.lg).toBe(14)
    expect(spacing.xl).toBe(16)
    expect(spacing["2xl"]).toBe(18)
    expect(spacing["3xl"]).toBe(20)
    expect(spacing["8xl"]).toBe(40)
  })

  it("should export input/button heights", () => {
    expect(spacing.inputHeight).toBe(52)
    expect(spacing.buttonHeight).toBe(54)
    expect(spacing.buttonHeightLg).toBe(56)
  })
})

describe("Theme Radius", () => {
  it("should export radius values", () => {
    expect(radius.sm).toBe(4)
    expect(radius.md).toBe(12)
    expect(radius.lg).toBe(16)
    expect(radius.xl).toBe(18)
    expect(radius["2xl"]).toBe(20)
    expect(radius.full).toBe(30)
    expect(radius.pill).toBe(24)
  })
})

describe("Theme Shadows", () => {
  it("should export card shadow", () => {
    expect(shadows.card).toBeDefined()
    expect(shadows.card.shadowColor).toBe("#000")
    expect(shadows.card.shadowOpacity).toBe(0.05)
    expect(shadows.card.shadowRadius).toBe(10)
    expect(shadows.card.elevation).toBe(2)
  })

  it("should export button shadow", () => {
    expect(shadows.button).toBeDefined()
    expect(shadows.button.shadowColor).toBe("#1e2a63")
    expect(shadows.button.elevation).toBe(6)
  })
})

describe("Theme Icon Size", () => {
  it("should export icon size values", () => {
    expect(iconSize.sm).toBe(16)
    expect(iconSize.md).toBe(18)
    expect(iconSize.lg).toBe(20)
    expect(iconSize.xl).toBe(24)
    expect(iconSize["2xl"]).toBe(30)
    expect(iconSize["3xl"]).toBe(40)
  })
})

describe("Layout Constants", () => {
  it("should export screen dimensions", () => {
    expect(typeof layout.screenWidth).toBe("number")
    expect(typeof layout.screenHeight).toBe("number")
    expect(layout.screenWidth).toBeGreaterThan(0)
    expect(layout.screenHeight).toBeGreaterThan(0)
  })

  it("should export padding", () => {
    expect(layout.padding.screen).toBe(20)
    expect(layout.padding.screenLg).toBe(24)
    expect(layout.padding.screenXl).toBe(28)
  })

  it("should export header height", () => {
    expect(layout.header.height).toBe(90)
  })

  it("should export avatar sizes", () => {
    expect(layout.avatar.size).toBe(40)
    expect(layout.avatar.radius).toBe(20)
    expect(layout.avatar.large).toBe(84)
    expect(layout.avatar.largeRadius).toBe(42)
  })

  it("should export icon button sizes", () => {
    expect(layout.iconButton.size).toBe(40)
    expect(layout.iconButton.radius).toBe(20)
    expect(layout.iconButton.small).toBe(34)
    expect(layout.iconButton.smallRadius).toBe(17)
  })

  it("should export input heights", () => {
    expect(layout.input.height).toBe(56)
    expect(layout.input.heightSm).toBe(52)
  })
})

describe("Translation Keys", () => {
  it("should export auth translations", () => {
    expect(typeof en.auth.welcomeBack).toBe("string")
    expect(typeof en.auth.password).toBe("string")
    expect(typeof en.auth.signIn).toBe("string")
    expect(en.auth.signIn).toBe("Sign In")
  })

  it("should export tabs translations", () => {
    expect(en.tabs.home).toBe("Home")
    expect(en.tabs.explore).toBe("Explore")
    expect(en.tabs.trips).toBe("Trips")
  })

  it("should export home translations", () => {
    expect(typeof en.home.welcome).toBe("string")
    expect(typeof en.home.planWithAI).toBe("string")
    expect(typeof en.home.quickBook).toBe("string")
  })

  it("should export profile menu translations", () => {
    expect(en.profile.menu.travelGuide).toBe("Travel Guide")
    expect(en.profile.menu.travelDocuments).toBe("Travel Documents")
    expect(en.profile.menu.emergencySOS).toBe("Emergency SOS")
  })

  it("should export all required feature sections", () => {
    const sections = ["auth", "tabs", "home", "explore", "exploreDetails", "train", "flights", "trips", "tripDetail", "budgetTracker", "expenses", "profile", "settings", "safety", "common"]
    sections.forEach((section) => {
      expect((en as Record<string, unknown>)[section]).toBeDefined()
    })
  })
})
