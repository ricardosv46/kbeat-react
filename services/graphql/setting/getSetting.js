import SETTING_QUERY from "graphql/queries/setting.query";
import PostQueryApi from "services/api/postQueryApi";

/* 
    @route: /api/search/setting
    @params: {
        client: aṕolloClient,
        params: {
            type: String
        }
    }
*/
export const getSetting = ({ params }) => {
    if (params.type) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            _type: params.type,
        };
        const query = /* client
            .query */ PostQueryApi({
            query: SETTING_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `menu-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter type is required");
    }
};
