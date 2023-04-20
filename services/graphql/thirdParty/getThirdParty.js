export const getThirdParty = ({ params }) => {
    let fetchData;
    if (params.type) {
        const { type } = params;
        if (type == "cuponidad") {
            const API_CUPONIDAD = process.env.ENDPOINT_CUPONIDAD;
            const API_TOKEN = process.env.TOKEN_CUPONIDAD;

            const options = {
                method: "GET",
                headers: { token_id: API_TOKEN, "Content-Type": "application/json" },
            };
            fetchData = fetch(API_CUPONIDAD, options).then((response) => response.json());
        }
        if (fetchData) {
            return { index: `third-party-${type}`, result: fetchData };
        }else{
            throw Error("No third party founded");
        }
    } else {
        throw Error("parameter slug is required");
    }
};
