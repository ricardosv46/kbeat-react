import fetchApi from "../services/api/fetchApi";

const WithAmp = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async ({ query }) => {
        const { section, internal } = query;
        const invalidCategories = ["carlincatura", "heduardicidios", "molina"];
        if (internal.length <= 5 && !invalidCategories.includes(section)) {
            let slug_article = `/${section}/${internal.join("/")}`;
            let liveBlogPosting = null;

            const article_interna = await fetchApi("article", {
                slug: slug_article || "",
            });
            if (article_interna.article) {
                const category__article = article_interna?.article?.data?.categories[0]?.name;
                const title__article = article_interna?.article?.metadata_seo?.seo_title;
                const meta = { ...article_interna.article, titleMeta: `${title__article} | ${category__article} | La República` };
                const slugInlive = article_interna?.article?.data?.related?.inlive?.slug;
                if (slugInlive && slugInlive.length > 0) {
                    liveBlogPosting = await fetchApi("live", {
                        slug: slugInlive,
                    });
                    //   console.log("----------liveBlogPosting>>>>---------", liveBlogPosting)
                }
                const interlinkingData = await fetchApi("spotlight", {
                    id: "603825201d5dd56e450b720b",
                    site: "larepublica",
                });


                // consumo de api de cuponidad libero
                const data_offers_today = await fetchApi("third-party", {
                    type: "cuponidad",
                });
                const typePage = "internal_note_amp"
                return {
                    typePage,
                    meta,
                    article_interna,
                    interlinkingData,
                    liveBlogPosting,
                    data_offers_today,
                };
            }
        }
        return { error: 404,
            typePage: "otros" };
    };
    return hocComponent;
};

export default WithAmp;
