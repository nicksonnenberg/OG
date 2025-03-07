import { Text } from "@/components/text";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Text variant="heading">Event Not Found</Text>
      <Text variant="body">
        The event you are looking for does not exist or has been removed.
      </Text>
      <a href="/" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Return Home
      </a>
    </div>
  );
} 