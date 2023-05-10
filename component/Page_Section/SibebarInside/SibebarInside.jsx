import style from "./SibebarInside.module.scss";
import {TitleSection} from "../../global/TitleSection/TitleSection";

const SibebarInside = (props) => {
    const data = props?.data?.spotlight?.data.item;
    const title = props?.title

    return (
        <>
            {props?.data?.spotlight?.data?.item && props?.data?.spotlight?.data?.item?.length > 0 && (
                <div className={style.Moreseen__container}>
                    <TitleSection name={title} tag="h2" />
                    <div className={style.Moreseen__main}>
                        {data?.map((item) => (
                            <a href={item.url} key={item.url} >
                                <p>{item.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export { SibebarInside };
