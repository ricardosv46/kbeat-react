import { AmpLayout } from "Layouts/AmpLayout";
import { ContentElement } from "component/Page_Internal/ContentElement/index";

import WithAmp from "../../../hocs/withAMP";
import { HeaderAmp } from "component/global/Header/HeaderAmp/HeaderAmp";
import { AlertaWebAMP } from "component/global/AlertWeb/amp/amp";
import { convertirFecha } from "../../../util/convertirFecha";
import { Author } from "component/Page_Internal/Author/Author";
import { Interlinking } from "component/Page_Internal/Interlinking/Interlinking";
import { OffersToday } from "component/Page_Internal/OffersToday/OffersToday";

import resizePrototype from "util/resizePrototype";
import { AmpSlotAds } from "component/global/AdsManager/AmpSlotAds/AmpSlotAds";

//import ListInterest from ".components/page_internal/listInterest";
//import GalleryNoteVertical from "components/page_internal/galleryNoteVertical";
import { LiveFeatured } from "component/Page_Internal/LiveFeatured/LiveFeatured";
import { TaboolaAMP } from "component/global/TaboolaAmp/TaboolaAmp";
import { VideoMedia } from "component/Page_Internal/MainMultimedia/Video/VideoMedia";

export const config = { amp: true };

const newResize = new resizePrototype();

