// components/SubjectDetails.tsx
import CustomButton from "@/components/common/button";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { CheckCircle } from "lucide-react";
import React from "react";

const SubjectDetails = () => {
  return (
    <div className="bg-[var(--primary-bg)] py-12 pb-40">
      <MaxWidthWrapper>
        {/* Top white card */}
      <div className="bg-white rounded-2xl shadow-md py-6 px-8 mb-12 text-[#1F1C14] font-bold">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Maths - for Standard 3 Students | Episode 2
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <p>
              <span className="font-normal">Timing:</span>{" "}
              <span className="font-bold">02:00 PM to 03:00 PM</span>{" "}
              <span className="text-primary cursor-pointer ml-2 text-[#9B51E0]">View detail</span>
            </p>
            <p className="md:mt-4 mt-2">
              <span className="font-normal">Teacher:</span>{" "}
              <span className="text-[#9B51E0] cursor-pointer">Jassia Andrew</span>
            </p>
            <p className="font-normal md:mt-4 mt-2">
              Students have learned: <span className="font-bold">12,000+</span>
            </p>
            <p className="flex items-center gap-1 font-normal md:mt-4 mt-2">
              Review:
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </p>
            <p className="md:mt-4 mt-2 font-normal">
              Price: <span className="font-semibold">₹200</span> <span className="text-gray-500">(optional)</span>
            </p>
            <CustomButton title="Chat" className="bg-yellow-400 font-semibold px-8 py-2 text-white rounded-md hover:bg-yellow-500 transition w-fit md:mt-4 mt-2"/>
          </div>

          
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-black space-y-10">
        {/* Subject Details */}
        <div>
          <h3 className="text-xl font-bold mb-2">Subject Details</h3>
          <p className="text-[#1F1C14] text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
          </p>
        </div>

        {/* Who This is For */}
        <div>
          <h3 className="text-xl font-bold mb-2">Who this Subject is for</h3>
          <p className="text-[#1F1C14] text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        {/* Learnings */}
        <div>
          <h3 className="text-xl font-bold mb-4">What you&apos;ll learn in this Subject:</h3>
          <ul className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <span className="text-[#1F1C14] text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SubjectDetails;
