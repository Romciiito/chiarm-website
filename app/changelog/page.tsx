"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

type ChangeType = "new" | "improved" | "fixed" | "coming";

const typeStyles: Record<ChangeType, string> = {
  new: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/20",
  improved: "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/20",
  fixed: "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/20",
  coming: "bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/20",
};

export default function ChangelogPage() {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {t.changelog.tag}
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">{t.changelog.title}</h1>
          <p className="text-muted-foreground">
            {t.changelog.desc}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border/60" />

          <div className="space-y-10">
            {t.changelog.releases.map((release) => (
              <div key={release.version} className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-1 h-[23px] w-[23px] rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-lg">
                      {release.version.includes(".") ? `v${release.version}` : release.version}
                    </span>
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
                          className={`mt-0.5 inline-flex shrink-0 items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${typeStyles[change.type as ChangeType]}`}
                        >
                          {t.changelog.badges[change.type as ChangeType]}
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
