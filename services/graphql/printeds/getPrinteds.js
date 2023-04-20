import PRINTEDS_QUERY from "graphql/queries/printeds.query";
import PostQueryApiPrinteds from "services/api/postQueryApiPrinteds";

export const getPrinteds = ({ params }) => {

    if (params.category_slug) {
        const queryParams = {
            category_slug: params.category_slug,
            limit: parseInt(params.limit || 1)
        };
        
        const query = PostQueryApiPrinteds({
            query: PRINTEDS_QUERY,
            variables: queryParams
        }).then(resp => resp.data);
        return { index: `printeds-${JSON.stringify(queryParams)}`, result: query }
    } else {
        throw Error("parameter categorySlug is required");
    }
}