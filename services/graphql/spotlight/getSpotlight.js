import SPOTLIGHT_QUERY from "graphql/queries/spotlight.query";
import PostQueryApi from "services/api/postQueryApi";
/* 
    @route: /api/search/spotlight&id={params.id}
    @params: {
        client: aṕolloClient,
        params: {
            id: String
        }
    }
*/
export const getSpotlight = ({ params }) => {
    if (params.id) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            spotlightId: params.id,
            site: params.site
        };
        const query = /* client
            .query */ PostQueryApi({
            query: SPOTLIGHT_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `spotlight-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter id is required");
    }
};