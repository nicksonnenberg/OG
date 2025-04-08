"use client";

import { Text } from "./text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { InfoCard } from "@/components/info-card";
import { ProfileGallery } from "@/components/profile-gallery";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ImageGallery } from "@/components/image-gallery";
import { VideoGallery } from "@/components/video-gallery";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ImageButtons } from "@/components/image-buttons";
import { LinkedInPost } from "@/components/linkedin-post";
import { Button } from "@/components/ui/button";
import { getBackgroundStyle, getTextColorClass } from "@/lib/utils";
import { ContentSectionProps } from "@/lib/types";
import { TestimonialCard } from "@/components/testimonial-card";

export const ContentSection = ({ id, background, textColor, content }: ContentSectionProps) => {
  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "text":
        return (
          <Text 
            key={index} 
            variant={item.variant as any} 
            align={item.align || "center"}
            underline={item.underline}
            color={item.color}
            animatedUnderline={item.animatedUnderline}
          >
            {item.value}
          </Text>
        );
      
      case "image":
        return (
          <div key={index} className={cn("mb-12 relative w-full mx-auto rounded-lg overflow-hidden", item.align === "left" ? "self-start" : item.align === "right" ? "self-end" : "self-center")}>
            <Image 
              src={item.value} 
              alt="Section image" 
              width={0} 
              height={0} 
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        );
      
      case "list":
        return (
          <div key={index} className="my-4">
              <ul className={cn("space-y-2 mb-12", item.variant === "bulleted" ? "pl-6 list-disc" : "list-none")}>
                {item.items.map((listItem: any, i: number) => (
                  renderContent(listItem, i)
                ))}
              </ul>
          </div>
        );
      
      case "info-card":
        return (
          <InfoCard 
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            emoji={item.emoji}
            align={item.align}
            dark={item.dark}
            variant={item.variant}
            background={item.background}
          />
        );
      
      case "profile-gallery":
        return (
          <ProfileGallery 
            key={index}
            profiles={item.profiles}
          />
        );
      
      case "testimonial-carousel":
        return (
          <TestimonialCarousel 
            key={index}
            testimonials={item.value}
          />
        );
      
      case "image-gallery":
        return (
          <ImageGallery 
            key={index}
            images={item.images}
          />
        );
      
      case "video-gallery":
        return (
          <VideoGallery 
            key={index}
            videos={item.value}
            initialDisplay={item.initialDisplay}
            button={item.button}
          />
        );
      
      case "accordion":
        return (
          <Accordion key={index} type="single" collapsible className="w-full max-w-screen-lg mx-auto my-4">
            {item.items.map((accordionItem: any, i: number) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{accordionItem.title}</AccordionTrigger>
                <AccordionContent>{accordionItem.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        );
      
      case "image-buttons":
        return (
          <ImageButtons 
            key={index}
            items={item.items}
          />
        );
      
      case "linkedin-post":
        return (
          <LinkedInPost 
            key={index}
            url={item.value}
          />
        );
      
      case "button":
        return (
          <Button
            key={index}
            text={item.text}
            action={item.action}
            target={item.target}
            variant={item.variant}
            align={item.align}
          />
        );
      
      case "testimonial":
        return (
          <div key={index} className="w-full max-w-md my-6">
            <TestimonialCard
              quote={item.quote}
              name={item.name}
              role={item.role}
              avatar={item.avatar}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-16 px-4 flex flex-col items-center",
        getTextColorClass(textColor)
      )}
      style={getBackgroundStyle(background)}
    >
      <div className="container mx-auto">
        {content.map((item, index) => renderContent(item, index))}
      </div>
    </section>
  );
}; 