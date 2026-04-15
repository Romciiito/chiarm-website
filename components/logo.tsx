import { cn } from "@/lib/utils";

// ── SVG mark ─────────────────────────────────────────────────────────────────
// Recreated from the CHIARM brand asset: two speech-bubble shapes overlapping.
// Back bubble  = blue-indigo (#6372FA), top-right.
// Front bubble = hot-pink   (#FF5CBF), bottom-left, with tail, white gap via stroke.

export function LogoMark({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Back bubble – blue/indigo */}
      <rect x="24" y="6" width="66" height="46" rx="13" fill="#6372FA" />
      {/* Front bubble – pink, with tail bottom-left.
          stroke + paint-order creates the white separation gap. */}
      <path
        d="M21,30 H69 Q82,30 82,43 V71 Q82,84 69,84 H30 L8,100 L24,84 H21 Q8,84 8,71 V43 Q8,30 21,30 Z"
        fill="#FF5CBF"
        stroke="white"
        strokeWidth="5"
        style={{ paintOrder: "stroke fill" }}
      />
    </svg>
  );
}

// ── Full logo (mark + wordmark) ───────────────────────────────────────────────

type LogoSize = "xs" | "sm" | "md" | "lg";

const sizeMap: Record<LogoSize, { mark: number; text: string }> = {
  xs: { mark: 22, text: "text-xs font-bold"   },
  sm: { mark: 28, text: "text-sm font-bold"   },
  md: { mark: 36, text: "text-base font-bold" },
  lg: { mark: 48, text: "text-xl font-bold"   },
};

export function Logo({
  size = "sm",
  className,
}: {
  size?: LogoSize;
  className?: string;
}) {
  const s = sizeMap[size];
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark size={s.mark} />
      <span className={cn(s.text, "tracking-tight")} style={{ letterSpacing: "-0.01em" }}>
        CHIARM
      </span>
    </span>
  );
}

// ── Inline SVG string for OG image generation (Node / sharp) ─────────────────
// Returns an SVG string; does NOT use JSX.

export function logoMarkSvgString(size = 80): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="6" width="66" height="46" rx="13" fill="#6372FA"/>
  <path d="M21,30 H69 Q82,30 82,43 V71 Q82,84 69,84 H30 L8,100 L24,84 H21 Q8,84 8,71 V43 Q8,30 21,30 Z" fill="#FF5CBF" stroke="white" stroke-width="5" style="paint-order:stroke fill"/>
</svg>`;
}
