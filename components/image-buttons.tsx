"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useModal } from "./modal-provider";

interface ImageButtonItem {
  text: string;
  image: string;
  action: string;
  target: string;
}

interface ImageButtonsProps {
  items: ImageButtonItem[];
}

export const ImageButtons = ({ items }: ImageButtonsProps) => {
  const { openModal } = useModal();
  
  const handleClick = (action: string, target: string) => {
    if (action === "modal") {
      openModal(target);
    } else if (action === "href") {
      window.open(target, "_blank");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 mx-auto">
      {items.map((item, index) => (
        <div 
          key={index}
          className="group relative cursor-pointer overflow-hidden rounded-lg"
          onClick={() => handleClick(item.action, item.target)}
        >
          <div className="absolute inset-0 bg-black/50 transition-all group-hover:bg-black/30"></div>
          <Image
            src={item.image}
            alt={item.text}
            width={800}
            height={450}
            className="h-fit w-full object-cover"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 