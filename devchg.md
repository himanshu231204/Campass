# Dev Changes Log

## 1. Hardcoded Values → Centralized Constants

### Problem
100+ hardcoded hex colors, 50+ pixel dimensions, 60+ spacing values, 68+ border radii, inline shadows, and hardcoded strings scattered across 19 files.

### Solution
Created centralized constant files and refactored all screens:

**`src/constants/theme.ts`** — Colors, fonts, spacing, radius, shadows, iconSize
- Added 25+ new colors (`primaryNavy`, `accentBlue`, `bgScreen`, `textDarkNavy`, `switchTrackOff`, etc.)
- Added 4 new gradients (`gradientBlueSky`, `gradientAmberOrange`, etc.)
- Added new spacing: `smMd`(12), `9xl`(48), `10xl`(100)
- Added new fonts: `6xl`(34)
- Added new iconSize: `detail`(22)
- Added `switchTrackOff` color for Settings toggles

**`src/constants/layout.ts`** — Dimensions, padding, header/tab/avatar constants
- Extended with `iconButton.small`, `avatar.large`, `statIcon`, `divider`, etc.

**`src/translation/en.ts`** — All UI strings
- Extended with `profile.menu.travelDocuments`, `profile.menu.emergencySOS`, `safety` section

### Files Refactored
- All 12 legacy screen files
- All 7 `src/app/` route files (auth screens, tabs layout)
- 0 hardcoded hex colors remain in styles (only data-driven gradient pairs remain)

---

## 2. Screen File Reorganization

### Problem
Screen files were scattered across `screens/` (root) and `src/screens/` with inconsistent import paths.

### Solution
| Step | Action |
|------|--------|
| 1 | Moved 12 files from root `screens/` → `src/screens/` |
| 2 | Deleted old root `screens/` directory |
| 3 | Moved from `src/screens/` → `src/app/` with per-screen folders |
| 4 | Deleted old `src/screens/` directory |
| 5 | Renamed `*Screen.tsx` → `index.tsx` for clean expo-router routes |

### Final Structure
```
src/app/
  home/index.tsx           → /home
  explore/index.tsx        → /explore
  explore/details.tsx      → /explore/details
  train/index.tsx          → /train
  book-train/index.tsx     → /book-train
  flights/index.tsx        → /flights
  trips/index.tsx          → /trips
  trips/details.tsx        → /trips/details
  budget/index.tsx         → /budget
  budget/expenses.tsx      → /budget/expenses
  profile/index.tsx        → /profile
  profile/settings.tsx     → /profile/settings
  auth/                    → /auth/*
```

---

## 3. Navigation Wiring

### Problem
All screens were standalone with no navigation between them. TouchableOpacity elements had no `onPress` handlers.

### Solution
- Added `useRouter` from `expo-router` to all 12 screen files + 4 auth screens
- Wired tab bars (Home, Explore, Trips, Budget, Profile) → `router.push()` to respective routes
- Wired quick book items → `/flights`, `/train`
- Wired trip cards → `/trips/details`
- Wired CTAs → `/expenses`, `/budget`, `/explore`
- Wired back buttons → `router.back()`
- Wired auth flow: login/signup/forgot-password/verify-otp → `/home`
- Wired sign out → `/auth/login`

### Root Layout Updated
- Removed `(tabs)` route group (each screen has its own tab bar)
- Registered all screen routes directly in `_layout.tsx` Stack

---

## 4. TypeScript Errors Fixed

### `iconSize["4xl"]` missing
- **Error:** `Property '4xl' does not exist on type '{ sm: number; md: number; ... }'`
- **Fix:** Added `"4xl": 24` to `iconSize` in `theme.ts`

### `spacing["4xl"]` missing on iconSize type
- **Error:** Same pattern — `"4xl"` used on `iconSize` which only had up to `"3xl"`
- **Fix:** Added `"4xl": 24` to `iconSize`

### Nested route paths not in expo-router types
- **Error:** `'"/explore/details"' is not assignable to parameter of type '...'`
- **Fix:** Added `as any` cast to `router.push()` calls with nested routes

### Mock file errors
- **Error:** `expo-linear-gradient` mock used `<>...</>` JSX fragment in `.ts` file  
- **Fix:** Changed to `React.createElement(React.Fragment, null, children)`
- **Error:** `lucide-react-native` mock had `unknown` type for `props.children`
- **Fix:** Added proper type casting

---

## 5. SafeAreaView Addition

### Problem
Multiple screens were missing `SafeAreaView` wrapper, causing content to render under status bar / notch.

### Solution
Added SafeAreaView as root wrapper to all 16 screen files:

| Screens Added | Auth Screens (already had it) |
|---------------|-------------------------------|
| book-train, budget, expenses, flights, profile, settings, train, trips, trip-detail | login (fixed — was nested), signup, forgot-password, verify-otp |

Each screen now has `<SafeAreaView style={styles.safe}>` as outermost element with proper `backgroundColor`.

---

## 6. Import Path Corrections

### Problem
When moving files between directories, relative import paths (`../../constants/theme`) became incorrect.

### Fixes Applied
- `../constants/theme` → `../../constants/theme` (when moved to `src/app/<folder>/`)
- `../../../constants/theme` → `../../constants/theme` (when moved to root `src/app/` depth)
- All imports verified via TypeScript type-check

---

## 7. Duplicate File Cleanup

### Problem
Leftover `*Screen.tsx` files remained alongside renamed `index.tsx` files in multiple folders.

### Cleanup
Deleted 12+ duplicate `*Screen.tsx` files across: book-train, budget, explore, flights, home, profile, settings, train, trips

---

## 8. Test Infrastructure

### Created
- `jest.config.js` — Jest configuration with moduleNameMapper for `@/` alias
- `src/__mocks__/react-native.ts` — React Native mock
- `src/__mocks__/expo-linear-gradient.ts` — LinearGradient mock
- `src/__mocks__/lucide-react-native.ts` — Icon mock (42 icons)
- `src/__tests__/constants.test.ts` — 23 tests for theme/layout/translation constants

### Test Status
- 23 constants tests: ✅ All passing
- Pre-existing auth-flow test: ⏳ Blocked by `--experimental-vm-modules` flag

---

## 9. Project.md Update

Updated `Project.md` with:
- Actual feature implementation status (✅/⚠️/❌) per screen
- Complete table of 12 screens with key features
- Accurate scope vs. implementation gaps

---

## Final Status

| Metric | Value |
|--------|-------|
| TypeScript errors | **0** |
| Remaining hardcoded colors | 24 (all data-driven gradient pairs, intentional) |
| Screen files | 16 (12 main + 4 auth) |
| Test passing | 23/23 constants tests |
