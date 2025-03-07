"use client";

import Image from "next/image";

interface Profile {
  name: string;
  title: string;
  image: string;
  description: string;
}

interface ProfileGalleryProps {
  profiles: Profile[];
}

export const ProfileGallery = ({ profiles }: ProfileGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 w-full">
      {profiles.map((profile, index) => (
        <div key={index} className="flex flex-col items-center p-4 rounded-lg">
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
      ))}
    </div>
  );
}; 