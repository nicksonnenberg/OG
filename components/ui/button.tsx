"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useModal } from "@/components/modal-provider";

export interface ButtonProps {
  text: string;
  action?: string;
  target?: string;
  variant?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  align?: string;
}

export const Button = ({ 
  text, 
  action, 
  target, 
  variant = "default", 
  className,
  onClick,
  children,
  align = "center"
}: ButtonProps) => {
  const { openModal } = useModal();
  
  const getButtonClass = () => {
    switch (variant) {
      case "hero-button":
        return "bg-brand-yellow text-black hover:bg-amber-300";
      case "nav-button":
        return "bg-brand-yellow text-black hover:bg-amber-300";
      case "black":
        return "bg-brand-black text-brand-yellow hover:bg-gray-800";
      case "yellow":
      default:
        return "bg-brand-yellow text-black hover:bg-amber-300";
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    
    if (action === "modal" && target) {
      openModal(target);
    } else if (action === "href" && target) {
      window.open(target, "_blank");
    }
  };

  return (
    <button
      className={cn(
        "px-6 py-3 text-xl rounded-md font-medium transition-all duration-300 hover:scale-105 block",
        getButtonClass(),
        className,
        align == "center" ? "mx-auto" : align == "right" ? "ml-auto" : "mr-auto"
      )}
      onClick={handleClick}
    >
      {children || text}
    </button>
  );
}; 