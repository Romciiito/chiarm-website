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

function makeSvg({ title, subtitle, badge }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Glow -->
  <ellipse cx="600" cy="0" rx="500" ry="250" fill="url(#glow)"/>

  <!-- Logo box -->
  <rect x="538" y="88" width="48" height="48" rx="12" fill="#3B82F6"/>
  <text x="562" y="122" font-size="26" text-anchor="middle" fill="white">🛡</text>

  <!-- Brand name -->
  <text x="596" y="122" font-family="system-ui,-apple-system,sans-serif" font-size="26" font-weight="700" fill="#f8fafc" dominant-baseline="middle">CHIARM</text>

  <!-- Title -->
  <text x="600" y="220" font-family="system-ui,-apple-system,sans-serif" font-size="60" font-weight="800" fill="#f8fafc" text-anchor="middle" letter-spacing="-1">${title}</text>

  <!-- Subtitle -->
  <text x="600" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="24" fill="#94a3b8" text-anchor="middle">${subtitle}</text>

  <!-- Pills row -->
  <rect x="268" y="370" width="160" height="40" rx="20" fill="none" stroke="#3B82F6" stroke-opacity="0.4"/>
  <text x="348" y="396" font-family="system-ui,-apple-system,sans-serif" font-size="16" fill="#93c5fd" text-anchor="middle">🔒 Zero cloud</text>

  <rect x="452" y="370" width="148" height="40" rx="20" fill="none" stroke="#3B82F6" stroke-opacity="0.4"/>
  <text x="526" y="396" font-family="system-ui,-apple-system,sans-serif" font-size="16" fill="#93c5fd" text-anchor="middle">🤖 Local AI</text>

  <rect x="624" y="370" width="148" height="40" rx="20" fill="none" stroke="#3B82F6" stroke-opacity="0.4"/>
  <text x="698" y="396" font-family="system-ui,-apple-system,sans-serif" font-size="16" fill="#93c5fd" text-anchor="middle">📱 Telegram</text>

  <!-- Domain -->
  <text x="600" y="565" font-family="system-ui,-apple-system,sans-serif" font-size="18" fill="#475569" text-anchor="middle" letter-spacing="0.5">chiarm.app</text>
</svg>`;
}

const pages = [
  {
    out: "public/og.png",
    title: "Your Telegram CRM, on your computer",
    subtitle: "Privacy-first · AI-powered · Your data never leaves your machine",
    badge: null,
  },
  {
    out: "public/og-pricing.png",
    title: "Simple, transparent pricing",
    subtitle: "One flat rate · No per-seat fees · No usage limits",
    badge: null,
  },
  {
    out: "public/og-download.png",
    title: "Download CHIARM",
    subtitle: "Free to download · macOS available now",
    badge: null,
  },
  {
    out: "public/og-docs.png",
    title: "Documentation",
    subtitle: "Install, connect Telegram, and go in under 5 minutes",
    badge: null,
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
