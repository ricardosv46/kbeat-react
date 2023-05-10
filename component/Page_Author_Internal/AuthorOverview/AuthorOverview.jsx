import { useRef } from "react";
import IconMailBtn from "component/icons/IconMailBtn";
import IconRss from "component/icons/IconRss";
import IconTwitterBtn from "component/icons/IconTwitterBtn";
import IconWebBtn from "component/icons/IconWebBtn";
import resizePrototype from "util/resizePrototype";
import style from "component/Page_Author_Internal/AuthorOverview/AuthorOverview.module.scss";

const newResize = new resizePrototype();

const AuthorOverview = ({ author, isAuthor=false }) => {
    const { fullname, data, metadata, slug } = author;

    const refBtnLink = useRef();

    const arrayMetadata = metadata ?? [];
    let email = "";
    let url_website = "";
    let url_photo = "";
    let url_twitter = "";
    let description =
        data?.description ||
        `${fullname}. Autor de contenidos y de las últimas noticias del diario La República. Experiencia como redactor en varias temáticas y secciones sobre noticias de hoy en Perú y el mundo.`;
    for (let i = 0; i < arrayMetadata.length; i++) {
        if (arrayMetadata[i].key === "email") {
            email = arrayMetadata[i].value;
        }
        if (arrayMetadata[i].key === "url_website") {
            url_website = arrayMetadata[i].value;
        }
        if (metadata[i].key === "url_photo") {
            url_photo = arrayMetadata[i].value;
        }
        if (metadata[i].key === "url_twitter") {
            url_twitter = arrayMetadata[i].value;
        }
    }

    return (
        <div className={`${style["author__card"]} ${ isAuthor ? style["author__card--wobackg"] : style["back__gray"]}`}>
            <div className={style["author__head"]}>
                <div className={style["author__image"]}>
                    {isAuthor ? 
                    <a href={slug} className="extend-link" ref={refBtnLink}>
                        <img alt={fullname} src={url_photo ? newResize.resizeWapa(url_photo, 124, 124) : "/static/avatar/author.png"} />
                    </a> :
                    <img alt={fullname} src={url_photo ? newResize.resizeWapa(url_photo, 124, 124) : "/static/avatar/author.png"} />
                    }
                </div>
                <div className={style["author__info"]}>
                    {isAuthor ? 
                        <h2 className={`${style["author__title"]} ${style["title__list"]}`} onClick={() => refBtnLink.current.click()}>
                            {fullname}
                        </h2> :
                        <h1 className={style["author__title"]}>{fullname}</h1>
                    }
                    <div className={style["author__social-networks"]}>
                        {email && (
                            <a href={`mailto:${email}`} target="_blank" rel="norefereer" className={`${style["wrapper__icon"]} ${style["wrapper__icon-mail"]}`}>
                                <IconMailBtn />
                            </a>
                        )}
                        {url_website && (
                            <a className={`${style["wrapper__icon"]} ${style["wrapper__icon-web"]}`} href={url_website} target="_blank" rel="norefereer">
                                <IconWebBtn />
                            </a>
                        )}
                        {url_twitter && (
                            <a
                                className={`${style["wrapper__icon"]} ${style["wrapper__icon-twitter"]}`}
                                href={`https://www.twitter.com/${url_twitter}`}
                                target="_blank"
                                rel="norefereer"
                            >
                                <IconTwitterBtn />
                            </a>
                        )}
                        <a className={`${style["wrapper__icon"]} ${style["wrapper__icon-rss"]}`} href={`/rss${author?.slug}.xml`} target="_blank" rel="norefereer">
                            <IconRss />
                        </a>
                    </div>
                    <p className={`${style["author__description"]} ${style["author__description-desktop"]}`}>
                        {description}
                    </p>
                </div>
            </div>
            <p className={`${style["author__description"]} ${style["author__description-mobile"]}`}>
                {description}
            </p>
        </div>
    );
};

export { AuthorOverview };
