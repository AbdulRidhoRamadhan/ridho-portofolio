"use client";

import PageTransition from "../../../components/PageTransition";
import { ProjectsData } from "../../../data/projects";
import StudyCaseHeader from "./StudyCaseHeader";
import ImagePreview from "./ImagePreview";
import styles from "./styles.module.scss";
import EndPage from "../../../components/EndPage";
import { motion } from "framer-motion";

export default function Detail({ params }) {
  const { projectId } = params;
  const data =
    ProjectsData.find((item) => item.id.toString() === projectId) || {};

  if (!data) {
    return <div>Loading...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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

  return (
    <PageTransition pageName={data.title}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className={styles.studyCase} variants={itemVariants}>
          <div className={styles.container}>
            <StudyCaseHeader
              title={data.title}
              cat={data.cat}
              tech={data.tech}
              date={data.date}
              studycase={data.studycase}
              desc={data.desc}
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ImagePreview data={data} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <EndPage />
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
