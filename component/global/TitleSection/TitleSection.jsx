import style from "./TitleSection.module.scss";
import { convertirFecha } from "util/convertirFecha";


export const DateNote = ({update_date}) =>  <time dateTime={convertirFecha(update_date?.split(" ").join("T"), "iso-2")} className={style.main__date}>
                                    {convertirFecha(update_date?.split(" ").join("T"), "short")}
                                </time>

const TitleSection = (data) => {
    const { tag, center,update_date,href,more,mb=true } = data;
    const TAG = tag ?? "h1";

    
    
    return (
        <div className={`${style.titleSection__wrapper} ${more ? style.more__colors : ""} ${mb ? style.mb : ""} ${center ? style.text__center : ""}`}>
            <TAG className={style.titleSection__main}>{href?.length>0 ? <a href={href}>{data?.name}</a>: data?.name }</TAG>
            {update_date && <DateNote update_date={update_date} />}
        </div>
    );
};

export { TitleSection };
