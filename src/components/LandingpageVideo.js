import React from "react";

function StyledVideoSection() {
  return (
    <div className="relative w-full flex justify-center px-10 py-10">
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

        {/* Overlay Content */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center px-4">
          <p className="text-sm font-light max-w-2xl">
            Die Taschen von Maison Margiela verkörpern den Nonkonformismus, der dem Maison innewohnt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StyledVideoSection;
