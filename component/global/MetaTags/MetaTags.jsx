import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const MetaTags = ({ data, internal, internalAmp }) => {
    const META_TITLE = data?.data_title;
    const META_KEYWORDS = data?.meta_keywords;
    const META_DESCRIPTION = data?.meta_description || `Notas escritas por ${META_TITLE}`;
    const META_IMAGE = data?.meta_img || "";
    const META_URL = data?.meta_slug;
    const META_TYPE = data?.meta_type || "website";
    const ARTICLE_CATEGORY = data?.category_slug;
    const SOCIAL_TITLE = data?.social_title || META_TITLE;
    /* const ID_ARTICLE = data?.id_article; */
    const NAME_SECTION = data?.category_name;

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {internal && (
                <>

                    <link
                        rel="alternate"
                        type="application/rss+xml"
                        href={process.env.SITE_DOMAIN_URL + "/rss" + ARTICLE_CATEGORY + ".xml"}
                    />
                </>
            )}
            {(internalAmp || internal) ? <meta name="robots" content="max-image-preview:large" /> : <meta name="robots" content="index,follow" />}
            <meta name="googlebot" content="index, follow" />
            <meta name="description" content={META_DESCRIPTION} />
            {data?.meta_author && <meta name="author" content={data.meta_author} />}
            <meta name="keywords" content={META_KEYWORDS} />
            <meta name="news_keywords" content={META_KEYWORDS} />
            <meta name="theme-color" content="#E00109" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <link rel="apple-touch-icon" sizes="180x180" href={process.env.IMG_32x32} />
            <link rel="icon" type="image/png" sizes="32x32" href={process.env.IMG_32x32} />
            <link rel="icon" type="image/png" sizes="16x16" href={process.env.IMG_16x16} />
            <link rel="mask-icon" href="https://cdn.larepublica.pe/safari-pinned-tab.svg" color="#fe0001" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={`@${process.env.SITE_TWITTER_ACCOUNT}`} />
            <meta name="twitter:title" content={META_TITLE} />
            <meta name="twitter:description" content={META_DESCRIPTION} />
            <meta property="twitter:image" content={newResize.resizeWapa(META_IMAGE, 1200, 660, true)} />
            <meta property="fb:pages" content={process.env.KEY_FB_PAGE} />
            <meta property="fb:app_id" content={process.env.KEY_FB_APP_ID} />
            <meta property="og:type" content={META_TYPE} />
            {NAME_SECTION && <meta name="og:category" content={NAME_SECTION} />}
            <meta property="og:url" content={`${process.env.SITE_DOMAIN_URL}${META_URL || ""}`} />
            <meta property="og:title" content={SOCIAL_TITLE} />
            <meta property="og:description" content={META_DESCRIPTION || ""} />
            <meta property="og:image" content={newResize.resizeWapa(META_IMAGE, 1200, 660, true)} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="660" />
        </>
    );
};

export { MetaTags };
