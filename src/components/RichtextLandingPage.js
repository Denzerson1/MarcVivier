import { Sparkles } from "lucide-react";

export default function RichTextSection() {
  return (
    <section id="product-grid" className="text-center max-w-2xl mx-auto py-16 px-6">
      {/* Icon on Top */}
      <div className="flex justify-center">
       
          <Sparkles className="h-8 w-8" />
        
      </div>

      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 mt-6">
        Elegance in Every Detail
      </h2>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mt-4">
        Discover timeless pieces crafted for women. <br />
        Inspired by beauty, designed with love.
      </p>
    </section>
  );
}
