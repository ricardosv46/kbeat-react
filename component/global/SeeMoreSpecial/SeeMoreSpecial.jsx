import style from "component/global/SeeMoreSpecial/SeeMoreSpecial.module.scss";

const SeeMoreSpecial = ({ title, linkTo}) => {
  return (
    <span className={style["seeMore__special"]}>
        <a href={linkTo}>{title}</a>
    </span>
  )
}

export { SeeMoreSpecial };