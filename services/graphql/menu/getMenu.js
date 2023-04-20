import MENU_QUERY from "graphql/queries/menu.query";
import PostQueryApi from "services/api/postQueryApi";

export const getMenu = ({ params }) => {
    if (params.id) {
        /* DEFINO LOS VALORES OBLIGATORIOS */
        const queryParams = {
            _id: params.id,
        };
        const query = /* client
            .query */ PostQueryApi({
            query: MENU_QUERY,
            variables: queryParams,
        }).then((resp) => resp.data);
        return { index: `menu-${JSON.stringify(queryParams)}`, result: query };
    } else {
        throw Error("parameter id is required");
    }
};