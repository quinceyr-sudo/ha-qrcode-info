// ─── ROOM DATA ──────────────────────────────────────────────────────────────

const ROOMS = {
  101: { floor: 1, type: "Deluxe Twin" },
  102: { floor: 1, type: "Deluxe Twin" },
  201: { floor: 2, type: "Deluxe Double" },
  202: { floor: 2, type: "Deluxe Double" },
  203: { floor: 2, type: "Deluxe Twin" },
  204: { floor: 2, type: "Deluxe Twin" },
  205: { floor: 2, type: "Deluxe Twin" },
  206: { floor: 2, type: "Deluxe Twin" },
  207: { floor: 2, type: "Deluxe Twin" },
  208: { floor: 2, type: "Deluxe Twin" },
  209: { floor: 2, type: "Deluxe Twin" },
  210: { floor: 2, type: "Deluxe Twin" },
  211: { floor: 2, type: "Deluxe Double" },
  212: { floor: 2, type: "Deluxe Twin" },
  301: { floor: 3, type: "Deluxe Double" },
  302: { floor: 3, type: "Deluxe Twin" },
  303: { floor: 3, type: "Deluxe Twin" },
  304: { floor: 3, type: "Deluxe Twin" },
  305: { floor: 3, type: "Deluxe Twin" },
  306: { floor: 3, type: "Deluxe Twin" },
  307: { floor: 3, type: "Deluxe Twin" },
  308: { floor: 3, type: "Deluxe Twin" },
  309: { floor: 3, type: "Deluxe Twin" },
  311: { floor: 3, type: "Deluxe Double" },
  // 310 and 312 intentionally excluded — TDI corporate office
};

// ─── CONTENT ────────────────────────────────────────────────────────────────

const RULES = [
  "Check-in: 2:00 PM · Check-out: 12:00 PM",
  "Quiet hours: 10:00 PM – 7:00 AM",
  "No smoking inside the property. Designated smoking area is outside.",
  "No parties or loud gatherings in guest rooms.",
  "Visitors must be registered at the front desk.",
  "A fee applies for lost or damaged key cards.",
  "Cash and all major credit and debit cards are accepted, except American Express.",
  "Pets are not allowed on the premises.",
  "Please conserve water and electricity.",
  "Hotel property must not be taken outside the premises.",
  "Management is not liable for lost or stolen valuables.",
  "Disposable towels are provided as standard. Cloth towels are available upon request at the front desk.",
  "Additional amenities — combs, vanity kits, and extra towels — are available on request at the front desk.",
  "Housekeeping service is available daily from 9:00 AM to 2:00 PM.",
  "Airport drop-off is available for a fee and can be arranged through the front desk. Please call ahead to schedule.",
  "If no front desk staff is on duty, please use the front desk kiosk and press “Need Help” to reach a staff member for urgent assistance.",
];

const NUMBERS = [
  {
    label:    "Front Desk",
    display:  "670-233-6074 · 6075",
    tel:      "+16702336074",
    note:     "From room phone: Dial 0",
    icon:     "📞",
    tappable: true,
  },
  {
    label:    "Taxi & Concierge",
    display:  "Ask the Front Desk",
    tel:      null,
    icon:     "🚕",
    tappable: false,
  },
  {
    label:    "Emergency",
    display:  "911",
    tel:      "911",
    icon:     "🚨",
    tappable: true,
  },
];

// ─── PHOTO POOLS ─────────────────────────────────────────────────────────────

const HOTEL_PHOTOS = [
  { src: "assets/photos/chandelier.avif",    alt: "Lobby chandelier" },
  { src: "assets/photos/lobby-floor.avif",   alt: "First floor lobby" },
  { src: "assets/photos/lobby-lounge.avif",  alt: "Lobby lounge" },
  { src: "assets/photos/lobby-stairs.avif",  alt: "Lobby staircase" },
  { src: "assets/photos/reception.avif",     alt: "Reception" },
  { src: "assets/photos/reception2.avif",    alt: "Reception area" },
  { src: "assets/photos/breakfast.avif",     alt: "Breakfast area" },
  { src: "assets/photos/breakfast2.avif",    alt: "Breakfast setup" },
  { src: "assets/photos/room-entrance.avif", alt: "Room entrance" },
  { src: "assets/photos/room-tv.avif",       alt: "Room amenities" },
  { src: "assets/photos/room-amenity.avif",  alt: "In-room amenities" },
  { src: "assets/photos/room-safe.avif",     alt: "In-room safe" },
  { src: "assets/photos/staircase.avif",     alt: "Staircase" },
  { src: "assets/photos/staircase2.avif",    alt: "Staircase view" },
  { src: "assets/photos/facade.webp",        alt: "Hotel facade" },
  { src: "assets/photos/room-twin.webp",     alt: "Deluxe Twin room" },
  { src: "assets/photos/room-double.webp",   alt: "Deluxe Double room" },
  { src: "assets/photos/hero 2.webp",        alt: "Hotel exterior" },
  { src: "assets/lobby.avif",                alt: "Hotel lobby" },
];

