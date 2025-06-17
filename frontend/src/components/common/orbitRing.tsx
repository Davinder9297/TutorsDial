import React from "react";
import { OrbitingCircles } from "../magicui/orbiting-circles";
import { File, Settings } from "lucide-react";

interface OrbitingRingStepProps {
  step: string;
  label: string;
  description: React.ReactNode;
  color: string;
  orbitingChildren: React.ReactNode[]; // orbiting icons/dots passed as children
  buttonText?: string;
}

export default function OrbitingRingStep({
  step,
  label,
  description,
  color,
  orbitingChildren,
  buttonText,
}: OrbitingRingStepProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm">
      <div className="relative size-48 rounded-full flex items-center justify-center">
        {/* Orbiting Icons/Dots */}
        <OrbitingCircles>
    <File />
    <Settings />
    <File />
  </OrbitingCircles>

        {/* Center Content */}
        <div className="flex flex-col items-center z-10">
          <span className="text-xl font-bold">{step}</span>
          <span className="text-xs text-gray-600 tracking-widest">STEP</span>
        </div>

        {/* Static Colored Ring */}
        <div
          className="absolute inset-0 border-[6px] rounded-full"
          style={{ borderColor: color }}
        />
      </div>

      {/* Label & Description */}
      <h3 className="mt-4 text-lg font-semibold" style={{ color }}>
        {label}
      </h3>
      <p className="text-sm text-gray-500 px-2 mt-1">{description}</p>

      {/* Button */}
      {buttonText && (
        <button className="mt-4 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded shadow text-sm hover:brightness-105">
          {buttonText}
        </button>
      )}
    </div>
  );
}
