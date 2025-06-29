"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { MagicCard } from "@/components/magicui/magic-card";
import MaxWidthWrapper from "../global/max-width-wrapper";
import Image from "next/image";
import SectionHeading from "../common/headings";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

function ExclusiveServices() {
  const swiperRef = useRef<SwiperRef>(null);
  const [progress, setProgress] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxCardHeight, setMaxCardHeight] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const services = [
    {
    title: 'Product Management Basic - Course',
    date: '1 - 28 July 2022',
    description:
      'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia',
    price: '$380',
    oldPrice: '$500',
    students: 40,
    image: '/images/python-logo.png',
  },
  {
    title: 'Product Management Basic - Course',
    date: '1 - 28 July 2022',
    description:
      'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia',
    price: '$380',
    oldPrice: '$500',
    students: 40,
    image: '/images/python-logo.png',
  },
  {
    title: 'Product Management Basic - Course',
    date: '1 - 28 July 2022',
    description:
      'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia',
    price: '$380',
    oldPrice: '$500',
    students: 40,
    image: '/images/python-logo.png',
  },
  {
    title: 'Product Management Basic - Course',
    date: '1 - 28 July 2022',
    description:
      'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia',
    price: '$380',
    oldPrice: '$500',
    students: 40,
    image: '/images/python-logo.png',
  },
  {
    title: 'Product Management Basic - Course',
    date: '1 - 28 July 2022',
    description:
      'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia',
    price: '$380',
    oldPrice: '$500',
    students: 40,
    image: '/images/python-logo.png',
  },
  {
    title: 'Product Management Basic - Course',
    date: '1 - 28 July 2022',
    description:
      'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia',
    price: '$380',
    oldPrice: '$500',
    students: 40,
    image: '/images/python-logo.png',
  },
  ];

  const updateMaxHeight = () => {
    if (cardRefs.current.length) {
      const maxHeight = Math.max(...cardRefs.current.map((ref) => ref?.offsetHeight || 0));
      setMaxCardHeight(maxHeight);
    }
  };

  useEffect(() => {
    updateMaxHeight();
  }, [services]);

  useEffect(() => {
    const handleResize = () => {
      updateMaxHeight();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

  return (
    <section className="relative mb-20">
      <MaxWidthWrapper className="">
        <header>
          <SectionHeading
  imgSrc="/images/home/heading-line.png"
  imgAlt="underline"
>
  Exclusive Bundles
</SectionHeading>
          <p className="lg:text-xl max-w-3xl text-sm mt-4 text-center mx-auto text-[var(--secondary-head)]">
            Onlearing  is one powerful online software suite that combines all the tools needed to run a successful school or office.
          </p>
        </header>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = { swiper })} // Ensure SwiperRef is stored properly
          onSlideChange={(swiper) => {
            const totalSlides = swiper.slides.length - Number(swiper.params.slidesPerView) + 1;
            const progressValue = (swiper.realIndex / (totalSlides - 1)) * 100;
            setProgress(progressValue);
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3s
          slidesPerView={1.2}
          breakpoints={{
            1024: { slidesPerView: 2.2 },
            730: { slidesPerView: 2.2 },
          }}
          spaceBetween={40}
          className="w-full mt-10 gap-10 flex"
          onMouseEnter={() => swiperRef.current?.swiper?.autoplay.stop()} // Stop autoplay on hover
          onMouseLeave={() => swiperRef.current?.swiper?.autoplay.start()} // Resume autoplay on leave
        >
          {services.map((item, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => swiperRef.current?.swiper?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.swiper?.autoplay.start()}
              className="pb-16"
            >
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={{ height: maxCardHeight || "auto" }}
                className="shadow-md rounded-3xl"
              >
                <MagicCard
                  // className="bg-gradient-to-r from-[#171717] via-[#323335] to-[#171717] rounded-3xl"
                  gradientFrom={"white"}
                  gradientTo={"#ff6300"}
                  // className="bg-gradient-to-r from-[#171717] via-[#323335] to-[#171717] shadow-lg"
                >
                  <div className="flex md:flex-row flex-col max-w-5xl w-full rounded-xl overflow-hidden shadow-lg bg-white">
      {/* Left Side with Background & Image */}
      <div className="bg-[#03989E] flex items-center justify-center md:w-1/2 p-6 relative w-full">
        <Image
          src="/images/home/courses/course.png" // change to your path
          alt="Course Logo"
          className="h-full w-full object-contain"
          width={800}
          height={800}
        />
        <div className="flex items-center gap-3 absolute bottom-5 right-5 bg-white px-4 py-2 rounded-full">
          <span className="text-[var(--primary-button)] font-bold text-2xl">₹ 380</span>
          <span className="line-through text-gray-400 text-base">₹ 500</span>
        </div>
      </div>

      {/* Right Side with Content */}
      <div className="md:w-1/2 w-full p-6 space-y-3 border-t-[1px] rounded-tr-2xl">
        <p className="text-xs text-gray-500">1 - 28 July 2022</p>
        <h2 className="text-xl font-bold text-[var(--primary-button)]">
          Product Management Basic - Course
        </h2>
        <p className="text-sm text-gray-600 leading-snug">
          Product Management Masterclass, you will learn with Sarah Johnson – Head of Product Customer Platform Gojek Indonesia.
        </p>

        {/* Students Section */}
        <AvatarCircles numPeople={99} avatarUrls={avatars} />
      </div>
    </div>
                </MagicCard>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MaxWidthWrapper>

      {/* Progress Bar */}

      <MaxWidthWrapper className="flex flex-row gap-5 mt-6 text-general items-center">
        <div
          className="w-10 flex items-center justify-center h-10 p-3 bg-[var(--primary-button)] hover:bg-[var(--primary-hover)] transition-colors ease-in-out duration-300 border border-[var(--primary-button)] rounded-full cursor-pointer"
          onClick={() => swiperRef.current?.swiper?.slidePrev()} // Use swiperRef.current?.swiper
        >
          <ArrowLeft className="w-3" />
        </div>
        <div
          className="w-10 flex items-center justify-center h-10 p-3 bg-[var(--primary-button)] hover:bg-[var(--primary-hover)] transition-colors ease-in-out duration-300 border border-[var(--primary-button)] rounded-full cursor-pointer"
          onClick={() => swiperRef.current?.swiper?.slideNext()} // Use swiperRef.current?.swiper
        >
          <ArrowRight className="w-3" />
        </div>
        <div className="w-full h-[1.5px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--primary-button)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default ExclusiveServices;
