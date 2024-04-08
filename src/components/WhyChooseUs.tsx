"use client";

import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import { twMerge } from "tailwind-merge";

const WhyChooseUs = () => {
  const content = [
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description: (
        <>
          <p>
            Embark on a musical journey that's uniquely yours. Our personalized
            instruction adapts to your individual needs, setting the stage for
            unparalleled growth and creativity. At our music school, your
            aspirations meet our dedicated support, creating a harmonious path
            to mastery.
          </p>
        </>
      ),
      badge: "",
      image: "/courses/blues.jpg",
    },
    {
      title: "Live Feedback & Engagement",
      description: (
        <>
          <p>
            Immerse yourself in an interactive learning experience where
            feedback is immediate, just like real-time changes in a
            collaborative project. This approach enhances your understanding and
            mastery of music concepts and performance techniques.
          </p>
        </>
      ),
      badge: "",
      image: "/courses/guitar.jpg",
    },
    {
      title: "Cutting-Edge Curriculum",
      description: (
        <>
          <p>
            Our curriculum is continuously updated to include the latest music
            education trends and technologies, ensuring you’re always learning
            with the most current and effective methods. Say goodbye to outdated
            materials and welcome an education that evolves with the industry.
          </p>
        </>
      ),
      badge: "",
      image: "/courses/music-prod.jpg",
    },
    {
      title: "Limitless Learning Opportunities",
      description: (
        <>
          <p>
            With our expansive resource library and dynamic course offerings,
            you'll never find yourself without something new to explore. Our
            platform provides continuous opportunities for growth, ensuring your
            musical skills are always advancing.
          </p>
        </>
      ),
      badge: "",
      image: "/courses/vocalist.jpg",
    },
  ];

  return (
    <div className="w-full mt-12 relative">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>
                {item.title}
              </p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="512"
                    width="512"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default WhyChooseUs;
