"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { TestimonialCard, TestimonialCardProps } from "./testimonial-card";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  extraLarge?: boolean;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialCardProps[];
  autoplayDelay?: number;
}

export const TestimonialCarousel = ({
  testimonials,
  autoplayDelay = 3000,
}: TestimonialCarouselProps) => {
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
  });

  const startAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }

    autoplayIntervalRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, autoplayDelay);
  }, [emblaApi, autoplayDelay]);

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  }, []);

  // Initialize autoplay
  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();

    // Pause autoplay when user is interacting with the carousel
    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", () => {
      // Restart autoplay after a short delay
      setTimeout(startAutoplay, 300);
    });

    return () => {
      stopAutoplay();
      if (emblaApi) {
        emblaApi.off("pointerDown", stopAutoplay);
      }
    };
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <div className="relative mx-auto my-12 w-full max-w-6xl px-4">
      <div
        className="cursor-grab overflow-hidden rounded-xl p-4 active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="backface-hidden -ml-4 flex touch-pan-y">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              style={{
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitFontSmoothing: "subpixel-antialiased",
              }}
            >
              <div className="m-2">
                <TestimonialCard {...testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
