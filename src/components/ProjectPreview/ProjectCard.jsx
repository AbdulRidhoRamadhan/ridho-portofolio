"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import style from "./style.module.scss";
import arrow from "../../assets/images/Arrow.svg";
import Image from "next/image";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, cat, position, id, tech }) => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <motion.div
      className={position === "top" ? style.projectCardTop : style.projectCard}
      ref={container}
      onClick={handleCardClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={style.container}>
        <div className={style.wrapper}>
          <motion.div
            className={style.textContainer}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 100,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1>{title}</h1>
          </motion.div>

          <motion.div
            className={style.textContainer}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 100,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2>{cat}</h2>
          </motion.div>

          <motion.div
            className={style.techStack}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 100,
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {tech.map((TechIcon, index) => (
              <span key={index} className={style.techIcon}>
                {TechIcon}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={style.textContainer}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 100,
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>{desc}</p>
        </motion.div>

        <motion.div
          className={style.arrowContainer}
          transition={{ duration: 0.3 }}
        >
          <Image src={arrow} alt="Arrow icon" priority={true} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
