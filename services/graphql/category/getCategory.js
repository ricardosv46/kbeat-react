import SECTION_QUERY from "graphql/queries/section.query";
import LIST_SECTIONS from "graphql/queries/allSection.query";
import PostQueryApi from "services/api/postQueryApi";

/* 
    @route: /api/search/category&slug={params.slug}
    @params: {
        client: aṕolloClient,
        params: {
            slug: String,
        }
    }
*/
export const getCategory = ({ params }) => {
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            slug: params.slug ? "/" + params.slug : "",
        };
        const query = /* client
            .query */ PostQueryApi({
            query: SECTION_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `category-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter slug is required");
    }
};

export const getCategories = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            _limit: parseInt(params.limit),
            _type: "section",
            _parent: null,
        };
        // console.log("queryParams:::::::::::::::::::::::", queryParams);
        const query = /* client
            .query */ PostQueryApi({
            query: LIST_SECTIONS,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `tag-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter slug is required");
    }
};
