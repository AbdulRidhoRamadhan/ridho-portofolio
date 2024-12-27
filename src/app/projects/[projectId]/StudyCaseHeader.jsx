"use client";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const StudyCaseHeader = ({ title, cat, tech, date, studycase, desc }) => {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
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

  const techIconVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3 + index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <motion.div className={styles.projectHeader} variants={headerVariants}>
      <motion.h1 className={styles.projectTitle} variants={itemVariants}>
        {title}
      </motion.h1>

      <motion.div className={styles.projectMeta} variants={headerVariants}>
        <motion.div className={styles.metaItem} variants={itemVariants}>
          <span className={styles.metaLabel}>DESCRIPTION</span>
          <p>{desc}</p>
        </motion.div>

        <motion.div className={styles.metaItem} variants={itemVariants}>
          <span className={styles.metaLabel}>TECH STACK</span>
          <div className={styles.techList}>
            {tech &&
              tech.map((icon, index) => (
                <motion.span
                  key={index}
                  className={styles.techIcon}
                  variants={techIconVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                >
                  {icon}
                </motion.span>
              ))}
          </div>
        </motion.div>

        <motion.div className={styles.metaItem} variants={itemVariants}>
          <span className={styles.metaLabel}>PLATFORM</span>
          <p>{cat}</p>
        </motion.div>
      </motion.div>

      <motion.div className={styles.studyCaseContent} variants={itemVariants}>
        <span className={styles.metaLabel}>ABOUT THE PROJECT</span>
        <p>{studycase}</p>
      </motion.div>
    </motion.div>
  );
};

export default StudyCaseHeader;
