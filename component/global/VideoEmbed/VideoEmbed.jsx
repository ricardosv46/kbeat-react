
import { getEmbedCode } from "util/getEmbedCode";
import resizePrototype from "util/resizePrototype";

const VideoEmbed = ({ data, resize }) => {
    const route = data?.path || data?.data?.embed || "";
    const videoSize = resize || "550x310"
    if (route) {
        const thumbnailImage = data.data.image_path;
        const resizedThumbnailImage = new resizePrototype().resizeWapa(thumbnailImage, 550,310)
        const iframeSrc = route.match(/ src=['"][^\'\"]+['"] /g)?.find((val) => val) || route || [];
        let finalRoute = getEmbedCode(
            (iframeSrc || "")
                .replace(/ src=['"]/, "")
                .replace(/['"] /, "")
                .replace("http:", "https:"),
            data.data.type_video
        );
        if (!finalRoute.includes('https')) {
            finalRoute = `https:${finalRoute}`
        }
        return (
            <amp-iframe sandbox="allow-scripts allow-same-origin" src={finalRoute} layout="responsive" width="640" height="360">
                <amp-img layout="fill" src={resizedThumbnailImage} placeholder></amp-img>
            </amp-iframe>
        );
    } else {
        return <span>No se encontró una ruta</span>;
    }
};
export { VideoEmbed };
