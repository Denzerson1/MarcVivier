import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { formatDistanceToNow, subDays } from "date-fns";

// Generate fixed timestamps for the last 7 days
const fixedTimestamps = [
  subDays(new Date(), 1).toISOString(),
  subDays(new Date(), 2).toISOString(),
  subDays(new Date(), 3).toISOString(),
  subDays(new Date(), 4).toISOString(),
  subDays(new Date(), 5).toISOString(),
  subDays(new Date(), 6).toISOString(),
];

const reviews = [
  { name: "Liam Mathews", timestamp: fixedTimestamps[0], title: "Great quality, worth it!", text: "The product exceeded my expectations. It has a premium feel and looks even better in person. Shipping took a bit longer than expected, but I'm really satisfied." },
  { name: "Sofia L.", timestamp: fixedTimestamps[1], title: "Absolutely love it!", text: "This is one of the best purchases I've made recently. The attention to detail is impressive." },
  { name: "Daniel K.", timestamp: fixedTimestamps[2], title: "Nice product, but check sizing!", text: "Quality is fantastic, and it looks elegant. I just wish I had double-checked the sizing before ordering – it runs slightly smaller than I expected. Other than that, it's perfect!" },
  { name: "Emma Carter", timestamp: fixedTimestamps[1], title: "Beyond expectations!", text: "This turned out to be an excellent buy. The craftsmanship is top-notch, and I've already received several compliments on it!" },
  { name: "Noah F.", timestamp: fixedTimestamps[4], title: "Fast shipping, great customer service!", text: "Arrived quicker than expected and the quality is superb. Had a small question about my order, and customer service responded within hours. Very happy!" },
  { name: "Isabelle N.", timestamp: fixedTimestamps[2], title: "Took a bit longer, but amazing product!", text: "The shipping was a little delayed, but honestly, it was worth the wait. The product is well-made, stylish, and exactly what I was looking for." },
  { name: "Liam Mathews", timestamp: fixedTimestamps[0], title: "Great quality, worth it!", text: "The product exceeded my expectations. It has a premium feel and looks even better in person. Shipping took a bit longer than expected, but I'm really satisfied." },
  { name: "Sofia L.", timestamp: fixedTimestamps[1], title: "Absolutely love it!", text: "This is one of the best purchases I've made recently. The attention to detail is impressive." },
  { name: "Daniel K.", timestamp: fixedTimestamps[2], title: "Nice product, but check sizing!", text: "Quality is fantastic, and it looks elegant. I just wish I had double-checked the sizing before ordering – it runs slightly smaller than I expected. Other than that, it's perfect!" },
  { name: "Emma Carter", timestamp: fixedTimestamps[1], title: "Beyond expectations!", text: "This turned out to be an excellent buy. The craftsmanship is top-notch, and I've already received several compliments on it!" },
  { name: "Noah F.", timestamp: fixedTimestamps[4], title: "Fast shipping, great customer service!", text: "Arrived quicker than expected and the quality is superb. Had a small question about my order, and customer service responded within hours. Very happy!" },
  { name: "Isabelle N.", timestamp: fixedTimestamps[2], title: "Took a bit longer, but amazing product!", text: "The shipping was a little delayed, but honestly, it was worth the wait. The product is well-made, stylish, and exactly what I was looking for." },
];

export default function ReviewsSection() {
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return (
    <section className="py-12 px-6 mx-auto max-w-7xl">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">What Our Customers Say</h2>
        <p className="text-gray-600">Satisfied customers are our top priority.</p>

        {/* Star Rating */}
        <div className="flex justify-center items-center mt-3 gap-2">
          <span className="text-lg font-semibold">4.91 out of 5</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-green-500 h-5 w-5" fill="currentColor" />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Scrollable Grid (3 per row, 2 per height) */}
      <div className="hidden md:block overflow-y-auto no-scrollbar h-[460px]">
        <div className="grid md:grid-cols-3 gap-6">
          {sortedReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              {/* Stars */}
              <div className="flex items-center text-green-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>

              {/* Review Content */}
              <h3 className="font-semibold mt-3">{review.title}</h3>
              <p className="text-gray-600 text-sm">{review.text}</p>

              {/* Reviewer Info */}
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Quote className="h-4 w-4 text-gray-400 mr-2" />
                <span>
                  {review.name},{" "}
                  <span className="text-gray-400">
                    {formatDistanceToNow(new Date(review.timestamp), { addSuffix: true })}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Scrollable Reviews */}
      <div className="md:hidden relative mx-auto w-full max-w-md overflow-hidden">
        <div className="overflow-y-auto no-scrollbar h-[420px] space-y-4 px-4">
          {sortedReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              {/* Stars */}
              <div className="flex items-center text-green-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>

              {/* Review Content */}
              <h3 className="font-semibold mt-3">{review.title}</h3>
              <p className="text-gray-600 text-sm">{review.text}</p>

              {/* Reviewer Info */}
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Quote className="h-4 w-4 text-gray-400 mr-2" />
                <span>
                  {review.name},{" "}
                  <span className="text-gray-400">
                    {formatDistanceToNow(new Date(review.timestamp), { addSuffix: true })}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