const InternaAmp = (props) => {
    const {
        meta,
        article_interna,
        mainMenu,
        topicsMenu,
        adsPage,
        firstAlertWeb,
        secondAlertWeb,
        liveBlogPosting,
        sectionName,
        videoRelated,
        interlinkingData,
        data_offers_today,
    } = props;

    let showContent = null;
    let showCategory = null;
    let showTags = null;
    let showTitle = null;
    let showTeaser = null;
    let showImage = null;
    let showAuthor = null;
    let legendImage = null;
    let data_title;
    let author__name;
    let user__name;
    let author__date;
    let dataSeo;
    let showInterlinking;
    let social_title;
    let meta_keywords;
    let meta_description;
    let meta_url;
    let meta_img;
    let id_article;
    let meta_article_tags = [];
    let meta_article_sections = [];
    let categoryName = "Archivo";
    let categorySlug = "/archivo";
    let last_updated_date;
    let typeImg;
    let typeVideo;
    let inlive = null;
    let videoRelatedArticle, img_path;
    let liveIsFeaturedTrue = [];


    // const isNoteGallery = article_interna?.article?.type === "gallery";

    if (article_interna && Object.keys(article_interna) && Object.keys(article_interna).length) {
        const { article } = article_interna;
        if (article && Object.keys(article) && Object.keys(article).length) {
            // console.log(">>>> article data tags--->: ", article.data.tags);
            // console.log(">>>> Dataaaa--article : ", article.data);
            // console.log(">>>> --article--: ", article);

            id_article = article.id_article;
            author__date = article.update_date;
            last_updated_date = article.date;
            if(article.data?.categories?.length>0){
                const {categories} = article.data;
                const firstCategories = categories[0]?.slug.split("/")[1];
                const categoryFiltered =
                    categories.find((item) => item?.slug?.endsWith(firstCategories)) || categories[0];
                if(categoryFiltered){
                    categoryName = categoryFiltered.name;
                    categorySlug = categoryFiltered.slug
                }
            }
            showCategory = (
                <div className="internalBadge">
                    <span className="comp__badges badge__left"><a href={categorySlug}>{categoryName}</a></span>
                </div>
            );

            if (article.title && article.title.length) {
                showTitle = <h1 className="title__internal">{article.title}</h1>;
                data_title = article.title || "title-none";
            }
            social_title = data_title
            if (article.metadata_redes?.title?.length>0){
                social_title = article.metadata_redes.title
            }
            if (article.slug && article.slug.length) {
                meta_url = article.slug || "slug-none";
            }

            if (article.metadata_seo && Object.keys(article.metadata_seo) && Object.keys(article.metadata_seo).length) {
                const { metadata_seo } = article;

                if (metadata_seo.keywords && metadata_seo.keywords.length) {
                    meta_keywords = metadata_seo.keywords;
                }


                if (metadata_seo.seo_description && metadata_seo.seo_description.length) {
                    meta_description = metadata_seo.seo_description;
                }
            }
            if (article.user && Object.keys(article.user) && article.user.username) {
                user__name = article.user.username;
            }

            if (article.data && Object.keys(article.data) && Object.keys(article.data).length) {
                const { data } = article;

                /* ::::::::::::::::  Logica para mostrar los interLinkig dentro de las notas ::::::::::::::::: */
                const currentSections = data?.categories;
                const sectionResult = currentSections?.find((category) => category.type === "section" && category.primary === true)?.name;
                const dataRelatedNotes = data?.related?.items ?? [];
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
                    const catMain = data.categories.find(item=>item.slug.split("/").length==3)
                    if(catMain){
                        dataInterlinkingFiltered = interlinkingItems.filter(interlinkingItem => interlinkingItem.section.some(itemCat=>itemCat.slug == catMain?.slug))
                    }
                    if(dataInterlinkingFiltered.length==0){
                        /* EVALUO SI HAY INFORMACIÓN CON LA CATEGORÍA SECUNDARIA */
                        const catSec = data.categories.find(item=>item!=catMain);
                        dataInterlinkingFiltered = interlinkingItems.filter(interlinkingItem => interlinkingItem.section.some(itemCat=>itemCat.slug == catSec?.slug))
                    }
                }
                /* AGREGO VALIDACIÓN PARA QUE LA NOTA NO SE REPITA Y QUE TOME LOS 3 PRIMEROS ITEMS */
                dataInterlinkingFiltered = dataInterlinkingFiltered.filter(item=>!item.url.includes(data.slug)).slice(0,3)
                showInterlinking = <Interlinking amp data={dataInterlinkingFiltered} section={sectionResult} />;
                /* :::::::::::::  Fin logica interLinkings:::::::::::::::: */

                if (videoRelated) {
                    const currentSectionSlug = data?.categories?.find((category) => category.primary)?.slug;
                    videoRelatedArticle = videoRelated?.spotlight?.data?.section_video_item.find((videoRelatedItem) =>
                        videoRelatedItem.section.find((section_item) => section_item.slug == currentSectionSlug)
                    );
                }
                // console.log("data.authors-----------",data.authors)
                showAuthor = <div className="container_author_time">
                                <Author amp={true} data={article} subText='Por: '/>
                                <time dateTime={convertirFecha(author__date?.split(" ").join("T"), "iso-2")} className="author__date">
                                    {convertirFecha(author__date?.split(" ").join("T"), "short")}
                                </time>
                            </div>

                if (data.multimedia && Object.keys(data.multimedia) && Object.keys(data.multimedia).length) {
                    const { multimedia } = data;

                    typeImg = multimedia.filter((item) => item.type === "image");
                    typeVideo = multimedia.find((item) => item.type === "video");
                    const lengthTypeImg = typeImg?.length;

                    if (typeVideo && typeVideo.length > 1) {
                        showImage = "TYPE VIDEO - MULTI-IMAGE";
                    } else if (typeVideo /*  && typeVideo.length === 1 */) {
                        meta_img = newResize.resizeWapa(typeVideo.data.image_path, 1200, 660);
                        img_path = meta_img;
                        showImage = (
                            <div className="larepublica-img-internal__amp">
                                <VideoMedia data={typeVideo} amp={true} />
                            </div>
                        );

                        if (typeVideo && typeVideo.data && typeVideo.data.title) {
                            const { data: datos } = typeVideo;
                            //console.log('>>> datos - typeImg[0] : ',datos);

                            if (datos.title && datos.credits && datos.source) {
                                legendImage = (
                                    <div className="container__legend-internal">
                                        <span className={`legend__text`}>{`${datos.title} | ${datos.credits} | ${datos.source}`}</span>
                                    </div>
                                );
                            } else if (datos.title && datos.credits) {
                                legendImage = (
                                    <div className="container__legend-internal">
                                        <span className={`legend__text`}>{`${datos.title} | ${datos.credits}`}</span>
                                    </div>
                                );
                            } else if (datos.title) {
                                legendImage = (
                                    <div className="container__legend-internal">
                                        <span className={`legend__text`}>{`${datos.title}`}</span>
                                    </div>
                                );
                            }
                        } else {
                            legendImage = (
                                <div className="container__legend-internal">
                                    <span className={`legend__text`}>{`${data.teaser}`}</span>
                                </div>
                            );
                        }
                    } else if (typeImg && typeImg.length > 1) {
                        //console.log('>>>> NOTA-GALERIA - TYPE IMAGE : ',typeImg);
                        //showImage = <GalleryNote resize={resizeImage} data={typeImg}/>;
                        img_path = typeImg[0]?.path || process.env.IMAGE_DEFAULT_1250x735;
                        meta_img = newResize.resizeWapa(img_path, 1200, 660);

                        showImage = (
                            <>
                                <amp-carousel width="500" height="294" layout="responsive" controls type="slides">
                                    {typeImg.map((item, key) => {
                                        return (
                                            <div style={{margin:'0 -16px'}} className="larepublica-carousel-img" key={`item-carousel-amp-${key}`}>
                                                <amp-img
                                                    src={newResize.resizeWapa(item?.path || process.env.IMAGE_DEFAULT_1250x735, 500, 294)}
                                                    width="500"
                                                    height="294"
                                                    layout="responsive"
                                                    alt={item.data.alt || "larepublica.pe"}
                                                    title={item.data.title || "larepublica.pe"}
                                                />
                                            </div>
                                        );
                                    })}
                                </amp-carousel>
                            </>
                        );
                    } else if (typeImg && typeImg.length === 1) {
                        //console.log('>>>> NOTA NORMAL - TYPE IMAGE : ',typeImg);
                        img_path = typeImg[0]?.path || process.env.IMAGE_DEFAULT_1250x735;
                        meta_img = newResize.resizeWapa(img_path, 1200, 660);

                        showImage = (
                            <div className="larepublica-img-internal__amp">
                                <amp-img
                                    alt={typeImg[0].data.alt || "larepublica.pe"}
                                    title={typeImg[0].data.title || "larepublica.pe"}
                                    layout="responsive"
                                    src={newResize.resizeWapa(img_path, 500, 294)}
                                    width="500"
                                    height="294"
                                ></amp-img>
                            </div>
                        );

                        if (typeImg[0] && typeImg[0].data && typeImg[0].data.title) {
                            const { data: datos } = typeImg[0];
                            //console.log('>>> datos - typeImg[0] : ',datos);

                            if (datos.title && datos.credits && datos.source) {
                                legendImage = (
                                    <div className="container__legend-internal">
                                        <span className={`legend__text`}>{`${datos.title} | ${datos.credits} | ${datos.source}`}</span>
                                    </div>
                                );
                            } else if (datos.title && datos.credits) {
                                legendImage = (
                                    <div className="container__legend-internal">
                                        <span className={`legend__text`}>{`${datos.title} | ${datos.credits}`}</span>
                                    </div>
                                );
                            } else if (datos.title) {
                                legendImage = (
                                    <div className="container__legend-internal">
                                        <span className={`legend__text`}>{`${datos.title}`}</span>
                                    </div>
                                );
                            }
                        } else {
                            legendImage = (
                                <div className="container__legend-internal">
                                    <span className={`legend__text`}>{`${data.teaser}`}</span>
                                </div>
                            );
                        }
                    }
                }

                if (
                    liveBlogPosting &&
                    liveBlogPosting.live &&
                    Object.keys(liveBlogPosting.live) &&
                    Object.keys(liveBlogPosting.live).length
                ) {
                    const { live } = liveBlogPosting;
                    if (live && Object.keys(live) && Object.keys(live).length) {
                        inlive = {
                            ...live,
                            type: "inlive",
                            description: data.teaser,
                            image: data.multimedia
                        };
                        liveIsFeaturedTrue = live?.data?.content_elements?.filter((item) => item?.is_featured === true);
                    }
                }
                
                if (data.content_elements && Object.keys(data.content_elements) && Object.keys(data.content_elements).length) {
                    const inlivePosition = data.related?.inlive?.position || 0;
                    const { content_elements } = data;
                    let dataBody = [];
                    let paragraph_counter = 0;
                    content_elements.forEach((item, key) => {
                        dataBody.push(item);
                        if (inlivePosition === key) {
                            if (inlive !== null) {
                                dataBody.push(inlive);
                            }
                        }
                        if (item.type == "paragraph") {
                            
                            if (paragraph_counter === 0) {
                                const ads1 = {
                                    data: adsPage,
                                    type: "ads",
                                    ads_type: "amp_Top",
                                    section: `${sectionName}`,
                                };
                                dataBody.push(ads1);
                            }
                            if (paragraph_counter === 2) {
                                const ads2 = {
                                    data: adsPage,
                                    type: "ads",
                                    ads_type: "amp_flying",
                                    sectionName: `${sectionName}`,
                                };
                                dataBody.push(ads2);
                            }
                            if (paragraph_counter === 4) {
                                const ads2 = {
                                    data: adsPage,
                                    type: "ads",
                                    ads_type: "amp_Videoinread",
                                    sectionName: `${sectionName}`,
                                };
                                dataBody.push(ads2);
                            }
                            if (paragraph_counter === 6) {
                                const ads3 = {
                                    data: adsPage,
                                    type: "ads",
                                    ads_type: "amp_inline",
                                    sectionName: `${sectionName}`,
                                };
                                dataBody.push(ads3);
                            }

                            if (paragraph_counter === 7) {
                                const ads4 = {
                                    data: adsPage,
                                    type: "ads",
                                    ads_type: "amp_inline2",
                                    sectionName: `${sectionName}`,
                                };
                                dataBody.push(ads4);
                            }
                            paragraph_counter++;
                        }
                    });

                    showContent = <ContentElement amp slug={meta_url} data={dataBody} adsPage={adsPage || []} />;
                }

                if (data.tags && Object.keys(data.tags) && Object.keys(data.tags).length) {
                    const { tags } = data;

                    meta_article_tags = tags;

                    showTags = tags.map((item, key) => {
                        return (
                            <li className="tags-item__internal tags__item" key={`item-tagsInternal-${key}`}>
                                <a className="tags-item-link" href={item.slug}>
                                    {item.name}
                                </a>
                            </li>
                        );
                    });
                }

                if (data.teaser_html && data.teaser_html.length) {
                    let teaserContent =data.teaser_html
                    if(teaserContent.startsWith("<p>") && teaserContent.endsWith("</p>")){
                        teaserContent = teaserContent.split("<p>").filter(value=>value).join("<p>").split("</p>").filter(value=>value).join("</p>");
                    }
                    showTeaser = <h2 className="teaser__internal" dangerouslySetInnerHTML={{ __html: teaserContent }} />;
                    meta_description = data.teaser;
                }
            }

            dataSeo = {
                data_title: data_title || "",
                meta_keywords: meta_keywords || "",
                meta_description: meta_description || "",
                meta_type: "article",
                meta_img: img_path,
                meta_slug: meta_url,
                id_article: id_article,
                meta_author: "por definir",
                author_name: author__name,
                user_name: user__name,
                meta_article_sections: meta_article_sections,
                meta_article_tags: meta_article_tags || "",
                category_name: categoryName,
                created_at: last_updated_date,
                social_title
            };
        }
    }



    const socialMedia = (
        <div className="shared__container">
            <p className="compatir">Compartir: </p>
            <amp-social-share className="shared__fb" type="facebook" data-param-app_id="489210501129201" height="35" width="35" />
            <amp-social-share
                className="shared__wsp"
                type="whatsapp"
                data-param-text={`${data_title} - ${process.env.SITE_DOMAIN_URL}${meta_url}`}
                width="35"
                height="35"
            />
            <amp-social-share
                className="shared__tw"
                type="twitter"
                data-param-text={`${data_title} | larepublica`}
                data-param-via="larepublica_pe"
                height="35"
                width="35"
            />
            <a
                className="amp-shared__googlenews"
                aria-label={`Síguenos en Google News`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://news.google.com/publications/CAAqBwgKMP6OigMwlqo8?hl=es-419&amp;gl=PE&amp;ceid=PE:es-419"
            >
                <amp-img
                    alt={"icon-shared-googlenews"}
                    src="/static/lr/google_news_white.svg"
                    width="20"
                    height="20"
                    className="shared__googlenews"
                />
            </a>
        </div>
    );

    return (
        (article_interna?.article && (
            <AmpLayout data={dataSeo} dataSchema={article_interna?.article} sectionName={sectionName} title={meta.titleMeta}>
                <HeaderAmp data={mainMenu} topicsMenu={topicsMenu} firstAlertWeb={firstAlertWeb} secondAlertWeb={secondAlertWeb} />
                <div className="container__amp-internal">
                    
                    <div className="content__amp">
                        <AmpSlotAds section={sectionName} data={adsPage?.ads?.data} type="amp_Sticky" />
                        <div className="mainContent__tags">{showCategory}</div>
                        {showTitle}
                        {showTeaser}
                        {showInterlinking}
                        {showAuthor}
                        {liveIsFeaturedTrue && liveIsFeaturedTrue.length > 0 ? (
                            <LiveFeatured
                                dataLiveIsFeatured={liveIsFeaturedTrue}
                                showImage={showImage}
                                amp={true}
                                legendImage={legendImage}
                                dataLive={liveBlogPosting?.live}
                            />
                        ) : (
                            showImage
                        )}

                        {liveIsFeaturedTrue?.length === 0 && legendImage}
                        <AmpSlotAds section={sectionName} data={adsPage?.ads?.data} type="amp_Strip" />
                        <div className="content--autor-btnsm">
                            
                            {socialMedia}
                        </div>
                        <div className="container__body-amp">
                            {showContent}
                        </div>
                        <div className="mainContent__tags_list">
                            <ul className="mainContent__tags-list">{showTags}</ul>
                        </div>
                       
                        
                        <TaboolaAMP />
                    </div>
                </div>
            </AmpLayout>
        )) ||
        null
    );
};

export default WithAmp(InternaAmp);
