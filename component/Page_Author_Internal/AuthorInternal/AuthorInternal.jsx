import { SlotAds } from "component/global/AdsManager/SlotAds";
import { ListArticles } from "component/Page_Author_Internal/ListArticles/ListArticles";
import { Moreseen } from "component/Page_Section/Moreseen/Moreseen";
import { AuthorOverview } from "component/Page_Author_Internal/AuthorOverview/AuthorOverview";
import { ShowMoreButton } from "component/global/ShowMoreButton/ShowMoreButton";
import { MgId } from "component/global/Mgid";

const AuthorInternalComp = ({ author, adsPage, articlesData, showMore, loading, showBtn, newsAtemporal, analyticsGral }) => {
    return (
        <div className="container__columns">
            <section className="col__content">
                <AuthorOverview author={author} />
                <SlotAds type="Strip" data={adsPage?.ads?.data} />
                <ListArticles data={articlesData} adsPage={adsPage} />
                {showBtn && (
                    <ShowMoreButton loading={loading} onClick={showMore} />
                )}
                <MgId />
            </section>
            <section className="col__content offset-300">
                <SlotAds data={adsPage?.ads?.data} type="Middle" />
                <Moreseen data={analyticsGral} />
                <div className="sticky-viewability">
                    <SlotAds data={adsPage?.ads?.data} type="Middle2_Right" />
                </div>
            </section>
        </div>
    );
};

export { AuthorInternalComp };
