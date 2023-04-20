const getId = (url, type) => {
    let id = "";
    if (type == "youtube") {
        if (url.includes("/embed/")) {
            return url.split("/embed/")[1].split("/")[0].split("?")[0];
        }
        //www.youtube.com/watch?v=r4avGGxW3TE
        if (url.includes("/watch?")) {
            const parameters = url.split("watch?")[1];
            parameters.split("&").forEach((item) => {
                const paramater = item.split("=");
                if (paramater[0] == "v") {
                    id = paramater[1];
                }
            });
        }
        if (url.includes("https://youtu.be/")) {
            id = url.split("youtu.be/")[1].split("/")[0].split("?")[0];
        }
    } else if (type == "mediastream") {
        id = url.split("mdstrm.com/embed/")[1]?.split("?")[0];
    }
    return id;
};
const getEmbedUrl = function (videoId, type) {
    let embed = "";
    if (type == "youtube") {
        embed = `https://www.youtube.com/embed/${videoId}/`;
    }
    return embed;
};
const getUrl = function (videoId, type) {
    let content = "";
    /* if (type == "mediastream") {
        content = `https://mdstrm.com/video/${videoId}.mp4`;
    } */
    return content;
};
const getThumbnail = function (videoId, type) {
    let thumbnail = "";
    if (type == "youtube") {
        thumbnail = `https://i3.ytimg.com/vi/${videoId}/0.jpg`;
    }/*  else if (type == "mediastream") {
        thumbnail = `https://thumbs.cdn.mdstrm.com/thumbs/${videoId}.jpg`;
    } */
    return thumbnail;
};
const getDataMedia = function (url = "") {
    if(url){
        let type;
        if (url.includes("youtu.be") || url.includes("www.youtube.com")) {
            type = "youtube";
        } else if (url.includes("mdstrm.com")) {
            type = "mediastream";
        }
        const videoId = getId(url, type);
        return {
            id: videoId,
            thumbnailUrl: getThumbnail(videoId, type),
            contentUrl: getUrl(videoId, type),
            embedUrl: getEmbedUrl(videoId, type) || url,
        };
    }
};

export { getDataMedia };