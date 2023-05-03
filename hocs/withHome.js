import fetchApi from "services/api/fetchApi";
import fetchContent from "services/api/fetchContent";
import { transform } from "util/transformData";

const WithHome = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {

        const metaSite = await fetchApi("meta", {});

        const newsSociety = await fetchApi("articles", {
            category_slug: "sociedad",
            limit: 9,
            view: "home",
        });
        const mainGrid = await fetchApi("articles", {
            category_slug: "cine-series/peliculas",
            limit: 7,
            view: "home",
        });
        const newsWorld = await fetchApi("articles", {
            category_slug: "mundo",
            limit: 5,
            view: "home",
        });
        const newsSports = await fetchApi("articles", {
            category_slug: "deportes",
            limit: 4,
            view: "home",
        });
        const newsMovies = await fetchApi("articles", {
            category_slug: "cine-series/peliculas",
            limit: 4,
            view: "home",
        });

        // const mainGrid = await fetchApi("spotlight", {
        //     id: "603825201d5dd56e450b720b",
        // });




        const typePage = "home";
        return {
            typePage,
            metaSite,
            newsSociety,
            newsWorld,
            newsSports,
            newsMovies,
            mainGrid
        };
    };

    return hocComponent;
};

export default WithHome;
