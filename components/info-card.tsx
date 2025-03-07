"use client";

import { cn, getBackgroundStyle } from "@/lib/utils";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  image?: string;
  emoji?: string;
  align?: string;
  dark?: boolean;
  variant?: string;
  background?: {
    type: string;
    value: any;
  };
}

export const InfoCard = ({
  title,
  description,
  image,
  emoji,
  align = "left",
  background,
  dark = false,
  variant,
}: InfoCardProps) => {
  return (
    <div
      className={cn(
        "my-8 w-full rounded-lg p-8 mx-auto",
        variant === "small" ? "max-w-screen-lg" : ""
      )}
      style={getBackgroundStyle(background)}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-4 lg:flex-row",
          align === "left" ? "" : "lg:flex-row-reverse",
        )}
      >
        {emoji && <div className="text-4xl">{emoji}</div>}
        {image && (
          <div className="relative order-2 h-64 max-w-full w-96 flex-shrink-0 overflow-hidden rounded-lg lg:order-1">
            <Image 
              src={image} 
              alt={title} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover" 
            />
          </div>
        )}
        <div
          className={cn(
            "order-2 flex h-full flex-col justify-center gap-2 text-center lg:text-left lg:order-1",
            align === "left" ? "" : "lg:text-right",
          )}
        >
          <h3 className="w-full text-3xl font-semibold">{title}</h3>
          <p className={cn(
            "font-lato w-full text-2xl",
            dark ? "text-gray-400" : "text-gray-700"
          )}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
