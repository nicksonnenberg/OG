"use client";

interface LinkedInPostProps {
  url: string;
}

export const LinkedInPost = ({ url }: LinkedInPostProps) => {
  return (
    <div className="my-8 w-full max-w-3xl mx-auto">
      <iframe
        src={url}
        height="570"
        width="100%"
        frameBorder="0"
        allowFullScreen
        title="LinkedIn Post"
        className="rounded-lg"
      />
    </div>
  );
}; 