const MAJESTY_PHOTOS = [
  { src: "assets/majesty/front-photo.webp", alt: "Majesty Restaurant exterior" },
  { src: "assets/majesty/interior.webp",    alt: "Majesty Restaurant interior" },
  { src: "assets/majesty/interior-4.webp",  alt: "Majesty Restaurant dining" },
  { src: "assets/majesty/013.webp",         alt: "Majesty Restaurant" },
  { src: "assets/majesty/018.webp",         alt: "Majesty Restaurant" },
  { src: "assets/majesty/026.webp",         alt: "Majesty Restaurant" },
  { src: "assets/majesty/img_3254.webp",    alt: "Majesty Restaurant" },
  { src: "assets/majesty/img_3290.webp",    alt: "Majesty Restaurant" },
  { src: "assets/majesty/img_3304.webp",    alt: "Majesty Restaurant" },
  { src: "assets/majesty/img_3503.webp",    alt: "Majesty Restaurant" },
  { src: "assets/majesty/img_3567.webp",    alt: "Majesty Restaurant" },
  { src: "assets/majesty/img_3580.webp",    alt: "Majesty Restaurant" },
  { src: "assets/majesty/img_3597.webp",    alt: "Majesty Restaurant" },
];

// ─── INIT ────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initRoomBanner();
  renderRules();
  renderNumbers();
  renderPhotoStrip();
  renderMajestyPhoto();
  renderMajestyStrip();
  initWifiCopy();
  initScrollAnimations();
  initAutoScrollStrip(document.getElementById("photo-strip"));
  initAutoScrollStrip(document.getElementById("majesty-strip"));
});

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── ROOM BANNER ─────────────────────────────────────────────────────────────

function initRoomBanner() {
  const params = new URLSearchParams(window.location.search);
  const roomParam = params.get("room");
  if (!roomParam) return;

  const roomNum = parseInt(roomParam, 10);
  const room = ROOMS[roomNum];
  if (!room) return;

  const banner = document.getElementById("room-banner");
  const bannerText = document.getElementById("room-banner-text");
  if (!banner || !bannerText) return;

  bannerText.textContent = `Room ${roomNum}  ·  ${room.type}  ·  Floor ${room.floor}`;
  banner.classList.remove("hidden");
}

// ─── PHOTO STRIP ─────────────────────────────────────────────────────────────

function renderPhotoStrip() {
  const strip = document.getElementById("photo-strip");
  if (!strip) return;

  const picked = shuffle(HOTEL_PHOTOS).slice(0, 6);
  strip.innerHTML = "";

  picked.forEach(({ src, alt }) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = "h-28 w-40 flex-shrink-0 object-cover rounded-lg opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-[1.03]";
    img.loading = "lazy";
    strip.appendChild(img);
  });
}

// ─── MAJESTY PHOTO ────────────────────────────────────────────────────────────

function renderMajestyPhoto() {
  const img = document.getElementById("majesty-hero");
  if (!img) return;
  const pick = MAJESTY_PHOTOS[Math.floor(Math.random() * MAJESTY_PHOTOS.length)];
  img.src = pick.src;
  img.alt = pick.alt;
}

function renderMajestyStrip() {
  const strip = document.getElementById("majesty-strip");
  if (!strip) return;
  const picked = shuffle(MAJESTY_PHOTOS).slice(0, 6);
  strip.innerHTML = "";
  picked.forEach(({ src, alt }) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = "h-24 w-32 flex-shrink-0 object-cover rounded-md brightness-75 transition-all duration-300 hover:brightness-100 hover:scale-[1.03]";
    img.loading = "lazy";
    strip.appendChild(img);
  });
}

// ─── AUTO-SCROLL STRIPS ──────────────────────────────────────────────────────
// Mirrors the property-band carousel behavior on tdi-website: auto-advance on
// an interval, pause while the user is touching/hovering it, only run while
// the strip is on screen, and skip entirely under reduced-motion.

