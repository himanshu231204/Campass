# Product Requirements Document (PRD)
# Travel Mate — India's AI-First Travel Companion for Students

**Version:** 1.0
**Status:** Draft for Build
**Owner:** Founder (Solo, Bootstrapped)
**Prepared by:** Senior PM Review
**Date:** July 2026

---

## 1. Product Vision

Travel Mate is an AI-first travel planning and booking app built for India's student and budget-traveler segment. It replaces the scattered 10-app workflow (train booking → hotel app → maps → YouTube → budget calculator → cab app → translator) with a single **Smart Trip Plan**: an AI-generated itinerary, budget, and bookable options, combined with student-specific supply (dormitories, budget hotels) and a trust-building **Safety Hub**.

Long-term direction (per Idea Validation report): evolve from a planning + booking app into India's **Travel Operating System (Travel OS)**. This PRD scopes only the v1 MVP and near-term roadmap; the Travel OS vision is directional context, not a v1 commitment.

**Positioning statement:**
> For Indian students and budget travelers who juggle 8-10 apps to plan a trip, Travel Mate is an AI travel companion that plans, budgets, and books your trip in one place — unlike MakeMyTrip or Ixigo, which are booking-first with limited planning or student focus.

---

## 2. Problem Statement

- Domestic Indian travelers, especially students, currently stitch together train booking apps, hotel apps, Google Maps, YouTube, budget calculators, cab apps, and translators to plan a single trip.
- Existing booking giants (MakeMyTrip, Goibibo, Ixigo, EaseMyTrip) are booking-first, not planning-first, and largely ignore the student segment (dorms, group budgets, safety).
- Safety is an underserved trust factor, particularly for solo and student travelers, and is not a first-class feature in any major incumbent app.
- Network coverage is weak at many tourist destinations, making purely online-dependent apps unreliable exactly when travelers need them most.

---

## 3. Target User

**Primary Persona: The Budget Student Traveler**
- College students / young travelers (18-26), traveling solo or in small friend groups, budget-conscious, comfortable with apps and AI chat interfaces, traveling within India (weekend trips, semester breaks, backpacking, pilgrimage-adjacent travel).
- Core needs: cheap stays (dorms/budget hotels), realistic budgets before committing, safety reassurance for parents/self, and not wanting to research every trip from scratch.

**Secondary personas (not v1 design focus, but should not be blocked):** solo travelers generally, families — addressed from Phase 2 onward.

---

## 4. Goals & Success Metrics

### North Star Metric (combined)
- **Number of Smart Trip Plans generated** (leading indicator of core value delivery)
- **Weekly/Monthly Active Users — WAU/MAU** (confirms retention and real usage, not just curiosity)

### Supporting Metrics
| Metric | Purpose |
|---|---|
| % of Smart Trip Plans that convert to a hotel/dorm booking | Validates plan → revenue funnel |
| Hotel/Dorm booking completion rate | Booking flow health |
| Premium subscription conversion rate | Monetization validation |
| SOS/Safety Hub activation rate + setup completion (emergency contacts added) | Trust & safety adoption |
| Offline map downloads per trip | Offline mode adoption |
| D7 / D30 retention | Habitual usage vs one-time use |

---

## 5. Scope — MVP (Phase 1)

### 5.1 In-Scope Features

| # | Feature | Description |
|---|---|---|
| 1 | **Smart Trip Plan (AI)** | AI-generated itinerary + budget breakdown + bookable train/hotel/dorm options + local transport suggestions. Dual input: free-text chat or guided form. |
| 2 | **Train Search + Deep-link Booking** | Search trains/availability in-app; booking is completed via deep-link/redirect to IRCTC or an authorized partner app (no in-app IRCTC transaction in v1). |
| 3 | **Hotel & Dormitory Booking** | Full in-app booking via aggregator/partner APIs. Primary revenue mechanism (commission). |
| 4 | **AI Budget Planner** | Estimates full trip cost (train + hotel + food + local transport + misc) before booking; embedded within Smart Trip Plan. |
| 5 | **Maps & Local Transport Suggestions** | Destination maps with suggested local transport (auto, metro, bus) as part of the Smart Trip Plan output. |
| 6 | **Offline Mode (v1 scope)** | Downloadable offline maps for saved/booked destinations. (Offline AI guide content and full offline AI are explicitly Phase 2+.) |
| 7 | **Safety Hub (core subset)** | SOS button, Emergency Contacts, Live Location Sharing. (Nearby hospitals/police stations and Scam Alerts deferred to Phase 2.) |
| 8 | **Multi-language support** | English + Hindi + 2-3 regional languages (e.g., Tamil, Telugu, Bengali) at launch. |
| 9 | **Premium AI Subscription** | Paid tier unlocking unlimited AI trip plans / enhanced budget optimization (see Section 7). |

### 5.2 Explicitly Out of Scope for v1
- Group Trip Planning & Split Expenses (Phase 3, per founder decision)
- Full Safety Hub (nearby hospitals/police, scam alerts) — Phase 2
- Offline AI guide / full offline AI — Phase 2+
- Community features (travel stories, ratings, travel buddies)
- AR guide, voice assistant, image landmark recognition, crowd prediction
- Flight booking
- International travel / visa assistance
- In-app IRCTC train booking (deep-link only for v1)

