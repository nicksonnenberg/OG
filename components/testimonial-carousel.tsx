"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
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
              <div className="m-2 flex h-full flex-col rounded-xl bg-brand-white p-6 border shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                <div className="mb-4 flex items-center">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 768px) 48px, 48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                <blockquote className="flex-grow text-base italic text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
