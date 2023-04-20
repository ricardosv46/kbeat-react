const AUTHOR_QUERY = `
  query Author($_authorSlug: String) {
    author(site_id: "larepublica", status: 1, slug: $_authorSlug, cache: 1200) {
      __typename
      _id
      fullname
       type
      slug
      status
      data {
        columnist {
          column_name
          column_url
        }
        description
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
export default AUTHOR_QUERY;
