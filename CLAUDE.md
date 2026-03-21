# Satsoko — Claude Context

## What is Satsoko?

Satsoko (formerly Bitika) is a Kenyan bitcoin on-ramp. It lets anyone convert Kenyan Shillings to bitcoin via mobile money (M-Pesa, Airtel Money) from as little as KES 10 — the lowest entry point in the market. The product is laser-focused on making bitcoin accessible, practical, and inclusive for the ordinary Kenyan.

Satsoko is built by a small, principled team based in Nairobi, Kenya.

---

## The Moat

Three things make Satsoko different from every other exchange:

1. **Non-custodial by design** — Sats go directly from the user's mobile money to their own Lightning wallet. Satsoko never holds funds, not even transiently if avoidable.
2. **No KYC, no accounts** — Users are not identified. No ID, no selfie, no phone number stored. A transaction is: Lightning address + KES amount + mobile money confirmation. That is the entire surface area.
3. **3-step simplicity** — The entire UX is three steps. This is the product. Complexity is the enemy.

---

## Core Principles (Non-Negotiable)

These are not preferences — they are hard constraints that should guide every technical and product decision:

- **Bitcoin-only.** No altcoins, no stablecoins, no wrapped tokens, no "crypto". If a suggestion involves anything other than Bitcoin and the Lightning Network, it is out of scope.
- **Non-custodial.** Never design a flow where Satsoko holds, escrows, or temporarily controls user funds. If a pattern requires custody, find a different pattern.
- **No KYC, no PII.** Do not suggest features, database schemas, or flows that collect personally identifiable information. No names, no ID numbers, no phone numbers stored server-side, no email unless the user explicitly requests it (e.g. history export).
- **No authentication.** Users are identified by app-generated IDs (anonymous device identifiers), not accounts. Do not suggest login systems, passwords, OAuth, or sessions tied to identity.
- **Privacy-preserving data stores.** Any server-side storage should store the minimum required. Prefer hashed or anonymised references. Explore Nostr for user-controlled data where applicable.
- **KISS — Keep It Stupid Simple.** The 3-step flow is the product. Every feature must justify its complexity cost. If it makes the core flow harder to understand, it does not ship.
- **Censorship resistance.** Do not design systems that could be trivially used to block or surveil specific users. No IP logging, no behavioural fingerprinting.

---

## What Claude Should Always Do

- Suggest privacy-preserving approaches even when not explicitly asked — especially in backend data stores, API design, and logging.
- Prefer Lightning Network patterns (Lightning addresses, BOLT11 invoices, LNURL) over on-chain Bitcoin for user-facing flows.
- Keep UI copy concise and direct. Satsoko's voice is confident, warm, and unpretentious — not corporate or jargon-heavy.
- Respect the 3-step UX constraint. New features should slot into or around the flow, not disrupt it.
- Default to the simplest implementation that works. Over-engineering is a product risk here.
- When suggesting backend patterns, consider what data is genuinely necessary vs. what is collected by habit.
- Flag any suggestion that could introduce a custodial pattern, even accidentally (e.g. holding funds in a hot wallet between steps).

---

## What Claude Should Never Do

- Suggest KYC, identity verification, or any form of user registration tied to real-world identity.
- Recommend altcoins, stablecoins, or multi-chain architecture.
- Suggest custodial wallet patterns, exchange accounts, or any flow where Satsoko intermediates the bitcoin.
- Add authentication systems (JWT, OAuth, sessions) without explicit instruction. App IDs are the identity primitive.
- Store phone numbers, M-Pesa till numbers, or payment details server-side beyond the minimum required for a transaction to complete.
- Recommend centralised analytics platforms (Google Analytics, Mixpanel, etc.) that track users. If analytics are needed, suggest privacy-respecting alternatives (Plausible, self-hosted Umami).
- Log user behaviour, IP addresses, or request metadata that could be used to identify or surveil users.

---

## Tech Stack

### Current Frontend (this repo)
- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Build:** Vite
- **Routing:** React Router v6
- **Deployment:** Vercel (`vercel.json` present)

### Other Repos (parent directory)
- `OLDBITIKA/` — Previous frontend iteration (reference only)
- `bitika_server/` — Current backend server

### Design System
- **Primary colour:** Bitcoin orange `hsl(33 93% 54%)` = `#F7931A`
- **Secondary colour:** Bronze `hsl(36 25% 22%)` = `#463b2a`
- **Canvas:** Warm beige `hsl(36 65% 96%)`
- **Font:** Comfortaa (Google Fonts)
- All colours are defined as HSL CSS variables in `src/index.css` — always source from there, never hardcode hex values in components.

### Lightning
- Currently using third-party Lightning infrastructure
- **Roadmap:** Running a self-hosted Lightning node (key revenue stream — routing fees)
- When discussing Lightning architecture, prefer solutions that move toward node sovereignty (LND, Core Lightning) over continued third-party dependence

### Identity
- No user accounts. Users are identified by anonymous app IDs generated client-side.
- Exploring Nostr keypairs as a privacy-preserving identity layer for features that require persistent state (e.g. DCA reminders, history).

---

## Product Roadmap (for context)

| Product | Status | Notes |
|---|---|---|
| Satsoko on-ramp | Live / active | Core product — KES → Lightning |
| Satsoko app (iOS/Android) | In development | Prototype at `/prototype` route |
| Merchants app | Planned | Accept bitcoin payments at point of sale |
| Own Lightning node | Planned | Revenue via routing fees + full sovereignty |

---

## The Voice

Satsoko communicates like a knowledgeable friend who happens to understand bitcoin deeply — not a bank, not a startup trying to sound cool, not an exchange pushing products. The tone is:

- **Direct.** Say the thing. No padding.
- **Warm.** This is for everyday Kenyans, not crypto traders.
- **Principled.** Bitcoin is sound money. That belief informs everything.
- **Unpretentious.** No jargon unless the user clearly understands it. Plain Swahili-English register is fine.

---

## Project-Specific Notes

- The `/prototype` route contains the interactive app UI prototype — useful for communicating the intended UX to the mobile engineer.
- `public/satsoko-logo.svg` is the primary logo (250×100 viewBox). Use `brightness-0 invert` on dark backgrounds.
- `public/favicon_io/` contains the full favicon set — reference `index.html` for the correct link tags.
- SEO metadata is in `index.html` — includes JSON-LD for both `SoftwareApplication` and `FAQPage` schemas.
- The `MEMORY.md` file in `.claude/projects/` tracks session-level context. Check it when resuming work.
