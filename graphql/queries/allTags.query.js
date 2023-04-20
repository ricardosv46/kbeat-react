const LIST_TAGS = `
  query Tags ($_limit: Int) {
    
    tags (
      limit: $_limit,
      status: 1,
      site_id: "larepublica",
      order_field: "update_date",
      order_sort: "desc",
    ) {
        data {
          name
          slug
          updated_at
        }
      }
    }
`;
export default LIST_TAGS;
