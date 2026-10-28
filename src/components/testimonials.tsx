"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/person2.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person1.png",
  },
];

function TestimonialArrow({ direction }: { direction: "prev" | "next" }) {
  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarousel();
  const isPrev = direction === "prev";
  const disabled = isPrev ? !canScrollPrev : !canScrollNext;

  return (
    <button
      type="button"
      aria-label={isPrev ? "Previous testimonials" : "Next testimonials"}
      disabled={disabled}
      onClick={isPrev ? scrollPrev : scrollNext}
      className="flex size-14 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40"
    >
      {isPrev ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
    </button>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Carousel opts={{ align: "start" }}>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="[font-family:var(--font-display)] text-4xl font-medium text-foreground sm:text-5xl">
                What Travelers Say
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="hidden shrink-0 gap-3 sm:flex">
              <TestimonialArrow direction="prev" />
              <TestimonialArrow direction="next" />
            </div>
          </div>

          <CarouselContent className="mt-12">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="basis-full sm:basis-1/2">
                <figure className="flex h-full gap-8 border border-border bg-card p-7">
                  <figcaption className="flex flex-1 flex-col justify-between">
                    <blockquote className="[font-family:var(--font-display)] text-lg leading-snug text-foreground sm:text-xl">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-8">
                      <p className="text-sm font-medium text-brand">
                        &mdash; {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </figcaption>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={176}
                    height={236}
                    className="w-40 shrink-0 self-stretch object-cover sm:w-44"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
