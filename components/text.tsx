"use client";

import { cn } from "@/lib/utils";
import { AnimatedUnderline } from "./ui/animated-underline";

type TextAlignment = "left" | "right" | "center";

interface TextProps {
  variant: string;
  children: React.ReactNode;
  align?: TextAlignment;
  underline?: boolean;
  animatedUnderline?: boolean;
  color?: {
    type: string;
    value: any;
    opacity?: number;
  };
}

const VARIANT_STYLES = {
  "hero-subheading":
    "font-open-sans text-center mb-4 text-3xl font-bold tracking-[0.2em] text-brand-yellow md:text-5xl lg:text-6xl",
  "hero-heading":
    "mb-2 text-[45px] leading-none text-center text-white sm:text-[45px] md:text-[100px] lg:text-[150px]",
  "hero-heading-short":
    "mb-2 text-[80px] leading-none text-center text-white sm:text-[75px] md:text-[125px] lg:text-[175px]",
  "hero-location":
    "font-open-sans text-center mb-2 text-2xl font-bold tracking-[0.2em] text-brand-yellow md:text-3xl",
  "hero-dates":
    "font-open-sans text-center mb-12 text-3xl font-extrabold text-gray-200 md:text-4xl",
  heading: "mb-12 text-center text-5xl sm:text-7xl",
  "paragraph-heading": "mb-2 text-2xl font-bold sm:text-4xl",
  subheading: "mb-12 text-2xl font-bold sm:text-4xl",
  body: "font-lato font-bold mb-12 text-xl md:text-2xl",
  "huge-body": "mb-12 text-center text-5xl sm:text-7xl",
  "side-note": "font-montserrat font-bold mb-12 text-lg sm:text-2xl",
  "list-item": "font-lato mb-1 font-bold text-xl md:text-2xl",
};

const getElementType = (variant: string): keyof JSX.IntrinsicElements => {
  if (variant.includes("hero-heading")) return "h1";
  if (variant.includes("heading")) return "h2";
  if (variant.includes("subheading")) return "h3";
  if (variant.includes("list-item")) return "li";
  return "p";
};

export const Text = ({
  variant,
  children,
  align,
  underline,
  animatedUnderline,
  color,
}: TextProps) => {
  const Element = getElementType(variant);

  const alignmentClasses = {
    center: "text-center",
    right: "text-right",
    left: "text-left",
  };

  // Default to center alignment if not specified
  const textAlignment = align ? alignmentClasses[align] : "text-center";

  // Get color class based on the color prop
  const getColorClass = () => {
    if (!color) return "";

    if (color.type === "brand") {
      switch (color.value) {
        case "black":
          return "text-brand-black";
        case "white":
          return "text-brand-white";
        case "off-white":
          return "text-brand-off-white";
        case "yellow":
          return "text-brand-yellow";
        case "navy":
          return "text-brand-navy";
        case "accent":
          return "text-brand-accent";
        default:
          return "";
      }
    } else if (color.type === "hex") {
      // For hex colors, we'll need to use inline style.
      // This is because you cannot dynamically piece together text
      // into a tailwind utility class
      return "";
    }
    return "";
  };

  const colorClass = getColorClass();
  const style = color?.type === "hex" ? { color: color.value } : {};

  if (animatedUnderline) {
    return (
      <div className="relative w-min">
        <Element
          className={cn(
            "w-full",
            VARIANT_STYLES[variant as keyof typeof VARIANT_STYLES],
            textAlignment,
            underline && "underline",
            colorClass,
          )}
          style={style}
        >
          {children}
        </Element>
        <div className="w-full absolute bottom-[-15%] left-0">
          <AnimatedUnderline className={colorClass} />
        </div>
      </div>
    );
  }

  return (
    <Element
      className={cn(
        "w-full",
        VARIANT_STYLES[variant as keyof typeof VARIANT_STYLES],
        textAlignment,
        underline && "underline",
        colorClass,
      )}
      style={style}
    >
      {children}
    </Element>
  );
};
