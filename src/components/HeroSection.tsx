import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 px-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#0088cc"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>
      <div className="mt-4">
        <Link href="/courses">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black/[0.96] text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:dark:bg-gray-950 duration-200"
          >
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
