import resizePrototype from "util/resizePrototype";
import style from "component/Page_Author_Internal/CardArticle/CardArticle.module.scss"

const newResize = new resizePrototype();

const CardArticle = ({ article }) => {
    const { update_date } = article;
    const dateData = update_date?.split(" ");
    const url_img =
        article?.data?.multimedia?.find((media) => media.type == "image")?.path ||
        article?.data?.multimedia?.find((media) => media.type == "video")?.data?.image_path ||
        process.env.IMAGE_DEFAULT_1250x735;
    const date = dateData[0].split("-");
    const hours = dateData[1].split(":");

    return (
        <>
            <div className={style["article__image"]}>
                <img src={url_img ? newResize.resizeWapa(url_img, 220, 124) : "/static/avatar/author.png"} />
            </div>
            <div className={style["article__info"]}>
                <h2 className={style["article__title"]}>
                    <a href={article?.slug} className="extend-link">
                        {article?.title}
                    </a>
                </h2>
                <p className={style["article__category"]}>
                    <a href={article?.data?.tags[0]?.slug}>{article?.data?.tags[0]?.name}</a>
                </p>
                <div className={style["article__date"]}>
                    <span>{`${date[2]}/${date[1]}/${date[0]}`}</span> | <span>{`${hours[0]}:${hours[1]}`}</span>
                </div>
            </div>
        </>
    );
};

export { CardArticle };
