import React from "react";

function StyledVideoSection() {
  return (
    <div className="relative w-full flex justify-center px-4 sm:px-10 py-10">
      {/* Video Container */}
      <div className="relative w-full max-w-7xl flex flex-col rounded-2xl overflow-hidden h-[300px] sm:h-[400px] md:h-[450px]">
        <div className="relative flex w-full h-full">
          {/* Left Video */}
          <div className="relative w-1/2 h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-l-2xl pointer-events-none"
              style={{ objectFit: 'cover', height: '100%' }}
            >
              <source src="/videos/4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          {/* Right Video */}
          <div className="relative w-1/2 h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-r-2xl pointer-events-none"
              style={{ objectFit: 'cover', height: '100%' }}
            >
              <source src="/videos/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
        
        {/* Full-Width Bottom Text */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 sm:px-8 text-center">
          <p className="text-[14px] sm:text-base md:text-lg lg:text-xl text-white font-light">
            Die Taschen von Maison Margiela verkörpern den Nonkonformismus, der dem Maison innewohnt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StyledVideoSection;