---

## 6. Phased Roadmap

**Phase 1 (MVP — this PRD):**
Smart Trip Plan (AI itinerary + budget), Train search + deep-link booking, Hotel/Dorm in-app booking, Maps + local transport suggestions, Offline maps, Core Safety Hub (SOS, emergency contacts, live location), Multi-language (5 languages), Premium subscription.

**Phase 2:**
Full Safety Hub (nearby hospitals, nearby police stations, scam alerts), Offline AI guide content, AI Chat expansion, Expense Tracker, Local transport booking/affiliate integration.

**Phase 3:**
Group Trip Planning, Split Expenses, Social Travel features, AI Recommendations engine, Student Communities.

**Future / Post-PMF (directional only):**
Voice Travel Assistant, AR Tourist Guide, AI Packing List, Crowd Prediction, Weather-based dynamic itinerary adjustment, Train delay replanning, Flight booking, International/visa features.

---

## 7. Monetization (v1 Focus)

Per founder decision, v1 focuses on **two primary revenue streams**; all others from the original report remain roadmap items, not v1 commitments.

| Revenue Stream | Model | Priority |
|---|---|---|
| **Hotel/Dormitory Booking Commission** | 5-15% commission via aggregator partner API on completed bookings | Primary (v1) |
| **Premium AI Subscription** | ₹199-499/month — unlimited Smart Trip Plans, enhanced budget optimization, offline map access, priority AI response | Primary (v1) |
| Train booking affiliate/commission | Deferred — deep-link only in v1, no revenue capture initially unless partner program allows attribution | Roadmap |
| Tour packages, featured listings, restaurant partnerships, ads, travel insurance, credit card referrals | Not pursued in v1 | Roadmap (Phase 2+) |

**Note:** Since train booking is deep-link (not in-app) in v1, no commission is assumed from train bookings unless a specific affiliate/attribution partnership is later confirmed. This should not be modeled into early revenue projections.

---

## 8. Functional Requirements by Feature

### 8.1 Smart Trip Plan (AI)
- **Input methods:** (a) Free-text chat — e.g., "Plan a 3-day trip to Manali under ₹5000"; (b) Guided form — destination, dates, budget, interests/trip type.
- **Output:** Day-wise itinerary, full budget breakdown (train + hotel + food + local transport + misc/shopping buffer), bookable train search results (deep-link) and hotel/dorm options (in-app bookable), local transport suggestions per day.
- **Edge cases to define during design:** ambiguous destination input, budget too low for feasible plan (AI should flag infeasibility, not silently overpromise), no train/hotel inventory available for route/dates.

### 8.2 Train Search + Deep-link Booking
- Search by route/date, show availability and indicative pricing.
- CTA deep-links to IRCTC or a designated partner app/site to complete the actual booking transaction.
- App does not custody payment or PNR for train tickets in v1.

### 8.3 Hotel & Dormitory Booking
- Full in-app search, selection, and booking via aggregator/partner API.
- Must support dormitory/hostel inventory specifically, not just standard hotel category — this is a key differentiator for the student persona.
- Booking confirmation, cancellation, and refund flows must be handled in-app (support cost implication noted in Risks).

### 8.4 Offline Mode (v1)
- User can download maps for saved/booked destinations before losing connectivity.
- Scope limited to maps only in v1 — no offline AI generation, no offline guide content (Phase 2).

### 8.5 Safety Hub (Core Subset — v1)
- **SOS button:** One-tap trigger, visible/accessible from anywhere in the app.
- **Emergency Contacts:** User can add and manage trusted contacts; SOS notifies them.
- **Live Location Sharing:** User can share real-time location with chosen contacts during a trip.
- Nearby hospitals, nearby police stations, and scam alerts are explicitly Phase 2 — do not imply real-time emergency-service integration in v1 marketing or UI copy, since it is not built yet.

### 8.6 Multi-language Support
- Launch languages: English, Hindi, + 2-3 regional (recommend prioritizing by target city mix — see Risks on Pan-India launch).
- Applies to UI and AI chat responses, not necessarily all AI-generated content (e.g., place names may remain in English/local script).

---

## 9. Non-Functional Requirements

