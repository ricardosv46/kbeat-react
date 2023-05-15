import React, { useEffect, useState } from "react";
import WithSection from "hocs/withSection";
import { Layout } from "Layouts/Layouts";
import { useRouter } from "next/router";
import { Spotlight } from "component/Page_Section/Spotlight/Spotlight";
// import { ListSmallSection } from "component/Page_Section/ListSmallSection/ListSmallSection";
import { ListSection } from "component/Page_Section/ListSection/ListSection";
import fetchApi from "services/api/fetchApi";
import { TitleSection } from "component/global/TitleSection/TitleSection";
// import { InterlinkingSection } from "component/Page_Section/InterlinkingSection/InterlinkingSection";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { ShowMoreButton } from "component/global/ShowMoreButton/ShowMoreButton";
import { Taboola } from "component/global/Taboola";
import { Moreseen } from "component/global/Moreseen/Moreseen";
import WithTag from "hocs/withTag";
import { TagAboutContent } from "component/Page_Tag/TagAboutContent";
import { TagRelatedContent } from "component/Page_Tag/TagRelatedContent";

export const Section = (props) => {
    const {
        tag_data,
        tag_about,
        analyticsSeccion,
        adsPage,
        footerMenu,
        mainMenu,
        topicsMenu,
        spotlight_general,
        article,
        portada,
    } = props;

    const limit = 24;
    const sectionArticles = tag_data?.articles?.data.slice(0, limit) || [];
    const [dataSection, setDataSection] = useState(sectionArticles);
    const [lastPage, setLastPage] = useState(sectionArticles.length < limit);
    const [numPage, setNumPage] = useState(1);
    const [loading, setLoading] = useState(false);
    let dataSpotlight = null;
    let dataList;
    const section = tag_about.tag.slug.replace("/", "")
    let descriptionTag = null;
    let extraTag = null;
    let imageTag = null;
    let tagRelated = null;
    let titleTag = null;

    const handler =() => {
        const num = numPage + 1
        setNumPage(num)
    }
    useEffect(async () => {
        if (numPage > 1) {
            setLoading(true);
            const params = { tag_slug: tag_about.tag.slug.replace("/tag/", ""), limit, page: numPage, order_by: "update_date" };
            let newData = await fetchApi("articles", params);
            let data = newData?.articles?.data
            setLastPage(data.length < limit)
            data = data.filter(article => !dataSection.some(data => data._id == article._id));
            setDataSection([
                ...dataSection,
                ...data
            ]);
            setLoading(false);
        }
        return () => null
    }, [numPage])


        if (dataSection && Object.keys(dataSection) && Object.keys(dataSection).length > 0) {
            const firstItem = dataSection.slice(0, 1)[0];
            const imageItem =
                firstItem?.data?.multimedia?.find((media) => media.type === "image")?.path ||
                firstItem?.data?.multimedia?.find((media) => media.type == "video")?.data?.image_path ||
                process.env.IMAGE_DEFAULT_1250x735;
            dataSpotlight = {
                image: imageItem,
                slug: firstItem?.slug,
                title: firstItem?.title,
            };

            // dataGrid = dataSection.slice(1, 6);
            dataList = dataSection.slice(1, dataSection.length);
        }

    if (tag_about && Object.keys(tag_about) && Object.keys(tag_about).length) {
        const { tag } = tag_about;

        if (tag?.name && tag?.name?.length > 0) {
            titleTag = tag.name;
        }

        if (tag?.data && Object.keys(tag?.data) && Object.keys(tag?.data).length) {
            const { data } = tag;

            if (data.description && data.description.length > 0) {
                descriptionTag = data.description;
            }

            if (data.multimedia && data.multimedia.length > 0) {
                imageTag = data.multimedia.find(media => media.type == "image").path;
            }

            if (data.extra && Object.keys(data.extra) && Object.keys(data.extra).length) {
                extraTag = data.extra;
            }

            if (data.related && Object.keys(data.related) && Object.keys(data.related).length) {
                const { tags } = data.related;
                if (tags.length > 0) {
                    tagRelated = tags
                }
            }
        }
    }

    return (
        <Layout
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            prebid={"TAG"}
            adsPage={adsPage}
            data={tag_about?.tag}
            listNote={tag_data?.articles?.data || []}
        >
            <TitleSection name={`Últimas noticias sobre ${titleTag}`} tag="h1" />
            <TagAboutContent
                imageTag={imageTag}
                titleTag={titleTag}
                descriptionTag={descriptionTag}
            />
            {/* {interlinking} */}
            <div className="container__columns">
                <article className="col__content">
                    <Spotlight data={dataSpotlight} />
                    <SlotAds type="Strip" data={adsPage?.ads?.data} />
                    <ListSection data={dataList} adsPage={adsPage} />
                    {dataSection?.length < 24 ? null : lastPage ? null : <ShowMoreButton loading={loading} onClick={handler} />}
                    <Taboola type={"section"} />
                </article>

                <article className="col__content offset-300">
                    <TagRelatedContent data={{ tagRelated, extraTag }} />
                    <SlotAds type="Middle" data={adsPage?.ads?.data} />
                    <Moreseen data={analyticsSeccion} />
                    <SlotAds type={"Middle2_Right"} data={adsPage?.ads?.data} />
                </article>
            </div>
        </Layout>
    );
};

export default WithTag(Section);
