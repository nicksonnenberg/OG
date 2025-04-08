import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  extraLarge?: boolean;
}

export const TestimonialCard = ({
  quote,
  name,
  role,
  avatar,
  extraLarge = false,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "flex h-full flex-col rounded-xl bg-brand-white border shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800",
      extraLarge ? "p-10 max-w-2xl mx-auto" : "p-6"
    )}>
      <div className={cn("mb-4 flex items-center", extraLarge && "mb-8")}>
        <div className={cn(
          "relative flex-shrink-0 overflow-hidden rounded-full mr-4",
          extraLarge ? "h-20 w-20" : "h-12 w-12"
        )}>
          <Image
            src={avatar}
            alt={name}
            fill
            sizes={extraLarge ? "(max-width: 768px) 80px, 80px" : "(max-width: 768px) 48px, 48px"}
            className="object-cover"
          />
        </div>
        <div>
          <div className={cn(
            "font-semibold text-black",
            extraLarge ? "text-xl" : "text-lg"
          )}>
            {name}
          </div>
          <div className={cn(
            "text-gray-500 dark:text-gray-400",
            extraLarge ? "text-lg" : "text-sm"
          )}>
            {role}
          </div>
        </div>
      </div>

      <blockquote className={cn(
        "flex-grow italic text-gray-700 dark:text-gray-300",
        extraLarge ? "text-xl leading-relaxed" : "text-base"
      )}>
        "{quote}"
      </blockquote>
    </div>
  );
}; 