// import TitleSection from '../../../shared/TitleSection/default';
import resizePrototype from "../../../util/resizePrototype";
import styles from "../DegradedCard/DegradedCard.module.scss";

const newResize = new resizePrototype();

const DegradedCard = ({ title, urlImg, altImg, sectionName, urlNote, height, width, gradientHeight = "180px", isVideo }) => {
  return (
    <div className={`${styles["secondarySpotlight"]} ${isVideo ? "video_type" : ""}`}>
      <figure className={`${styles["secondarySpotlight__figure"]}`}>
        <img
          src={newResize.resizeWapa(urlImg, width, height)}
          decoding="async"
          alt={altImg}
          title={title}
          className={`${styles["secondarySpotlight__image"]}}`}
        />
        <div className={`${styles["secondarySpotlight__figure-opacity"]}`} style={{ height: `${gradientHeight}` }}></div>
      </figure>
      <a href={urlNote} className="extend-link">
        <div className={`${styles["secondarySpotlight__content"]}`}>
          <h2 className={styles["secondarySpotlight__title"]}>{title}</h2>
        </div>
      </a>
    </div>
  );
};

export default DegradedCard;
