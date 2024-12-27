"use client";

import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { experienceData } from "../data/experience";
import { motion } from "framer-motion";
import { skillsData } from "../data/skills";
import { certificatesData } from "../data/certificates";
import EndPage from "../../components/EndPage";
import PageTransition from "../../components/PageTransition";
import RoundedButton from "../../components/RoundedButton";
import Magnetic from "../../components/Magnetic";

const AboutPage = () => {
  return (
    <PageTransition pageName="About">
      <div className={styles.page}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h1>

        <div className={styles.aboutMe}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/Ridho.jpg"
              width={300}
              height={450}
              alt="Image"
            />
          </motion.div>

          <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Hey there! I&apos;m Abdul Ridho Ramadhan, I&apos;m a passionate
              developer dedicated to creating intuitive and impactful
              user-centric web and mobile applications. My journey began with a
              strong desire to understand how technology shapes everyday
              experiences, leading me to sharpening my skills in modern
              frameworks and technologies during an intensive Hacktiv8 bootcamp.
              This hands-on learning experience solidified my foundation in
              software development and instilled in me a mindset of continuous
              growth and innovation. Whether it&apos;s crafting seamless user
              interfaces or building robust backend systems, I approach each
              project with curiosity and a commitment to excellence.
              <br />
              <br />
              What drives me is the thrill of tackling complex challenges and
              turning ideas into functional, meaningful solutions. I thrive in
              dynamic environments where collaboration and learning go hand in
              hand, and I&apos;m always eager to explore new tools, frameworks,
              and methodologies.
            </p>
            <Link href="/resume">
              <RoundedButton backgroundColor="#455CE9">
                <Magnetic>
                  <p>My Resume</p>
                </Magnetic>
              </RoundedButton>
            </Link>
          </motion.div>
        </div>

        <motion.section
          className={styles.experience}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>My Experience</h2>
          <div className={styles.timeline}>
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.timelineContent}>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                  <span>{exp.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className={styles.skills}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tech Stack That I Use
          </motion.h2>
          <motion.div
            className={styles.skillsContainer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className={styles.skillGroup}>
                <h3>{category}</h3>
                <div className={styles.skillsGrid}>
                  {skills.map((skill) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <skill.icon />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <motion.section
          className={styles.certificates}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Certificates
          </motion.h2>
          <motion.div
            className={styles.certificatesGrid}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {certificatesData.map((cert) => (
              <motion.div
                key={cert.id}
                className={styles.certificateCard}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.certificateHeader}>
                  <cert.icon className={styles.certIcon} />
                  <div className={styles.certInfo}>
                    <h3>{cert.name}</h3>
                    <p>{cert.provider}</p>
                  </div>
                </div>
                <div className={styles.certificateBadge}>
                  <Image
                    src={cert.badge}
                    alt={`${cert.name} Badge`}
                    width={120}
                    height={120}
                    objectFit="contain"
                  />
                </div>
                <div className={styles.certificateFooter}>
                  <span>{cert.date}</span>
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewCredential}
                  >
                    View Credential
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
      <EndPage />
    </PageTransition>
  );
};

export default AboutPage;
