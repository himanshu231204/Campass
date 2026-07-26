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

| Feature | Scope | Notes |
|---------|-------|-------|
| Smart Trip Plan (AI) | Itinerary + budget + bookable options | Chat + form input |
| Train Search | Search + deep-link to IRCTC | No in-app booking v1 |
| Hotel/Dorm Booking | Full in-app via aggregator | Key differentiator |
| AI Budget Planner | Full trip cost estimation | Embedded in trip plan |
| Maps & Local Transport | Destination maps + suggestions | Part of trip plan |
| Offline Mode | Downloadable maps | Maps only, no AI offline |
| Safety Hub | SOS, emergency contacts, live location | No hospitals/police v1 |
| Multi-language | English, Hindi, + 2-3 regional | UI + AI responses |
| Premium Subscription | ₹199-499/month | Unlimited plans, enhanced features |

---

## Out of Scope (v1)

- Group planning, split expenses (Phase 3)
- Full safety hub (Phase 2)
- Offline AI (Phase 2+)
- Community, AR, voice assistant
- Flight booking, international travel

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
