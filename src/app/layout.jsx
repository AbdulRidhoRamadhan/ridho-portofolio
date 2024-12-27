import "./globals.css";
import { plusJakartaSans } from "./fonts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeLoader from "../components/WelcomeLoader";

export const metadata = {
  title: "Ridho Portofolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable}`}>
        <WelcomeLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
