"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./not-found.module.scss";
import PageTransition from "../components/PageTransition";

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <PageTransition pageName="Error">
      <div className={styles.notFound}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>404</motion.h1>
          <motion.h2 variants={itemVariants}>Page Not Found</motion.h2>
          <motion.p variants={itemVariants}>
            The page you are looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/" className={styles.homeButton}>
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
