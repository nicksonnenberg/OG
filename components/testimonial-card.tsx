import Image from "next/image";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const TestimonialCard = ({
  quote,
  name,
  role,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-xl bg-brand-white p-6 border shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      <div className="mb-4 flex items-center">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full mr-4">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="(max-width: 768px) 48px, 48px"
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-black">{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {role}
          </div>
        </div>
      </div>

      <blockquote className="flex-grow text-base italic text-gray-700 dark:text-gray-300">
        "{quote}"
      </blockquote>
    </div>
  );
}; 