"use client";

import { useModal } from "./modal-provider";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface NavbarProps {
  title: string;
  content: Array<{
    type: string;
    text: string;
    action: string;
    target: string;
    variant: string;
  }>;
}

export const Navbar = ({ content, title }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 py-4 transition-all duration-300",
        scrolled ? "bg-brand-black shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className={cn("text-white", "text-4xl")}>{title}</span>
          </Link>
        </div>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden items-center space-x-4 md:flex">
          {content.map((item, index) => {
            if (item.type === "button") {
              return (
                <Button
                  key={index}
                  text={item.text}
                  action={item.action}
                  target={item.target}
                  variant={item.variant}
                />
              );
            }
            return null;
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="text-4xl text-white transition-all duration-300 md:hidden h-12 w-12 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <div className="w-full h-full">
            {isMenuOpen ? "✕" : "☰"}
          </div>
        </button>
      </div>

      {/* Mobile menu - only visible when open */}
      <div
        className={cn(
          "bg-brand-black absolute w-full overflow-hidden transition-all duration-400 md:hidden",
          isMenuOpen ? "max-h-screen" : "max-h-0",
          scrolled ? "bg-brand-black shadow-md" : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
          {content.map((item, index) => {
            if (item.type === "button") {
              return (
                <Button
                  key={index}
                  text={item.text}
                  action={item.action}
                  target={item.target}
                  variant={item.variant}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </nav>
  );
};
