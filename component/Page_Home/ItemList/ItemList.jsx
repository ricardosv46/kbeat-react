import style from "component/Page_Home/ItemList/ItemList.module.scss";
const ItemList = ({ title, slug, image, color, header, logo, tag = "h2", variant, category, bigImg, setAttrLinkTo }) => {
    const TAG = tag || "h2",
        isMediaObject = variant === "mediaObject";

    const content = (
        <>
            <TAG className={style["item-list__title"]}>
                <a href={slug} className={`${style["item-list__link"]} extend-link`} {...setAttrLinkTo}>
                    {title}
                </a>
            </TAG>
            {category && <span className={style["item-list__category"]}>{category}</span>}
            {header && (
                <span className={style["sponsor__text"]} style={{ backgroundColor: `${color || "#000"}` }}>
                    {header}
                </span>
            )}
            {logo && <img loading="lazy" src={logo} alt="" width="74" height="10" className={style["sponsor__logo"]} />}
        </>
    );

    return (
        <article className={`${style["item-list"]} ${style[variant]} ${isMediaObject && "d-i-flex align-center"} extend-link--outside`}>
            {isMediaObject && <img loading="lazy" src={image} alt="" width={bigImg ? "60" : "45"} height={bigImg ? "60" : "45"} className={`${style["item-list__image"]} ${bigImg ? style["item-list__bigImage"] : ""}`} />}
            {isMediaObject ? <div>{content}</div> : content}
        </article>
    );
};

export { ItemList };
