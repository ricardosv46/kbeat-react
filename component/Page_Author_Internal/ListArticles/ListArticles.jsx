import { SlotAds } from "component/global/AdsManager/SlotAds";
import { CardArticle } from "component/Page_Author_Internal/CardArticle/CardArticle";
import style from "component/Page_Author_Internal/ListArticles/ListArticles.module.scss";

const ListArticles = ({ data, adsPage }) => {
    const options_ads = [3, 7, 11, 15];
    const types_ads = {
        3: {
            type: "Middle2",
            _id: "ADS01",
        },
        7: {
            type: "inline",
            _id: "ADS02",
        },
        11: {
            type: "inline2",
            _id: "ADS03",
        },
        15: {
            type: "inline3",
            _id: "ADS04",
        },
    };
    return (
        <div className={style["list-articles"]}>
            {data.map((item, index) => {
                if (options_ads.includes(index)) {
                    return (
                        <>
                            <SlotAds data={adsPage?.ads?.data} type={types_ads[index].type} />
                            <article className={`${style["article"]} extend-link--outside`} key={item._id}>
                                <CardArticle article={item} />
                            </article>
                        </>
                    );
                } else {
                    return (
                        <article className={`${style["article"]} extend-link--outside`} key={item._id}>
                            <CardArticle article={item} />
                        </article>
                    );
                }
            })}
        </div>
    );
};

export { ListArticles };
