import fetchApi from "services/api/fetchApi";

const WithAuthor = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async ({ query }) => {
        const authors = await fetchApi("authors", {
            limit: 30,
        });

        if (authors?.authors?.data?.length === 0) {
            return {
                error: 404,
            };
        }
        const newsAtemporal = await fetchApi("spotlight", {
            id: "636bd600dc704f08c155f811",
        });

        const analyticsGral = await fetchApi("external", {
            limit: 30,
        });
        const typePage = "section"
        return {
            typePage,
            authors,
            newsAtemporal,
            analyticsGral,
        };
    };
    return hocComponent;
};

export default WithAuthor;
