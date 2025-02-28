import React from "react";

function LandingVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/demovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content (Optional) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Vacier Jewelry</h1>
        <p className="text-lg md:text-xl mt-4 drop-shadow-lg">Minimalist & Timeless</p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold uppercase tracking-wide rounded-lg hover:bg-gray-300 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default LandingVideo;
