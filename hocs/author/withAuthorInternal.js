import fetchApi from "services/api/fetchApi";

const WithAuthorInternal = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async ({ query }) => {
        const { author } = query;

        let slug_author = `autor/${author}`;

        const author_data = await fetchApi("author", {
            slug: slug_author,
        });
        const authorId = author_data.author?._id;
        if (authorId) {
            const articlesByAuthor = await fetchApi("articles", {
                author_id: authorId,
                limit: 30,
                order_by: "update_date"
            });

            const columnists = await fetchApi("spotlight", {
                id: "611199493b673143812ee415",
            });

            // const last_article = (columnists?.spotlight?.data?.columnist).find((elem) => elem[0]?._id === authorId);
            // const slug_article = last_article[0]?.last_article?.slug;
            // const article_internal = await fetchApi("article", {
            //     slug: slug_article || "",
            // });
            const newsAtemporal = await fetchApi("spotlight", {
                id: "636bd600dc704f08c155f811",
            });

            const analyticsGral = await fetchApi("external", {
                limit: 30,
            });
            const typePage = "section";
            return {
                typePage,
                author_data,
                articlesByAuthor,
                columnists,
                newsAtemporal,
                analyticsGral,
            };
        }
        return { error: 404,
            typePage: "otros" };
    };
    return hocComponent;
};

export default WithAuthorInternal;
