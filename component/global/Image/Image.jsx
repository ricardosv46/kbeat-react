import resizePrototype from "/util/resizePrototype";

const newResize = new resizePrototype();

const Image = ({resize, data, title, origin, preload, itemProp, mainImage}) => {

    let showDefault = null;
    let showImage = null;

    let getResizeMobile;
    let getResizeTablet;
    let getResizeDesktop;

    let pathImage = '';
    let altImg = null;
    let titleImg = null;
    let lazyPrueba = {}


    if (resize && Object.keys(resize) && Object.keys(resize).length) {
        if (resize.mobile && resize.mobile.length) {
            getResizeMobile = resize.mobile.split('x');
        }

        if (resize.tablet && resize.tablet.length) {
            getResizeTablet = resize.tablet.split('x');
        } else {
            getResizeTablet = getResizeMobile;
        }

        if (resize.desktop && resize.desktop.length) {
            getResizeDesktop = resize.desktop.split('x');
        }
    }

    if (data && Object.keys(data) && Object.keys(data).length>1) {

        if (data.type === 'image' && data.path && data.path.length) {
            pathImage = data.path;
        } else if(data.type=='video'){
            pathImage = data.data.image_path
        } else if (data.data && Object.keys(data.data) && Object.keys(data.data).length) {
            const {data: datos} = data;

            if (datos.alt && datos.alt.length > 0) {
                altImg = datos.alt;
            } else if (datos.credits && datos.credits.length > 0) {
                altImg = datos.credits;
            }

            if (datos.title && datos.title.length > 0) {
                titleImg = datos.title;
            }
        }

        if(data.amp) {

            if(!data.isAuthor) {
                showDefault = (
                    <div className="larepublica-img-internal__amp">
                        <amp-img
                            alt={altImg || "alt comp__image"}
                            title={altImg || "alt comp__image"}
                            layout="responsive"
                            src={newResize.resizeWapa(pathImage, 276, 152)}
                            width="600"
                            height="292"
                        >
                            <noscript>
                                <img 
                                    src={newResize.resizeWapa(pathImage, 276, 152)}
                                    width="600"
                                    height="292"
                                />
                            </noscript>
                        </amp-img>
                    </div>
                );
            } else {
                showDefault = (
                    <amp-img
                        className="comp__image image-desktop"
                        src={newResize.resizeWapa(pathImage, getResizeTablet[0], getResizeTablet[1])}
                        alt={title || "alt comp__image"}
                        title={title || "title comp__image"}
                        width="57"
                        height="57"
                    />
                )
            }
        }
    } 

    if (!mainImage) {
        lazyPrueba = {
            loading: 'lazy'
        }
    }
    
    showImage = (
        <picture>
            <source media='(min-width:768px)' srcSet={newResize.resizeWapa(pathImage, getResizeDesktop[0], getResizeDesktop[1])}/>
            <source media='(max-width:767px)' srcSet={newResize.resizeWapa(pathImage, getResizeTablet[0], getResizeTablet[1])}/>
            <source media='(max-width:360px)' srcSet={newResize.resizeWapa(pathImage, getResizeMobile[0], getResizeMobile[1])}/>
            <img 
                {...lazyPrueba}
                className='comp_image'
                itemProp={itemProp}
                src={newResize.resizeWapa(pathImage, getResizeDesktop[0], getResizeDesktop[1])}  
                alt={altImg || title}
                title={titleImg || title}
            />
        </picture>
    )

    return (
        <>
            { showDefault 
                ? showDefault
                : showImage
            }
        </>
    )
}

export {Image};