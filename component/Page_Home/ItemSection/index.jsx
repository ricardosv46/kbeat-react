import { Image } from "component/global/Image/Image";
import styles from "./ItemSection.module.scss";
// import { colorsSection } from "../../../util/colorSections";

const MULTIMEDIA_DEFAULT = {
    add: "front",
    type: "image",
    path: process.env.IMAGE_DEFAULT_1250x735
}
const ItemSection = ({ data }) => {
    let resizeImage = {
        mobile: '164x95',
        tablet: '175x95',
        desktop: '230x129'
    }

    const isVideo = data?.data?.multimedia.some(media => media.type == "video")
    // const image = data?.data?.find(img => img.type == "media") || ;
    //     const sectionName = data?.fields?.find(category => category.name == "header")?.value;
    //     const categorySlug = data?.fields?.find(category => category.name === "url")?.value;
    //     const categoryTitle = data?.fields?.find(category => category.name === "title")?.value;
        // const colorSections = colorsSection.filter(item=> item?.slug === categorySlug)[0]?.color || '#000'

        const image = data?.data?.multimedia.find(media => media.type == "image") ||
        data?.data?.multimedia.find(media => media.type == "video") || data?.image ||MULTIMEDIA_DEFAULT;
        const slug = data?.slug;
        const sectionName = data?.title;
        const categoryTitle = data?.data?.categories?.find(category => category.primary === true)?.name;
        const categorySlug = data?.data?.categories?.find(category => category.primary === true)?.slug;

    return (

    <article className={`${styles["mediumCard__container"]}`}>

        <figure className={`${styles["itemSection__image"]} ${isVideo ? styles["video-type"] : ""}`} >
            <Image 
                data={image} 
                resize={resizeImage} 
                title={categoryTitle || ''} 
            />
            <div className={`${styles["degraded-image"]} extend-link-outside`}></div>              
        </figure>
      
        {/* {categoryTitle && 
            <h3 className={styles["itemSection__section"]}>
                 <a  style={{color:'#F101CC'}} href={categorySlug}>{categoryTitle}</a>
            </h3>
        } */}
        
        <h2 className={styles["itemSection__title"]}>
            <a href={slug} className="extend-link">{sectionName}</a>
        </h2>
    </article>
    )
}

export { ItemSection };