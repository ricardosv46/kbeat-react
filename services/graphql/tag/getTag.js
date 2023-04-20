import TAG_QUERY from "graphql/queries/tag.query";
import TAGS_QUERY from "graphql/queries/allTags.query";
import PostQueryApi from "services/api/postQueryApi";

export const getTag = ({ params }) => {
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            tagSlug: params.slug ? "/tag/" + params.slug : "",
        };
        // console.log("queryParams:::::::::::::::::::::::", queryParams);
        const query = /* client
            .query */ PostQueryApi({
            query: TAG_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `tag-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter slug is required");
    }
};
export const getTags = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            _limit: parseInt(params.limit),
        };
        // console.log("queryParams:::::::::::::::::::::::", queryParams);
        const query = /* client
            .query */ PostQueryApi({
            query: TAGS_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        // console.log("query:::::::::::::::", query);
        return { index: `tag-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter slug is required");
    }
};
