// components/ExploreMoreButton.tsx
import React from "react";
import { Play } from "lucide-react"; // or use your own play icon

const ExploreMoreButton = () => {
  return (
    <div className="relative lg:w-72 lg:h-72 sm:w-48 sm:h-48 w-40 h-40 md:w-60 md:h-60 mx-auto">
      {/* Outer Circle */}
      <div className="absolute inset-0 rounded-full bg-[#D9ECEB] lg:p-10 p-0" />

      {/* Inner Orange Circle */}
      <div className="absolute lg:inset-[40px] md:inset-[30px] inset-[20px] rounded-full bg-[#FF713B] flex items-center justify-center">
        {/* Play Icon */}
        <Play className="text-white w-10 h-10" fill="white" />
      </div>

      {/* SVG Circular Text */}
      <svg
        viewBox="0 0 350 350"
        className="absolute lg:top-5.5 lg:left-5.5 md:top-4 md:left-5 sm:top-3 sm:left-3.5 top-3 left-3 w-full h-full"
      >
        <defs>
          <path
            id="circlePath"
            d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
            fill="none"
          />
        </defs>
        <text
          fill="white"
          fontSize="20"
          fontWeight="bold"
          letterSpacing="2px"
        >
          <textPath
            href="#circlePath"
            startOffset="0"
            textLength="630"
            lengthAdjust="spacing"
          >
            Explore More - Explore More - Explore More -
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default ExploreMoreButton;
