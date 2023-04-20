const META_SECTION = `
query MetaSection ( $_slug: String ) {
    
    metaSection : category (site_id: "libero", slug: $_slug, status: 1, cache: 300) {
      type
      name
      slug
      site {
        _id
        name
        domain
      }
      metadata_seo {
        keywords
        seo_title
        seo_description
      }
      metadata {
        key
        value
      }
    }
}
`;

export default META_SECTION;
