"use client";

import { HeroSection } from "@/components/hero-section";
import { ContentSection } from "@/components/content-section";
import { ModalProvider } from "@/components/modal-provider";
import { Navbar } from "@/components/navbar";


export default function EventClient({ event }: any) {
  return (
    <ModalProvider modals={event.modals}>
      <Navbar content={event.navbar.content} title={event.navbar.title} />
      
      <HeroSection 
        background={event.heroSection.background}
        overlay={event.heroSection.overlay}
        content={event.heroSection.content}
      />
      
      {event.contentSections.map((section: any) => (
        <ContentSection
          key={section.id}
          id={section.id}
          background={section.background}
          textColor={section["text-color"]}
          content={section.content}
        />
      ))}
    </ModalProvider>
  );
} 