import { GalleryMedia } from "./Gallery/GalleryMedia";
import { ImageMedia } from "./image/ImageMedia";
import { VideoMedia } from "./Video/VideoMedia";
const MainMultimedia = ({
    data,
    size = {
        desktop: 640,
        tablet: 675,
        mobile: 360,
    },
    proportions = [100, 59],
}) => {
    /* CALCULO LA PROPORCION FINAL DEL DIV A TRAVES DEL PROP proportions */
    let paddingDiv = proportions[1] / proportions[0];
    /* VALIDO QUE EL RESULTADO SEA VALIDO */
    if (paddingDiv && typeof paddingDiv == "number") {
        paddingDiv = Math.round(paddingDiv * 100);
    }
    /* APLICO LAS PROPORCIONES A LOS TAMAÑOS BRINDADOS */
    let resizeData = {};
    Object.keys(size).forEach(function (key, index) {
        const height = Math.floor((size[key] * paddingDiv) / 100);
        resizeData[key] = { width: size[key], height };
    });
    let showMedia;
    /* VERIFICO SI ES IMAGEN, VIDEO O GALERIA */
    if (data.length > 0) {
        if (data.length == 1) {
            /* PUEDE SER VIDEO O IMAGEN */
            const currentMedia = data[0];
            if (currentMedia.type == "image") {
                showMedia = <ImageMedia showCredits data={currentMedia} resize={resizeData} />;
            } else if (currentMedia.type == "video") {
                showMedia = <VideoMedia data={currentMedia} resize={resizeData} />;
            }
        } else {
            /* ES GALERIA */
            showMedia = <GalleryMedia data={data} resize={resizeData}/>;
        }
    }
    return (
        <div className="multimedia-container">
            {showMedia}
            <style jsx>{`
                .multimedia-container {
                    background: #ddd;
                    position: relative;
                    padding-top: ${paddingDiv}%;
                    border-radius: 5px;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export { MainMultimedia };
