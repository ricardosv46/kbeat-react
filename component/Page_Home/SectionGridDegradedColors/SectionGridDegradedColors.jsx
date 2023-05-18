// import TitleSection from '../../../shared/TitleSection/default';
import resizePrototype from "util/resizePrototype";
import styles from "../SectionGridDegradedColors/SectionGridDegradedColors.module.scss";

const newResize = new resizePrototype();

const SectionGridDegradedColors = ({ data }) => {
  let itemList=null
  let itemListCard=null

  if (data?.articles?.data && data?.articles?.data?.length > 0) {
    itemList = data?.articles?.data;
  }

  if(itemList){
    itemListCard=itemList.map((item,index)=>{

      const colorsDegraded = index===0?'degraded_1':index===1?'degraded_2':index===2?'degraded_3':'degraded_4'

      const urlImage =
      item?.data?.multimedia.find((media) => media.type == "image")?.path ||
      item?.data?.multimedia.find((media) => media.type == "video")?.data?.image_path ||
      "/static/images/placeholder.png";

      return <figure className={`${styles["content_card_degraded"]} ${styles[colorsDegraded]}`}>
        <img
          src={newResize.resizeWapa(urlImage, 229, 325)}
          // src={urlImage}
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
    </div>
  );
};

export default SectionGridDegradedColors;
