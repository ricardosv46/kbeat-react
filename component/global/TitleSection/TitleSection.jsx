import style from "./TitleSection.module.scss";
import { convertirFecha } from "util/convertirFecha";

const TitleSection = (data) => {
    const { tag, center,update_date,href } = data;
    const TAG = tag ?? "h1";
    
    return (
        <div className={`${style.titleSection__wrapper} ${center ? style.text__center : ""}`}>
            <TAG className={style.titleSection__main}>{href?.length>0 ? <a href={href}>{data?.name}</a>: data?.name }</TAG>
            {update_date && <time dateTime={convertirFecha(update_date?.split(" ").join("T"), "iso-2")} className={style.main__date}>
                        {convertirFecha(update_date?.split(" ").join("T"), "short")}
            </time>}
        </div>
    );
};

export { TitleSection };
