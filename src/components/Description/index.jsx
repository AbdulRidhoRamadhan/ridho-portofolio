"use client";

import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import Rounded from "../RoundedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Magnetic from "../magnetic";

export default function Description() {
  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const phrase =
    "Building seamless and efficient solutions in the digital space. Focused on simplicity, innovation, and meaningful impact.";
  const description = useRef(null);
  const isInView = useInView(description, {
    once: false,
    amount: 0.5,
  });
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const button = buttonRef.current;
    const container = description.current;

    const tl = gsap.to(button, {
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      y: -100,
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <div ref={contentRef} className={styles.contentWrapper}>
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            My focus on JavaScript and modern development tools fuels my
            approach to building seamless digital experiences.
          </motion.p>
          <div ref={buttonRef} className={styles.buttonContainer}>
            <Link href="/about">
              <Rounded className={styles.button}>
                <Magnetic>
                  <p>About me</p>
                </Magnetic>
              </Rounded>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
