import EXTERNAL_QUERY from "../../../graphql/queries/external.query";
import PostQueryApi from "../../api/postQueryApi";
/* 
    @route: /api/search/external&limit={params.limit}
    @params: {
        client: aṕolloClient,
        params: {
            limit: String to Int,
            tag_slug: String,
            category_slug: String
        }
    }
*/
export const getExternal = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            tagSlug: params.tag_slug ? "/tag/" + params.tag_slug : "",
            limit: parseInt(params.limit),
            category_slug: params.category_slug ? "/" + params.category_slug : "",
        };
        const query = /* client
            .query */ PostQueryApi({
            query: EXTERNAL_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `external-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter limit is required");
    }
};
