import META from "graphql/queries/meta.query";
import PostQueryApi from "services/api/postQueryApi";
/* 
    @route: /api/search/meta
    @params: {
        client: aṕolloClient,
    }
*/
export const getMeta = () => {
    const query = /* client
        .query */ PostQueryApi({
        query: META,
    }).then((resp) => resp.data);
    return { index: `meta-aweita`, result: query };
};
