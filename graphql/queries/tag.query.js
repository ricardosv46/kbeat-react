/* import { gql } from '@apollo/client'; */

const TAG_QUERY = /* gql */ `
query tag ( $tagSlug: String ) {
  
  tag (site_id: "larepublica", slug: $tagSlug, status: 1, cache: 180) {
    __typename
    _id
    name
    slug
    data {
      description
      extra
      related {
        tags {
          name
          title
          slug
          image
        }
      }
      multimedia {
        path
        type
        data {
          alt
          title
          image_path
        }
      }
    }
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

export default TAG_QUERY;
