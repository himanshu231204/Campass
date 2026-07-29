# Campass - Product Requirements Document (PRD)

**Version:** 1.0 | **Status:** Draft | **Date:** July 2026

---

## Vision

India's AI-first travel planning app for students. Replaces 10-app workflow with single **Smart Trip Plan** — AI itinerary + budget + bookable options.

**Positioning:** AI travel companion for students vs. booking-first incumbents (MakeMyTrip, Ixigo).

---

## Problem

- Students stitch together 8-10 apps per trip
- Existing platforms ignore student segment (dorms, budgets, safety)
- Safety underserved for solo travelers
- Weak network at destinations

---

## Target User

**Primary:** College students (18-26), budget-conscious, solo/groups, traveling within India

**Secondary (Phase 2+):** Solo travelers, families

---

## Features (Phase 1 MVP)

| Feature | Scope | Status |
|---------|-------|--------|
| Smart Trip Plan (AI) | Itinerary + budget + bookable options | ⚠️ UI only — "Plan with AI" card, hardcoded text |
| Train Search | Search + deep-link to IRCTC | ⚠️ Search form + mock results list |
| Hotel/Dorm Booking | Full in-app via aggregator | ❌ Not implemented |
| AI Budget Planner | Full trip cost estimation | ⚠️ Static budget card with hardcoded numbers |
| Maps & Local Transport | Destination maps + suggestions | ❌ Not implemented |
| Offline Mode | Downloadable maps | ❌ Not implemented |
| Safety Hub | SOS, emergency contacts, live location | ⚠️ SOS button + safety tips text |
| Multi-language | English, Hindi, + 2-3 regional | ⚠️ `en` translation object ready, no language switcher |
| Premium Subscription | ₹199-499/month | ❌ Not implemented |
| Expense Tracking | Per-trip expense logs | ✅ Present (hidden, no nav entry) |
| Profile & Stats | Trip count, reviews, loyalty points | ✅ ProfileScreen with 11-menu items |
| Settings & Preferences | Language, currency, notifications, privacy | ✅ Fully interactive toggles |

---

## Current Screens (12 total, `src/app/(screens)/`)

| Screen | Path | Key Features |
|--------|------|-------------|
| Home | `home/HomeScreen.tsx` | Quick book (5 modes), active trip card, budget snapshot, popular destinations, AI tip, SOS/Community/Maps actions |
| Explore | `explore/ExploreScreen.tsx` | Category chips, trending 2-column grid, budget-friendly destinations |
| Explore Details | `explore-details/ExploreDetailsScreen.tsx` | Hero + rating, tags, AI summary, weather, foods, attractions, restaurants, safety tips, budget impact |
| Train Search | `train/TrainSearchScreen.tsx` | From/To/Date/Quota form, gradient CTA |
| Book Train | `book-train/BookTrainScreen.tsx` | Route display, date selector, sort/filter chips, 8 mock trains with class selection |
| Search Flights | `flights/SearchFlightsScreen.tsx` | One Way/Round Trip/Multi-City tabs, route form, quick book cards |
| My Trips | `trips/MyTripsScreen.tsx` | Featured trip with progress, upcoming/past trip placeholders |
| Trip Detail | `trip-detail/TripDetailScreen.tsx` | Itinerary/Budget/Map tabs, day-by-day timeline with costs & AI tips |
| Budget Tracker | `budget/BudgetTrackerScreen.tsx` | Spent/remaining/left summary, 6 category breakdown bars, AI tip |
| Expenses | `expenses/ExpensesScreen.tsx` | Today/Yesterday expense list with icons, amounts |
| Profile | `profile/ProfileScreen.tsx` | Avatar, stats (12 trips/34 reviews/4,820 points), 11-item menu |
| Settings | `settings/SettingsScreen.tsx` | Personal info, language, currency, notifications, privacy toggles |

**Note:** All screens use static/mock data — zero API integrations, zero navigation wiring between screens, no actual AI capability.

---

## Out of Scope (v1)

- Group planning, split expenses (Phase 3)
- Full safety hub (Phase 2)
- Offline AI (Phase 2+)
- Community, AR, voice assistant
- Hotel/dorm booking (Phase 1 PRD claim, not implemented)
- International travel

---

## Roadmap

| Phase | Features |
|-------|----------|
| **Phase 1 (MVP)** | AI trip plan, train search, hotel/dorm booking, maps, offline maps, safety hub, multi-language, premium |
| **Phase 2** | Full safety hub, offline AI, expense tracker, local transport booking |
| **Phase 3** | Group planning, split expenses, social features, communities |
| **Future** | Voice assistant, AR guide, flight booking, international |

---

## Monetization (v1)

| Stream | Model | Priority |
|--------|-------|----------|
| Hotel/Dorm Commission | 5-15% via aggregator | Primary |
| Premium Subscription | ₹199-499/month | Primary |
| Train Affiliate | Deep-link only | Roadmap |

---

## Competitive Position

| Competitor | Gap Campass Exploits |
|------------|----------------------|
| MakeMyTrip, Goibibo | Booking-first, no AI planning, no student supply |
| Ixigo | Strong trains, weak end-to-end |
| Google Maps | No booking or budget planning |
| Booking.com, Airbnb | No India student/dorm focus |

**Differentiation:** AI-first + student supply (dorms) + safety as trust

---

## Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Scope vs. team size | Critical | Sequence rollout, iterative language launch |
| Pan-India supply dilution | High | Focus BD on student hubs first |
| API dependency | Medium | Abstraction layer per provider |
| High CAC | Very High | Organic growth via AI utility, referrals |

---

## Non-Functional Requirements

- **Platforms:** Android + iOS (React Native)
- **Backend:** Supabase/Firebase (managed services)
- **Architecture:** Modular API abstraction layers
- **Performance:** Core screens work offline/degraded connectivity
- **Privacy:** Explicit consent for location/SOS features (DPDP Act compliance)

---

## Key Decisions

| Area | Decision |
|------|----------|
| Persona | Students |
| Train booking | Deep-link to IRCTC |
| Hotel booking | In-app via aggregator |
| AI input | Chat + guided form |
| Monetization | Commission + subscription |
| Platforms | Android + iOS simultaneously |
| Languages | English + Hindi + 2-3 regional |
| Launch | Pan-India |
| Team | Solo founder, bootstrapped |
| Timeline | Quality over speed |

---

## Open Questions

1. Which hotel/dorm aggregator APIs are accessible/affordable?
2. Train data source (IRCTC restrictions)?
3. Legal review for location/SOS features?
4. Is ₹199-499/month pricing validated?
5. Regional language prioritization — data-driven or upfront?

---

*End of PRD v1.0*
