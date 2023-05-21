import style from "./sectionGridLastNews.module.scss";
import { ItemSection } from "../ItemSection";

const SectionGridLastNews = ({data}) => {
    let items = data?.articles?.data;
    let showItems = null;
    let showGrid = null;

    if(items && items.length > 0){
        showItems = items.map((item, key) => {

                return <ItemSection data={item} key={key} />
                
        });

        showGrid =     <section className={style["grillaHome"]}>
                                {showItems}
                        </section>
    }

    return showGrid;
}

export default SectionGridLastNews ;