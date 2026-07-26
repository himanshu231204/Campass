# Campass - Agent Documentation

## Product Overview

**Campass** is India's AI-first travel planning and booking app for students and budget travelers. It replaces the scattered 8-10 app workflow with a single **Smart Trip Plan**: an AI-generated itinerary, budget, and bookable options.

**Positioning:** AI travel companion that plans, budgets, and books your trip in one place — unlike MakeMyTrip or Ixigo, which are booking-first with limited planning or student focus.

---

## Documentation Files

| File | Description |
|------|-------------|
| **Project.md** | Full PRD — vision, problem, features, requirements, risks |
| **Context.md** | Product context — positioning, target user, goals, competitive analysis |
| **Quickstart.md** | Developer setup — tech stack, project structure, architecture, UI system |
| **Roadmap.md** | Phased features, monetization timeline, risks, success metrics |
| **agent.md** | Codebase overview — implemented features, current state, guidelines |

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Expo | ~57.0.8 |
| UI | React Native | 0.86.0 |
| Language | TypeScript | ~6.0.3 (strict) |
| Routing | expo-router | ~57.0.8 |
| Icons | lucide-react-native | ^1.26.0 |
| Backend | Supabase/Firebase | TBD |
| AI | Claude/ChatGPT API | TBD |

---

## Project Structure

```
src/
├── app/                    # File-based routing (expo-router)
│   ├── auth/               # Auth screens ✅
│   ├── (tabs)/             # Main app tabs
│   ├── trip/               # Trip planning
│   ├── booking/            # Hotel/dorm booking
│   ├── safety/             # Safety Hub
│   └── settings/           # User settings
├── components/             # Reusable UI
├── services/               # API & business logic
├── hooks/                  # Custom React hooks
├── utils/                  # Helpers
└── types/                  # TypeScript types
```

---

## Core Features (Phase 1)

1. **Smart Trip Plan (AI)** — Itinerary + budget + bookable options
2. **Train Search** — Search + deep-link to IRCTC
3. **Hotel/Dorm Booking** — In-app via aggregator API
4. **AI Budget Planner** — Full trip cost estimation
5. **Maps & Local Transport** — Destination maps + suggestions
6. **Offline Mode** — Downloadable maps
7. **Safety Hub** — SOS, emergency contacts, live location
8. **Multi-language** — English, Hindi, + 2-3 regional
9. **Premium Subscription** — ₹199-499/month

---

## Current State

- ✅ Auth screens (login, signup, forgot-password, verify-otp)
- ✅ Project structure established
- ✅ Expo SDK 57 configured
- ❌ No backend, state management, AI, or booking integrations

---

## Agent Guidelines

1. Follow Expo SDK 57 patterns — https://docs.expo.dev/versions/v57.0.0/
2. Use TypeScript strict mode — all types explicit
3. Maintain consistent styling — follow color palette
4. Keep components small — single responsibility
5. Use functional components — no class components
6. Leverage expo-router — file-based routing
7. Design for offline — core screens work with zero connectivity
8. Build modular APIs — abstraction layers for integrations
9. Student-first mindset — budget options, dorms, group-friendly
10. Safety as trust — SOS/location require explicit consent

---

## Quick Commands

```bash
npm start          # Start dev server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on Web
npm run lint       # ESLint check
```

---

## Key Risks

| Risk | Severity |
|------|----------|
| Scope vs. team size | Critical |
| Pan-India supply dilution | High |
| Heavy API dependency | Medium |
| High CAC | Very High |
| Customer support cost | High |

---

**See documentation files above for detailed information.**
