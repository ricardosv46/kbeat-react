import MediumCard from '../MediumCard/MediumCard';
import styles from '../grillaAutomatica/GrillaAutomatica.module.scss';

const GrillaAutomatica = ({ data }) => {
  let dataDefault = [];
  let listItem;
  let nameGrilla = '';
  let linkTo = '';

  if (data?.spotlight?.data?.automatic[0]?.notes?.length > 0) {
    dataDefault = data?.spotlight?.data?.automatic[0]?.notes;
    nameGrilla = data?.spotlight?.data?.title[0];
    linkTo = data?.spotlight?.data?.url[0];
  } else {
    return null;
  }

  if (dataDefault.length > 0) {
    let imgUrl;
    let imgAlt;
    listItem = (
      <div className={`${styles['listItem__container']} `}>
        {dataDefault.map((item, index) => {
          imgUrl =
            item?.data?.multimedia.find((media) => media.type == 'image')
              ?.path ||
            item?.data?.multimedia.find((media) => media.type == 'video')?.data
              .image_path ||
            '/static/images/placeholder.png';
          const title = item?.title ?? '';
          const urlNote = item?.slug ?? '';
          imgAlt = item?.data?.multimedia[0]?.data?.alt ?? '';
          if (index < 4) {
            return (
              <MediumCard
                key={`${index}-${title}`}
                title={title}
                urlImg={imgUrl}
                altImg={imgAlt || title}
                urlNote={urlNote}
              />
            );
          }
        })}
      </div>
    );
  }

  return (
    <div className={`${styles['container__sectionGrid']}`}>
      <div className={`${styles['sectionGrid__head']} `}>
        <h3 className={`${styles['sectionGrid__head__title']}`}>
          {nameGrilla}
        </h3>
        <p className={`${styles['sectionGrid__head__separator']}`}></p>
        <a
          href={linkTo}
          className={`${styles['sectionGrid__head__linkTo']} extend-link`}
        >
          VER MÁS
        </a>
      </div>
      {listItem}
    </div>
  );
};

export default GrillaAutomatica;
