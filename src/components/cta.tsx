import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden py-20 text-center">
      <Image
        src="/images/CTA.png"
        alt="Aerial view of a plane flying over a tropical island"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative flex flex-col items-center px-6 text-white">
        <h2 className="[font-family:var(--font-display)] text-4xl font-medium sm:text-5xl lg:text-6xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <a
          href="#book"
          className="mt-8 inline-flex h-14 items-center gap-3 bg-white px-10 text-sm font-semibold tracking-wide uppercase text-foreground transition-colors hover:bg-brand hover:text-white"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
