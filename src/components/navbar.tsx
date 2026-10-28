import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "#" },
  { label: "My Bookings", href: "#" },
  { label: "Admin", href: "#" },
];

export function Navbar() {
  return (
    <header className="relative z-20 flex h-16 shrink-0 items-center bg-white px-6">
      <nav className="flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={
              link.active
                ? "text-sm font-medium text-brand underline underline-offset-4"
                : "text-sm font-medium text-foreground transition-colors hover:text-brand"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2"
        aria-label="Wanderlast home"
      >
        <Image
          src="/images/Wanderlast.png"
          alt="Wanderlast"
          width={112}
          height={30}
          priority
        />
      </Link>

      <div className="ml-auto flex items-center gap-7">
        <Link
          href="#profile"
          className="flex items-center gap-1.5 text-sm transition-colors hover:text-brand"
        >
          <User className="size-4" />
          Profile
        </Link>
        <Link href="#login" className="text-sm transition-colors hover:text-brand">
          Login
        </Link>
        <Link href="#signup" className="text-sm transition-colors hover:text-brand">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
