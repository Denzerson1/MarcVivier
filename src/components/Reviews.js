import { useEffect, useState } from "react";

export default function TrustpilotReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://api.trustpilot.com/v1/business-units/YOUR_BUSINESS_ID/reviews", {
      headers: { Authorization: "Bearer YOUR_API_KEY" }
    })
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-center text-2xl font-bold">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">{review.title}</h3>
            <p className="text-gray-600">{review.text}</p>
            <p className="text-sm text-gray-500 mt-3">- {review.consumer.displayName}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
