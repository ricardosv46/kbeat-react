const MULTIMEDIA_FRAGMENT = `
  fragment multimediaFragment on ArticleDataType {
    multimedia {
      type
      path
      data {
        type_video
        title
        alt
        source
        image_path
        embed
        credits
      }
    }
  }
`;

export default MULTIMEDIA_FRAGMENT;
