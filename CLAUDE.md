# ha-qrcode-info — Project Brief

## What This Is
A static, mobile-first guest info page for Hotel Americano, accessed via QR code printed on in-room cards.
URL: **info.hotelamericanosaipan.com**
Hosted on: **Cloudflare Pages** (GitHub repo: quinceyr-sudo/ha-qrcode-info)

---

## Tech Stack
- Vanilla HTML / JS — no frameworks, no build step
- **Tailwind CSS via CDN** (`cdn.tailwindcss.com?plugins=forms,container-queries`) with inline config
- `style.css` holds only custom styles not achievable in Tailwind (keyframe animations, shimmer bar, scroll-reveal, photo strip)
- Google Fonts: **Cormorant Garamond** (serif titles) + **EB Garamond** (headlines) + **Jost** (body/UI)
- **Material Symbols Outlined** (Google icon font) for nav and number chevrons
- Deploys automatically via Cloudflare Pages on push to `main`

---

## Brand / Color Tokens (Tailwind config)

| Token                    | Value       | Usage                        |
|--------------------------|-------------|------------------------------|
| `pure-gold`              | `#C59765`   | Accents, shimmer bar, icons  |
| `primary`                | `#7c572b`   | Buttons, headings, links     |
| `primary-container`      | `#c59765`   | Button hover                 |
| `deep-onyx`              | `#0F0802`   | Footer background            |
| `charcoal-text`          | `#3B3B3C`   | Body text                    |
| `surface-container-low`  | `#f7f3ed`   | Card backgrounds             |
| `surface-container`      | `#f1ede7`   | Card hover state             |
| `on-surface-variant`     | `#50453b`   | Muted/secondary text         |

Background: `#F7F3ED` (warm cream). Use the same visual language as hotelamericanosaipan.com — warm, refined, minimal.

---

## File Structure

```
ha-qrcode-info/
├── index.html
├── main.js
├── i18n.js       ← non-English translations (zh-CN, zh-TW, ja, ko); English stays in HTML as fallback
├── style.css
└── assets/
    ├── Hotel Americano LOGO 2.png           ← original full logo (unused in UI)
    ├── Hotel Americano HA logowider.png     ← main header logo (w-56)
    ├── Hotel Americano HA Only Transparent Gold.png  ← footer monogram (h-40)
    ├── qr-print.html                        ← printable QR code sheet for in-room cards
    ├── hero.jpg                             ← dramatic upward exterior shot (used for hero section)
    ├── lobby.avif
    ├── sundeck.avif                         ← do NOT include in random photo pool
    ├── majesty logo flat.jpeg               ← original (uncompressed)
    ├── photos/                              ← hotel photo pool (random strip)
    │   ├── chandelier.avif
    │   ├── lobby-floor.avif
    │   ├── lobby-lounge.avif
    │   ├── lobby-stairs.avif
    │   ├── reception.avif
    │   ├── reception2.avif
    │   ├── breakfast.avif
    │   ├── breakfast2.avif
    │   ├── room-entrance.avif
    │   ├── room-tv.avif
    │   ├── room-amenity.avif
    │   ├── room-safe.avif
    │   ├── staircase.avif
    │   ├── staircase2.avif
    │   ├── facade.webp
    │   ├── room-twin.webp
    │   ├── room-double.webp
    │   └── hero 2.webp                       ← cleaned-up front shot (side buildings faded out)
    └── majesty/                             ← Majesty restaurant (all compressed)
        ├── logo.webp                        ← restaurant logo (33KB)
        ├── front-photo.webp
        ├── interior.webp
        ├── interior-4.webp
        ├── 013.webp
        ├── 018.webp
        ├── 026.webp
        ├── img_3254.webp … img_3597.webp
```

