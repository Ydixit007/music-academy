import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MeetOurInstructor from "@/components/MeetOurInstructor";
import TestimonialSection from "@/components/TestimonialSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialSection />
      <UpcomingWebinars />
      <MeetOurInstructor />
    </main>
  );
}
