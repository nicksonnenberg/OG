"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Profile {
  name: string;
  title: string;
  image: string;
  description: string;
}

interface ProfileGalleryProps {
  profiles: Profile[];
  className?: string;
}

export const ProfileGallery = ({ profiles, className }: ProfileGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 w-full">
      {profiles.map((profile, index) => (
        <div key={index}>
          {/* Mobile view - visible only on small screens */}
          <div className="flex md:hidden flex-col items-center p-4 rounded-lg">
            <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-center">{profile.name}</h3>
            <p className="text-sm mb-3 opacity-80 text-center">{profile.title}</p>
            <p className="text-center">{profile.description}</p>
          </div>
          
          {/* Desktop view - visible only on medium screens and up */}
          <div className="hidden md:block">
            <div className={cn("group relative h-[600px] w-full justify-self-center overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out", className)}>
              {/* Default State */}
              <div className="inset-0 h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                <div className="flex h-full flex-col">
                  <div className="relative flex-1 overflow-hidden rounded-lg">
                    <Image src={profile.image} alt="" fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-brand-black">{profile.name}</h2>
                    <p className="text-gray-500">{profile.title}</p>
                  </div>
                </div>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image src={profile.image} alt="" fill className="object-cover" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-brand-black">{profile.name}</h2>
                      <p className="text-gray-500 text-xl">{profile.title}</p>
                    </div>
                  </div>

                  <div className="h-px bg-border my-6" />

                  <div className="space-y-6">
                    <p className="text-2xl leading-relaxed text-gray-500">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};