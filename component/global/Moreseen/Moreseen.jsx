import { ItemList } from "component/global/ItemList/ItemList";
import style from "component/global/Moreseen/Moreseen.module.scss";
import { TitleSection } from "../TitleSection/TitleSection";

const Moreseen = (props) => {
    const data = props?.data?.external?.data.slice(0, 6);
    const title = props.title || "Lo más visto"
    return (
        <>
            {props?.data?.external?.data && props?.data?.external?.data.length > 0 && (
                <section className={style.Moreseen__container}>
                    <TitleSection name={title} tag="h3"  mb={false} more/>
                    <div className={style.Moreseen__main}>
                        {data?.map((item) => (
                            <ItemList
                                variant='mediaObject'
                                key={item?._id || item?.slug || item?.url}
                                category={item.data?.categories[0]?.name}
                                slug={item?.slug || item?.url}
                                title={item?.title}
                                image={item?.data?.multimedia?.find(media => media.type == "image")?.path ||
                                item?.data?.multimedia?.find(media => media.type == "video")?.data?.image_path || process.env.IMAGE_DEFAULT_1250x735}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export { Moreseen };
