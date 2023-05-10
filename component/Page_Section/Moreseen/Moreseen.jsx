import { TitleSection } from "../../global/TitleSection/TitleSection";
import { ItemList } from "component/Page_Home/ItemList/ItemList";
import style from "component/Page_Section/Moreseen/Moreseen.module.scss";

const Moreseen = (props) => {
    const data = props?.data?.external?.data.slice(0, 6);
    const title = props.title || "Lo más visto"
    return (
        <>
            {props?.data?.external?.data && props?.data?.external?.data.length > 0 && (
                <section className={style.Moreseen__container}>
                    <TitleSection name={title} tag="h3" />
                    <div className={style.Moreseen__main}>
                        {data?.map((item) => (
                            <ItemList
                                key={item?._id || item?.slug || item?.url}
                                category={item.data?.categories[0]?.name}
                                slug={item?.slug || item?.url}
                                title={item?.title}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export { Moreseen };
