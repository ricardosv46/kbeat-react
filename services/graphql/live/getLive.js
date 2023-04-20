import LIVE_QUERY from "graphql/queries/live.query";
import PostQueryApi from "services/api/postQueryApi";

export const getLive = ({ params }) => {
    if (params.slug) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            slug: params.slug || "",
        };
        const query = 
            PostQueryApi({
            query: LIVE_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `live-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter slug is required");
    }
};
