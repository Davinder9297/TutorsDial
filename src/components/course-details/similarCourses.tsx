// components/SimilarCourses.tsx
import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../global/max-width-wrapper";

const similarCourses = [
  {
    title: "Product Management Basic - Course",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson – Head of Product Customer Platform Gojek Indonesia",
    price: "$380",
    oldPrice: "$500",
    image: "/images/home/courses/edu1.png",
  },
  {
    title: "Product Management Basic - Course",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson – Head of Product Customer Platform Gojek Indonesia",
    price: "$380",
    oldPrice: "$500",
    image: "/images/home/courses/edu2.png",
  },
  {
    title: "Product Management Basic - Course",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson – Head of Product Customer Platform Gojek Indonesia",
    price: "$380",
    oldPrice: "$500",
    image: "/images/home/courses/edu3.png",
  },
];

const SimilarCourses = () => {
  return (
    <MaxWidthWrapper>
        <div className="py-10 text-[#1F1C14]">
      {/* Title Row */}
      <div className="flex justify-between items-center mb-6 mt-10">
        <h2 className="text-xl font-semibold">Similar Courses</h2>
        <a href="#" className="text-sm text-gray-600 hover:text-black font-medium">
          See more &gt;
        </a>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
        {similarCourses.map((course, idx) => (
          <div key={idx} className="flex gap-4">
            <Image
              src={course.image}
              alt={course.title}
              width={100}
              height={100}
              className="rounded-lg object-cover w-[100px] h-[100px]"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-md font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
              <div className="mt-2">
                <span className="text-[var(--primary-button)] font-bold mr-2">{course.price}</span>
                <span className="line-through text-gray-400 text-sm">{course.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default SimilarCourses;
