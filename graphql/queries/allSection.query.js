const LIST_SECTIONS = `
  query Categories ($_limit: Int, $date: String, $date_end: String, $_type: String, $_parent: String) {
    
    categories (
      limit: $_limit,
      site_id: "larepublica",
      status: 1,
      type: $_type, 
      date: $date,
      date_end: $date_end,
      order_field: "update_date",
      order_sort: "desc",
      parent_slug: $_parent
    ) {
      data {
        slug
        name
        updated_at
        parent {
          name
          slug
        }
      }
    }
  }
`;
export default LIST_SECTIONS;
