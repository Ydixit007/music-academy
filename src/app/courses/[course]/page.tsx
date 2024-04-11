import CustomButton from "@/components/ui/custom-button";
import courseData from "@/data/music_courses.json";
import Image from "next/image";

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

export default function Page({ params }: { params: { course: string } }) {
  const selectedCourse = courseData.courses.filter(
    (course: Course) =>
      course.title.toLowerCase() ===
      params.course.replaceAll("-", " ").toLowerCase()
  )[0];

  if (selectedCourse !== undefined) {
    return (
      <div className="min-h-screen w-full flex md:px-20 px-4 py-10 dark:bg-dot-gray-500/[0.2] flex-col">
        <div className="mt-8 md:mt-16 max-w-7xl mx-auto max-md:mt-16 head-section h-[32rem] md:h-[20rem] w-full flex items-center max-md:flex-col-reverse">
          <div className="headings md:flex-1 flex flex-col gap-6 pr-7">
            <h1 className="text-4xl max-md:mt-4">{selectedCourse.title}</h1>
            <p className="mt-[-1rem]">{selectedCourse.description}</p>
            <CustomButton
              href="/contact"
              label="Enroll today"
              className="max-w-max py-4 bg-slate-950"
            />
          </div>
          <div className="img-cont relative flex-1 h-full w-full rounded-3xl overflow-hidden">
            <Image
              className="object-cover"
              src={selectedCourse.image}
              alt={selectedCourse.title}
              fill
            />
          </div>
        </div>
        <div className="mt-6 px-4 md:px-12 flex w-full items-center justify-between">
          <div className="author">
            <h5 className="text-gray-300 text-sm">
              Hosted by:
              <br />
              <span className="text-xl text-gray-100">
                {selectedCourse.instructor}
              </span>
            </h5>
          </div>
          <div className="price">
            <h3 className="text-2xl font-semibold">${selectedCourse.price}</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center md:px-0 px-8 py-10">
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
