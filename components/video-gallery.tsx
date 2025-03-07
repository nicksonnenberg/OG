"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

interface VideoGalleryProps {
  videos: Array<{
    src: string;
  }>;
  initialDisplay?: number;
  button?: {
    text: string;
    variant?: string;
  };
}

export const VideoGallery = ({
  videos,
  initialDisplay,
  button,
}: VideoGalleryProps) => {
  const [displayCount, setDisplayCount] = useState(
    initialDisplay || Math.min(4, videos.length),
  );

  const showMore = () => {
    setDisplayCount(videos.length);
  };

  return (
    <div className="my-8 w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {videos.slice(0, displayCount).map((video, index) => (
          <div
            key={index}
            className="relative aspect-video w-full overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
              <LoaderCircle className="h-8 w-8 animate-spin text-gray-500" />
            </div>
            <iframe
              src={video.src}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowFullScreen
              className="relative z-10 h-full w-full rounded-lg"
              onLoad={(e) => {
                (e.target as HTMLIFrameElement).style.opacity = "1";
                (
                  e.target as HTMLIFrameElement
                ).previousElementSibling?.classList.add("hidden");
              }}
              style={{ opacity: 0 }}
            />
          </div>
        ))}
      </div>

      {displayCount < videos.length && button && (
        <div className="mt-8 flex justify-center">
          <Button
            text={button.text}
            variant={button.variant}
            onClick={showMore}
          />
        </div>
      )}
    </div>
  );
};
