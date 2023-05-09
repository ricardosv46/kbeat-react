import { convertirFecha } from "util/convertirFecha";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { AuthorSign } from "component/global/AuthorSign/AuthorSign";
import style from "./ListSection.module.scss";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const ListSection = (props) => {
    const { data, adsPage } = props;

    let newDataList = [];
    if (data && data.length) {
        data.map((item, key) => {
            newDataList.push(item);
            if (key === 2) {
                const ads1 = {
                    _id: "ADSLOL01",
                    type: "ads",
                    type_ads: "Middle2",
                };
                newDataList.push(ads1);
            }

            if (key === 5) {
                const ads2 = {
                    _id: "ADSLOL02",
                    type: "ads",
                    type_ads: "inline",
                };
                newDataList.push(ads2);
            }

            if (key === 8) {
                const ads3 = {
                    _id: "ADSLOL03",
                    type: "ads",
                    type_ads: "inline2",
                };
                newDataList.push(ads3);
            }
            if (key === 11) {
                const ads4 = {
                    _id: "ADSLOL04",
                    type: "ads",
                    type_ads: "inline3",
                };
                newDataList.push(ads4);
            }
        });
    }

    return (
        <div className={style["list"]}>
            {newDataList?.map((item, i) => {
                if (item.type === "ads") {
                    return <SlotAds type={item?.type_ads} data={adsPage?.ads?.data} key={item?._id} />;
                } else {
                        const image = item?.data?.multimedia?.find(media => media.type == "image")?.path ||
                        item?.data?.multimedia?.find(media => media.type == "video")?.data?.image_path || process.env.IMAGE_DEFAULT_1250x735;
                        const isVideo = item?.data?.multimedia?.some(media => media.type == "video")
                        const authorData = item?.data?.authors;
                        const dateArticle = convertirFecha(item?.update_date?.split(" ").join("T"), "shortSection");
                        const tagName = item?.data?.tags[0]?.name;
                        const tagSlug = item?.data?.tags[0]?.slug;
                    return (
                        <div className={`${style["list__section--item"]} extend-link--outside`} key={i}>
                            <figure className={` ${isVideo ? style["video-type"] : ""}`}>

                                    <img  
                                        src={newResize.resizeWapa(image, 220,124)}
                                        decoding="async"
                                        loading="lazy"
                                        alt={item.title} 
                                        title={item.title}
                                        width={220}
                                        height={124}
                                        className={`${style["list__section--image"]}`}
                                    />
                                </figure>
                            <div className={style["list__section--content"]}>
                                <a href={tagSlug || `#`} className={style["list__section--tag"]}>
                                    {tagName}
                                </a>
                                <h2 className={style["list__section--title"]}>
                                    <a href={item.slug}  className="extend-link">
                                    {item.title}
                                    </a>
                                </h2>
                                
                                <div className={style["list__section--author"]}>
                                    <AuthorSign data={authorData} subText='POR: ' />
                                    <time className={style["list__section--time"]}>
                                        {dateArticle}
                                    </time>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export { ListSection };
