import React from "react";

function StyledVideoSection() {
  return (
    <div className="relative w-full flex justify-center px-4 sm:px-10 py-10">
      {/* Video Container */}
      <div className="relative w-full max-w-7xl rounded-2xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover rounded-2xl"
        >
          <source src="/demovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Full-Width Bottom Text */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center px-4 sm:px-8">
          <p className="text-[14px] sm:text-base md:text-lg lg:text-xl text-white font-light text-center max-w-5xl mx-auto">
            Die Taschen von Maison Margiela verkörpern den Nonkonformismus, der dem Maison innewohnt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StyledVideoSection;
