// import TitleSection from '../../../shared/TitleSection/default';
import resizePrototype from "util/resizePrototype";
import styles from "../sectionGridDegradedColors/SectionGridDegradedColors.module.scss";

const newResize = new resizePrototype();

const SectionGridDegradedColors = ({ data }) => {
  let itemList=null
  let itemListCard=null

  if (data?.articles?.data && data?.articles?.data?.length > 0) {
    itemList = data?.articles?.data;
  }

  if(itemList){
    console.log({itemList})
    itemListCard=itemList.map((item,index)=>{


      const colorsDegraded = index===0?'degraded_1':index===1?'degraded_2':index===2?'degraded_3':'degraded_4'

      const urlImage =
      item?.data?.multimedia.find((media) => media.type == "image")?.path ||
      item?.data?.multimedia.find((media) => media.type == "video")?.data?.image_path ||
      "/static/images/placeholder.png";

      return <figure className={`${styles["content_card_degraded"]} ${styles[colorsDegraded]}`}>
        <img
          // src={newResize.resizeWapa(urlImage, 229, 325)}
          src={urlImage}
          decoding="async"
          alt={item?.title}
          title={item?.title}
        />
        <div className={`${styles["texto_degraded"]}`}>{'[GALERÍA] BamBam de GOT7: un comeback inolvidable con Sour & Sweet'}</div>
      </figure>
    })
  }


  return (
    <div className={`${styles["gridCards"]} `}>
      {itemListCard}
      {/* <figure className={`${styles["secondarySpotlight__figure"]}`}>
        <img
          src={newResize.resizeWapa(urlImg, 229, 325)}
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
      </a> */}
    </div>
  );
};

export default SectionGridDegradedColors;
