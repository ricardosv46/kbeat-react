const PostQueryApi = (data) => {
    return fetch(process.env.ENDPOINT, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            token_id: process.env.TOKEN_GRAPHQL,
        },
    }).then((response) => response.json());
};

export default PostQueryApi;
