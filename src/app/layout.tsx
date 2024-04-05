import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Academy - The best music academy.",
  description: `Welcome to Music Academy, where passion meets expertise! As the premier destination for music education, we pride ourselves on being the best music academy dedicated to nurturing talent and fostering musical excellence.

  At Music Academy, we offer a comprehensive range of courses tailored to musicians of all levels, from beginners to advanced performers. Our team of highly skilled instructors brings a wealth of experience and a deep commitment to helping students achieve their musical aspirations.
  
  Whether you're interested in mastering an instrument, refining your vocal technique, or delving into music theory, our diverse curriculum has something for everyone. From classical to contemporary styles, we provide a dynamic learning environment where creativity flourishes and musicality thrives.
  
  With state-of-the-art facilities and innovative teaching methods, Music Academy ensures that each student receives personalized attention and support on their musical journey. Our holistic approach encompasses not only technical proficiency but also artistic expression, ensemble collaboration, and performance opportunities.
  
  Join us at Music Academy and unlock your full potential as a musician. Experience the joy of making music in a supportive community where passion, dedication, and creativity converge. Discover why we are renowned as the best music academy and embark on a transformative musical adventure with us today!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
        <div className="relative w-full flex items-center justify-center">
          <Footer />
        </div>
      </body>
    </html>
  );
}
