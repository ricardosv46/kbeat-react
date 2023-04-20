import LIST_AUTHORS from "graphql/queries/listAuthors.query";
import AUTHOR_QUERY from "graphql/queries/author.query";
import PostQueryApi from "services/api/postQueryApi";


export const getAuthor = ({ params }) => {
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            _authorSlug: params.slug ? "/" + params.slug : "",
        };
        const query = /* client
            .query */ PostQueryApi({
            query: AUTHOR_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `author-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("Parameter slug is required");
    }
};

export const getAuthors = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            _limit: parseInt(params.limit),
            _page: parseInt(params.page),
            _type: params.type
        };
        const query = /* client
            .query */ PostQueryApi(
            {
                query: LIST_AUTHORS,
                variables: queryParams,
            }
        ).then((resp) => resp.data);
        return { index: `authors-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("Parameter limit is required");
    }
};
