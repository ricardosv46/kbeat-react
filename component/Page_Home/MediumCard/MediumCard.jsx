import { colorSection } from "../../../util/colorSection";
import styles from "../MediumCard/MediumCard.module.scss";
import resizePrototype from "../../../util/resizePrototype";

const newResize = new resizePrototype();

//typeTitle: 1--> titulo con letra de color por seccion, 2.--> background de color por seccion con letra de color blanca

const MediumCard = ({
  sectionName = "",
  altImg = "",
  urlImg = "",
  title = "",
  urlNote = "",
  typeTitle = 1,
  maxHeightImgtMobile = "108px",
  maxHeightImgDesktop = "135px",
  fontSize = "14px",
  lineHeight = "16px",
  resizeWidth = 230,
  resizeHeight = 129,
}) => {
  const showSection = (
    <h3
      className={` ${styles["mediumCard__section"]}`}
      style={{
        color:  "white",
        backgroundColor:  '#F101CC',
      }}
    >
      {sectionName}
    </h3>
  );
  return (
    <div className={`${styles["mediumCard__container"]} extend-link--outside`}>
      <img
        className="custom__image"
        src={newResize.resizeWapa(urlImg ? urlImg : "/static/images/prueba.png", resizeWidth, resizeHeight)}
        alt={altImg}
      />
      <section className={`${styles["mediumCard__content"]}`}>
        {sectionName && showSection}
        <a className={`${styles["mediumCard__title--anchor"]} extend-link`} href={urlNote}>
          <h2 className="mediumCard__title">{title}</h2>
        </a>
      </section>

      <style jsx>{`
        .mediumCard__title {
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

        .custom__image {
          display: block;
          width: 100%;
          height: ${maxHeightImgtMobile};
          border-radius: 5px;
          object-fit: cover;
        }
        @media (min-width: 769px) {
          .custom__image {
            height: ${maxHeightImgDesktop};
          }
        }
      `}</style>
    </div>
  );
};

export default MediumCard;
