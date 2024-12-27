"use client";
import styles from "./styles.module.scss";

const ImagePreview = ({ data }) => {
  return (
    <div className={styles.imagePreview}>
      <div className={styles.imgWrapper}>
        <img src={`${data.img}`} alt={data.title} loading="lazy" />
        <div className={styles.darken}>
          {data.type ? (
            data.url && (
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                View
              </a>
            )
          ) : (
            <div className={styles.buttonGroup}>
              {data.url && (
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  Live View
                </a>
              )}
              {data.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
