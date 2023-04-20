const getEmbedCode = (path, type, size) => {
    if(!!path) {
        //VALIDATE FACEBOOK
        if (type == "facebook") {
            if (path.includes("facebook")) {
                return (
                    "https://www.facebook.com/plugins/video.php?href=" +
                    encodeURIComponent(path) +
                    (size?.width && !size.width.includes("%") ? "&width=" + size.width + "&height=" + size.height : "") +
                    "&show_text=false&appId"
                );
            }
            return "";
        }
        //VALIDATE YOUTUBE
        if (type == "youtube") {
            if (path.includes("/embed/")) {
                return path;
            }
            //www.youtube.com/watch?v=r4avGGxW3TE
            if (path.includes("/watch?")) {
                return "https://www.youtube.com/embed/" + path.split("?v=")[1]?.split("&")[0];
            }
            if (path.includes("https://youtu.be/")) {
                return "https://www.youtube.com/embed/" + path.split("youtu.be/")[1];
            }
            return "";
        }
        /* VALIDATE OTHER CASES */
        else if (type == "mediastream" || type == "jwplayer" ||  type=="embed") {
            return path;
        }
    }
    return "";
};
export { getEmbedCode };
