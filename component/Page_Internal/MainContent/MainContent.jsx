import { ContentElement } from "component/Page_Internal/ContentElement/index";
import { Author } from "component/Page_Internal/Author/Author";
import { BtnShared } from "component/global/BtnShared/BtnShared";
import { Interlinking } from "component/Page_Internal/Interlinking/Interlinking";
import { MainMultimedia } from "component/Page_Internal/MainMultimedia/MainMultimedia";
import { DateNote, TitleSection } from "component/global/TitleSection/TitleSection";
import { LiveFeatured } from "component/Page_Internal/LiveFeatured/LiveFeatured";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import style from "component/Page_Internal/MainContent/MainContent.module.scss";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

const MainContent = ({type, data, interlinkingData, liveBlogPosting, adsPage, dataLiveIsFeatured }) => {
    let showTeaser = null;
    // let showSection = null;
    let showTags = null;
    let showContent = null;
    let showImage = null;
    let showAuthor = null;
    // let titleMostViewed = "";
    let newContentElements = [];
    let slug_note;
    let sharedTitle;
    let inlive = null;
    let showInterlinking;
    // let slugSection;
    let showInternal = null;
    // let isVideo;

    let  slot_tag = "Videoinread2";
    if(data?.slug && data?.slug.includes("/deportes/")) {
        slot_tag = "Middle2"
    }


    if (liveBlogPosting && liveBlogPosting?.live && Object.keys(liveBlogPosting.live)?.length) {
        inlive = {
            ...liveBlogPosting.live,
            type: "inlive",
            description: data.data.teaser,
            image: data.data.multimedia
        };
    }

    if (data && Object.keys(data) && Object.keys(data).length) {
        if (data.slug && data.slug.length) {
            slug_note = data.slug;
        }

        if (data.title && data.title.length) {
            sharedTitle = data.title;
        }

        if (data.data && Object.keys(data.data) && Object.keys(data.data).length) {
            const { data: datos } = data;

                showAuthor = <Author data={data} subText='POR: ' />

            if (datos.teaser_html && datos.teaser_html.length) {
                let teaserContent = datos.teaser_html;
                if(teaserContent.startsWith("<p>") && teaserContent.endsWith("</p>")){
                    teaserContent = teaserContent.split("<p>").filter(value=>value).join("<p>").split("</p>").filter(value=>value).join("</p>");
                }
                showTeaser = <h2 className={style["mainContent__teaser"]} dangerouslySetInnerHTML={{ __html: teaserContent }} />;
            }
            if (datos.tags && Object.keys(datos.tags) && Object.keys(datos.tags).length) {
                const { tags } = datos;

                showTags = tags.map((item, key) => {
                    return (
                        <li className={style["mainContent__tags-list_item"]} key={`mainContent__tags-list_item-${key}`}>
                            <a href={`${process.env.SITE_DOMAIN_URL}${item.slug}` || "#"}>{item.name}</a>
                        </li>
                    );
                });
            }
            if (datos.multimedia?.length > 0) {
                // isVideo = datos.multimedia[0].type == "video";
                showImage = <MainMultimedia data={datos.multimedia} />;
            }
            // if (datos.categories && datos.categories[0] && datos.categories[0].name && datos.categories[0].name.length) {
            //     slugSection = datos.categories[0].slug;
            //     const firstCategories = datos.categories[0].slug.split("/")[1];
            //     titleMostViewed =
            //         datos.categories.filter((item) => item.slug.endsWith(firstCategories))[0]?.name || datos.categories[0].name;

                // showSection = <TitleSection name={titleMostViewed} tag="span" update_date={data?.update_date} href={slugSection} />;
            // }

            if (datos.tags && Object.keys(datos.tags) && Object.keys(datos.tags).length) {
                const { tags } = datos;

                showTags = tags.map((item, key) => {
                    return (
                        <li className={style["mainContent__tags-list_item"]} key={`mainContent__tags-list_item-${key}`}>
                            <a href={`${process.env.SITE_DOMAIN_URL}${item.slug}` || "#"}>{item.name}</a>
                        </li>
                    );
                });
            }

            if (datos.content_elements && Object.keys(datos.content_elements) && Object.keys(datos.content_elements).length) {
                const { content_elements } = datos;
                const inlivePosition =  data.data.related?.inlive?.position || 0;
                if (content_elements) {
                    let counter_paragraph = 0;
                    content_elements.forEach((item, key) => {
                        newContentElements.push(item);
                        if (key === inlivePosition) {
                            if (inlive !== null) {
                                newContentElements.push(inlive);
                            }
                        }
                        if (item.type == "paragraph") {

                            if (counter_paragraph === 0) {
                                const ads1 = {
                                    _id: "ADSLR01",
                                    type: "ads",
                                    typeAds: slot_tag
                                };
                                newContentElements.push(ads1);
                            }
                            if (counter_paragraph === 2) {
                                const ads2 = {
                                    _id: "ADSLR02",
                                    type: "ads",
                                    typeAds: "videoinread",
                                };
                                newContentElements.push(ads2);
                            }
                            if (counter_paragraph === 4) {
                                const ads2 = {
                                    _id: "ADSLR03",
                                    type: "ads",
                                    typeAds: "inline",
                                };
                                newContentElements.push(ads2);
                            }
                            if (counter_paragraph === 6) {
                                const ads3 = {
                                    _id: "ADSLR04",
                                    type: "ads",
                                    typeAds: "inline2",
                                };
                                newContentElements.push(ads3);
                            }
                            if (counter_paragraph === 8) {
                                const ads4 = {
                                    _id: "ADSLR05",
                                    type: "ads",
                                    typeAds: "Videoinread3",
                                };
                                newContentElements.push(ads4);
                            }
                            counter_paragraph++;
                        }
                    });

                    showContent = (
                        <ContentElement
                            data={newContentElements}
                            amp={false}
                            slug={slug_note}
                            adsPage={adsPage}
                            author={datos?.authors}
                            multimedia={datos?.multimedia}
                        />
                    );
                }
            }

            /* ::::::::::::::::  Logica para mostrar los interLinkig dentro de las notas ::::::::::::::::: */
            const currentSections = datos?.categories;
            const sectionResult = currentSections?.find((category) => category.type === "section" && category.primary === true)?.name;
            const dataRelatedNotes = data?.data?.related?.items ?? [];
            /* VARIABLE PARA INTERLINKING */
            let dataInterlinkingFiltered = [];
            /* NOTAS POR SECCION SPOTLIGHT */
            const interlinkingItems = interlinkingData?.spotlight?.data.section_item;
            /* NOTAS POR RELACIONADOS */
            const relatedNotesFeatured = dataRelatedNotes.filter(related=>related.is_featured).map((element) => ({
                url: element?.slug,
                title: element?.title,
            }))
            /* ARMANDO LÓGICA */
            /* SI TIENE RELACIONADOS */
            if(relatedNotesFeatured.length>0){
                dataInterlinkingFiltered = relatedNotesFeatured;
            } else {
                /* EVALUO SI HAY INFORMACIÓN CON LA CATEGORÍA PRINCIPAL */
                const catMain = datos.categories.find(item=>item.slug.split("/").length==3)
                if(catMain){
                    dataInterlinkingFiltered = interlinkingItems.filter(interlinkingItem => interlinkingItem.section.some(itemCat=>itemCat.slug == catMain?.slug))
                }
                if(dataInterlinkingFiltered.length==0){
                    /* EVALUO SI HAY INFORMACIÓN CON LA CATEGORÍA SECUNDARIA */
                    const catSec = datos.categories.find(item=>item!=catMain);
                    dataInterlinkingFiltered = interlinkingItems.filter(interlinkingItem => interlinkingItem.section.some(itemCat=>itemCat.slug == catSec?.slug))
                }
            }
            /* AGREGO VALIDACIÓN PARA QUE LA NOTA NO SE REPITA Y QUE TOME LOS 3 PRIMEROS ITEMS */
            dataInterlinkingFiltered = dataInterlinkingFiltered.filter(item=>!item.url.includes(data.slug)).slice(0,3)
            showInterlinking = <Interlinking data={dataInterlinkingFiltered} section={sectionResult} />;
            /* :::::::::::::  Fin logica interLinkings:::::::::::::::: */
        }

        showInternal = (
            <div className={style["main__content"]} id="interna_content">
                {/* {type!=='video' &&  showSection} */}
                {type==='video' ?
                <>
                    {dataLiveIsFeatured && dataLiveIsFeatured.length > 0 ? (
                        <LiveFeatured dataLiveIsFeatured={dataLiveIsFeatured} showImage={showImage} dataLive={liveBlogPosting?.live} />
                    ) : (
                        showImage
                    )}
                    <h1 className={style["main__title"]}>{sharedTitle}</h1>
                    {showTeaser}
                    {showInterlinking}

                </>   :
                <>
                    <h1 className={style["main__title"]}>{sharedTitle}</h1>
                    {showTeaser}
                    {showInterlinking}

                    <div className={style["main__author--shared"]}>{showAuthor} <DateNote update_date={data?.update_date} /></div>
                    {dataLiveIsFeatured && dataLiveIsFeatured.length > 0 ? (
                        <LiveFeatured dataLiveIsFeatured={dataLiveIsFeatured} showImage={showImage} dataLive={liveBlogPosting?.live} />
                    ) : (
                        showImage
                    )}
                </> }

                <SlotAds type="Strip" data={adsPage?.ads?.data} />
                <div className={style["content__author--btnshared"]}>
                    <div className={`${style["social-media-group"]} d-flex align-center`}>
                        <BtnShared type="facebook" data={data} variant="primary" />
                        <BtnShared type="whatsapp" data={data} variant="primary" />
                        <BtnShared type="twitter" data={data} variant="primary" />
                        <BtnShared type="googlenews" data={data} variant="label"/>
                    </div>
                </div>
                <div className={style["main__body"]}>{showContent}</div>
                <ul className={style["mainContent__tags-list"]}>{showTags}</ul>
            </div>
        );
    }

    return showInternal;
};

export { MainContent };