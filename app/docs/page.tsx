import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Documentation — CHIARM",
  description:
    "User guide for CHIARM: installation on macOS, connecting Telegram accounts, AI features, team setup, and privacy configuration.",
  openGraph: {
    title: "Documentation — CHIARM",
    description: "Install CHIARM, connect Telegram, and get your team running in minutes.",
    url: "https://chiarm.app/docs",
    images: [{ url: "/og-docs.png", width: 1200, height: 630 }],
  },
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, MessageSquare, Bot, Users, Shield, ArrowRight, BookOpen, Terminal } from "lucide-react";

const sections = [
  {
    id: "installation",
    icon: <Download className="h-5 w-5" />,
    title: "Installation",
    content: [
      {
        heading: "System requirements",
        body: "CHIARM requires macOS 12 Monterey or later on Apple Silicon (M1/M2/M3) or Intel. Windows and Linux support is coming soon. You'll need at least 4 GB of RAM and 500 MB of free disk space.",
      },
      {
        heading: "Download and install on macOS",
        body: `1. Download the correct .dmg for your Mac (arm64 for Apple Silicon, x64 for Intel) from the Download page.\n2. Open the .dmg file. Drag the CHIARM icon into your Applications folder.\n3. Eject the .dmg and launch CHIARM from Applications.\n4. If macOS shows a security warning ("unidentified developer"), go to System Settings → Privacy & Security → scroll down and click "Open Anyway".\n5. CHIARM will launch and show the onboarding screen.`,
      },
      {
        heading: "Updating CHIARM",
        body: "CHIARM checks for updates on launch. When an update is available, a banner appears in the app. Click 'Install Update' — the app will download, replace itself, and restart. Your data is never affected by updates.",
      },
    ],
  },
  {
    id: "first-launch",
    icon: <Terminal className="h-5 w-5" />,
    title: "First launch",
    content: [
      {
        heading: "Creating your workspace",
        body: "On first launch, CHIARM creates a local workspace in ~/Library/Application Support/CHIARM/. This folder contains your database, AI models, templates, and settings. Back it up regularly — it's the only copy of your data.",
      },
      {
        heading: "Account setup",
        body: "CHIARM doesn't require you to create an account with us. Your license is tied to your machine. On first launch, enter your license key (from your purchase confirmation email) to activate the app.",
      },
    ],
  },
  {
    id: "telegram",
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Connecting Telegram",
    content: [
      {
        heading: "Connecting your first account",
        body: `1. Click "Add Telegram Account" in the sidebar.\n2. Enter the phone number associated with your Telegram account (with country code).\n3. Telegram will send you a verification code via SMS or Telegram message.\n4. Enter the code in CHIARM. If two-factor authentication is enabled, enter your 2FA password too.\n5. CHIARM will sync your conversations. This may take a few minutes for large accounts.`,
      },
      {
        heading: "Adding more accounts",
        body: "Click the '+' button in the account switcher (bottom-left sidebar). Repeat the login process. You can switch between accounts instantly using the account switcher or keyboard shortcut Cmd+1, Cmd+2, etc.",
      },
      {
        heading: "Rate limiting & anti-spam",
        body: "CHIARM enforces conservative rate limits by default to protect your Telegram accounts from restrictions. You can adjust limits in Settings → Anti-Spam. Always respect Telegram's Terms of Service when sending messages.",
      },
    ],
  },
  {
    id: "ai-features",
    icon: <Bot className="h-5 w-5" />,
    title: "AI features",
    content: [
      {
        heading: "Setting up the AI model",
        body: "On first use, CHIARM downloads a lightweight language model (~2 GB). This happens once. The model runs entirely on your CPU/GPU — nothing is sent to the internet. Download requires an active internet connection.",
      },
      {
        heading: "Smart replies",
        body: "When viewing a conversation, click the ✨ icon or press Cmd+Shift+R to generate a smart reply suggestion based on the conversation context. You can edit the suggestion before sending.",
      },
      {
        heading: "Conversation summaries",
        body: "Open any conversation and click 'Summarise' (or press Cmd+Shift+S). CHIARM generates a bullet-point summary of the last 50 messages. Useful for catching up on long threads before replying.",
      },
      {
        heading: "Voice cloning",
        body: `Voice cloning lets you send voice messages in your own voice without recording each one.\n\n1. Go to Settings → Voice → Voice Clone.\n2. Record a 30–60 second sample of your natural speaking voice.\n3. CHIARM trains a local voice model from your sample.\n4. When composing a message, click the 🎤 icon → "Send as voice". Type your message and CHIARM synthesises a voice note.`,
      },
    ],
  },
  {
    id: "team",
    icon: <Users className="h-5 w-5" />,
    title: "Team collaboration",
    content: [
      {
        heading: "Roles",
        body: "CHIARM has three roles:\n- Owner: full access, manages licenses, can add/remove team members\n- Manager: can assign accounts, view all analytics, configure templates\n- Chatter: access to assigned Telegram accounts only, cannot change settings",
      },
      {
        heading: "Inviting team members",
        body: "Go to Settings → Team → Invite. Enter the team member's email. They'll receive an invite with download instructions. Team members install CHIARM independently — your data is not shared with them unless you explicitly assign accounts.",
      },
      {
        heading: "Assigning accounts",
        body: "In Settings → Team, drag a Telegram account onto a team member's name to grant them access. You can assign the same account to multiple chatters.",
      },
    ],
  },
  {
    id: "privacy",
    icon: <Shield className="h-5 w-5" />,
    title: "Privacy & security",
    content: [
      {
        heading: "Data storage",
        body: "All data — conversations, contacts, templates, AI models, analytics — is stored locally at ~/Library/Application Support/CHIARM/. CHIARM has no backend servers and never transmits your data.",
      },
      {
        heading: "Backups",
        body: "CHIARM does not back up your data automatically. We strongly recommend backing up ~/Library/Application Support/CHIARM/ regularly using Time Machine or another backup solution.",
      },
      {
        heading: "Uninstalling",
        body: "To fully uninstall CHIARM, move the app from Applications to Trash, then delete ~/Library/Application Support/CHIARM/. This is irreversible — all local data will be lost.",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Documentation
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">User Guide</h1>
          <p className="text-muted-foreground">
            Everything you need to install CHIARM, connect your Telegram accounts, and get your team up and running.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar TOC */}
          <aside className="lg:w-56 shrink-0">
            <nav className="sticky top-20 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-2">
                On this page
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <span className="shrink-0 text-muted-foreground/60">{s.icon}</span>
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="flex-1 min-w-0 space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                <div className="space-y-6">
                  {section.content.map((block) => (
                    <div key={block.heading}>
                      <h3 className="font-semibold text-sm mb-2">{block.heading}</h3>
                      <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {block.body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Support callout */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <BookOpen className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold mb-1.5">Didn&apos;t find what you need?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our documentation is growing. If something is missing, email us and we&apos;ll help.
              </p>
              <ButtonLink href="mailto:support@chiarm.app" variant="outline" size="sm" className="rounded-full">
                Contact support
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
