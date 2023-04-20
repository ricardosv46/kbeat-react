import style from "component/global/SeeMore/SeeMore.module.scss";

const SeeMore = ({ linkTo, seeMore, setAttrLinkTo={} }) => {
    return (
        <a className={`${style["seeMore"]} extend-link`} href={linkTo} {...setAttrLinkTo}>
            {seeMore}
        </a>
    );
};

export { SeeMore };
