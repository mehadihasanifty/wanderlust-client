import Image from "next/image";
import { ArrowRight } from "lucide-react";

const searchFields = [
  { label: "Date/Duration", value: "Anytime/3 Days" },
  { label: "Budget", value: "$0-$3000" },
  { label: "People", value: "5-10" },
];

export function Banner() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] min-h-[560px] flex-col">
      <Image
        src="/images/Banner.png"
        alt="Aerial view of a coastal bay surrounded by forest"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="[font-family:var(--font-display)] text-4xl leading-[1.1] font-medium sm:text-6xl lg:text-7xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-5 max-w-xl text-sm text-white/90 sm:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#explore"
            className="inline-flex h-12 items-center gap-2 bg-brand px-8 text-sm font-medium tracking-wide uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#destinations"
            className="inline-flex h-12 items-center bg-[#8a979d]/80 px-8 text-sm font-medium tracking-wide uppercase text-white backdrop-blur-sm transition-colors hover:bg-[#8a979d]"
          >
            View Destination
          </a>
        </div>
      </div>

      <form className="relative grid grid-cols-1 divide-y divide-white/15 bg-[#2f3c44]/85 backdrop-blur-sm sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-[repeat(4,1fr)_auto]">
        <div className="px-6 py-4">
          <p className="text-sm font-semibold">Location</p>
          <input
            type="text"
            name="location"
            placeholder="Address, City Or Zip"
            className="mt-1 w-full bg-transparent text-xs text-white outline-none placeholder:text-white/70"
          />
        </div>
        {searchFields.map((field) => (
          <button type="button" key={field.label} className="px-6 py-4 text-left hover:bg-white/5">
            <p className="text-sm font-semibold">{field.label}</p>
            <p className="mt-1 text-xs text-white/70">{field.value}</p>
          </button>
        ))}
        <button
          type="submit"
          className="bg-brand px-16 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Search
        </button>
      </form>
    </section>
  );
}
