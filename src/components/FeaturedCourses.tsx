import courseData from "@/data/music_courses.json";
import CustomButton from "./ui/custom-button";
import FeaturedCard from "./FeaturedCard";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-black/[0.96]">
      <div className="text text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="cards mt-10 mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map((course: Course) => (
          <FeaturedCard course={course} />
        ))}
      </div>
      <div className="buttons mt-20 text-center">
        <CustomButton href="#" label="View all courses" />
      </div>
    </div>
  );
};

export default FeaturedCourses;
