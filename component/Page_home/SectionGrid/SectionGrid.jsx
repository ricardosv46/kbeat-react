import { Title } from "component/global/Title/Title";
import DegradedCard from "../DegradedCard/DegradedCard";
import styles from "../SectionGrid/SectionGrid.module.scss";
import SmallCard from "../SmallCard/SmallCard";
import { colorSection } from "util/colorSection";

const SectionGrid = ({ data, sectionTitle, linkTo = "#", nColumnas = 2 }) => {
  let dataDefault = [];
  let dataMain = {};
  let listItem;
  console.log("test::", colorSection(sectionTitle));

  if (data?.articles?.data && data?.articles?.data?.length > 0) {
    dataDefault = data?.articles?.data;
  }
  if (dataDefault.length > 0) {
    dataMain = dataDefault.slice(0, 1)[0];
    const urlImage =
      dataMain?.data?.multimedia.find((media) => media.type == "image")?.path ||
      dataMain?.data?.multimedia.find((media) => media.type == "video")?.data?.image_path ||
      "/static/images/placeholder.png";
    listItem = (
      <div className={`${styles["listItem__container"]}`}>
        <div className={`${styles["listItem__container-primaryCard"]}`}>
          <DegradedCard
            urlNote={dataMain?.slug}
            altImg={dataMain?.data?.multimedia[0]?.data?.title}
            urlImg={urlImage}
            title={dataMain?.title}
            width={600}
            height={445}
            gradientHeight="200px"
          />
        </div>

        <div className={`n-columnas ${styles["listItem__container-secondaryCard"]}`}>
          {dataDefault.slice(1, 9).map((item, index) => {
            const title = item?.title ?? "";
            const imgUrl =
              item?.data?.multimedia.find((media) => media.type == "image")?.path ||
              item?.data?.multimedia.find((media) => media.type == "video")?.data?.image_path ||
              "/static/images/placeholder.png";
            const urlNote = item?.slug ?? "";
            return <SmallCard key={`${index}-${title}`} urlImg={imgUrl} title={title} urlNote={urlNote} />;
          })}
          <style jsx>{`
            @media (min-width: 769px) {
              .n-columnas {
                display: grid;
                grid-template-columns: repeat(${nColumnas}, 1fr);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`${styles["container__sectionGrid"]}`}>
        <div
          className={`${styles["sectionGrid__head"]}`}
          style={{
            borderBottom: `1px solid ${colorSection(sectionTitle)}`,
            borderTop: `1px solid ${colorSection(sectionTitle)}`,
          }}
        >
          <Title title={sectionTitle} type="h2" />
          <p className={`${styles["sectionGrid__head__separator"]}`}>{}</p>
          <a href={linkTo} className={`${styles["sectionGrid__head__linkTo"]} extend-link`}>
            VER MÁS
          </a>
        </div>
        {listItem}
      </div>
    </>
  );
};

export default SectionGrid;
