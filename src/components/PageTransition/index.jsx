"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "../Loader";
import { usePathname } from "next/navigation";

export default function PageTransition({ children, pageName }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader pageTitle={pageName} isPageTransition={true} />}
      </AnimatePresence>
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        {children}
      </div>
    </>
  );
}
