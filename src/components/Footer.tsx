import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-sm text-text-tertiary sm:flex-row sm:justify-between">
        <div className="flex items-center gap-6">
          <span className="font-semibold text-text-secondary">Solo</span>
          {FOOTER.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:text-text-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p>{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
