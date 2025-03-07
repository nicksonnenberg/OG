"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

interface ModalProps {
  id: string;
  title: string;
  content: Array<{
    type: string;
    value: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ id, title, content, isOpen, onClose }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const renderContent = (item: { type: string; value: string }) => {
    switch (item.type) {
      case "video":
        return (
          <div className="aspect-video w-full relative">
            {mounted && (
              <>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <LoaderCircle className="animate-spin h-8 w-8 text-gray-500" />
                </div>
                <iframe
                  src={item.value}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                  className="w-full h-full rounded-lg relative z-10"
                  onLoad={(e) => {
                    (e.target as HTMLIFrameElement).style.opacity = "1";
                    (e.target as HTMLIFrameElement).previousElementSibling?.classList.add("hidden");
                  }}
                  style={{ opacity: 0 }}
                />
              </>
            )}
          </div>
        );
      case "text":
        return <p className="text-base">{item.value}</p>;
      default:
        return null;
    }
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          {content.map((item, index) => (
            <div key={index} className="mb-4">
              {renderContent(item)}
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}; 