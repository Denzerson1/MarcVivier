import React from "react";

function LandingVideo() {
  const scrollToRichtext = () => {
    const richtextSection = document.getElementById("Richtext");
    if (richtextSection) {
      window.scrollTo({
        top: richtextSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src="/videos/stephansdom.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        {/* Discover the Collection Button */}
        <button
          onClick={scrollToRichtext}
          className="absolute bottom-5 px-3 py-1 bg-black text-white text-xs font-bold tracking-wide rounded-md border border-white shadow-md hover:bg-gray-800 transition w-52"
        >
          DISCOVER THE COLLECTION
        </button>
      </div>
    </div>
  );
}

export default LandingVideo;
