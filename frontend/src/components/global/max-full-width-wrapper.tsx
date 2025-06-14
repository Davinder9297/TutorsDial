import { cn } from "@/app/lib/functions/cn";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxFullWidthWrapper = ({ className, children }: Props) => {
  return (
    <section className={cn("mx-auto h-full w-full max-w-full md:max-w-screen-2xl", className)}>
      {children}
    </section>
  );
};

export default MaxFullWidthWrapper;
