import Head from 'next/head';
import dynamic from "next/dynamic";
import { Layout } from "Layouts/Layouts";
import WithInternal from "hocs/withInternal";
import { MainContent } from "component/Page_Internal/MainContent/MainContent";
import { RecommendedNotesByBrand } from "component/Page_Internal/RecommendedNotesByBrand/RecommendedNotesByBrand";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { Taboola } from "component/global/Taboola";
import { OffersToday } from "component/Page_Internal/OffersToday/OffersToday";
import { SchemaCronos } from "component/global/Schemas/SchemaCronos";
import { Opta } from "component/global/Opta/Opta";
import { Moreseen } from 'component/global/Moreseen/Moreseen';
import { TitleSection } from 'component/global/TitleSection/TitleSection';
import { TitleInterna } from 'component/Page_Internal/TitleInterna/TitleInterna';

const Section = dynamic(import("pages/[section]/index"));

const Internal = (props) => {
    const {
        meta,
        article_internal,
        interlinkingData,
        footerMenu,
        mainMenu,
        topicsMenu,
        recommendedNotesByBrand,
        spotlight_general,
        liveBlogPosting,
        analyticsInternal,
        section_data,
        section_about,
        analyticsSeccion,
        adsPage,
        pageSection,
        firstAlertWeb,
        secondAlertWeb,
        article,
        listNote,
        data_offers_today,
        everGreenArticles
    } = props;
    
    if (pageSection) {
        return (
            <Section
                {...{
                    section_data,
                    section_about,
                    analyticsSeccion,
                    // spotlight_general,
                    adsPage,
                    footerMenu,
                    mainMenu,
                    topicsMenu,
                    article,
                }}
            />
        );
    }

    let liveIsFeaturedTrue = [];

    if (liveBlogPosting && liveBlogPosting?.live && Object.keys(liveBlogPosting?.live) && Object.keys(liveBlogPosting?.live).length) {
        const { live } = liveBlogPosting;
        if (live && Object.keys(live) && Object.keys(live).length) {
            // contentInlive = live
            liveIsFeaturedTrue = live?.data?.content_elements?.filter((item) => item?.is_featured === true);
        }
    }

    let data_schema_cronos;
    if (!!article_internal?.article?.schemas?.length) {
        data_schema_cronos = <SchemaCronos data={article_internal.article.schemas} />;
    }
    const isOpta = article_internal?.article?.data?.validate_elements?.opta || false;
    /* Armando articulos para bloque "TE PUEDE INTERESAR" */
    const relatedArticles = article_internal?.article?.data?.related?.items?.slice(0,3) || [];
    const relatedEvergreenArticles = everGreenArticles?.slice(0,3) || []
    const interestList = {external: {data: [...relatedArticles, ...relatedEvergreenArticles]}}

    const slugSection = article_internal?.article?.data?.categories[0].slug;
    const firstCategories = article_internal?.article?.data?.categories[0].slug.split("/")[1];
    const titleMostViewed = article_internal?.article?.data?.categories.filter((item) => item.slug.endsWith(firstCategories))[0]?.name || article_internal?.article?.data?.categories[0].name;
    
    return (
        <Layout
            adsPage={adsPage}
            data={article_internal?.article}
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            prebid={"INTERNA"}
            internal={true}
            listNote={listNote?.articles?.data || []}
        >
            {data_schema_cronos}
            <Head>{isOpta && <Opta />}</Head>
            <TitleSection name={titleMostViewed} tag="span" href={slugSection} />
            <TitleInterna title={article_internal?.article?.title} />
            <div className="container__columns">
                <main className="col__content">
                    <article>
                        <MainContent
                            data={article_internal?.article}
                            interlinkingData={interlinkingData}
                            liveBlogPosting={liveBlogPosting}
                            adsPage={adsPage}
                            dataLiveIsFeatured={liveIsFeaturedTrue}
                        />
                        
                        <Taboola type="internal" />
                    </article>
                </main>
                <aside className="col__content offset-300">
                    
                    <SlotAds type="Middle" data={adsPage?.ads?.data} />
                    {/* <div className="desktop-visible">
                        <Moreseen title="Te puede interesar" data={interestList} />
                    </div> */}
                    <div className="content_Moreseen">
                        <Moreseen title="LO ÚLTIMO" data={analyticsInternal} />
                    </div>

                    {/* <RecommendedNotesByBrand data={recommendedNotesByBrand} /> */}
                    
                    <div className="sticky-viewability">
                        <SlotAds type="Middle2_Right" data={adsPage?.ads?.data} />
                    </div>
                </aside>
            </div>
        </Layout>
    );
};

export default WithInternal(Internal);