function initAutoScrollStrip(strip, interval = 3000) {
  if (!strip) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const realItems = Array.from(strip.children);
  const realCount = realItems.length;
  if (realCount < 2) return;

  // Duplicate the set once so the strip can keep scrolling forward forever.
  // Once it lands on a duplicate (visually identical to its real twin), we
  // silently rewind to the matching real photo so it loops seamlessly
  // instead of snapping back to the start.
  realItems.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    strip.appendChild(clone);
  });
  const allItems = Array.from(strip.children);

  let timer = null;
  let paused = false;
  let current = 0;

  function rewindIfNeeded() {
    if (current < realCount) return;
    current -= realCount;
    strip.scrollTo({ left: allItems[current].offsetLeft, behavior: "auto" });
  }

  const supportsScrollend = "onscrollend" in window;
  if (supportsScrollend) {
    strip.addEventListener("scrollend", rewindIfNeeded);
  }

  function advance() {
    if (paused || document.hidden) return;
    current++;
    strip.scrollTo({ left: allItems[current].offsetLeft, behavior: "smooth" });
    if (!supportsScrollend) setTimeout(rewindIfNeeded, 500);
  }

  function start() {
    if (!timer) timer = setInterval(advance, interval);
  }
  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  strip.addEventListener("touchstart", () => { paused = true; }, { passive: true });
  strip.addEventListener("touchend", () => { paused = false; });
  strip.addEventListener("mouseenter", () => { paused = true; });
  strip.addEventListener("mouseleave", () => { paused = false; });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
    }, { threshold: 0.4 });
    io.observe(strip);
  } else {
    start();
  }
}

// ─── RULES ───────────────────────────────────────────────────────────────────

function renderRules() {
  const list = document.querySelector(".rules-list");
  if (!list) return;
  RULES.forEach((rule, i) => {
    const li = document.createElement("li");
    li.className = "flex items-start gap-3 stagger-item";
    li.style.setProperty("--i", i);
    li.innerHTML = `
      <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" aria-hidden="true"></span>
      <p class="font-body-md text-body-md leading-relaxed">${rule}</p>
    `;
    list.appendChild(li);
  });
}

// ─── NUMBERS ─────────────────────────────────────────────────────────────────

function renderNumbers() {
  const container = document.getElementById("numbers-list");
  if (!container) return;

  NUMBERS.forEach(({ label, display, tel, note, icon, tappable }, i) => {
    const el = document.createElement(tappable ? "a" : "div");
    el.className = "flex items-center justify-between p-4 bg-surface-container-low rounded-lg shadow-soft transition-colors group stagger-item" +
      (tappable ? " hover:bg-surface-container cursor-pointer" : " opacity-80");
    el.style.setProperty("--i", i);
    if (tappable) {
      el.href = `tel:${tel}`;
      el.setAttribute("aria-label", `Call ${label}: ${display}`);
    }
    el.setAttribute("role", "listitem");

    el.innerHTML = `
      <div class="flex items-center gap-4">
        <span class="text-xl flex-shrink-0" aria-hidden="true">${icon}</span>
        <div>
          <p class="font-label-sm text-label-sm text-charcoal-text tracking-wide uppercase">${label}</p>
          <p class="font-body-md text-body-md text-on-surface-variant">${display}</p>
          ${note ? `<p class="text-[11px] text-on-surface-variant/60 mt-0.5 tracking-wide">${note}</p>` : ""}
        </div>
      </div>
      ${tappable
        ? `<span class="material-symbols-outlined text-pure-gold group-hover:translate-x-1 transition-transform" aria-hidden="true">chevron_right</span>`
        : `<span class="material-symbols-outlined text-pure-gold/40" aria-hidden="true">info</span>`}
    `;
    container.appendChild(el);
  });
}

// ─── WIFI COPY ────────────────────────────────────────────────────────────────

function initWifiCopy() {
  const btn = document.getElementById("copy-wifi");
  const pw = document.getElementById("wifi-password");
  const status = document.getElementById("copy-status");
  if (!btn || !pw) return;

  btn.addEventListener("click", () => {
    const password = pw.textContent.trim();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(password).then(() => showCopied(btn, status));
    } else {
      const ta = document.createElement("textarea");
      ta.value = password;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        showCopied(btn, status);
      } catch (_) {
        btn.textContent = "Copy manually: " + password;
      }
      document.body.removeChild(ta);
    }
  });
}

function showCopied(btn, status) {
  const original = btn.textContent;
  btn.textContent = "COPIED ✓";
  btn.style.backgroundColor = "#C59765";
  btn.style.color = "#ffffff";
  btn.style.borderColor = "#C59765";
  if (status) status.textContent = "WiFi password copied to clipboard.";
  setTimeout(() => {
    btn.textContent = original;
    btn.style.backgroundColor = "";
    btn.style.color = "";
    btn.style.borderColor = "";
    if (status) status.textContent = "";
  }, 2000);
}

// ─── SCROLL ANIMATIONS ───────────────────────────────────────────────────────

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".scroll-fade-in").forEach(el => observer.observe(el));
}
