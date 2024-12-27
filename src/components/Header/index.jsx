"use client";
import { useState, useEffect, useRef } from "react";
import Button from "./Button/index";
import styles from "./styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Magnetic from "../magnetic";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const headerContentRef = useRef(null);
  const [hoveredNav, setHoveredNav] = useState(null);

  const variants = {
    open: (isSmallScreen) => ({
      width: isSmallScreen ? "90vw" : 480,
      height: isSmallScreen ? 500 : 650,
      top: isSmallScreen ? "-25px" : "-25px",
      right: isSmallScreen ? "-25px" : "-25px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    }),
    closed: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const menuButtonVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 481);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 4;
      if (window.scrollY >= scrollThreshold) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.header} ref={headerContentRef}>
        <Magnetic>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <p className={styles.copyright}>©</p>
              <div className={styles.name}>
                <p className={styles.codeBy}>Code by A</p>
                <p className={styles.firstName}>Ridho</p>
                <p className={styles.lastName}>Ramadhan</p>
              </div>
            </div>
          </Link>
        </Magnetic>

        <div className={styles.nav}>
          <Magnetic>
            <div
              className={`${styles.el} ${
                (pathname === "/projects" ||
                  pathname.startsWith("/projects/")) &&
                !hoveredNav
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setHoveredNav("projects")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <Link href="/projects">Projects</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div
              className={`${styles.el} ${
                pathname === "/about" && !hoveredNav ? styles.active : ""
              }`}
              onMouseEnter={() => setHoveredNav("about")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <Link href="/about">About</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div
              className={`${styles.el} ${
                pathname === "/resume" && !hoveredNav ? styles.active : ""
              }`}
              onMouseEnter={() => setHoveredNav("resume")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <Link href="/resume">Resume</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className={styles.menuContainer}
            variants={menuButtonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={styles.menu}
              variants={variants}
              custom={isSmallScreen}
              animate={isActive ? "open" : "closed"}
              initial="closed"
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              {isActive && <Nav />}
            </motion.div>

            <Button isActive={isActive} setIsActive={setIsActive} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
