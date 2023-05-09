import { Title } from "component/global/Title/Title";
import DegradedCard from "../DegradedCard/DegradedCard";
import styles from "../SectionGridDoubleTypeSmall/SectionGridDoubleTypeSmall.module.scss";
import SmallCard from "../SmallCard/SmallCard";
import { colorSection } from "util/colorSection";

// DataPrimary: recibe un array de 5 objetos
// DataSecondary: recibe un array de 4 objetos

const SectionGridDoubleTypeSmall = ({
  dataPrimary,
  sectionTitlePrimary,
  linkToPrimary = "#",
  dataSecondary,
  sectionTitleSecondary,
  linkToSecondary,
}) => {
  let dataDefaultPrimary = [];
  let dataMainPrimary = {};
  let listItemPrimary;
  let listItemSecondary;
  let dataMainSecondary = [];

  if (dataPrimary?.articles?.data && dataPrimary?.articles?.data?.length > 0) {
    dataDefaultPrimary = dataPrimary?.articles?.data;
  }

  if (dataDefaultPrimary.length > 0) {
    dataMainPrimary = dataDefaultPrimary.slice(0, 1)[0];
    let srcImage =
      dataMainPrimary?.data?.multimedia.find((media) => media.type == "image")?.path ||
      multimedia.find((media) => media.type == "video")?.data.image_path ||
      "/static/images/placeholder.png";
    listItemPrimary = (
      <div className={`${styles["listItem__container"]}`}>
        <div className={`${styles["listItem__container-primaryCard"]}`}>
          <DegradedCard
            urlNote={dataMainPrimary?.slug}
            altImg={dataMainPrimary?.data?.multimedia[0]?.data?.title}
            urlImg={srcImage}
            title={dataMainPrimary?.title}
            width={300}
            height={245}
          />
        </div>

        <div className={`${styles["listItem__container-secondaryCard"]}`}>
          {dataDefaultPrimary.slice(1, 9).map((item, index) => {
            const title = item?.title ?? "";
            const imgUrl =
              item?.data?.multimedia.find((media) => media.type == "image")?.path ||
              item?.data?.multimedia.find((media) => media.type == "video")?.data.image_path ||
              "/static/images/placeholder.png";
            const urlNote = item?.slug ?? "";
            return <SmallCard key={`${index}-${title}`} urlImg={imgUrl} title={title} urlNote={urlNote} />;
          })}
        </div>
      </div>
    );
  }

  if (dataSecondary && dataSecondary.articles && dataSecondary?.articles?.data.length > 0) {
    dataMainSecondary = dataSecondary?.articles?.data;
    listItemSecondary = (
      <div className={`${styles["listItem__secondaryData"]}`}>
        {dataMainSecondary.map((item, index) => {
          const title = item?.title ?? "";
          const urlNote = item?.slug ?? "";
          const imgUrl =
            item?.data?.multimedia.find((media) => media.type == "image")?.path ||
            item?.data?.multimedia.find((media) => media.type == "video")?.data.image_path ||
            "/static/images/placeholder.png";

          return <SmallCard key={`${index}-${title}`} urlImg={imgUrl} title={title} urlNote={urlNote} />;
        })}
      </div>
    );
  }

  return (
    <div className={`${styles["container__sectionGrid"]}`}>
      <div className={`${styles["container__sectionGridSecondary"]}`}>
        <div
          className={`${styles["sectionGrid__head"]}`}
          style={{
            borderBottom: `1px solid ${colorSection(sectionTitleSecondary)}`,
            borderTop: `1px solid ${colorSection(sectionTitleSecondary)}`,
          }}
        >
          <Title title={sectionTitleSecondary} type="h2" />
          <p className={`${styles["sectionGrid__head__separator"]}`}></p>
          <a href={linkToSecondary} className={`${styles["sectionGrid__head__linkTo"]} extend-link`}>
            VER MÁS
          </a>
        </div>
        {listItemSecondary}
      </div>
      {/* Componente con 5 cards */}
      <div className={`${styles["container__sectionGridPrimary"]}`}>
        <div
          className={`${styles["sectionGrid__head"]}`}
          style={{
            borderBottom: `1px solid ${colorSection(sectionTitlePrimary)}`,
            borderTop: `1px solid ${colorSection(sectionTitlePrimary)}`,
          }}
        >
          <Title title={sectionTitlePrimary} type="h2" />
          <p className={`${styles["sectionGrid__head__separator"]}`}></p>
          <a href={linkToPrimary} className={`${styles["sectionGrid__head__linkTo"]} extend-link`}>
            VER MÁS
          </a>
        </div>
        {listItemPrimary}
      </div>
    </div>
  );
};

export default SectionGridDoubleTypeSmall;
