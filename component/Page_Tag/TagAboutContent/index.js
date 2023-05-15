import style from "./TagAboutContent.module.scss";

const TagAboutContent = ({ imageTag, titleTag, descriptionTag, tagRelated, extraTag }) => {
    return (
        <>
            <div className={`${style.container}`}>
                <div className={style.tagInfo__content}>
                    {imageTag && (
                        <div className={style.info__image}>
                            <img src={imageTag} alt={titleTag} />
                        </div>
                    )}
                    <div className={style.tagInfo__info}>
                        <h2 className={style.info__title}>{titleTag}</h2>
                        <div className={style.tagInfo__description} dangerouslySetInnerHTML={{ __html: descriptionTag }} />
                    </div>
                </div>
            </div>


        </>
    );
};

export { TagAboutContent };
