"use client";

import { Text } from "./text";
import { cn, decimalToHex } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  background: {
    type: string;
    value: string;
  };
  overlay?: {
    type: string;
    value: any;
  };
  content: Array<{
    type: string;
    value?: string;
    variant?: string;
    text?: string;
    action?: string;
    target?: string;
    underline?: boolean;
    color?: {
      type: string;
      value: any;
    };
  }>;
}

export const HeroSection = ({
  background,
  overlay,
  content,
}: HeroSectionProps) => {
  // Create background style object instead of classes
  const backgroundStyle =
    background.type === "image"
      ? {
          backgroundImage: `url('${background.value}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : {};

  return (
    <section
      className={cn(
        "relative flex h-fit min-h-screen flex-col items-center justify-center py-24 text-white",
      )}
      style={backgroundStyle}
    >
      {overlay && (
        <div
          className="absolute inset-0"
          style={
            overlay.type === "color"
              ? {
                  backgroundColor:
                    overlay.value.type === "brand"
                      ? `hsla(var(--brand-${overlay.value.value}) / ${overlay.value.opacity ?? 1})`
                      : overlay.value.value,
                  opacity: (overlay.value.opacity ?? 100) / 100,
                }
              : overlay.type === "gradient"
                ? {
                    background: `linear-gradient(to bottom, ${overlay.value
                      .map((item: any, index: number) => {
                        const color =
                          item.type === "brand"
                            ? `hsla(var(--brand-${item.value}) / ${item.opacity ?? 1})`
                            : item.value + decimalToHex(item.opacity ?? 1);
                        return color;
                      })
                      .join(", ")})`,
                  }
                : {}
          }
        />
      )}

      <div className="relative z-10 mx-auto flex flex-col items-center justify-center gap-4 text-center">
        {content.map((item, index) => {
          if (item.type === "text") {
            return (
              <Text key={index} variant={item.variant ?? ""} align="center" underline={item.underline} color={item.color}>
                {item.value}
              </Text>
            );
          } else if (item.type === "button") {
            return (
              <Button
                key={index}
                text={item.text || ""}
                action={item.action}
                target={item.target}
                variant={item.variant}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};
