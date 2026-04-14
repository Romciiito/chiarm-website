import { ButtonLink } from "@/components/button-link";
import { Shield, ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-32">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Search className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h1 className="text-8xl font-bold text-muted-foreground/30 mb-4 leading-none">404</h1>
        <h2 className="text-2xl font-bold mb-3">Page not found</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          This page doesn&apos;t exist or has been moved. Your data is still safe — it&apos;s on your computer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <ButtonLink href="/" className="rounded-full px-6">
            Go home
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/docs" variant="outline" className="rounded-full px-6">
            Read the docs
          </ButtonLink>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-3 w-3" />
          <span>CHIARM — Privacy-first Telegram CRM</span>
        </div>
      </div>
    </div>
  );
}
