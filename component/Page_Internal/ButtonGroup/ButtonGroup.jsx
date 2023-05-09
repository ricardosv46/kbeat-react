// TODO: Por mejorar este componente

import style from "component/Page_Internal/ButtonGroup/ButtonGroup.module.scss";

const ButtonGroup = () => {
    return (
        <div className={style["button-group"]}>
            <div className={`${style["button__item"]} extend-link--outside ${style.primary}`}>
                <img
                    loading="lazy"
                    alt="Newsletter LR"
                    src="/static/icon/lr-news.webp"
                    width="50"
                    height="50"
                    className={style["button__image"]}
                />
                <a href="https://larepublica.pe/newsletter" rel="noopener noreferrer" target="_blank" className={`${style["button__text"]} extend-link`}>
                    RECIBE LOS BOLETINES DE POLÍTICA LR
                </a>
            </div>
            <div className={`${style["button__item"]} extend-link--outside ${style.secondary}`}>
                <img
                    loading="lazy"
                    alt="Google New LR"
                    src="/static/icon/lr-google-news.webp"
                    width="50"
                    height="50"
                    className={style["button__image"]}
                />
                <a
                    href="https://news.google.com/publications/CAAqBwgKMP6OigMwlqo8?hl=es-419&gl=PE&ceid=PE:es-419"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`${style["button__text"]} extend-link`}
                >
                    RECIBE LAS NOTICIAS EN GOOGLE NEWS
                </a>
            </div>
        </div>
    );
};

export { ButtonGroup };