import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { Links, FooterLinks } from "../../../app/data/link";
import Link from "next/link";
import Magnetic from "../../Magnetic";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [hoveredNav, setHoveredNav] = useState(null);

  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.35,
        delay: 0.25 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <Magnetic>
              <div
                className={`${styles.el} ${
                  (pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href))) &&
                  !hoveredNav
                    ? styles.active
                    : ""
                }`}
                onMouseEnter={() => setHoveredNav(link.href)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <div key={i} className={styles.linkContainer}>
                  <motion.div
                    custom={i}
                    variants={perspective}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <div className={styles.indicator}></div>
                    <Link href={link.href}>{link.title}</Link>
                  </motion.div>
                </div>
              </div>
            </Magnetic>
          );
        })}
      </div>

      <div className={styles.socials}>
        <span>
          <h3>Socials</h3>
        </span>
        <div className={styles.footer}>
          {FooterLinks.map((link, i) => {
            return (
              <Magnetic>
                <motion.a
                  target="_blank"
                  key={`f_${i}`}
                  href={link.href}
                  variants={slideIn}
                  custom={i}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                >
                  {link.title}
                </motion.a>
              </Magnetic>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
