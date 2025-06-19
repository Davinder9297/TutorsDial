import { Course } from "@/types/courseCard";
import React from "react";
import CustomButton from "./button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const {
    imageUrl,
    studentCount,
    startDate,
    title,
    description,
    classes,
    mode,
    timings,
    price,
    originalPrice,
  } = course;
  const router = useRouter();

  return (
<div className="bg-white !rounded-2xl shadow-lg overflow-hidden w-full flex flex-col h-full hover:scale-[102%] border-l-2 border-r-2">
      <div className="relative">
        <Image src={imageUrl} alt={title} className="w-full h-40 object-cover" width={500} height={500}/>
        <div className="absolute -bottom-5 left-4 bg-white rounded-full px-4 py-1 shadow text-sm flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-purple-500 rounded-full" />
            <div className="w-6 h-6 bg-yellow-500 rounded-full" />
            <div className="w-6 h-6 bg-green-500 rounded-full" />
            <div className="w-6 h-6 bg-blue-500 rounded-full" />
          </div>
          <span className="text-[#4D4D4D] text-sm">+ {studentCount} students</span>
        </div>
      </div>

      <div className="p-4 pt-8 flex flex-col flex-grow">
  <p className="text-sm text-gray-500 mb-1">📅 Batch Starts: {startDate}</p>
  <h3 className="text-lg font-semibold text-[var(--primary-head)] mt-2">{title}</h3>
  <p className="text-sm text-[#4D4D4D] mt-1">{description}</p>

  <ul className="text-sm text-[#4D4D4D] mt-4 space-y-1">
    <li>📚 Classes: {classes}</li>
    <li>📍 Mode: {mode}</li>
    <li>⏰ Timings: {timings}</li>
  </ul>

  {/* Push price+button to bottom */}
  <div className="mt-auto pt-4 flex justify-between items-center">
    <div>
      <p className="text-lg font-bold text-[var(--primary-head)]">₹{price}</p>
      <p className="text-sm line-through text-gray-400">₹{originalPrice}</p>
    </div>
    <CustomButton title="Apply Now" className="!text-xs !w-fit" onClick={()=>router.push("/details")}/>
  </div>
</div>

    </div>
  );
};

export default CourseCard;
