const SECTION_QUERY = /* gql */ `
  query section ( $slug: String ) {
    
    category (site_id: "larepublica", slug: $slug, cache: 120) {
      __typename
      _id    
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
      redirect
    }
    
  }
`;

export default SECTION_QUERY;
