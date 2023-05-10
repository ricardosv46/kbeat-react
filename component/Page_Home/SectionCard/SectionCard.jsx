import DegradedCard from '../DegradedCard/DegradedCard';
import styles from '../SectionCard/SectionCard.module.scss';

const SectionCard = ({
  urlNote,
  altImg,
  data,
  title,
  urlImg,
  sectionTitle,
  linkTo = '#',
  height,
  width,
  gradientHeight = '180px',
  isVideo
}) => {
  let item;

  item = (
    <DegradedCard
      urlNote={urlNote}
      altImg={altImg}
      urlImg={urlImg}
      title={title}
      height={height}
      width={width}
      gradientHeight={gradientHeight}
      isVideo={isVideo}
    />
  );

  return (
    <div className={`${styles['container__sectionGrid']}`}>
      <div className={`${styles['sectionGrid__head']}`}>
        <h3 className={`${styles['sectionGrid__head__title']}`}>
          {sectionTitle}
        </h3>
        <p className={`${styles['sectionGrid__head__separator']}`}>{}</p>
        <a
          href={linkTo}
          className={`${styles['sectionGrid__head__linkTo']} extend-link`}
        >
          VER MÁS
        </a>
      </div>
      {item}
    </div>
  );
};

export default SectionCard;
