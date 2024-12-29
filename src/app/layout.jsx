import "./globals.css";
import { plusJakartaSans } from "./fonts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeLoader from "../components/WelcomeLoader";

export const metadata = {
  metadataBase: new URL("https://abdulridhoramadhan.my.id"),
  title: {
    template: "%s - A Ridho Ramadhan",
    default: "A Ridho Ramadhan • Software Developer",
  },
  description:
    "Explore my projects, skills, and experience in web development, focusing on modern technologies like React, Next.js, GSAP, and Sass.",
  keywords: [
    "web development",
    "portfolio",
    "portfolio website",
    "portfolio web",
    "portfolio web developer",
    "React",
    "Next.js",
    "GSAP",
    "Sass",
    "Ridho",
    "Abdul Ridho Ramadhan",
    "tech",
  ],
  openGraph: {
    title: {
      default: "A Ridho Ramadhan • Software Developer",
      template: "%s - A Ridho Ramadhan",
    },
    description:
      "Explore my projects, skills, and experience in web development, focusing on modern technologies like React, Next.js, GSAP, and Sass.",
    url: "https://abdulridhoramadhan.my.id",
    images: {
      url: "https://abdulridhoramadhan.my.id/images/og-images.png",
      width: 1000,
      height: 1200,
      alt: "Abdul Ridho Ramadhan Portfolio",
    },
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "A Ridho Ramadhan • Software Developer",
      template: "%s - A Ridho Ramadhan",
    },
    description:
      "Explore my projects, skills, and experience in web development, focusing on modern technologies like React, Next.js, GSAP, and Sass.",
    images: {
      url: "https://abdulridhoramadhan.my.id/images/og-images.png",
      width: 1000,
      height: 1200,
      alt: "Abdul Ridho Ramadhan Portfolio",
    },
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
