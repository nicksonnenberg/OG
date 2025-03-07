import { events } from "@/data/events";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-off-white flex flex-col justify-between">
      {/* Header */}
      <header className="py-12 px-4 bg-brand-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-accent">
            Nick Sonnenberg Events
          </h1>
          <p className="mt-4 text-xl text-center text-brand-black max-w-3xl mx-auto">
            Exclusive business workshops and retreats designed to transform your business and life
          </p>
        </div>
      </header>

      {/* Events Grid */}
      <main className="max-w-7xl py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Link 
              key={event.id}
              href={`/${event.id}`}
              className="group block overflow-hidden rounded-2xl bg-brand-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {event.details["preview-image"] && (
                  <div className="h-full w-full relative">
                    <Image 
                      src={event.details["preview-image"]}
                      alt={event.details.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent"></div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-brand-white mb-1">{event.details.title}</h2>
                  <p className="text-brand-off-white text-lg">{event.details.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-brand-black font-medium">{event.details.location}</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-brand-black font-medium">{event.details.dates}</p>
                </div>
                <div className="mt-6">
                  <span className="inline-block px-4 py-2 bg-brand-yellow text-brand-black font-medium rounded-full text-sm hover:bg-brand-navy hover:text-brand-white transition-colors">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy py-12 text-brand-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Nick Sonnenberg. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
