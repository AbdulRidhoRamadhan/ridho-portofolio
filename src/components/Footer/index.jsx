"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../Magnetic";
import Link from "next/link";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/Ridho.png`} />
            </div>
            <h2>Let's work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Link href="/resume">
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <Magnetic>
                  <p>Get in touch</p>
                </Magnetic>
              </Rounded>
            </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <a
            href="mailto:abdulridhoramadhan.it@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.emailLink}
          >
            <Rounded>
              <Magnetic>
                <p>abdulridhoramadhan.it@gmail.com</p>
              </Magnetic>
            </Rounded>
          </a>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Socials</h3>
              <Magnetic>
                <a
                  href="https://github.com/AbdulRidhoRamadhan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Github</p>
                </a>
              </Magnetic>
            </span>
            <Magnetic>
              <a
                href="https://www.instagram.com/abdulridhoramadhan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Instagram</p>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/abdul-ridho-ramadhan-90516623b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Linkedin</p>
              </a>
            </Magnetic>
          </div>
          <div>
            <span>
              <h3>Version</h3>
              <p className={styles.version}>2024 © Edition</p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
