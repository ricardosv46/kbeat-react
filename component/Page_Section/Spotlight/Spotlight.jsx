import style from "./Spotlight.module.scss";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const Spotlight = ({ data, bigTitle = false }) => {
    let itemSpotlight = null;

    if (data && Object.keys(data) && Object.keys(data).length > 0) {
        const { isVideo,image, slug, title } = data;        

        itemSpotlight = (
                        <div className="extend-link--outside">
                            <figure className={`${style['spotlight-container']} ${isVideo ? style["video-type"] : ""}`}>
                                <img  
                                    src={newResize.resizeWapa(image, 562,436)}
                                    srcSet={`${newResize.resizeWapa(image, 562, 436)} 562w,${newResize.resizeWapa(image, 800, 536)} 807w,${newResize.resizeWapa(image, 1000, 670)} 1102w,${newResize.resizeWapa(image, 1000, 670)} 1250w`}
                                    sizes="(max-width: 480px) 342px, (max-width: 807px) 633px,(max-width: 1102px) 1100px, 1250px"
                                    decoding="async"
                                    alt={title} 
                                    title={title}
                                    className={`${style["primarySpotlight__image"]}`}
                                />
                            </figure>
                            <a href={slug} className="extend-link">
                                <h2 className={`${style["primarySpotlight__content"]} ${style["primarySpotlight__title"]} ${bigTitle ? style["bigTitle"] : ""}`}>{title}</h2>
                            </a>
                        </div>
                    );
    }
    return itemSpotlight;
}; 

export {Spotlight};
