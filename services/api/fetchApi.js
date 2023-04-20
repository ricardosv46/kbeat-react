/* 
    @params:
        entity: (ads. article, artices, author, authors, category, tag, spotlght, menu, setting, meta, external)
        params: ...others params (params used for query)
*/
const fetchApi = async (entity, params) => {
    const ROOT_APP = process.env.SITE_DOMAIN_URL;
    const parseParams = Object.keys(params)
        .map(
            (key_param) =>
                `${encodeURIComponent(key_param)}=${encodeURIComponent(
                    params[key_param]
                )}`
        )
        .join("&");
    return fetch(`${ROOT_APP}/api/search/${entity}?${parseParams}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((resp) => resp.json())
        .catch((error) => console.error("Error fetching api", error));
};
export default fetchApi;
