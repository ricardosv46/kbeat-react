import { useEffect, useState } from "react";
import { Spotlight } from "component/Page_Section/Spotlight/Spotlight";
import { ListSection } from "component/Page_Section/ListSection/ListSection";
import { TagAboutContent } from "component/Page_Tag/TagAboutContent";
import { ShowMoreButton } from "component/global/ShowMoreButton/ShowMoreButton";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import { Moreseen } from "component/Page_Section/Moreseen/Moreseen";
import { TagRelatedContent } from "../TagRelatedContent";
import { TitleSection } from "component/global/TitleSection/TitleSection";
import { getArticlesList } from "helpers/lastNews/lastNews";
import { MgId } from "component/global/Mgid";

export default function MainTagContent({ data, about, adsPage, analyticsGral }) {
    const limit = 24
    const articles = data?.articles?.data.slice(0, limit) || []
    const [tagArticles, setTagArticles] = useState(articles);
    const [numPage, setNumPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [lastPage, setLastPage] = useState(tagArticles.length < limit);
    // console.log({ dataTag, about });

    let descriptionTag = null;
    let dataSpotlight = null;
    let dataList = null;
    let extraTag = null;
    let imageTag = null;
    let tagRelated = null;
    let titleTag = null;

    function handler() {
        const num = numPage + 1
        setNumPage(num)
    }
    useEffect(async function () {
        if (numPage > 1) {
            setLoading(true);
            const params = { tag_slug: about.tag.slug.replace("/tag/", ""), limit, page: numPage, order_by: "update_date" };
            let data = await getArticlesList("articles", params);
            setLastPage(data.length < limit)
            data = data.filter(article => !tagArticles.some(data => data._id == article._id));
            setTagArticles([
                ...tagArticles,
                ...data
            ]);
            setLoading(false);
        }
        return () => null
    }, [numPage])
    if (data && Object.keys(data) && Object.keys(data).length) {
        if (tagArticles && Object.keys(tagArticles) && Object.keys(tagArticles).length > 0) {
            const firstItem = tagArticles.slice(0, 1)[0];
            const imageItem = firstItem?.data?.multimedia?.find(media => media.type === 'image')?.path || firstItem?.data?.multimedia?.find(media => media.type == 'video')?.data?.image_path || process.env.IMAGE_DEFAULT_1250x735;
            dataSpotlight = {
                image: imageItem,
                slug: firstItem?.slug,
                title: firstItem?.title
            }
            dataList = tagArticles.slice(1, tagArticles.length);
        }
    }


    if (about && Object.keys(about) && Object.keys(about).length) {
        const { tag } = about;

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
        <>
            <TitleSection name={`Últimas noticias sobre ${titleTag}`} tag="h1" />
            <TagAboutContent
                imageTag={imageTag}
                titleTag={titleTag}
                descriptionTag={descriptionTag}
            />
            <main className="container__columns">
                <div className="col__content">
                    <Spotlight data={dataSpotlight} />
                    <SlotAds type="Strip" data={adsPage?.ads?.data} />
                    <ListSection data={dataList} adsPage={adsPage} />
                    {!lastPage && <ShowMoreButton loading={loading} onClick={handler} />}
                    <MgId />
                </div>

                <div className="col__content offset-313">
                    <TagRelatedContent data={{ tagRelated, extraTag }} />
                    <SlotAds data={adsPage?.ads?.data} type="Middle" />
                    <Moreseen data={analyticsGral} />
                    <div className="sticky-viewability">
                        <SlotAds data={adsPage?.ads?.data} type="Middle2_Right" />
                    </div>
                </div>
            </main>
        </>
    );
}

export { MainTagContent };
