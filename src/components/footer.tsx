import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    heading: "Quick Links",
    items: ["Home", "Destinations", "My Bookings", "My Profile"],
  },
  {
    heading: "Support",
    items: ["Help Center", "Terms of Service", "Privacy Policy"],
  },
];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.119 20.452H3.555V9h2.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const socialLinks = [
  { label: "X (Twitter)", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] px-6 py-20 text-neutral-300">
      <div className="mx-auto max-w-6xl">
        <p className="[font-family:var(--font-display)] text-6xl font-bold text-white sm:text-7xl">
          Wanderlast
        </p>
        <p className="mt-4 text-sm sm:text-base">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <h3 className="[font-family:var(--font-display)] text-sm uppercase tracking-wide text-neutral-200">
              Newsletter
            </h3>
            <p className="mt-3 text-xs text-neutral-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form className="relative mt-4 max-w-72">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="h-12 w-full bg-neutral-800 px-4 pr-12 text-sm text-white outline-none placeholder:text-neutral-400 focus:bg-neutral-700"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-white transition-colors hover:text-brand"
              >
                <ArrowUpRight className="size-5" />
              </button>
            </form>
          </div>

          {columns.map((column) => (
            <nav key={column.heading}>
              <h3 className="[font-family:var(--font-display)] text-sm uppercase tracking-wide text-neutral-200">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm transition-colors hover:text-brand"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="[font-family:var(--font-display)] text-sm uppercase tracking-wide text-neutral-200">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="tel:+17869011622" className="transition-colors hover:text-brand">
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandarland.com"
                  className="transition-colors hover:text-brand"
                >
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-xs text-neutral-400">
            &copy; 2026 Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white transition-colors hover:text-brand"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
