import { colorSection } from "../../../util/colorSection";
import styles from "../SmallCard/SmallCard.module.scss";
import resizePrototype from "../../../util/resizePrototype";

const newResize = new resizePrototype();

const SmallCard = ({
  sectionName = "",
  altImg = "",
  urlImg = "/static/images/placeholder.png",
  title = "",
  urlNote = "",
  fontSize = "14px",
  lineHeight = "16px",
  maxHeightImgtMobile = "60px",
  maxWidthImgtMobile = "60px",
  maxHeightImgDesktop = "50px",
  maxWidthImgDesktop = "73px",
}) => {
  const showSection = (
    <h3
      className={`
  ${styles["smallCard__section"]}`}
      style={{ color: colorSection(sectionName) }}
    >
      {sectionName}
    </h3>
  );
  return (
    <div className={`${styles["smallCard__container"]} extend-link--outside`}>
      <img className="smallCard__image" src={newResize.resizeWapa(urlImg, 135, 80)} alt={altImg} />
      <div className={`${styles["smallCard__content"]} `}>
        {sectionName && showSection}
        <a className={`${styles["smallCard__title--anchor"]} extend-link`} href={urlNote}>
          <h2 className="smallCard__title">{title}</h2>
        </a>
      </div>

      <style jsx>
        {`
      .smallCard__title {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize};
        line-height: ${lineHeight};
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      img.smallCard__image {
        display: block;
        width: ${maxWidthImgtMobile};
        height: ${maxHeightImgtMobile};
        border-radius: 5px;
        object-fit: cover;
      }
      @media (min-width: 769px) {
        img.smallCard__image {
          width: ${maxWidthImgDesktop};
          height: ${maxHeightImgDesktop};
        }
      }
      `}
      </style>
    </div>
  );
};

export default SmallCard;