**Adding new photos:** Source images live in `c:\ha-website\assets\images\`. Compress with:
```bash
ffmpeg -i input.jpg -vf "scale='min(960,iw):-2'" -c:v libwebp -quality 75 output.webp
```
Target ≤ 150KB per image. Do not include sundeck photos in the hotel pool.

---

## Room Data

### Valid Rooms
```js
const ROOMS = {
  // Floor 1
  101: { floor: 1, type: "Deluxe Twin" },
  102: { floor: 1, type: "Deluxe Twin" },
  // Floor 2
  201: { floor: 2, type: "Deluxe Double" },
  202: { floor: 2, type: "Deluxe Double" },
  203: { floor: 2, type: "Deluxe Twin" },
  // ... 204–212 all Deluxe Twin except 211 (Deluxe Double)
  // Floor 3
  301: { floor: 3, type: "Deluxe Double" },
  // ... 302–309 all Deluxe Twin, 311 Deluxe Double
  // NOTE: Rooms 310 and 312 are the TDI corporate office — not valid guest rooms
};
```

### URL Pattern
`info.hotelamericanosaipan.com?room=201`

JS reads `?room=` on load. If missing or invalid → show generic page (no room banner), no error.

---

## Page Sections (in order)

### 0. Top Bar
- 4px gold shimmer gradient bar, sticky at top

### 1. Hero + Header
- Full-width hero image (`assets/hero.jpg`) — dramatic upward exterior shot, Ken Burns animation
- Image uses `object-cover object-[center_75%]` to fill the frame and minimize sky
- Logo centered below hero (`assets/Hotel Americano HA logowider.png`, w-56)
- "Welcome To<br>Hotel Americano" heading — bold, tight line spacing (`leading-tight`), forced line break after "Welcome To"
- If valid room param: pill badge — **Room 201 · Deluxe Double · Floor 2**

### 2. Random Photo Strip
- Horizontal strip of 6 randomly shuffled hotel photos
- Pool: all files in `assets/photos/` — **no sundeck photos**
- Reshuffled on every page load
- Scroll-snap enabled, hidden scrollbar
- **Auto-scrolls continuously** (see Animations → Auto-scroll strips)

### 3. House Rules
- Heading: centered pill badge (`bg-primary`, `rounded-[999px]`, bold white uppercase, sized to fit content — not full-width)
- Rendered from `RULES` array in `main.js`:
- Check-in: 2:00 PM · Check-out: 12:00 PM
- Quiet hours: 10:00 PM – 7:00 AM
- No smoking inside (designated area outside)
- No parties or loud gatherings
- Visitors must register at the front desk
- Fee for lost/damaged key cards
- Cash and all major credit and debit cards accepted, except American Express
- No pets
- Conserve water and electricity
- No hotel property outside the premises
- Management not liable for lost valuables
- Disposable towels provided as standard; cloth towels available on request at front desk
- Additional amenities (combs, vanity kits, extra towels) available on request at front desk
- Housekeeping available daily from 9:00 AM to 2:00 PM
- Airport drop-off available for a fee — arrange through front desk, call ahead to schedule
- If no front desk staff is on duty, use the front desk kiosk and press "Need Help" to reach a staff member for urgent assistance

### 4. WiFi
- Network: **Hotel Americano WIFI**
- Password: **hotel8888**
- Tap-to-copy card with animated WiFi icon
- Card background: `bg-pure-gold/10` (soft gold tint, distinct from the page's cream background)

### 5. Important Numbers
- Heading: bold uppercase brown text, left-aligned (no pill, no line — plain label)
- Rendered from `NUMBERS` array in `main.js`. Current entries:

| Label            | Display               | Tel link          | Note                    |
|------------------|-----------------------|-------------------|-------------------------|
| Front Desk       | 670-233-6074 · 6075   | `+16702336074`    | "From room phone: Dial 0" |
| Taxi & Concierge | Ask the Front Desk    | none (info only)  | —                       |
| Emergency        | 911                   | `911`             | —                       |

Still needed: CHC Hospital number, Taxi direct number.

### 6. Majesty Chinese Restaurant
- Dark gradient card with gold top border
- Hero: single random photo from `assets/majesty/` pool (changes on each load)
- Majesty logo: `assets/majesty/logo.webp` at `h-[7.5rem]` (3× original size)
- Beside the logo (top row, vertically centered against it): **Check Out Our Menu** pill button → https://majesty-restaurant.com/menu.html (filled gold, dark bold text) with an italic serif "Ordering Available Soon!" caption underneath (`text-white text-xl`). Row uses `items-center` — the logo's gold-bordered text band measures out to sit almost exactly at the image's vertical midpoint (y=156–323 of 480px), so centering on the logo also centers on that text band. Button group nudged `ml-[7px]` to balance the horizontal gap against the logo.
- Heading: "Saipan's Finest Chinese Dining" — **no promo/offer language**
- Description: authentic Cantonese cuisine pitch
- Reservation contact: 📞 670-233-2088
- Website: 🌐 majesty-restaurant.com
- Scrollable photo strip at the bottom (6 random Majesty photos, `h-24`) — matches HA strip count
- **Auto-scrolls continuously**, same behavior as the hotel photo strip

### 7. Useful Links
- Heading: bold uppercase brown text, left-aligned (no pill, no line — plain label)
- **Visit Our Website** → https://hotelamericanosaipan.com (primary CTA, filled gold button)
- **Leave a Google Review** → Google travel hotels review URL
- **Get Directions** → `google.com/maps/search/?api=1&query=...` pin for Hotel Americano (fixed
  2026-07-11 — was a malformed embed `pb=` payload pasted onto a plain `/maps?` URL, which
  landed on a generic map instead of the HA pin; now matches rl-qrcode-info's working pattern)
- **Majesty Chinese Restaurant** → https://majesty-restaurant.com (outlined button)
- **TDI Saipan** → https://tdi-saipan.com (outlined button, live — no tag)
- **Residence Lodge** → https://residencelodge.com (outlined button, live — no tag)

### 8. Footer
- Dark onyx background (`#0F0802`), gold top border
- Side-by-side layout: HA monogram image (`h-40`) on the left, text stack on the right
- Right side: "Hotel Americano" label, Website + Review Us links, gold divider, copyright + domain
- All text in gold tones (`text-pure-gold` / `/70` / `/40` for hierarchy)

