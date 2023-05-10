import DegradedCard from "../DegradedCard/DegradedCard";
import SectionCard from "../SectionCard/SectionCard";
import styles from "../sectionGridDouble/SectionGridDouble.module.scss";
import SmallCard from "../SmallCard/SmallCard";


const SectionGridDouble = ({
  dataPrimary,
  sectionTitlePrimary,
  linkToPrimary = "#",
  dataSecondary,
  sectionTitleSecondary,
  linkToSecondary,
  isSpotlightSecondaryData = false,
}) => {
  let dataDefaultPrimary = [];
  let dataMainPrimary = {};
  let dataMainSecondary = {};
  let listItemPrimary;
  let listItemSecondary;
  if (dataPrimary?.articles?.data && dataPrimary?.articles?.data?.length > 0) {
    dataDefaultPrimary = dataPrimary?.articles?.data;
  }

  if (dataDefaultPrimary.length > 0) {
    dataMainPrimary = dataDefaultPrimary.slice(0, 1)[0];
    const urlImg =
      dataMainPrimary?.data?.multimedia.find((media) => media.type == "image")?.path ||
      dataMainPrimary?.data?.multimedia.find((media) => media.type == "video")?.data?.image_path ||
      "/static/images/placeholder.png";
    listItemPrimary = (
      <div className={`${styles["listItem__container"]}`}>
        <div className={`${styles["listItem__container-primaryCard"]}`}>
          <DegradedCard
            urlNote={dataMainPrimary?.slug}
            altImg={dataMainPrimary?.data?.multimedia[0]?.data?.title}
            urlImg={urlImg}
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
              item?.data?.multimedia.find((media) => media.type == "video")?.data?.image_path ||
              "/static/images/placeholder.png";
            const urlNote = item?.slug ?? "";
            return <SmallCard key={`${index}-${title}`} urlImg={imgUrl} title={title} urlNote={urlNote} />;
          })}
        </div>
      </div>
    );
  }

  if (isSpotlightSecondaryData) {
    if (dataSecondary.spotlight && dataSecondary.spotlight?.data?.item[0]) {
      dataMainSecondary = dataSecondary.spotlight?.data?.item[0];
      listItemSecondary = (
        <SectionCard
          urlNote={dataMainSecondary?.url}
          altImg={dataMainSecondary?.image?.alt}
          urlImg={dataMainSecondary?.image?.url}
          height={240}
          width={283}
          sectionTitle={sectionTitleSecondary || dataMainSecondary?.title}
          linkTo={linkToSecondary}
          gradientHeight="0px"
        />
      );
    }
  } else {
    if (dataSecondary?.articles?.data && dataSecondary?.articles?.data?.length > 0) {
      dataMainSecondary = dataSecondary?.articles?.data[0];
      const isVideo = dataMainSecondary?.data?.multimedia?.some((media) => media.type == "video");
      const imgUrl =
        dataMainSecondary?.data?.multimedia?.find((media) => media.type == "image")?.path ||
        dataMainSecondary?.data?.multimedia?.find((media) => media.type == "video")?.data?.image_path ||
        "/static/images/placeholder.png";
      listItemSecondary = (
        <SectionCard
          urlNote={dataMainSecondary?.slug}
          altImg={dataMainSecondary?.data?.multimedia[0]?.data?.title || dataMainSecondary?.title}
          urlImg={imgUrl}
          title={dataMainSecondary?.title}
          sectionTitle={sectionTitleSecondary}
          linkTo={linkToSecondary}
          height={245}
          width={300}
          isVideo={isVideo}
        />
      );
    }
  }
  // if(isPrinted) {
  //   listItemSecondary = <PrintEdition data={dataSecondary} />
  // }

  return (
    <div className={`${styles["container__sectionGrid"]}`}>
      <div className={`${styles["container__sectionGridPrimary"]}`}>
        <div className={`${styles["sectionGrid__head"]}`}>
          <h3 className={`${styles["sectionGrid__head__title"]}`}>{sectionTitlePrimary}</h3>
          <p className={`${styles["sectionGrid__head__separator"]}`}>{}</p>
          <a href={linkToPrimary} className={`${styles["sectionGrid__head__linkTo"]} extend-link`}>
            VER MÁS
          </a>
        </div>
        {listItemPrimary}
      </div>
      <div className={`${styles["container__sectionGridSecondary"]}`}>{listItemSecondary}</div>
    </div>
  );
};

export default SectionGridDouble;
