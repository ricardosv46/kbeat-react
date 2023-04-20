import ALL_ADS_QUERY from "graphql/queries/ads.query";
import PostQueryApi from "services/api/postQueryApi";

export const getAds = ({ params }) => {
    if (params.limit) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            _limit: parseInt(params.limit),
        };
        const query = /* client
            .query */ PostQueryApi(
            {
                query: ALL_ADS_QUERY,
                variables: queryParams,
            },
        ).then((resp) => resp.data);
        return { index: `ads-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter limit is required");
    }
};