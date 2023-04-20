const fetchContentOptions = (url, isAbsolute = false, options) => {
    let fetchingRoute;
    if (!isAbsolute) {
        fetchingRoute = process.env.SITE_DOMAIN_URL + url;
    } else {
        fetchingRoute = url;
    }
    const response = fetch(fetchingRoute, options)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    return response;
};

export { fetchContentOptions };
