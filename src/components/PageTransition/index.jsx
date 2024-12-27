"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "../loader";

export default function PageTransition({ children, pageName }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader pageTitle={pageName} isPageTransition={true} />}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
}
