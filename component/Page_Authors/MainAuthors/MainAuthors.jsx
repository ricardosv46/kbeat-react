
import { ListAuthors } from "component/Page_Authors/ListAuthors/ListAuthors";
import { ShowMoreButton } from "component/global/ShowMoreButton/ShowMoreButton";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { Moreseen } from "component/Page_Section/Moreseen/Moreseen";
import { TitleSection } from "component/global/TitleSection/TitleSection";

const MainAuthors = ({authorsData, loading, showBtn, showMore, dataAds, analyticsGral}) => {
    return (
        <div className="container__columns">
            <section className="col__content">
                <TitleSection name="Autores" tag="h2" />
                <ListAuthors data={authorsData} />
                {showBtn && (
                    <ShowMoreButton loading={loading} onClick={showMore} text={"VER MÁS AUTORES"} />
                )}
            </section>
            <section className="col__content offset-300">
                <SlotAds data={dataAds} type="Middle" />
                <Moreseen data={analyticsGral} />
                <div className="sticky-viewability">
                    <SlotAds data={dataAds} type="Middle2_Right" />
                </div>
            </section>
        </div>
    )
}

export { MainAuthors };