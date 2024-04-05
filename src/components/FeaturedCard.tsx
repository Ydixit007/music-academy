"use client";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import CustomButton from "./ui/custom-button";
import Image from "next/image";

interface Course {
  course: {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string
  };
}

const FeaturedCard = ({ course }: Course) => {
  return (
    <div key={course.id} className="flex justify-center">
      <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-950 overflow-hidden h-full max-w-sm p-4 sm:p-6 items-center text-center flex-grow">
        <div className="img-container relative w-full h-[10rem]">
          <Image src={course.image} className="object-cover" alt="" fill />
        </div>
        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
          {course.description}
        </p>
        <CustomButton
          className="py-3 mt-4 rounded-xl"
          label="Learn More"
          href={`/courses/${course.slug}`}
        />
      </BackgroundGradient>
    </div>
  );
};

export default FeaturedCard;
