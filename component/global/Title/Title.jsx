import styles from "./Title.module.scss";

export const Title = ({ type, title }) => {
  if (type === "h1") {
    return <h1 className={styles.title}>{title}</h1>;
  }
  if (type === "h2") {
    return <h2 className={styles.title}>{title}</h2>;
  }
  if (type === "h3") {
    return <h3 className={styles.title}>{title}</h3>;
  }
  if (type === "h4") {
    return <h4 className={styles.title}>{title}</h4>;
  }

  return <h1 className={styles.title}>{title}</h1>;
};
