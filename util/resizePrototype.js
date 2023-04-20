function resizePrototype() {
}

resizePrototype.prototype.resizeWapa = (srcImage, width, height, originalFormat) => {
    let imgResizeUrl = null;
    if (srcImage && srcImage.includes('https://larepublica.cronosmedia.glr.pe')) {
        imgResizeUrl = `${process.env.CNAME_CRONOS}/${width}x${height}/larepublica${srcImage.replace('https://larepublica.cronosmedia.glr.pe', '').replace('.jpg','.webp')
        }`;
        if(!originalFormat){
            imgResizeUrl = imgResizeUrl.replace('.jpg','.webp')
        } else{
            imgResizeUrl = imgResizeUrl.replace('.webp','.jpg')
        }
    } else if (srcImage && srcImage.includes('https://elpopular.cronosmedia.glr.pe')){
        imgResizeUrl = `${process.env.MASK_IMAGE_EP}/${width}x${height}/elpopular${srcImage.replace('https://elpopular.cronosmedia.glr.pe', '').replace('.jpg','.webp')
        }`;
        if(!originalFormat){
            imgResizeUrl = imgResizeUrl.replace('.jpg','.webp')
        } else{
            imgResizeUrl = imgResizeUrl.replace('.webp','.jpg')
        }
    } else if (srcImage && srcImage.includes('https://lol.cronosmedia.glr.pe')){
        imgResizeUrl = `${process.env.MASK_IMAGE_LOL}/${width}x${height}/lol${srcImage
            .replace("https://lol.cronosmedia.glr.pe", "")
            .replace(".jpg", ".webp")}`;
        if(!originalFormat){
            imgResizeUrl = imgResizeUrl.replace('.jpg','.webp')
        } else{
            imgResizeUrl = imgResizeUrl.replace('.webp','.jpg')
        }
    } else if (srcImage && srcImage.includes('https://libero.cronosmedia.glr.pe')){
        imgResizeUrl = `${process.env.MASK_IMAGE_LB}/${width}x${height}/libero${srcImage.replace('https://libero.cronosmedia.glr.pe', '').replace('.jpg','.webp')
        }`;
        if(!originalFormat){
            imgResizeUrl = imgResizeUrl.replace('.jpg','.webp')
        } else{
            imgResizeUrl = imgResizeUrl.replace('.webp','.jpg')
        }
    } else if (srcImage && srcImage.includes("https://wapa.cronosmedia.glr.pe")) {
        imgResizeUrl = `${process.env.MASK_IMAGE_WP}/${width}x${height}/wapa${srcImage
            .replace("https://wapa.cronosmedia.glr.pe", "")
            .replace(".jpg", ".webp")}`;
        if (!originalFormat) {
            imgResizeUrl = imgResizeUrl.replace(".jpg", ".webp");
        } else {
            imgResizeUrl = imgResizeUrl.replace(".webp", ".jpg");
        }
    } else if (srcImage && srcImage.includes("https://comercial.cronosmedia.glr.pe")) {
        imgResizeUrl = `${process.env.MASK_IMAGE_COMERCIAL}/${width}x${height}/comercial${srcImage
            .replace("https://comercial.cronosmedia.glr.pe", "")
            .replace(".jpg", ".webp")}`;
        if (!originalFormat) {
            imgResizeUrl = imgResizeUrl.replace(".jpg", ".webp");
        } else {
            imgResizeUrl = imgResizeUrl.replace(".webp", ".jpg");
        }
    } else if (srcImage && srcImage.includes("https://perulegal.cronosmedia.glr.pe")) {
        imgResizeUrl = `${process.env.MASK_IMAGE_PERU_LEGAL}/${width}x${height}/perulegal${srcImage
            .replace("https://perulegal.cronosmedia.glr.pe", "")
            .replace(".jpg", ".webp")}`;
        if (!originalFormat) {
            imgResizeUrl = imgResizeUrl.replace(".jpg", ".webp");
        } else {
            imgResizeUrl = imgResizeUrl.replace(".webp", ".jpg");
        }
    } else {
        imgResizeUrl = srcImage;
    }
    return imgResizeUrl;
}

export default resizePrototype;