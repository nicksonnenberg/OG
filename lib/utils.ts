import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ContentSectionProps } from "./types";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function decimalToHex(decimal: number) {
  if (decimal < 0 || decimal > 1) {
      throw new Error("Decimal value must be between 0 and 1");
  }
  let hex = Math.round(decimal * 255).toString(16).toUpperCase();
  return hex.padStart(2, '0'); // Ensure it's always two characters
}

export const getBackgroundStyle = (background: ContentSectionProps["background"]) => {
  if (!background) return {};

  if (background.type === "color") {
    if (background.value.type === "brand") {
      switch (background.value.value) {
        case "black":
          return { backgroundColor: `hsla(var(--brand-black) / ${background.value.opacity ?? 1})` };
        case "white":
          return { backgroundColor: `hsla(var(--brand-white) / ${background.value.opacity ?? 1})` };
        case "off-white":
          return { backgroundColor: `hsla(var(--brand-off-white) / ${background.value.opacity ?? 1})` };
        case "yellow":
          return { backgroundColor: `hsla(var(--brand-yellow) / ${background.value.opacity ?? 1})` };
        case "navy":
          return { backgroundColor: `hsla(var(--brand-navy) / ${background.value.opacity ?? 1})` };
        case "accent":
          return { backgroundColor: `hsla(var(--brand-accent) / ${background.value.opacity ?? 1})` };
        default:
          return {};
      }
    } else if (background.value.type === "hex") {
      return { backgroundColor: background.value.value };
    }
  } else if (background.type === "gradient") {
    if (Array.isArray(background.value)) {
      const colors = background.value.map(color => {
        if (color.type === "brand") {
          switch (color.value) {
            case "black":
              return `hsla(var(--brand-black) / ${color.opacity ?? 1})`;
            case "white":
              return `hsla(var(--brand-white) / ${color.opacity ?? 1})`;
            case "off-white":
              return `hsla(var(--brand-off-white) / ${color.opacity ?? 1})`;
            case "yellow":
              return `hsla(var(--brand-yellow) / ${color.opacity ?? 1})`;
            case "navy":
              return `hsla(var(--brand-navy) / ${color.opacity ?? 1})`;
            case "accent":
              return `hsla(var(--brand-accent) / ${color.opacity ?? 1})`;
            default:
              return color.value;
          }
        } else if (color.type === "hex") {
          return color.value;
        }
        return "";
      }).filter(color => !!color);

      const direction = background.direction ? `to ${background.direction}` : "to bottom";
      return {
        backgroundImage: `linear-gradient(${direction}, ${colors.join(", ")})`
      };
    }
  }
  return {};
};

export const getTextColorClass = (textColor: ContentSectionProps["textColor"]) => {
  if (!textColor) return "";
  
  if (textColor.type === "brand") {
    switch (textColor.value) {
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
  } else if (textColor.type === "hex") {
    // For custom hex colors
    return textColor.value;
  }
  return "";
};