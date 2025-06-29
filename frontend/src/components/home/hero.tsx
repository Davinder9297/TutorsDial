"use client";
import React from "react";
import "swiper/css";
import MaxWidthWrapper from "../global/max-width-wrapper";
import Image from "next/image";
import MaxFullWidthWrapper from "../global/max-full-width-wrapper";
import CustomButton from "../common/button";
import ExploreMoreButton from "./exploreMoreButton";

function Hero() {
  return (
    <MaxFullWidthWrapper className="relative">
        <div className="bg-[var(--primary-bg)] rounded-b-[70px] relative">
                    <Image src={"/images/auth/line.png"} alt="" width={100} height={200} className="md:absolute hidden md:flex top-68 left-[10%] select-none" draggable={false}/>
                    <Image src={"/images/home/hero.svg"} alt="hero" width={800} height={900} className="flex justify-end ml-auto object-cover max-h-[80vh]"/>
            <MaxWidthWrapper>
                <div className="flex flex-col lg:gap-6 absolute lg:top-16 sm:top-8 sm:gap-12 top-0">
                    <div className="bg-white rounded-md text-[var(--primary-text)] px-6 py-2 text-base font-medium w-fit">Never stop learning</div>
                    <div className="text-[var(--primary-head)] px-6 py-2 lg:text-6xl font-bold lg:max-w-3xl md:max-w-2xl sm:max-w-[60%] max-w-[70%] sm:leading-snug text-lg sm:text-3xl md:text-5xl -ml-6 sm:ml-0">Find the Right Tutor Near You – Learn Better, Smarter, Faster!</div>
                    <div className="flex gap-8 sm:mt-16 md:mt-0">
                        <CustomButton title="View Tutor" className="!w-fit"/>
                        <div className="text-sm md:flex items-center gap-2 my-auto hidden ">
          <div className="flex -space-x-2">
            <div className="md:w-10 md:h-10 w-6 h-6 border-2 border-[var(--primary-button)] bg-purple-500 rounded-full" />
            <div className="md:w-10 md:h-10 w-6 h-6 border-2 border-[var(--primary-button)] bg-yellow-500 rounded-full" />
            <div className="md:w-10 md:h-10 w-6 h-6 border-2 border-[var(--primary-button)] bg-blue-500 rounded-full" />
          </div>
          <Image src={"/images/home/rating.png"} alt="ratings" width={100} height={50} className="" />
        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
         <div className="absolute left-1/2 -translate-x-1/2 md:-bottom-32 sm:-bottom-16 -bottom-24 z-10">
  <ExploreMoreButton />
</div>

    </MaxFullWidthWrapper>
  );
}

export default Hero;
