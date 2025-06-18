"use client";
import React, { useState } from "react";
import CourseCard from "../common/courseCard";
import MaxWidthWrapper from "../global/max-width-wrapper";
import CustomButton from "../common/button";
import { categories, courses } from "./searchData";
import MaxFullWidthWrapper from "../global/max-full-width-wrapper";
import InputField from "../common/input";
import { SearchIcon } from "lucide-react";

const SearchResults = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Programme");

  const filteredCourses =
    selectedCategory === "All Programme"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <>
    <MaxFullWidthWrapper>
                <div className="bg-[var(--primary-bg)] rounded-b-[70px] relative">
                    <MaxWidthWrapper className="pt-8">
                        <div className="flex gap-0 w-[70%] mx-auto">
        <InputField title="Search" placeholder="Search for courses" className="rounded-r-none" Icon={SearchIcon} />
<CustomButton title="Search" className="!w-fit my-auto !py-4 rounded-l-none h-fit"/>
                        </div>
                  
      <div className="flex flex-wrap gap-3 mb-16 mt-12 justify-center pb-16">
        {categories.map((cat) => (
          <CustomButton key={cat}
            onClick={() => setSelectedCategory(cat)} title={cat} bgVariant={selectedCategory===cat?"primary":"outline"} textVariant={selectedCategory===cat?"default":"secondary"} className={`px-4 py-2 rounded-full !w-fit text-sm border transition `}/>
        ))}
      </div>
      
    </MaxWidthWrapper>
</div>
    </MaxFullWidthWrapper>
    <MaxWidthWrapper>
        <div className="w-full mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 place-content-center mx-auto gap-4">
    {filteredCourses.map((course, index) => (
      <CourseCard key={index} course={course} />
    ))}
  </div>
      </div>
    </MaxWidthWrapper>
    </>
  );
};

export default SearchResults;
