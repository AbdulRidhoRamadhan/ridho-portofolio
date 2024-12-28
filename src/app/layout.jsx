import "./globals.css";
import { plusJakartaSans } from "./fonts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeLoader from "../components/WelcomeLoader";

export const metadata = {
  title: "A Ridho Ramadhan • Software Developer",
  description: "Explore my projects, skills, and experience in web development, focusing on modern technologies like React, Next.js, GSAP, and Sass.",
  keywords: "web development, portfolio, React, Next.js, GSAP, Sass",
  openGraph: {
    title: "Ridho Portfolio",
    description: "Explore my projects, skills, and experience in web development, focusing on modern technologies like React, Next.js, GSAP, and Sass.",
    url: "https://ridho-portofolio.vercel.app/",
    image: "/public/images/portfolio-thumbnail.png",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable}`}
        style={{ overflowX: "hidden", width: "100%" }}
      >
        <WelcomeLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
