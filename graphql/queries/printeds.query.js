const PRINTEDS_QUERY = `
  query Printeds ($site: String="larepublica", $category_slug: String, $limit: Int=1) {
    printeds (site_id: $site, limit: $limit, page_number: 1, status: 1, file_type: "image", order_field: "date", order_sort: "desc", category_slug: $category_slug, slug_format_date: "d-m-Y", page: 1) {    
      data {
        title
        slug
        data {
          categories {
            name
            slug
          }
          pages {
            number
            files {
              type
              path
              data {
                alt
                title
              }
              metadata {
                key
                value
              }
            }
          }
        }
      }
    }
  }
`;

export default PRINTEDS_QUERY;
