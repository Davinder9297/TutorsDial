"use client";
import Image from "next/image";
import MaxFullWidthWrapper from "../global/max-full-width-wrapper";

interface Props {
  children: React.ReactNode;
}

export default function AuthScreen({children}:Props) {
  return (
    <MaxFullWidthWrapper className="relative">
        <div className="bg-[var(--primary-bg)] w-full md:pb-32 pb-28 md:pt-16 pt-8">
        <Image src={"/images/auth/line.png"} alt="" width={100} height={200} className="md:absolute hidden md:flex top-60 left-[10%] select-none" draggable={false}/>
        <Image src={"/images/auth/person.svg"} alt="" width={720} height={900} className="md:absolute hidden lg:flex top-1 right-0 z-0 select-none" draggable={false}/>
        <div className="w-full md:max-w-md max-w-[90%] md:ml-[30%] mx-auto py-6 bg-white shadow rounded-lg border border-gray-200 z-[99999]">
      {children}
    </div>
    </div>
    </MaxFullWidthWrapper>
  );
}