### 9. Bottom Navigation (fixed)
- Home / WiFi / Rules / Links
- Anchors scroll to `#home`, `#wifi`, `#rules`, `#links`

---

## Animations
- **Shimmer bar** — `shimmer` keyframe on the gold top bar, continuous
- **Hero Ken Burns** — slow zoom + pan on hero image on load
- **Logo/title entrance** — `scaleIn` + `fadeInUp` with stagger on page load
- **Scroll reveal** — `IntersectionObserver` triggers `.visible` on `.scroll-fade-in` elements
- **Staggered list items** — rules and number rows use `--i` CSS variable for sequential delay
- **WiFi icon pulse** — `wifiPulse` breathing animation
- **Photo strip hover** — `scale(1.03)` on hover
- **Auto-scroll strips** — `initAutoScrollStrip()` in `main.js` drives both the HA and Majesty photo strips. Behavior adapted from the property-band carousels on `c:\tdi-website`:
  - Advances on a fixed interval (3s), pausing while the user is touching/hovering the strip
  - Only runs while the strip is on screen (`IntersectionObserver`), skips entirely under `prefers-reduced-motion`
  - **Loops continuously** — each strip's photo set is duplicated (`aria-hidden` clones) so it can keep scrolling forward forever; once it lands on a duplicate (pixel-identical to its real twin), it silently snaps back to the matching real photo (via `scrollend`, with a `setTimeout` fallback) instead of jumping backward to the start

---

## Design Notes
- **Mobile-first** — almost always viewed on a phone after scanning a QR
- Max content width: **480px**, centered, `shadow-2xl` on desktop
- Images compressed to WebP/AVIF, target ≤ 150KB each
- Sections separated by gold dividers (`rgba(197, 148, 65, 0.2)`)
- Keep it clean and skimmable — guests won't read walls of text

---

## Deployment
- Cloudflare Pages auto-deploys on push to `main`
- Custom domain: `info.hotelamericanosaipan.com`
- CNAME in Cloudflare DNS pointing to Pages deployment
- No environment variables needed (fully static)

## SEO / Crawler Lockdown
This is a private in-room utility page — it must never be indexed.
- `robots.txt` at repo root: `Disallow: /` for all agents
- Every HTML page has `<meta name="robots" content="noindex, nofollow">` in `<head>`
- No sitemap.xml (never create one)
- No Open Graph, Twitter card, or canonical tags (keep it that way)

---

## Git Notes
- `.gitignore` excludes `assets/majesty photos/` (uncompressed source JPGs), `.superpowers/`, `.claude/`, and OS/editor noise
- **Never commit uncompressed originals** — they bloated the repo to 173MB once; history had to be rewritten with `git filter-repo` to fix it
- Always compress to WebP/AVIF before adding to `assets/` (see compression command above)
- Cloudflare Pages deploys automatically on push to `main`; no manual deploy needed

---

## i18n System
- **Languages:** English (default), Simplified Chinese (zh-CN), Traditional Chinese (zh-TW), Japanese (ja), Korean (ko)
- **Pattern:** `data-i18n` / `data-i18n-html` attributes on static HTML; `t(key, fallback)` calls inside JS-rendered sections (rules, numbers)
- **English** stays in the HTML as the baseline fallback — not in `i18n.js`
- **Lang selector:** globe icon pill, top-right corner (`#lang-selector`), floats above hero section
- **Persistence:** `localStorage` key `haQrLang`; auto-detects `navigator.language` on first visit
- **Fonts:** Noto Serif SC/TC, Shippori Mincho, Noto Serif KR loaded lazily per language switch
- **49 keys per language** across namespaces: `page`, `hero`, `rules`, `rule.0–15`, `wifi`, `numbers`, `num.0–2`, `majesty`, `links`, `footer`, `nav`, `room`
- To add a new language: add a block to `i18n.js` with all 49 keys, add a button entry in `renderLangSelector()` in `main.js`

---

## Out of Scope (for now)
- Live Beds24 data (no dynamic guest name/dates)
- Admin panel for updating content
- CHC Hospital and Taxi direct numbers (pending)
