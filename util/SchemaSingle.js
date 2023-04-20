import Head from "next/head";
import { convertMediumDateTwo } from "./convertMediumDateTwo";
import { getDataMedia } from "./getDataMedia";
import resizePrototype from "./resizePrototype";
const newResize = new resizePrototype();

const SchemaSingle = ({ type, data, generalData }) => {
    const urlVideo =
        data?.path ||
        (
            data?.data?.embed?.match(/(?<= src=['"]).*?(?=[\?'"])/) &&
            data?.data?.embed?.match(/(?<= src=['"]).*?(?=[\?'"])/)[0] ||
            ""
        );
    let schemaObject = {
        "@context": "https://schema.org/",
    };
    if (type == "video") {
        const thumbnail = 
                data?.data?.image_path || 
                generalData.data?.multimedia?.find(media=>media.type=='image')?.path || 
                generalData.data?.multimedia?.find(media=>media.type=='video')?.data?.image_path
        const mediaInfo = getDataMedia(urlVideo)
        schemaObject = {
            ...schemaObject,
            "@type": "videoObject",
            name: data?.data?.title || generalData.title || "",
            thumbnailUrl: mediaInfo.thumbnailUrl || newResize.resizeWapa(thumbnail, 1200, 660, true),
            description: data?.data?.alt || generalData.data.teaser || generalData.title || "",
            uploadDate: convertMediumDateTwo(generalData.update_date),
            contentUrl: mediaInfo.contentUrl,
            embedUrl: mediaInfo.embedUrl || urlVideo,
            duration: "PT3M1S",
        };
    }
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaObject),
                }}
            />
        </Head>
    );
};
export default SchemaSingle;
