"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function Card({
  index,
  title,
  role,
  description,
  year,
  setModal,
  url,
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(url)}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{role}</p>
      <p>{description}</p>
      <span>{year}</span>
    </div>
  );
}
