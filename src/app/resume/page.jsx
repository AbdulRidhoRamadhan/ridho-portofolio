"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import styles from "./styles.module.scss";
import EndPage from "../../components/EndPage";
import PageTransition from "../../components/PageTransition";

const ResumePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const pdfUrl = "/files/cv.pdf";

  return (
    <PageTransition pageName="Resume">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.resumePage}
      >
        <motion.div variants={itemVariants} className={styles.header}>
          <h1>📄 My Resume</h1>
          <div className={styles.actions}>
            <a href={pdfUrl} target="_blank" className={styles.actionButton}>
              <FaLink />
            </a>
            <a href={pdfUrl} download className={styles.actionButton}>
              <IoMdDownload />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.resumeContainer}>
          <iframe
            src={`${pdfUrl}#toolbar=0&view=FitH`}
            title="Resume Preview"
            className={styles.resumePreview}
          />
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants}>
        <EndPage />
      </motion.div>
    </PageTransition>
  );
};

export default ResumePage;
