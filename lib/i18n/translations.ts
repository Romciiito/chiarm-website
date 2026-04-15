export type Locale = "en" | "cs";

// ─────────────────────────────────────────────────────────────────────────────
// English
// ─────────────────────────────────────────────────────────────────────────────
const en = {
  nav: {
    pricing: "Pricing",
    docs: "Docs",
    changelog: "Changelog",
    contact: "Contact",
    getStarted: "Get started",
  },
  footer: {
    tagline: "Privacy-first Telegram CRM that runs entirely on your computer.",
    privacyLine: "Your data never leaves your machine.",
    copyright: "All rights reserved.",
    groups: [
      {
        name: "Product",
        links: [
          { label: "Features",   href: "/#features" },
          { label: "Pricing",    href: "/pricing" },
          { label: "Changelog",  href: "/changelog" },
        ],
      },
      {
        name: "Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "FAQ",           href: "/#faq" },
        ],
      },
      {
        name: "Legal",
        links: [
          { label: "Terms of Service",  href: "/terms" },
          { label: "Privacy Policy",    href: "/privacy" },
          { label: "DPA",              href: "/dpa" },
        ],
      },
      {
        name: "Support",
        links: [
          { label: "Contact", href: "mailto:support@chiarm.app" },
          { label: "Status",  href: "https://status.chiarm.app" },
        ],
      },
    ],
  },
  home: {
    badge: "Now with AI voice cloning",
    h1Line1: "Your Telegram CRM,",
    h1Line2: "on your computer",
    descPre: "Manage Telegram conversations, automate follow-ups, and send AI-powered messages — ",
    descStrong: "without your data ever leaving your machine.",
    ctaPrimary: "Get started",
    ctaSecondary: "See pricing",
    platformNote: "macOS available now · Windows & Linux coming soon",
    videoPlaceholder: "Product demo video coming soon",
    stats: [
      { label: "100% private by design",  sub: "All data stays on your computer" },
      { label: "Telegram-native",         sub: "WhatsApp & Instagram coming soon" },
      { label: "AI-powered, locally",     sub: "Summaries, smart replies, voice cloning" },
    ],
    whyTitle: "Why choose CHIARM?",
    whyCards: [
      { title: "Zero-knowledge architecture", desc: "Your messages, contacts, and templates never touch our infrastructure. The app runs entirely offline once installed." },
      { title: "Anti-spam engine",            desc: "Built-in rate limiting and consent validation protect your accounts from bans and keep your messaging compliant." },
      { title: "Multi-account & teams",       desc: "Owner, manager, and chatter roles. Multiple Telegram accounts, one unified interface for your whole team." },
      { title: "Native desktop performance",  desc: "No browser tabs, no slow web apps. CHIARM is a real desktop app — fast, always available, no internet required." },
    ],
    msg: {
      tag: "Messaging",
      title: "Smarter conversations at scale",
      desc: "Handle hundreds of Telegram threads without losing context. AI fills in the gaps so you can focus on high-value conversations.",
      rows: [
        { title: "AI smart replies",       desc: "Context-aware response suggestions generated locally." },
        { title: "Conversation summaries", desc: "Instantly catch up on long threads with one-click AI summaries." },
        { title: "Voice cloning",          desc: "Send voice messages in your own cloned voice — no recording needed." },
        { title: "Anti-spam engine",       desc: "Rate limits and consent checks keep your accounts safe." },
      ],
      cta: "See pricing",
    },
    analytics: {
      tag: "Analytics",
      title: "Know what drives your results",
      desc: "Every conversation is tracked locally. See reply rates, response times, team performance, and account health — no third-party analytics required.",
      rows: [
        { title: "Conversation analytics", desc: "Reply rates, response time, open rates per account." },
        { title: "Team performance",       desc: "Per-chatter stats: messages sent, replied, reaction time." },
        { title: "Multi-account view",     desc: "Manage and monitor all your Telegram accounts in one dashboard." },
        { title: "Local-only storage",     desc: "All metrics stay on your machine. No data sent to us." },
      ],
      cta: "See pricing",
    },
    grid: {
      tag: "Features",
      title: "Everything in one app",
      desc: "A complete toolkit for Telegram CRM — built for privacy, speed, and team collaboration.",
      cards: [
        { title: "AI Copilot",           desc: "Locally-running AI suggests replies, summarises threads, and helps draft messages — zero cloud dependency.", badge: "local AI" },
        { title: "Voice Cloning",        desc: "Record a short sample once, then send voice messages in your voice automatically — no re-recording.",         badge: undefined },
        { title: "Anti-Spam Engine",     desc: "Rate limiting, consent validation, and message pacing protect your accounts from platform bans.",               badge: undefined },
        { title: "Role-Based Teams",     desc: "Invite chatters, assign accounts, set permissions. Owner → Manager → Chatter hierarchy built in.",             badge: undefined },
        { title: "Multi-Account",        desc: "Switch between multiple Telegram accounts instantly. One unified inbox for all.",                               badge: undefined },
        { title: "Message Templates",    desc: "Create, organize, and reuse templates with variables. Speed up repetitive conversations.",                      badge: undefined },
        { title: "Local Analytics",      desc: "Full conversation history, reply rates, and team stats — stored privately on your machine.",                    badge: undefined },
        { title: "End-to-End Privacy",   desc: "No cloud, no telemetry, no third-party integrations unless you add them. Complete data sovereignty.",           badge: undefined },
        { title: "Native Speed",          desc: "Built as a real desktop app — not a browser tab. Instant startup, real-time sync, and zero lag even with thousands of conversations.", badge: undefined },
      ],
    },
    trust: {
      tag: "Privacy promise",
      title: "Built different, by design",
      cards: [
        { title: "No servers, ever",     desc: "CHIARM has no backend. There is nothing to breach, leak, or subpoena." },
        { title: "No tracking pixels",   desc: "No Google Analytics, no Intercom, no Hotjar. This website and the app are tracker-free." },
        { title: "GDPR by default",      desc: "Since your data stays on your computer, you are the only data controller. Compliance is trivial." },
      ],
    },
    faq: {
      tag: "FAQ",
      title: "Common questions",
      items: [
        { q: "How do I get access to CHIARM?",                a: "CHIARM is available to subscribers only. Once you purchase a plan, you receive access to the download and your license key via the dashboard. Contact us to get started." },
        { q: "Where is my data stored?",                      a: "All your data — contacts, conversations, templates, AI models — is stored exclusively on your computer. Nothing is ever sent to our servers. We never see your messages." },
        { q: "Which messaging platforms does CHIARM support?", a: "Currently Telegram is fully supported. WhatsApp and Instagram DM support are in development and coming soon." },
        { q: "Does it work on Windows and Linux?",            a: "macOS (Apple Silicon & Intel) is fully supported. Windows and Linux builds are in progress — sign up for early access." },
        { q: "What AI features are included?",                a: "CHIARM includes AI conversation summaries, smart reply suggestions, and voice cloning for voice messages. The AI models run locally, so no data is sent to cloud AI providers." },
        { q: "How does team collaboration work?",             a: "CHIARM supports owner, manager, and chatter roles. Multiple team members can work across multiple Telegram accounts from a single installation." },
      ],
    },
    cta: {
      title: "Get started with CHIARM today",
      desc: "Get your team running in under 5 minutes — AI smart replies, voice cloning, and full privacy included.",
      btn: "See pricing",
      note: "Free to try · 279€/month for full access",
    },
  },
  pricing: {
    tag: "Pricing",
    title: "Simple, transparent pricing",
    desc: "One flat price. No per-seat fees. No usage limits. Your data stays on your machine.",
    plans: [
      {
        name: "Solo",
        desc: "For individual operators running Telegram outreach.",
        cta: "Sold out",
        period: "month",
        badge: "Sold out" as string | undefined,
        soldOut: true,
        features: ["1 Telegram account","AI smart replies","Conversation summaries","Message templates","Anti-spam engine","Local analytics","macOS desktop app","Email support"],
        missing:  ["Voice cloning","Team roles","Multi-account","Priority support"],
      },
      {
        name: "Pro",
        desc: "For small teams managing multiple Telegram accounts.",
        cta: "Get started",
        period: "month",
        badge: "Most popular" as string | undefined,
        soldOut: false,
        features: ["Up to 5 Telegram accounts at once","AI smart replies","AI conversation summaries","Voice cloning","Message templates","Anti-spam engine","Local analytics","Owner + manager + chatter roles","Multi-account dashboard","macOS desktop app","Priority email support"],
        missing: [] as string[],
      },
      {
        name: "Enterprise",
        desc: "Custom deployment for large teams and agencies.",
        cta: "Contact sales",
        period: undefined as string | undefined,
        badge: undefined as string | undefined,
        soldOut: false,
        features: ["Unlimited Telegram accounts","All Pro features","Ad campaign management","Bulk broadcast campaigns","Campaign analytics & reporting","WhatsApp (coming soon)","Instagram DMs (coming soon)","Meta Ads integration (coming soon)","Custom integrations","Dedicated onboarding","SLA & uptime guarantee","Invoice billing"],
        missing: [] as string[],
      },
    ],
    vatNote: "/month + VAT",
    customPrice: "Custom",
    comparisonTitle: "Full feature comparison",
    featureCol: "Feature",
    categories: [
      { name: "Core",            rows: [{ f: "Telegram accounts", s: "1", t: "Up to 5", e: "Unlimited" as string | boolean }, { f: "macOS app", s: true, t: true, e: true }, { f: "Windows / Linux (coming soon)", s: false, t: false, e: "Early access" as string | boolean }] },
      { name: "AI features",    rows: [{ f: "Smart reply suggestions", s: true, t: true, e: true }, { f: "Conversation summaries", s: true, t: true, e: true }, { f: "Voice cloning", s: false, t: true, e: true }] },
      { name: "Messaging",      rows: [{ f: "Anti-spam engine", s: true, t: true, e: true }, { f: "Message templates", s: true, t: true, e: true }, { f: "Rate limiting & consent checks", s: true, t: true, e: true }] },
      { name: "Team & management", rows: [{ f: "Owner / manager / chatter roles", s: false, t: true, e: true }, { f: "Multi-account dashboard", s: false, t: true, e: true }, { f: "Local analytics & reports", s: "Basic" as string | boolean, t: "Full" as string | boolean, e: "Full" as string | boolean }] },
      { name: "Support",        rows: [{ f: "Email support", s: true, t: true, e: true }, { f: "Priority support", s: false, t: true, e: true }, { f: "Dedicated onboarding", s: false, t: false, e: true }, { f: "SLA", s: false, t: false, e: true }] },
    ],
    faqTitle: "Pricing FAQ",
    faqs: [
      { q: "Is there a free trial?",                  a: "Please contact us to discuss trial access. CHIARM is a subscriber-only product — download is available exclusively through the dashboard after purchasing a plan." },
      { q: "What does the price include?",             a: "All updates, new features, and email support are included in your subscription. There are no per-seat or per-message fees." },
      { q: "Do you offer monthly and annual billing?", a: "Currently we offer monthly billing only. Annual billing with a discount is on the roadmap — contact us to discuss." },
      { q: "Is VAT included in the price?",            a: "No, 279€ is exclusive of VAT. VAT is applied at your local rate during checkout." },
      { q: "What payment methods do you accept?",      a: "We accept major credit/debit cards. Invoice billing is available for Enterprise customers." },
    ],
    enterprise: {
      title: "Questions about Enterprise?",
      desc: "Large team, custom requirements, or need invoice billing? Let's talk.",
      btn: "Contact sales",
    },
  },
  docs: {
    tag: "Documentation",
    title: "User Guide",
    desc: "Everything you need to install CHIARM, connect your Telegram accounts, and get your team up and running.",
    onThisPage: "On this page",
    support: { title: "Didn't find what you need?", desc: "Our documentation is growing. If something is missing, email us and we'll help.", btn: "Contact support" },
    sections: [
      { id: "installation",  title: "Installation",          content: [{ heading: "System requirements",           body: "CHIARM requires macOS 12 Monterey or later on Apple Silicon (M1/M2/M3) or Intel. Windows and Linux support is coming soon. You'll need at least 4 GB of RAM and 500 MB of free disk space." }, { heading: "Download and install on macOS", body: `1. Download the correct .dmg for your Mac (arm64 for Apple Silicon, x64 for Intel) from the Download page.\n2. Open the .dmg file. Drag the CHIARM icon into your Applications folder.\n3. Eject the .dmg and launch CHIARM from Applications.\n4. If macOS shows a security warning ("unidentified developer"), go to System Settings → Privacy & Security → scroll down and click "Open Anyway".\n5. CHIARM will launch and show the onboarding screen.` }, { heading: "Updating CHIARM", body: "CHIARM checks for updates on launch. When an update is available, a banner appears in the app. Click 'Install Update' — the app will download, replace itself, and restart. Your data is never affected by updates." }] },
      { id: "first-launch",  title: "First launch",          content: [{ heading: "Creating your workspace", body: "On first launch, CHIARM creates a local workspace in ~/Library/Application Support/CHIARM/. This folder contains your database, AI models, templates, and settings. Back it up regularly — it's the only copy of your data." }, { heading: "Account setup", body: "CHIARM doesn't require you to create an account with us. Your license is tied to your machine. On first launch, enter your license key (from your purchase confirmation email) to activate the app." }] },
      { id: "telegram",      title: "Connecting Telegram",   content: [{ heading: "Connecting your first account", body: `1. Click "Add Telegram Account" in the sidebar.\n2. Enter the phone number associated with your Telegram account (with country code).\n3. Telegram will send you a verification code via SMS or Telegram message.\n4. Enter the code in CHIARM. If two-factor authentication is enabled, enter your 2FA password too.\n5. CHIARM will sync your conversations. This may take a few minutes for large accounts.` }, { heading: "Adding more accounts", body: "Click the '+' button in the account switcher (bottom-left sidebar). Repeat the login process. You can switch between accounts instantly using the account switcher or keyboard shortcut Cmd+1, Cmd+2, etc." }, { heading: "Rate limiting & anti-spam", body: "CHIARM enforces conservative rate limits by default to protect your Telegram accounts from restrictions. You can adjust limits in Settings → Anti-Spam. Always respect Telegram's Terms of Service when sending messages." }] },
      { id: "ai-features",   title: "AI features",           content: [{ heading: "Setting up the AI model", body: "On first use, CHIARM downloads a lightweight language model (~2 GB). This happens once. The model runs entirely on your CPU/GPU — nothing is sent to the internet. Download requires an active internet connection." }, { heading: "Smart replies", body: "When viewing a conversation, click the ✨ icon or press Cmd+Shift+R to generate a smart reply suggestion based on the conversation context. You can edit the suggestion before sending." }, { heading: "Conversation summaries", body: "Open any conversation and click 'Summarise' (or press Cmd+Shift+S). CHIARM generates a bullet-point summary of the last 50 messages. Useful for catching up on long threads before replying." }, { heading: "Voice cloning", body: `Voice cloning lets you send voice messages in your own voice without recording each one.\n\n1. Go to Settings → Voice → Voice Clone.\n2. Record a 30–60 second sample of your natural speaking voice.\n3. CHIARM trains a local voice model from your sample.\n4. When composing a message, click the 🎤 icon → "Send as voice". Type your message and CHIARM synthesises a voice note.` }] },
      { id: "team",          title: "Team collaboration",    content: [{ heading: "Roles", body: "CHIARM has three roles:\n- Owner: full access, manages licenses, can add/remove team members\n- Manager: can assign accounts, view all analytics, configure templates\n- Chatter: access to assigned Telegram accounts only, cannot change settings" }, { heading: "Inviting team members", body: "Go to Settings → Team → Invite. Enter the team member's email. They'll receive an invite with download instructions. Team members install CHIARM independently — your data is not shared with them unless you explicitly assign accounts." }, { heading: "Assigning accounts", body: "In Settings → Team, drag a Telegram account onto a team member's name to grant them access. You can assign the same account to multiple chatters." }] },
      { id: "privacy",       title: "Privacy & security",    content: [{ heading: "Data storage", body: "All data — conversations, contacts, templates, AI models, analytics — is stored locally at ~/Library/Application Support/CHIARM/. CHIARM has no backend servers and never transmits your data." }, { heading: "Backups", body: "CHIARM does not back up your data automatically. We strongly recommend backing up ~/Library/Application Support/CHIARM/ regularly using Time Machine or another backup solution." }, { heading: "Uninstalling", body: "To fully uninstall CHIARM, move the app from Applications to Trash, then delete ~/Library/Application Support/CHIARM/. This is irreversible — all local data will be lost." }] },
    ],
  },
  changelog: {
    tag: "Changelog",
    title: "Release notes",
    desc: "Every update, fix, and new feature — in chronological order.",
    badges: { new: "New", improved: "Improved", fixed: "Fixed", coming: "Coming soon" },
    releases: [
      { version: "1.3.0", date: "April 2025",    highlight: "Voice cloning is now available in beta",          changes: [{ type: "new", text: "Voice cloning: record a 30–60s sample and send voice notes in your voice" }, { type: "new", text: "AI conversation summaries for threads longer than 20 messages" }, { type: "improved", text: "Smart reply suggestions now use 2× longer context window" }, { type: "improved", text: "Account switcher now supports keyboard shortcut Cmd+1–9" }, { type: "fixed", text: "Fixed crash when opening conversations with very long message history" }, { type: "fixed", text: "Fixed duplicate notification badge on multi-account setup" }] },
      { version: "1.2.1", date: "March 2025",    highlight: undefined,                                          changes: [{ type: "fixed", text: "Fixed Telegram reconnection loop after network change" }, { type: "fixed", text: "Fixed template variable substitution for names containing special characters" }, { type: "improved", text: "Reduced idle memory usage by ~30%" }] },
      { version: "1.2.0", date: "February 2025", highlight: "Team roles and multi-account management",         changes: [{ type: "new", text: "Role-based team collaboration: Owner, Manager, and Chatter roles" }, { type: "new", text: "Multi-account dashboard with unified inbox across all accounts" }, { type: "new", text: "Per-chatter analytics: messages sent, replied, average response time" }, { type: "improved", text: "Anti-spam engine now supports per-account rate limit configuration" }, { type: "improved", text: "Settings UI redesigned with sidebar navigation" }, { type: "fixed", text: "Fixed media files not loading after app restart" }] },
      { version: "1.1.0", date: "January 2025",  highlight: "AI smart replies",                                changes: [{ type: "new", text: "AI smart reply suggestions (Cmd+Shift+R) using local language model" }, { type: "new", text: "Message templates with variable support ({{name}}, {{date}}, etc.)" }, { type: "new", text: "Local conversation analytics dashboard" }, { type: "improved", text: "Startup time reduced by 40% with lazy model loading" }, { type: "fixed", text: "Fixed incorrect unread count after marking messages as read" }] },
      { version: "1.0.0", date: "December 2024", highlight: "Initial release",                                 changes: [{ type: "new", text: "Core Telegram messaging: send, receive, manage conversations" }, { type: "new", text: "Anti-spam engine with rate limiting and consent validation" }, { type: "new", text: "Multi-Telegram-account support" }, { type: "new", text: "macOS app (Apple Silicon and Intel)" }, { type: "new", text: "100% local — no servers, no telemetry" }] },
      { version: "Roadmap", date: "Coming up",   highlight: undefined,                                          changes: [{ type: "coming", text: "Windows (x64) native app" }, { type: "coming", text: "Linux AppImage" }, { type: "coming", text: "WhatsApp account support" }, { type: "coming", text: "Instagram DM support" }, { type: "coming", text: "Zapier / n8n webhook integration" }, { type: "coming", text: "Encrypted local backup" }] },
    ],
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Czech
// ─────────────────────────────────────────────────────────────────────────────
const cs = {
  nav: {
    pricing: "Ceník",
    docs: "Dokumentace",
    changelog: "Novinky",
    contact: "Kontakt",
    getStarted: "Začít",
  },
  footer: {
    tagline: "Telegram CRM zaměřený na soukromí, který běží výhradně na vašem počítači.",
    privacyLine: "Vaše data nikdy neopustí váš počítač.",
    copyright: "Všechna práva vyhrazena.",
    groups: [
      { name: "Produkt",    links: [{ label: "Funkce", href: "/#features" }, { label: "Ceník", href: "/pricing" }, { label: "Novinky", href: "/changelog" }] },
      { name: "Zdroje",     links: [{ label: "Dokumentace", href: "/docs" }, { label: "Časté dotazy", href: "/#faq" }] },
      { name: "Právní",     links: [{ label: "Podmínky služby", href: "/terms" }, { label: "Zásady soukromí", href: "/privacy" }, { label: "DPA", href: "/dpa" }] },
      { name: "Podpora",    links: [{ label: "Kontakt", href: "mailto:support@chiarm.app" }, { label: "Stav", href: "https://status.chiarm.app" }] },
    ],
  },
  home: {
    badge: "Nově s klonováním hlasu pomocí AI",
    h1Line1: "Váš Telegram CRM,",
    h1Line2: "na vašem počítači",
    descPre: "Spravujte Telegram konverzace, automatizujte follow-upy a odesílejte zprávy s pomocí AI — ",
    descStrong: "aniž by vaše data opustila váš počítač.",
    ctaPrimary: "Začít",
    ctaSecondary: "Zobrazit ceník",
    platformNote: "macOS dostupné nyní · Windows a Linux brzy",
    videoPlaceholder: "Video s ukázkou produktu – brzy k dispozici",
    stats: [
      { label: "100% soukromé od základů",  sub: "Všechna data zůstávají na vašem počítači" },
      { label: "Nativní podpora Telegramu", sub: "WhatsApp a Instagram brzy" },
      { label: "Lokální umělá inteligence", sub: "Shrnutí, chytré odpovědi, klonování hlasu" },
    ],
    whyTitle: "Proč si vybrat CHIARM?",
    whyCards: [
      { title: "Architektura bez sdílení dat",        desc: "Vaše zprávy, kontakty a šablony se nikdy nedotknou naší infrastruktury. Aplikace po instalaci běží zcela offline." },
      { title: "Ochrana proti spamu",                 desc: "Vestavěné omezení četnosti a ověření souhlasu chrání vaše účty před zákazy a zajišťují soulad s předpisy." },
      { title: "Více účtů a týmy",                   desc: "Role vlastníka, manažera a chattéra. Více Telegram účtů, jedno unifikované rozhraní pro celý tým." },
      { title: "Výkon nativní desktopové aplikace",  desc: "Žádné záložky prohlížeče, žádné pomalé webové aplikace. CHIARM je skutečná desktopová aplikace — rychlá, vždy dostupná." },
    ],
    msg: {
      tag: "Zasílání zpráv",
      title: "Chytřejší konverzace ve velkém měřítku",
      desc: "Zvládejte stovky Telegram vláken bez ztráty kontextu. AI vyplní mezery, abyste se mohli soustředit na hodnotné konverzace.",
      rows: [
        { title: "Chytré odpovědi AI",    desc: "Lokálně generované návrhy odpovědí s ohledem na kontext." },
        { title: "Shrnutí konverzací",    desc: "Okamžitě se zorientujte v dlouhých vláknech jedním kliknutím na AI shrnutí." },
        { title: "Klonování hlasu",       desc: "Odesílejte hlasové zprávy ve svém klonovaném hlase — bez potřeby nahrávání." },
        { title: "Ochrana proti spamu",   desc: "Omezení četnosti a kontroly souhlasu chrání vaše účty." },
      ],
      cta: "Zobrazit ceník",
    },
    analytics: {
      tag: "Analytika",
      title: "Zjistěte, co pohání vaše výsledky",
      desc: "Každá konverzace je sledována lokálně. Sledujte míry odpovědí, doby odezvy, výkon týmu a stav účtu — bez analytiky třetích stran.",
      rows: [
        { title: "Analytika konverzací",  desc: "Míry odpovědí, doba odezvy, míry otevření podle účtu." },
        { title: "Výkon týmu",            desc: "Statistiky na chattéra: odeslané zprávy, odpovědi, reakční čas." },
        { title: "Přehled více účtů",     desc: "Spravujte a sledujte všechny své Telegram účty v jednom přehledu." },
        { title: "Pouze lokální úložiště", desc: "Všechny metriky zůstávají na vašem stroji. Žádná data nejsou odesílána nám." },
      ],
      cta: "Zobrazit ceník",
    },
    grid: {
      tag: "Funkce",
      title: "Vše v jedné aplikaci",
      desc: "Kompletní sada nástrojů pro Telegram CRM — vytvořená pro soukromí, rychlost a týmovou spolupráci.",
      cards: [
        { title: "AI Kopilot",          desc: "Lokálně běžící AI navrhuje odpovědi, shrnuje vlákna a pomáhá s tvorbou zpráv — bez závislosti na cloudu.", badge: "lokální AI" },
        { title: "Klonování hlasu",     desc: "Nahrajte krátký vzorek jednou a odesílejte hlasové zprávy ve svém hlase automaticky.",                       badge: undefined },
        { title: "Ochrana proti spamu", desc: "Omezení četnosti, ověření souhlasu a regulace tempa zpráv chrání vaše účty před zablokováním.",               badge: undefined },
        { title: "Týmy s rolemi",       desc: "Pozvěte chattéry, přiřaďte účty, nastavte oprávnění. Hierarchie vlastník → manažer → chattér.",               badge: undefined },
        { title: "Více účtů",           desc: "Okamžitě přepínejte mezi více Telegram účty. Jedna unifikovaná schránka pro všechny.",                        badge: undefined },
        { title: "Šablony zpráv",       desc: "Vytvářejte, organizujte a znovu používejte šablony s proměnnými. Zrychlete opakující se konverzace.",          badge: undefined },
        { title: "Lokální analytika",   desc: "Kompletní historie konverzací, míry odpovědí a statistiky týmu — uložené soukromě na vašem stroji.",          badge: undefined },
        { title: "Maximální soukromí",  desc: "Žádný cloud, žádná telemetrie, žádné integrace třetích stran, pokud je sami nepřidáte.",                       badge: undefined },
        { title: "Nativní rychlost",    desc: "Skutečná desktopová aplikace — žádná záložka prohlížeče. Okamžité spuštění, synchronizace v reálném čase a nulová prodleva i s tisíci konverzacemi.", badge: undefined },
      ],
    },
    trust: {
      tag: "Závazek soukromí",
      title: "Navrženo jinak, záměrně",
      cards: [
        { title: "Žádné servery, nikdy",       desc: "CHIARM nemá žádný backend. Neexistuje nic, co by bylo možné prolomit, uniklout nebo vyžádat soudním příkazem." },
        { title: "Žádné sledovací pixely",     desc: "Žádný Google Analytics, žádný Intercom, žádný Hotjar. Tento web i aplikace jsou bez sledovačů." },
        { title: "GDPR ve výchozím nastavení", desc: "Protože vaše data zůstávají na vašem počítači, jste jediným správcem dat. Soulad s předpisy je samozřejmostí." },
      ],
    },
    faq: {
      tag: "Časté dotazy",
      title: "Nejčastější otázky",
      items: [
        { q: "Jak získám přístup k CHIARM?",                    a: "CHIARM je dostupný pouze pro předplatitele. Po zakoupení plánu obdržíte přístup ke stažení a licenční klíč prostřednictvím dashboardu. Kontaktujte nás pro zahájení." },
        { q: "Kde jsou moje data uložena?",                      a: "Všechna vaše data — kontakty, konverzace, šablony, modely AI — jsou uložena výhradně na vašem počítači. Nic není nikdy odesíláno na naše servery." },
        { q: "Které platformy CHIARM podporuje?",                a: "Aktuálně je plně podporován Telegram. Podpora WhatsApp a Instagram DM je ve vývoji a brzy přibude." },
        { q: "Funguje na Windows a Linuxu?",                     a: "macOS (Apple Silicon a Intel) je plně podporován. Verze pro Windows a Linux jsou ve vývoji." },
        { q: "Jaké funkce AI jsou zahrnuty?",                    a: "CHIARM zahrnuje AI shrnutí konverzací, návrhy chytrých odpovědí a klonování hlasu. Modely AI běží lokálně." },
        { q: "Jak funguje týmová spolupráce?",                   a: "CHIARM podporuje role vlastníka, manažera a chattéra. Více členů týmu může pracovat s více Telegram účty z jedné instalace." },
      ],
    },
    cta: {
      title: "Začněte s CHIARM ještě dnes",
      desc: "Rozjeďte svůj tým za méně než 5 minut — chytré odpovědi AI, klonování hlasu a plné soukromí v ceně.",
      btn: "Zobrazit ceník",
      note: "Vyzkoušet zdarma · 279 €/měsíc pro plný přístup",
    },
  },
  pricing: {
    tag: "Ceník",
    title: "Jednoduché a transparentní ceny",
    desc: "Jedna fixní cena. Žádné poplatky za uživatele. Žádné limity. Vaše data zůstávají na vašem stroji.",
    plans: [
      { name: "Solo",       desc: "Pro jednotlivé operátory provozující Telegram kampaně.",          cta: "Vyprodáno",          period: "měsíc",   badge: "Vyprodáno" as string | undefined,      soldOut: true,  features: ["1 Telegram účet","Chytré odpovědi AI","Shrnutí konverzací","Šablony zpráv","Ochrana proti spamu","Lokální analytika","Desktopová aplikace pro macOS","Podpora e-mailem"], missing: ["Klonování hlasu","Týmové role","Více účtů","Prioritní podpora"] },
      { name: "Pro",        desc: "Pro malé týmy spravující více Telegram účtů.",                   cta: "Začít",              period: "měsíc",   badge: "Nejoblíbenější" as string | undefined, soldOut: false, features: ["Až 5 Telegram účtů najednou","Chytré odpovědi AI","AI shrnutí konverzací","Klonování hlasu","Šablony zpráv","Ochrana proti spamu","Lokální analytika","Role vlastník + manažer + chattér","Přehled více účtů","Desktopová aplikace pro macOS","Prioritní podpora e-mailem"], missing: [] as string[] },
      { name: "Enterprise", desc: "Vlastní nasazení pro velké týmy a agentury.",                    cta: "Kontaktovat obchod", period: undefined as string | undefined, badge: undefined as string | undefined,        soldOut: false, features: ["Neomezený počet Telegram účtů","Vše z plánu Pro","Správa reklamních kampaní","Hromadné broadcast kampaně","Analytika kampaní a reporty","WhatsApp (brzy)","Instagram DM (brzy)","Integrace Meta Ads (brzy)","Vlastní integrace","Dedikované zapracování","SLA a záruka dostupnosti","Fakturační platba"], missing: [] as string[] },
    ],
    vatNote: "/měsíc + DPH",
    customPrice: "Na míru",
    comparisonTitle: "Úplné srovnání funkcí",
    featureCol: "Funkce",
    categories: [
      { name: "Základ",         rows: [{ f: "Telegram účty", s: "1", t: "Až 5", e: "Neomezeně" as string | boolean }, { f: "Aplikace pro macOS", s: true, t: true, e: true }, { f: "Windows / Linux (brzy)", s: false, t: false, e: "Předčasný přístup" as string | boolean }] },
      { name: "Funkce AI",      rows: [{ f: "Návrhy chytrých odpovědí", s: true, t: true, e: true }, { f: "Shrnutí konverzací", s: true, t: true, e: true }, { f: "Klonování hlasu", s: false, t: true, e: true }] },
      { name: "Zprávy",         rows: [{ f: "Ochrana proti spamu", s: true, t: true, e: true }, { f: "Šablony zpráv", s: true, t: true, e: true }, { f: "Omezení četnosti a kontroly souhlasu", s: true, t: true, e: true }] },
      { name: "Tým a správa",   rows: [{ f: "Role vlastník / manažer / chattér", s: false, t: true, e: true }, { f: "Přehled více účtů", s: false, t: true, e: true }, { f: "Lokální analytika a reporty", s: "Základní" as string | boolean, t: "Plná" as string | boolean, e: "Plná" as string | boolean }] },
      { name: "Podpora",        rows: [{ f: "Podpora e-mailem", s: true, t: true, e: true }, { f: "Prioritní podpora", s: false, t: true, e: true }, { f: "Dedikované zapracování", s: false, t: false, e: true }, { f: "SLA", s: false, t: false, e: true }] },
    ],
    faqTitle: "Časté dotazy k cenám",
    faqs: [
      { q: "Je k dispozici zkušební verze?",           a: "Pro zkušební přístup nás prosím kontaktujte. CHIARM je produkt určený pouze pro předplatitele — stažení je dostupné výhradně přes dashboard po zakoupení plánu." },
      { q: "Co je zahrnuto v ceně?",                   a: "Všechny aktualizace, nové funkce a podpora e-mailem jsou součástí předplatného. Neúčtujeme žádné poplatky za uživatele ani za zprávy." },
      { q: "Nabízíte měsíční i roční fakturaci?",      a: "Aktuálně nabízíme pouze měsíční fakturaci. Roční fakturace se slevou je v plánu — kontaktujte nás k projednání." },
      { q: "Je DPH zahrnuto v ceně?",                  a: "Ne, 279 € je bez DPH. DPH je přičtena ve výši vaší místní sazby při pokladně." },
      { q: "Jaké platební metody přijímáte?",          a: "Přijímáme hlavní kreditní/debetní karty. Fakturační platba je k dispozici pro zákazníky Enterprise." },
    ],
    enterprise: {
      title: "Dotazy k Enterprise?",
      desc: "Velký tým, vlastní požadavky nebo potřebujete fakturaci? Pojďme si promluvit.",
      btn: "Kontaktovat obchod",
    },
  },
  docs: {
    tag: "Dokumentace",
    title: "Uživatelská příručka",
    desc: "Vše, co potřebujete k instalaci CHIARM, připojení Telegram účtů a zprovoznění týmu.",
    onThisPage: "Na této stránce",
    support: { title: "Nenašli jste, co hledáte?", desc: "Naše dokumentace roste. Pokud něco chybí, napište nám a pomůžeme.", btn: "Kontaktovat podporu" },
    sections: [
      { id: "installation",  title: "Instalace",              content: [{ heading: "Systémové požadavky",           body: "CHIARM vyžaduje macOS 12 Monterey nebo novější na Apple Silicon (M1/M2/M3) nebo Intel. Podpora Windows a Linuxu přichází brzy. Potřebujete alespoň 4 GB RAM a 500 MB volného místa na disku." }, { heading: "Stažení a instalace na macOS", body: `1. Stáhněte správný soubor .dmg pro váš Mac (arm64 pro Apple Silicon, x64 pro Intel) ze stránky ke stažení.\n2. Otevřete soubor .dmg. Přetáhněte ikonu CHIARM do složky Aplikace.\n3. Vysuňte disk .dmg a spusťte CHIARM z Aplikací.\n4. Pokud macOS zobrazí bezpečnostní varování ("neidentifikovaný vývojář"), přejděte do Nastavení systému → Soukromí a bezpečnost → přejeďte dolů a klikněte na "Přesto otevřít".\n5. CHIARM se spustí a zobrazí úvodní obrazovku.` }, { heading: "Aktualizace CHIARM", body: "CHIARM při spuštění kontroluje dostupnost aktualizací. Když je aktualizace k dispozici, v aplikaci se zobrazí banner. Klikněte na 'Nainstalovat aktualizaci' — aplikace se stáhne, nahradí se a restartuje." }] },
      { id: "first-launch",  title: "První spuštění",         content: [{ heading: "Vytvoření pracovního prostoru", body: "Při prvním spuštění CHIARM vytvoří lokální pracovní prostor v ~/Library/Application Support/CHIARM/. Tato složka obsahuje vaši databázi, modely AI, šablony a nastavení. Pravidelně ji zálohujte." }, { heading: "Nastavení účtu", body: "CHIARM nevyžaduje vytvoření účtu u nás. Vaše licence je vázána na váš stroj. Při prvním spuštění zadejte licenční klíč (z potvrzovacího e-mailu o nákupu) k aktivaci aplikace." }] },
      { id: "telegram",      title: "Připojení Telegramu",    content: [{ heading: "Připojení prvního účtu", body: `1. Klikněte na "Přidat Telegram účet" v postranním panelu.\n2. Zadejte telefonní číslo přidružené k vašemu Telegram účtu (s předvolbou země).\n3. Telegram vám zašle ověřovací kód prostřednictvím SMS nebo Telegram zprávy.\n4. Zadejte kód do CHIARM. Pokud je povoleno dvoufaktorové ověřování, zadejte také své heslo 2FA.\n5. CHIARM synchronizuje vaše konverzace. U velkých účtů to může trvat několik minut.` }, { heading: "Přidání dalších účtů", body: "Klikněte na tlačítko '+' v přepínači účtů (spodní levý postranní panel). Zopakujte proces přihlášení. Mezi účty přepínáte pomocí přepínače nebo klávesové zkratky Cmd+1, Cmd+2 atd." }, { heading: "Omezení četnosti a ochrana proti spamu", body: "CHIARM ve výchozím nastavení vynucuje konzervativní limity četnosti, aby chránil vaše Telegram účty. Limity upravíte v Nastavení → Ochrana proti spamu. Vždy dodržujte podmínky služby Telegramu." }] },
      { id: "ai-features",   title: "Funkce AI",              content: [{ heading: "Nastavení modelu AI", body: "Při prvním použití si CHIARM stáhne lehký jazykový model (~2 GB). To se stane pouze jednou. Model běží výhradně na vašem CPU/GPU — nic není odesíláno na internet." }, { heading: "Chytré odpovědi", body: "Při prohlížení konverzace klikněte na ikonu ✨ nebo stiskněte Cmd+Shift+R pro vygenerování návrhu chytré odpovědi. Návrh můžete před odesláním upravit." }, { heading: "Shrnutí konverzací", body: "Otevřete libovolnou konverzaci a klikněte na 'Shrnout' (nebo stiskněte Cmd+Shift+S). CHIARM vygeneruje bodové shrnutí posledních 50 zpráv." }, { heading: "Klonování hlasu", body: `Klonování hlasu umožňuje odesílat hlasové zprávy svým vlastním hlasem bez nahrávání každé z nich.\n\n1. Přejděte do Nastavení → Hlas → Klonování hlasu.\n2. Nahrajte 30–60sekundový vzorek svého přirozeného hlasu.\n3. CHIARM z vašeho vzorku natrénuje lokální hlasový model.\n4. Při psaní zprávy klikněte na ikonu 🎤 → "Odeslat jako hlas". Napište zprávu a CHIARM syntézuje hlasovou poznámku.` }] },
      { id: "team",          title: "Týmová spolupráce",      content: [{ heading: "Role", body: "CHIARM má tři role:\n- Vlastník: plný přístup, spravuje licence, může přidávat/odebírat členy týmu\n- Manažer: může přiřazovat účty, zobrazovat analytiku, konfigurovat šablony\n- Chattér: přístup pouze k přiřazeným Telegram účtům, nemůže měnit nastavení" }, { heading: "Pozvání členů týmu", body: "Přejděte do Nastavení → Tým → Pozvat. Zadejte e-mail člena týmu. Obdrží pozvánku s pokyny. Členové týmu instalují CHIARM samostatně." }, { heading: "Přiřazení účtů", body: "V Nastavení → Tým přetáhněte Telegram účet na jméno člena týmu, abyste mu udělili přístup. Stejný účet můžete přiřadit více chattérům." }] },
      { id: "privacy",       title: "Soukromí a bezpečnost",  content: [{ heading: "Ukládání dat", body: "Všechna data — konverzace, kontakty, šablony, modely AI, analytika — jsou uložena lokálně v ~/Library/Application Support/CHIARM/. CHIARM nemá žádné backendové servery." }, { heading: "Zálohy", body: "CHIARM nezálohuje vaše data automaticky. Důrazně doporučujeme pravidelně zálohovat ~/Library/Application Support/CHIARM/ pomocí Time Machine nebo jiného řešení." }, { heading: "Odinstalování", body: "Chcete-li CHIARM úplně odinstalovat, přesuňte aplikaci z Aplikací do koše a poté odstraňte ~/Library/Application Support/CHIARM/. Tato akce je nevratná." }] },
    ],
  },
  changelog: {
    tag: "Novinky",
    title: "Poznámky k vydání",
    desc: "Každá aktualizace, oprava a nová funkce — v chronologickém pořadí.",
    badges: { new: "Nové", improved: "Vylepšeno", fixed: "Opraveno", coming: "Připravujeme" },
    releases: [
      { version: "1.3.0",   date: "Duben 2025",   highlight: "Klonování hlasu je nyní dostupné v beta verzi",  changes: [{ type: "new", text: "Klonování hlasu: nahrajte 30–60sekundový vzorek a odesílejte hlasové zprávy svým hlasem" }, { type: "new", text: "AI shrnutí konverzací pro vlákna delší než 20 zpráv" }, { type: "improved", text: "Návrhy chytrých odpovědí nyní používají 2× delší kontextové okno" }, { type: "improved", text: "Přepínač účtů nyní podporuje klávesovou zkratku Cmd+1–9" }, { type: "fixed", text: "Opraveno padání při otevírání konverzací s velmi dlouhou historií zpráv" }, { type: "fixed", text: "Opravena duplicitní ikona oznámení při nastavení více účtů" }] },
      { version: "1.2.1",   date: "Březen 2025",  highlight: undefined, changes: [{ type: "fixed", text: "Opravena smyčka opětovného připojení Telegramu po změně sítě" }, { type: "fixed", text: "Opravena náhrada proměnných šablony pro jména obsahující speciální znaky" }, { type: "improved", text: "Snížena spotřeba paměti v nečinnosti o ~30 %" }] },
      { version: "1.2.0",   date: "Únor 2025",    highlight: "Týmové role a správa více účtů",                  changes: [{ type: "new", text: "Týmová spolupráce s rolemi: vlastník, manažer a chattér" }, { type: "new", text: "Přehled více účtů s unifikovanou schránkou napříč všemi účty" }, { type: "new", text: "Analytika na chattéra: odeslané zprávy, odpovědi, průměrná doba odezvy" }, { type: "improved", text: "Ochrana proti spamu nyní podporuje konfiguraci limitu pro každý účet" }, { type: "improved", text: "Rozhraní nastavení přepracováno se stromovým bočním panelem" }, { type: "fixed", text: "Opraveno nenačítání mediálních souborů po restartu aplikace" }] },
      { version: "1.1.0",   date: "Leden 2025",   highlight: "Chytré odpovědi AI",                              changes: [{ type: "new", text: "Návrhy chytrých odpovědí AI (Cmd+Shift+R) pomocí lokálního jazykového modelu" }, { type: "new", text: "Šablony zpráv s podporou proměnných ({{jméno}}, {{datum}} atd.)" }, { type: "new", text: "Lokální přehled analytiky konverzací" }, { type: "improved", text: "Čas spuštění zkrácen o 40 % díky líznému načítání modelu" }, { type: "fixed", text: "Opraveno nesprávné počítání nepřečtených zpráv" }] },
      { version: "1.0.0",   date: "Prosinec 2024", highlight: "První vydání",                                    changes: [{ type: "new", text: "Základní Telegram zasílání zpráv: odesílání, příjem, správa konverzací" }, { type: "new", text: "Ochrana proti spamu s omezením četnosti a ověřením souhlasu" }, { type: "new", text: "Podpora více Telegram účtů" }, { type: "new", text: "Aplikace pro macOS (Apple Silicon a Intel)" }, { type: "new", text: "100% lokální — žádné servery, žádná telemetrie" }] },
      { version: "Plán",    date: "Připravujeme", highlight: undefined, changes: [{ type: "coming", text: "Nativní aplikace pro Windows (x64)" }, { type: "coming", text: "Linux AppImage" }, { type: "coming", text: "Podpora WhatsApp účtů" }, { type: "coming", text: "Podpora Instagram DM" }, { type: "coming", text: "Integrace Zapier / n8n webhook" }, { type: "coming", text: "Šifrovaná lokální záloha" }] },
    ],
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────────────────────────────────────
export const translations = { en, cs } as const;
export type Translations = typeof translations.en;
