import { Sparkles } from "lucide-react";

export default function RichTextSection() {
  return (
    <section className="text-center max-w-2xl mx-auto py-12 px-4 sm:px-6">
      {/* Icon on Top */}
      <div className="flex justify-center">
        <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />
      </div>

      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4 sm:mt-6">
        Elegance in Every Detail
      </h2>

      {/* Subheading */}
      <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
        Discover timeless pieces crafted for women. <br className="hidden sm:block" />
        Inspired by beauty, designed with love.
      </p>
    </section>
  );
}
