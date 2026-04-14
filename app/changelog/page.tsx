import { Badge } from "@/components/ui/badge";

type ChangeType = "new" | "improved" | "fixed" | "coming";

const typeStyles: Record<ChangeType, string> = {
  new: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/20",
  improved: "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/20",
  fixed: "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/20",
  coming: "bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/20",
};

const typeLabel: Record<ChangeType, string> = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
  coming: "Coming soon",
};

interface Change {
  type: ChangeType;
  text: string;
}

interface Release {
  version: string;
  date: string;
  highlight?: string;
  changes: Change[];
}

const releases: Release[] = [
  {
    version: "1.3.0",
    date: "April 2025",
    highlight: "Voice cloning is now available in beta",
    changes: [
      { type: "new", text: "Voice cloning: record a 30–60s sample and send voice notes in your voice" },
      { type: "new", text: "AI conversation summaries for threads longer than 20 messages" },
      { type: "improved", text: "Smart reply suggestions now use 2× longer context window" },
      { type: "improved", text: "Account switcher now supports keyboard shortcut Cmd+1–9" },
      { type: "fixed", text: "Fixed crash when opening conversations with very long message history" },
      { type: "fixed", text: "Fixed duplicate notification badge on multi-account setup" },
    ],
  },
  {
    version: "1.2.1",
    date: "March 2025",
    changes: [
      { type: "fixed", text: "Fixed Telegram reconnection loop after network change" },
      { type: "fixed", text: "Fixed template variable substitution for names containing special characters" },
      { type: "improved", text: "Reduced idle memory usage by ~30%" },
    ],
  },
  {
    version: "1.2.0",
    date: "February 2025",
    highlight: "Team roles and multi-account management",
    changes: [
      { type: "new", text: "Role-based team collaboration: Owner, Manager, and Chatter roles" },
      { type: "new", text: "Multi-account dashboard with unified inbox across all accounts" },
      { type: "new", text: "Per-chatter analytics: messages sent, replied, average response time" },
      { type: "improved", text: "Anti-spam engine now supports per-account rate limit configuration" },
      { type: "improved", text: "Settings UI redesigned with sidebar navigation" },
      { type: "fixed", text: "Fixed media files not loading after app restart" },
    ],
  },
  {
    version: "1.1.0",
    date: "January 2025",
    highlight: "AI smart replies",
    changes: [
      { type: "new", text: "AI smart reply suggestions (Cmd+Shift+R) using local language model" },
      { type: "new", text: "Message templates with variable support ({{name}}, {{date}}, etc.)" },
      { type: "new", text: "Local conversation analytics dashboard" },
      { type: "improved", text: "Startup time reduced by 40% with lazy model loading" },
      { type: "fixed", text: "Fixed incorrect unread count after marking messages as read" },
    ],
  },
  {
    version: "1.0.0",
    date: "December 2024",
    highlight: "Initial release",
    changes: [
      { type: "new", text: "Core Telegram messaging: send, receive, manage conversations" },
      { type: "new", text: "Anti-spam engine with rate limiting and consent validation" },
      { type: "new", text: "Multi-Telegram-account support" },
      { type: "new", text: "macOS app (Apple Silicon and Intel)" },
      { type: "new", text: "100% local — no servers, no telemetry" },
    ],
  },
  {
    version: "Roadmap",
    date: "Coming up",
    changes: [
      { type: "coming", text: "Windows (x64) native app" },
      { type: "coming", text: "Linux AppImage" },
      { type: "coming", text: "WhatsApp account support" },
      { type: "coming", text: "Instagram DM support" },
      { type: "coming", text: "Zapier / n8n webhook integration" },
      { type: "coming", text: "Encrypted local backup" },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Changelog
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Release notes</h1>
          <p className="text-muted-foreground">
            Every update, fix, and new feature — in chronological order.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border/60" />

          <div className="space-y-10">
            {releases.map((release) => (
              <div key={release.version} className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-1 h-[23px] w-[23px] rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-lg">v{release.version}</span>
                    <span className="text-xs text-muted-foreground">{release.date}</span>
                  </div>
                  {release.highlight && (
                    <p className="text-sm text-muted-foreground italic mb-3">
                      {release.highlight}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {release.changes.map((change, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={`mt-0.5 inline-flex shrink-0 items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${typeStyles[change.type]}`}
                        >
                          {typeLabel[change.type]}
                        </span>
                        <span className="text-muted-foreground">{change.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
