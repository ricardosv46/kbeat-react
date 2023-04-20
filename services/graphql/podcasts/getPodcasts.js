import PODCASTS from "graphql/queries/podcasts.query";
import PostQueryApi from "services/api/postQueryApi";


export const getPodcasts = ({ params }) => {
    const queryParams = {
        _limit: parseInt(params.limit),
        _orderField: params.order_by || "",
    };

    const query = PostQueryApi({
        query: PODCASTS,
        variables: queryParams,
    }).then((resp) => resp.data);
    return { index: `podcasts-${JSON.stringify(queryParams)}`, result: query };
};