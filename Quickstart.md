# Campass - Developer Quickstart

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Expo | ~57.0.8 |
| UI Framework | React Native | 0.86.0 |
| Language | TypeScript | ~6.0.3 (strict mode) |
| Routing | expo-router | ~57.0.8 |
| Navigation | @react-navigation/native | ^7.3.14 |
| Icons | lucide-react-native | ^1.26.0 |
| Animations | react-native-reanimated | 4.5.0 |
| Gestures | react-native-gesture-handler | ~2.32.0 |
| Backend | Supabase/Firebase | TBD |
| AI | Claude/ChatGPT API | TBD |

---

## Project Structure

```
Campass/
├── src/
│   ├── app/                    # File-based routing (expo-router)
│   │   ├── auth/               # Authentication module ✅
│   │   ├── (tabs)/             # Main app tabs
│   │   ├── trip/               # Trip planning flow
│   │   ├── booking/            # Hotel/dorm booking
│   │   ├── safety/             # Safety Hub
│   │   └── settings/           # User settings
│   ├── components/             # Reusable UI components
│   ├── services/               # API and business logic
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Helper functions
│   ├── types/                  # TypeScript type definitions
│   └── assets/
│       ├── expo.icon/          # Expo icon assets
│       └── images/             # App images and icons
├── .claude/                    # Claude Code configuration
├── .opencode/                  # OpenCode agent configuration
├── app.json                    # Expo app configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio / Xcode (for emulators)

### Installation

```bash
# Clone repository
git clone <repo-url>
cd Campass

# Install dependencies
npm install

# Start development server
npm start
```

### Run Commands

```bash
npm run android    # Android emulator
npm run ios        # iOS simulator
npm run web        # Web browser
npm run lint       # ESLint check
```

---

## Architecture Patterns

### Routing
- **File-based routing** via expo-router
- Routes in `src/app/` directory
- Nested routes use `_layout.tsx` for navigation structure
- Path aliases: `@/*` → `./src/*`

### Component Patterns
- Functional components with React hooks
- Local state management (useState) — global state TBD
- StyleSheet for styling
- LinearGradient for gradient backgrounds
- lucide-react-native for icons

### API Architecture (Planned)
- **Modular abstraction layer** for train/hotel/maps
- Providers swappable without full rebuild
- Supabase/Firebase backend

---

## UI Design System

### Colors
```
Primary:
- Deep Blue: #1e3a8a, #1e2a63, #2a3f8f
- Accent Blue: #3b82f6, #2563eb

Background:
- Light: #f5f8fd, #eef2f9

Text:
- Primary: #374151
- Secondary: #9ca3af
- Dark: #111827
```

### Border Radius
- Buttons: 16px
- Input Fields: 30px (pill shape)
- Icons: 18-20px

### Shadows
- Primary buttons: shadowColor #1e2a63, elevation 6

---

## Current State

### ✅ Completed
- Authentication UI screens (login, signup, forgot-password, verify-otp)
- Basic project structure
- Expo SDK 57 configuration

### ❌ Not Started
- Backend integration
- Global state management
- API layer / data fetching
- AI integration
- Booking integrations
- Testing setup
- CI/CD configuration

---

## Dependencies

### Core
- expo, react, react-native
- expo-router
- @react-navigation/native, @react-navigation/native-stack

### UI/UX
- expo-linear-gradient
- lucide-react-native
- expo-font, expo-symbols
- react-native-reanimated
- react-native-gesture-handler

### Utilities
- expo-constants, expo-device
- expo-linking, expo-web-browser
- react-native-safe-area-context
- react-native-screens

### Development
- typescript (~6.0.3)
- @types/react (~19.2.2)

### Future (Phase 1)
- Supabase/Firebase
- AI API (Claude/ChatGPT)
- Hotel aggregator API
- Train data API
- Maps SDK

---

## Configuration

### Expo App (`app.json`)
- Orientation: Portrait only
- Splash: Blue background (#208AEF) with custom icon
- Web: Static output
- Experiments: Typed routes + React Compiler enabled

### TypeScript (`tsconfig.json`)
- Strict mode: Enabled
- Path aliases: `@/*` → `./src/*`

---

## Development Guidelines

1. **Expo SDK 57** — Check docs at https://docs.expo.dev/versions/v57.0.0/
2. **TypeScript strict** — All types explicit
3. **Consistent styling** — Follow color palette and border radius patterns
4. **Small components** — Single responsibility principle
5. **Functional components** — No class components
6. **expo-router** — File-based routing conventions
7. **Offline-first** — Core screens work with zero/degraded connectivity
8. **Modular APIs** — Abstraction layers for integrations
9. **Student-first** — Budget options, dorms, group-friendly features
10. **Safety as trust** — SOS/location features require explicit consent flows
