import MediumCard from '../MediumCard/MediumCard';
import styles from '../grillaAutomatica/GrillaAutomatica.module.scss';

const GrillaNoAutomatica = ({ data }) => {
  let dataDefault = [];
  let listItem;
  let nameGrilla = '';
  let linkTo = '';

  if (data?.spotlight?.data?.item.length > 0) {
    dataDefault = data?.spotlight?.data?.item;
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
          imgUrl = item?.image?.url || '/static/images/placeholder.png';
          const title = item?.title ?? '';
          const urlNote = item?.url ?? '';
          imgAlt = item?.image?.alt ?? '';
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

export default GrillaNoAutomatica;
