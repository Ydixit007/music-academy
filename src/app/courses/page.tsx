import CourseLanding from "@/components/CourseLanding";
import FeaturedCard from "@/components/FeaturedCard";
import courseData from "@/data/music_courses.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const Page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <CourseLanding />
      <div className="courses md:px-20 px-4 py-10 min-h-[40rem]">
        <h1 className="text-2xl text-gray-300 font-semibold tracking-wide uppercase mb-8">
          Discover courses
        </h1>
        <div className="courses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12">
          {courseData.courses.map((course: Course) => (
            <FeaturedCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
