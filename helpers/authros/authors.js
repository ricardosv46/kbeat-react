import fetchApi from "services/api/fetchApi";

export const getDataAuthors = async (limit, page) => {
    try {
        const authors = await fetchApi("authors", {
            limit,
            page,
        });
        if (authors?.authors?.data?.length === 0) {
            return {
                error: 404,
            };
        }
        return {
            authors,
        };
    } catch (err) {
        console.log("error", err);
    }
};

export const getDataAuthor = async (limit, page, author_id) => {
    const author = await fetchApi("articles", {
        limit,
        page,
        author_id,
        order_by: "update_date"
    });
    if (authors?.authors?.data?.length === 0) {
        return {
            error: 404,
        };
    }
    return {
        author,
    };
};

export const getDataArticlesByAuthor = async (limit, page, author_id) => {
    const articles = await fetchApi("articles", {
        limit,
        page,
        author_id,
        order_by: "update_date"
    });
    if (articles?.articles?.data?.length === 0) {
        return {
            error: 404,
        };
    }
    return {
        articles,
    };
};
