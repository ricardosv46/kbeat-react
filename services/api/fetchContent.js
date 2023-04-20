const fetchContent = async (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch((error) => console.error("Error fetching api", error));
};
export default fetchContent;