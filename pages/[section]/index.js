import React, { useState } from "react";
import WithSection from "hocs/withSection";
import { Layout } from "Layouts/Layouts";
import { useRouter } from "next/router";
import { Spotlight } from "component/Page_section/Spotlight/Spotlight";
// import { ListSmallSection } from "component/Page_Section/ListSmallSection/ListSmallSection";
import { ListSection } from "component/Page_section/ListSection/ListSection";
import fetchApi from "services/api/fetchApi";
import { TitleSection } from "component/global/TitleSection/TitleSection";
// import { InterlinkingSection } from "component/Page_Section/InterlinkingSection/InterlinkingSection";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { ShowMoreButton } from "component/global/ShowMoreButton/ShowMoreButton";
import { Taboola } from "component/global/Taboola";
import { Moreseen } from "component/global/Moreseen/Moreseen";

export const Section = (props) => {
    const {
        section_data,
        section_about,
        analyticsSeccion,
        adsPage,
        footerMenu,
        mainMenu,
        topicsMenu,
        spotlight_general,
        article,
        portada,
    } = props;
    const [dataSection, setDataSection] = useState(section_data?.articles?.data.slice(0, 24) || []);
    const [numPage, setNumPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [lastPage, setLastPage] = useState(false);
    const router = useRouter();
    const { query } = router;
    const { section } = query;
    let titleSection = null;
    let dataSpotlight = null;
    let dataGrid = null;
    let dataList;
    let interlinking = null;
    let isDataSubMnu = false;
    const dataPortada = portada?.spotlight?.data?.item;

    const handler = async () => {
        setNumPage(numPage + 1);
        setLoading(true);
        const { section } = query;

        let nameSection;

        if (section_data?.articles?.data?.length > 0) {
            if (section && section?.length > 0) {
                nameSection = section;
                let newData = await fetchApi("articles", {
                    limit: 24,
                    order_by: "update_date",
                    category_slug: nameSection,
                    page: numPage,
                });

                if (newData?.articles?.data?.length > 0) {
                    if (newData?.articles?.data?.length < 24) {
                        setLastPage(true)
                    }
                } else {
                    setLastPage(true)
                }

                const newArticles = newData?.articles?.data.filter((newArticle) => {
                    const validateItem = dataSection.some((article) => article?.slug === newArticle?.slug);

                    return !validateItem;
                });
                if (newArticles.length > 0) {
                    fetch(`${process.env.SITE_DOMAIN_URL}/comscoreview.txt?token=${Math.floor(Math.random() * 500000) + 1}`)
                        .then((response) => {
                            if (!response.ok) throw Error(response.status);
                            return response;
                        })
                        .then((response) => console.log("ok"))
                        .catch((error) => console.log(error));
                    setDataSection([...dataSection, ...newArticles]);
                    // console.log("data-section::::::", dataSection);
                }
            }
        }
        setLoading(false);
    };

    interlinking = <div style={{ padding: "10px" }}></div>;

    if (spotlight_general && Object.keys(spotlight_general) && Object.keys(spotlight_general).length) {
        const { spotlight } = spotlight_general;

        if (spotlight && Object.keys(spotlight) && Object.keys(spotlight).length) {
            const { data } = spotlight;

            if (data && Object.keys(data) && Object.keys(data).length) {
                const { section_item_link } = data;

                let dataSubMenu = section_item_link?.filter((submenuItem) => submenuItem.section[0].slug === "/" + section);
                isDataSubMnu = dataSubMenu?.length > 0 ? true : false;
                // interlinking = isDataSubMnu ? <InterlinkingSection data={dataSubMenu} /> : <div style={{ padding: "10px" }}></div>;
            }
        }
    }

    if (section_about && Object.keys(section_about) && Object.keys(section_about).length > 0) {
        if (section_about && Object.keys(section_about) && Object.keys(section_about).length > 0) {
            if (section_about?.category?.name && section_about.category.name.length > 0) {
                titleSection = (
                    <TitleSection
                        // name={
                        //     `ÚLTIMAS NOTICIAS SOBRE ${section_about.category.name}`
                        // }
                        name={
                            `${section_about.category.name}`
                        }
                        tag="h1"
                    />
                );
            }
        }
        if (dataSection && Object.keys(dataSection) && Object.keys(dataSection).length > 0 && !dataPortada) {
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

            dataGrid = dataSection.slice(1, 6);
            dataList = dataSection.slice(6, dataSection.length);
        }

        if (dataSection && Object.keys(dataSection) && Object.keys(dataSection).length > 0 && dataPortada && dataPortada?.length > 0) {
            const newData = [...dataPortada, ...dataSection];
            const firstItem = newData.slice(0, 1)[0];
            dataSpotlight = {
                image: firstItem?.image?.url || process.env.IMAGE_DEFAULT_1250x735,
                slug: firstItem?.url,
                title: firstItem?.title,
            };
            dataGrid = newData.slice(1, 6);
            dataList = newData.slice(6, newData.length);
        }
    }

    return (
        <Layout
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            prebid={"SECTION"}
            adsPage={adsPage}
            data={section_about?.category}
            listNote={section_data?.articles?.data || []}
        >
            {titleSection}
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
                    {/* <ListSmallSection data={dataGrid} /> */}
                    <SlotAds type="Middle" data={adsPage?.ads?.data} />
                    <Moreseen data={analyticsSeccion} />
                    <SlotAds type={"Middle2_Right"} data={adsPage?.ads?.data} />
                </article>
            </div>
        </Layout>
    );
};

export default WithSection(Section);
