const resizeImage = (srcImage, width, height) => {
  let imgResizeUrl = null;

  if (srcImage && srcImage.includes("https://elpopular.cronosmedia.glr.pe")) {
    imgResizeUrl = `${
      process.env.CNAME_CRONOS
    }/${width}x${height}/elpopular${srcImage
      .replace("https://elpopular.cronosmedia.glr.pe", "")
      .replace(".jpg", ".webp")}`;
  } else if (srcImage?.includes("https://www.elpopular.pe")) {
    imgResizeUrl = `${
      process.env.CNAME_CRONOS
    }/${width}x${height}/elpopular/migration${srcImage
      .replace("https://www.elpopular.pe", "")
      .replace(".jpg", ".webp")}`;
  } else if (srcImage?.includes("https://glr-cronos-sites.s3.amazonaws.com")) {
    imgResizeUrl = `${
      process.env.CNAME_CRONOS
    }/${width}x${height}${srcImage
      .replace("https://glr-cronos-sites.s3.amazonaws.com", "")
      .replace(".jpg", ".webp")}`;
  } else {
    imgResizeUrl = `https://imgmedia.elpopular.pe/${width}x${height}/elpopular/original/2020/02/05/placeholder.png`;
  }

  return imgResizeUrl;
};

export default resizeImage;
