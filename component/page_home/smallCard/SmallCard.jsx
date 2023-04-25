import { colorSection } from "../../../util/colorSection";
import styles from "../smallCard/SmallCard.module.scss";
import resizePrototype from "../../../util/resizePrototype";

const newResize = new resizePrototype();

const SmallCard = ({
  sectionName = "",
  altImg = "",
  urlImg = "/static/images/placeholder.png",
  title = "",
  urlNote = "",
}) => {
  const showSection = <h3 className={`
  ${styles["smallCard__section"]}`} style={{ color: colorSection(sectionName) }}>
      {sectionName}
    </h3>
  return (
    <div className={`${styles["smallCard__container"]} extend-link--outside`}>
      <img
        className={`${styles["smallCard__image"]}`}
        src={newResize.resizeWapa(urlImg, 135,80)}
        alt={altImg}
      />
      <div className={`${styles["smallCard__content"]} `}>
        {sectionName && showSection}
        <a className={`${styles["smallCard__title--anchor"]} extend-link`} href={urlNote}>
        <h2 className={styles["smallCard__title"]}>{title}</h2>
        </a>
      </div>
    </div>
  );
};

export default SmallCard;
