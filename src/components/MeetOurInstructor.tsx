// 'use client'
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const MeetOurInstructor = () => {
  const instructors = [
    {
      id: 1,
      name: "Abhinav Gadekar",
      designation: "Vocal Coach",
      image:
        "/courses/abhinav.jpg",
    },
    {
      id: 2,
      name: "Yash Dixit",
      designation: "Guitar Instructor",
      image:
        "/courses/yash.jpg",
    },
    {
      id: 3,
      name: "Dhanashree Guhe",
      designation: "Ukulele Instructor",
      image:
        "/courses/dhanashree.jpg",
    },
    {
      id: 4,
      name: "Amisha Yadav",
      designation: "Drumming Expert",
      image:
        "/courses/amisha.jpeg",
    },
  ];
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full mt-8">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default MeetOurInstructor;
