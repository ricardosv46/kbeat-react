import resizePrototype from "/util/resizePrototype";
import { imageInternalContainer } from "./ImageMedia.module.scss";
const newResize = new resizePrototype();

const ImageMedia = ({ data, resize, showCredits }) => {
    const pathImage = data.type == "image" ? data.path : data.data.image_path;
    const imageTitle = data.data.title;
    const imageLegend = data.data.source || imageTitle;
    const imageAlt = data.data.title;
    return (
        <div className={imageInternalContainer}>
            <picture>
                <source media="(min-width:768px)" srcSet={newResize.resizeWapa(pathImage, resize.desktop.width, resize.desktop.height)} />
                <source media="(max-width:767px)" srcSet={newResize.resizeWapa(pathImage, resize.tablet.width, resize.tablet.height)} />
                <source media="(max-width:360px)" srcSet={newResize.resizeWapa(pathImage, resize.mobile.width, resize.mobile.height)} />
                <img src={newResize.resizeWapa(pathImage, resize.desktop.width, resize.desktop.height)} alt={imageAlt} title={imageTitle} />
            </picture>
            {showCredits && (
                <div className="image-internal__legend">
                    <span>{imageLegend}</span>
                </div>
            )}
        </div>
    );
};

export { ImageMedia };
