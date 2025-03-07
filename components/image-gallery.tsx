"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`cursor-pointer overflow-hidden rounded-lg ${
              images.length % 2 !== 0 && index === images.length - 1 
                ? "sm:col-span-2 lg:col-span-1" 
                : ""
            } ${
              images.length % 3 !== 0 && index === images.length - 1 && images.length % 3 === 1
                ? "lg:col-span-3"
                : images.length % 3 === 2 && index >= images.length - 2
                ? "lg:col-span-3 lg:last:col-span-3"
                : ""
            }`}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <Button
            text="✕"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl bg-transparent hover:bg-transparent p-2"
          />
          
          <Button
            text="‹"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-transparent hover:bg-transparent p-2"
          />
          
          <div className="relative max-w-4xl max-h-[80vh]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh]"
            />
          </div>
          
          <Button
            text="›"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-transparent hover:bg-transparent p-2"
          />
        </div>
      )}
    </div>
  );
}; 