import { events } from "@/data/events";
import { Metadata } from "next";
import EventClient from "@/components/_event-client";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { eventId: string } }): Promise<Metadata> {
  const event = events.find((event) => event.id === params.eventId);
  
  if (!event) {
    return {
      title: "Event Not Found",
    };
  }
  
  return {
    title: event.details.title,
    description: event.details.subtitle,
  };
}

export default function Event({ params }: { params: { eventId: string } }) {
  const event = events.find((event) => event.id === params.eventId);

  if (!event) {
    notFound();
  }

  return <EventClient event={event} />;
} 