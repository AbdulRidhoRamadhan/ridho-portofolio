import "./globals.css";
import { plusJakartaSans } from "./fonts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeLoader from "../components/WelcomeLoader";

export const metadata = {
  title: "Ridho Portfolio",
  description: "Explore my projects and skills in web development.",
  keywords: "web development, portfolio, React, Next.js, GSAP, Sass",
  openGraph: {
    title: "Ridho Portfolio",
    description: "Explore my projects and skills in web development.",
    url: "https://ridho-portofolio.vercel.app/",
    image: "/images/portfolio-thumbnail.png",
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
