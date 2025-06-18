"use client";

import Image from "next/image";
import clsx from "clsx";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgClassName?: string;
  containerClassName?: string;
}

export default function SectionHeading({
  children,
  className = "",
  imgSrc,
  imgAlt = "",
  imgClassName = "",
  containerClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={clsx("md:flex justify-center flex-row items-center", containerClassName)}>
      <h2 className={clsx(
        "lg:text-5xl text-3xl text-[var(--primary-button)] font-bold lg:pb-4 text-center relative w-fit mx-auto",
        className
      )}>
        {children}
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={200}
            height={150}
            className={clsx("absolute -right-6", imgClassName)}
          />
        )}
      </h2>
    </div>
  );
}
