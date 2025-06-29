"use client";
import React, { useState } from "react";
import CourseCard from "../common/courseCard";
import SectionHeading from "../common/headings";
import MaxWidthWrapper from "../global/max-width-wrapper";
import CustomButton from "../common/button";

const categories = ["All Programme", "Mathematics", "English", "Programming", "Science"];
// mockData.ts
export const courses = [
  {
    category: "Mathematics",
    imageUrl: "/images/home/courses/course.png",
    studentCount: 40,
    startDate: "10th June 2025",
    title: "Mathematics",
    description: "Master algebra, geometry, and more with expert local tutors.",
    classes: "12",
    mode: "Online & Offline Available",
    timings: "5:00 PM – 8:00 PM",
    price: 1380,
    originalPrice: 2500,
  },
  {
    category: "English",
    imageUrl: "/images/home/courses/course.png",
    studentCount: 40,
    startDate: "8th June 2025",
    title: "English Language",
    description: "Master algebra, geometry, and more with expert local tutors.",
    classes: "1 to 12",
    mode: "Near You & Online",
    timings: "3:00 PM – 6:00 PM",
    price: 1380,
    originalPrice: 2500,
  },
  {
    category: "Programming",
    imageUrl: "/images/home/courses/course.png",
    studentCount: 40,
    startDate: "15th June 2025",
    title: "Computer Basics to Programming",
    description: "Master algebra, geometry, and more with expert local tutors.",
    classes: "9 to Degree",
    mode: "Home & Online Tuition",
    timings: "Weekdays – 6:00 PM to 9:00 PM",
    price: 1380,
    originalPrice: 2500,
  },
  {
    category: "Science",
    imageUrl: "/images/home/courses/course.png",
    studentCount: 40,
    startDate: "12th June 2025",
    title: "Science",
    description: "Understand Physics, Chemistry & Biology with real-world examples.",
    classes: "6 to 10",
    mode: "Online Only",
    timings: "4:30 PM – 7:30 PM",
    price: 1380,
    originalPrice: 2500,
  },{
    category: "Science",
    imageUrl: "/images/home/courses/course.png",
    studentCount: 40,
    startDate: "12th June 2025",
    title: "Science",
    description: "Understand Physics, Chemistry & Biology with real-world examples.",
    classes: "6 to 10",
    mode: "Online Only",
    timings: "4:30 PM – 7:30 PM",
    price: 1380,
    originalPrice: 2500,
  },
  {
    category: "Science",
    imageUrl: "/images/home/courses/course.png",
    studentCount: 40,
    startDate: "12th June 2025",
    title: "Science",
    description: "Understand Physics, Chemistry & Biology with real-world examples.",
    classes: "6 to 10",
    mode: "Online Only",
    timings: "4:30 PM – 7:30 PM",
    price: 1380,
    originalPrice: 2500,
  },
  
];

const FeaturedTutors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Programme");

  const filteredCourses =
    selectedCategory === "All Programme"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <MaxWidthWrapper className="">
        <SectionHeading
          imgSrc="/images/home/heading-line.png"
          imgAlt="underline"
        >
          Featured Tutors
        </SectionHeading>
                  
      <div className="flex flex-wrap gap-3 mb-16 mt-12 justify-center">
        {categories.map((cat) => (
          <CustomButton key={cat}
            onClick={() => setSelectedCategory(cat)} title={cat} bgVariant={selectedCategory===cat?"primary":"outline"} textVariant={selectedCategory===cat?"default":"secondary"} className={`px-4 py-2 rounded-full !w-fit text-sm border transition`}/>
        ))}
      </div>

      <div className="w-full mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 place-content-center mx-auto gap-4">
    {filteredCourses.map((course, index) => (
      <CourseCard key={index} course={course} />
    ))}
  </div>
{/* </div> */}

      </div>
      
    </MaxWidthWrapper>
  );
};

export default FeaturedTutors;
