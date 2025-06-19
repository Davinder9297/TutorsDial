"use client";
import React from "react";
import "../../styles/stepsComponent.css";
import SectionHeading from "../common/headings";

const steps = [
  {
    step: "01",
    title: "Search",
    description: `Use the search bar to find tutors by subject, location, class level, or teaching mode (online/offline). You can also apply filters like fee range or available timings.`,
    colorClass: "gold",
  },
  {
    step: "02",
    title: "View Tutor",
    description: `Browse through tutor cards and click on any profile to see full details:\n• Subjects they teach\n• Location (with map)\n• Experience & qualifications\n• Available time slots\n• Reviews from other students`,
    colorClass: "orange",
  },
  {
    step: "03",
    title: "Apply",
    description: `Found the right tutor? Simply fill out a short form to apply:\n- Enter your name, class, subject, and a short message\n• The tutor will get your request and contact you to confirm`,
    colorClass: "blue",
  },
];

export default function HowItWorks() {
  return (
    <>
    <header>
              <SectionHeading
      imgSrc="/images/home/heading-line.png"
      imgAlt="underline"
    >
      How It Works
    </SectionHeading>
              <p className="lg:text-xl md:max-w-3xl max-w-[90%] text-sm mt-4 text-center mx-auto text-[var(--secondary-head)]">
                Onlearing  is one powerful online software suite that combines all the tools needed to run a successful school or office.
              </p>
            </header>
    <div className="steps-container">
      {steps.map((step, index) => (
        <div className="step-item" key={index}>
          <div className={`circle-wrapper ${step.colorClass}`}>
            <div className="outer-circle-wrapper rotating-clockwise">
  <div className="outer-circle">
    <div className="outer-cutout"></div>
  </div>
  <div className="rotating-dot top-dot"></div>
  <div className="rotating-dot bottom-dot"></div>
</div>

            <div className="inner-circle rotating-counterclockwise !drop-shadow-black"></div>
            <div className="center-circle !drop-shadow-black !shadow-md shadow-gray-400">
              <div className="step-number !text-[#2e2e2e]">{step.step}</div>
              <div className="step-label">STEP</div>
            </div>
          </div>
          <h3 className="step-title font-bold md:text-2xl !text-[#E4A321] text-base">{step.title}</h3>
          <p className="step-description !text-[#8D8D8D] md:!text-base font-medium text-sm">{step.description}</p>
        </div>
      ))}
    </div>
    </>
  );
}
