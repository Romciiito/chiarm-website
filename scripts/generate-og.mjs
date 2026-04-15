/**
 * Generates static OG images (1200×630 PNG) from SVG templates.
 * Run via: node scripts/generate-og.mjs
 * Integrated into the build via package.json `prebuild` script.
 */
import { createRequire } from "module";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const require = createRequire(import.meta.url);

// Use sharp bundled by Next.js
let sharp;
try {
  sharp = require(join(root, "node_modules", "sharp"));
} catch {
  console.warn("⚠️  sharp not found — skipping OG image generation");
  process.exit(0);
}

const W = 1200;
const H = 630;

// Brand colors matching the actual CHIARM logo
const BLUE   = "#6372FA";   // logo back bubble
const PINK   = "#FF5CBF";   // logo front bubble
const DARK   = "#0D0F1A";   // dark background (matches dark logo variant)
const DARK2  = "#141726";   // lighter layer

// Logo mark as inline SVG (100×100 viewBox, placed at desired position/size)
function logoMarkAt(x, y, size = 72) {
  const s = size / 100;
  return `<g transform="translate(${x},${y}) scale(${s})">
    <rect x="24" y="6" width="66" height="46" rx="13" fill="${BLUE}"/>
    <path d="M21,30 H69 Q82,30 82,43 V71 Q82,84 69,84 H30 L8,100 L24,84 H21 Q8,84 8,71 V43 Q8,30 21,30 Z"
          fill="${PINK}" stroke="white" stroke-width="5" paint-order="stroke fill"/>
  </g>`;
}

function makeSvg({ title, subtitle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="${DARK}"/>
      <stop offset="50%"  stop-color="${DARK2}"/>
      <stop offset="100%" stop-color="${DARK}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="65%">
      <stop offset="0%"   stop-color="${BLUE}" stop-opacity="0.22"/>
      <stop offset="60%"  stop-color="${PINK}" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="${BLUE}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background + glow -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <ellipse cx="600" cy="0" rx="520" ry="270" fill="url(#glow)"/>

  <!-- Logo mark (centered horizontally, near top) -->
  ${logoMarkAt(551, 68, 98)}

  <!-- Brand name -->
  <text x="662" y="128" font-family="system-ui,-apple-system,sans-serif"
        font-size="32" font-weight="700" fill="#f8fafc" dominant-baseline="middle"
        letter-spacing="-0.5">CHIARM</text>

  <!-- Title (may be long — split on ·) -->
  <text x="600" y="232" font-family="system-ui,-apple-system,sans-serif"
        font-size="56" font-weight="800" fill="#f8fafc" text-anchor="middle"
        letter-spacing="-1">${title}</text>

  <!-- Subtitle -->
  <text x="600" y="312" font-family="system-ui,-apple-system,sans-serif"
        font-size="22" fill="#94a3b8" text-anchor="middle">${subtitle}</text>

  <!-- Pills row -->
  <rect x="250" y="374" width="166" height="38" rx="19" fill="none" stroke="${BLUE}" stroke-opacity="0.35"/>
  <text x="333" y="399" font-family="system-ui,-apple-system,sans-serif"
        font-size="15" fill="#a5b4fc" text-anchor="middle">🔒 Zero cloud</text>

  <rect x="438" y="374" width="154" height="38" rx="19" fill="none" stroke="${BLUE}" stroke-opacity="0.35"/>
  <text x="515" y="399" font-family="system-ui,-apple-system,sans-serif"
        font-size="15" fill="#a5b4fc" text-anchor="middle">🤖 Local AI</text>

  <rect x="614" y="374" width="154" height="38" rx="19" fill="none" stroke="${PINK}" stroke-opacity="0.35"/>
  <text x="691" y="399" font-family="system-ui,-apple-system,sans-serif"
        font-size="15" fill="#f9a8d4" text-anchor="middle">📱 Telegram</text>

  <rect x="790" y="374" width="162" height="38" rx="19" fill="none" stroke="${PINK}" stroke-opacity="0.35"/>
  <text x="871" y="399" font-family="system-ui,-apple-system,sans-serif"
        font-size="15" fill="#f9a8d4" text-anchor="middle">🔊 Voice AI</text>

  <!-- Domain -->
  <text x="600" y="568" font-family="system-ui,-apple-system,sans-serif"
        font-size="17" fill="#475569" text-anchor="middle" letter-spacing="0.5">chiarm.app</text>
</svg>`;
}

const pages = [
  {
    out: "public/og.png",
    title: "Your Telegram CRM, on your computer",
    subtitle: "Privacy-first · AI-powered · Your data never leaves your machine",
  },
  {
    out: "public/og-pricing.png",
    title: "Simple, transparent pricing",
    subtitle: "One flat rate · No per-seat fees · No usage limits",
  },
  {
    out: "public/og-docs.png",
    title: "Documentation",
    subtitle: "Install, connect Telegram, and go in under 5 minutes",
  },
];

mkdirSync(join(root, "public"), { recursive: true });

for (const page of pages) {
  const svg = makeSvg(page);
  const outPath = join(root, page.out);
  await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(outPath);
  console.log(`✓ Generated ${page.out}`);
}

console.log("✓ All OG images generated");