- **Platforms:** Android + iOS simultaneously, built in React Native for shared codebase efficiency (critical given solo-founder team size).
- **Backend:** Supabase/Firebase-based, favoring managed services over custom infrastructure to reduce solo-founder operational load.
- **AI-assisted development:** Founder will use Claude, ChatGPT, Cursor, etc. as part of the build process — PRD and technical specs should be written with enough precision to be directly usable as prompts/specs for AI-assisted coding.
- **Modular API architecture:** Per original report risk (API dependency), train/hotel/maps integrations should be built behind an internal abstraction layer so providers can be swapped without a full rebuild.
- **Performance:** Given weak connectivity at many destinations, core screens (saved trip plan, offline maps, SOS) must work with zero/degraded connectivity.
- **Data privacy:** Live location sharing and emergency contacts involve sensitive personal data — requires explicit user consent flows and clear data handling disclosure (important given India's DPDP Act context; recommend legal review before launch, not covered in this PRD).

---

## 10. Competitive Positioning (Summary)

| Competitor | Gap Travel Mate Exploits |
|---|---|
| MakeMyTrip, Goibibo, EaseMyTrip | Booking-first, weak/no AI planning, no student-specific supply |
| Ixigo | Strong on trains, weak on end-to-end planning |
| Google Maps/Search | No integrated booking or budget planning |
| Booking.com, Agoda, Airbnb | No India-specific student/dorm focus, no Indian local transport integration |

Travel Mate's differentiation is **AI-first planning + student-specific supply (dorms/budget hotels) + safety as a trust layer**, not trying to out-book the booking giants.

---

## 11. Risks & Mitigations

| Risk | Severity | Notes / Mitigation |
|---|---|---|
| **Scope vs. team size mismatch** | 🔴 Critical | Pan-India launch + iOS & Android simultaneously + 5 languages + AI + booking integrations is a large scope for a 1-3 person bootstrapped team. Recommend sequencing technical rollout even if user-facing scope stays broad — e.g., ship AI + booking core solidly before polishing all 5 languages, or soft-launch language rollout iteratively post-launch. |
| **Pan-India launch dilutes supply/support quality** | 🔴 High | No city restriction means hotel/dorm supply and customer support load are spread thin from day one. Recommend concentrating BD/partner acquisition effort on student/backpacker hubs first (Manali, Rishikesh, Goa, Jaipur, Varanasi) even while the app is technically available pan-India. |
| **Heavy API dependency** (train, hotel, maps, AI) | 🟠 Medium | Modular backend, abstraction layer per provider (Section 9). |
| **No initial network effect vs. trusted incumbents** | 🔴 High | Differentiate via AI planning + safety trust + student pricing, not by competing on booking trust directly. |
| **Customer support cost for bookings** | 🔴 High | Solo founder cannot manually handle refunds/cancellations at scale — invest early in automated support workflows via partner APIs (Section 9). |
| **Thin booking margins (5-15%)** | 🟠 Medium | Premium subscription is the second revenue leg specifically to reduce commission dependency. |
| **High CAC** | 🔴 Very High | Organic growth via AI utility (shareable Smart Trip Plans), referrals, and content — paid acquisition not viable for a bootstrapped solo founder. |
| **Data privacy / safety feature liability** | 🟠 Medium | SOS and live location involve real safety stakes — recommend legal/compliance review of consent flows before launch (outside PM scope, flagged here). |
| **No fixed timeline could lead to scope creep** | 🟠 Medium | "Quality over speed" is reasonable for a solo founder, but recommend milestone-based (not calendar-based) checkpoints tied to the feature list in Section 5.1, not open-ended polishing. |

---

## 12. Open Questions / Assumptions to Validate

- Which specific hotel/dorm aggregator API(s) are accessible/affordable for a solo bootstrapped founder (commercial terms, minimum volume requirements)?
- Which train data source will be used for search/availability display if not booking directly (IRCTC has restrictions on data usage — needs verification)?
- Legal review needed for: live location sharing, emergency contact data, DPDP Act compliance, and any liability associated with the SOS feature.
- Confirm whether "Premium AI Subscription" pricing (₹199-499/month) is validated with target users or is a starting hypothesis to test.
- Regional language prioritization should ideally be data-driven (e.g., based on early user signups) rather than fixed upfront, given pan-India launch.

---

## 13. Appendix

### 13.1 Original Market Validation Score (Reference)
Per Idea Validation Report — Overall Startup Score (India): **8.8/10**
Market Opportunity 9.5, Demand 9.5, Differentiation 9, Revenue Potential 9, Scalability 9.5, Competition 4.5, Technical Complexity 4, Execution Difficulty 3.5.

### 13.2 Key Decisions Log (from PM discovery session)
| Decision Area | Outcome |
|---|---|
| Primary persona | Students |
| MVP hook | AI Trip Planner + AI Budget Planner + Train Search + Budget Hotels/Dorms |
| Train booking model | Deep-link to IRCTC/partner |
| Hotel/dorm booking model | Full in-app via aggregator API |
| AI input method | Chat + guided form (both) |
| AI output | Smart Trip Plan (itinerary + budget + bookable options + local transport) |
| Monetization (v1) | Hotel/dorm commission + Premium AI subscription |
| Platforms | Android + iOS simultaneously (React Native) |
| Languages | English + Hindi + 2-3 regional |
| Launch geography | Pan-India (flagged as risk) |
| Offline Mode scope | Downloadable maps for saved destinations |
| Safety Hub scope (v1) | SOS + Emergency Contacts + Live Location Sharing |
| Group trip/split expense | Phase 3 (unchanged) |
| Team | Solo founder, bootstrapped |
| Timeline | Not fixed — quality over speed |
| Tech stack | React Native, Supabase/Firebase, AI-assisted dev tools |
| North Star metric | Smart Trip Plans generated + WAU/MAU |
| App name | Travel Mate |

---

*End of PRD v1.0*
