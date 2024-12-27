"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import Project from "./Card";
import Modal from "./Card/Modal";
import { ProjectsData } from "../data/projects";
import EndPage from "../../components/EndPage";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";

const projects = ProjectsData;

export default function ProjectsPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <PageTransition pageName="Projects">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.heading}
        >
          <h1>Projects</h1>
        </motion.div>
        <main className={styles.main}>
          <motion.div
            className={styles.body}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.tableHeader} variants={itemVariants}>
              <span>Project</span>
              <span>Role</span>
              <span>Description</span>
              <span>Year</span>
            </motion.div>
            {projects.map((project, index) => {
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Project
                    url={`projects/${project.id}`}
                    index={index}
                    title={project.title}
                    role={project.role}
                    description={project.desc}
                    year={project.date}
                    setModal={setModal}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <Modal modal={modal} projects={projects} />
        </main>
        <motion.div variants={itemVariants}>
          <EndPage />
        </motion.div>
      </PageTransition>
    </>
  );
}
