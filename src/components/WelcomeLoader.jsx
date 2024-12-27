"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const WelcomeLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    } else {
      setIsLoading(false);
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && pathname === "/" && <Loader />}
    </AnimatePresence>
  );
};

export default WelcomeLoader;
