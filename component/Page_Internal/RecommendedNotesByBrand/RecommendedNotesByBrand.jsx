import style from "component/Page_Internal/RecommendedNotesByBrand/RecommendedNotesByBrand.module.scss";
import { TitleSection } from "component/global/TitleSection/TitleSection";
import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const RecommendedNotesByBrand = ({ data }) => {
    let arrNotes = [];
    let showContent = null;
    let showLogo = null;
    data?.recomendedNotesEP?.spotlight?.data?.site_section_item?.forEach((item, index) => {if(index<2)  {arrNotes.push(item)} });
    data?.recomendedNotesWP?.spotlight?.data?.site_section_item?.forEach((item, index) => {if(index<2)  {arrNotes.push(item)} });
    data?.recomendedNotesLB?.spotlight?.data?.site_section_item?.forEach((item, index) => {if(index<2)  {arrNotes.push(item)} });
    data?.recomendedNotesLOL?.spotlight?.data?.site_section_item?.forEach((item, index) => {if(index<2) {arrNotes.push(item)} });

    if (arrNotes && arrNotes.length) {
        showContent = arrNotes.map((ele, key) => {

            const image = ele?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
            const title = ele?.title;
            const slug = ele?.url;
            const date = ele?.date;
            const site = ele?.site;

            if (site && site.length) {
                showLogo = (
                    <img
                        loading="lazy"
                        className={style.recommendedNotes__logo}
                        width="42"
                        height="12"
                        src={`/static/recomended/${site}.svg`}
                        alt={site}
                    />
                );
            }

            return (
                <article className={style["recommendedNotes__item"]} key={key}>
                        <div className={`${style.recommendedNotes__content} extend-link--outside`}>
                            <div className={style["recommendedNotes__image"]}>
                                <img loading="lazy" width="120" height="71" src={newResize.resizeWapa(image, 120, 71)} alt={title} />
                            </div>
                            <div className={style["recommendedNotes_list"]}>
                                {showLogo}
                                <h3 className={style["recommendedNotes__title"]}>
                                    <a href={slug} target='_blank' className="extend-link">
                                        {title}
                                    </a>
                                </h3>
                            </div>
                        </div>
                </article>
            );
        });
    }
    return (
        <>
            <div>
                {showContent && <TitleSection tag="h2" name="Notas recomendadas" />}
                <div className={style["recommendedNotes__grid"]}>{showContent}</div>
            </div>
        </>
    );
};

export { RecommendedNotesByBrand };
