const LIST_AUTHORS = `
    query Authors($_limit: Int, $_page: Int, $_type: String) {
        authors(site_id: "larepublica", limit: $_limit, page: $_page, type: $_type, status: 1) {
            __typename
            data {
                fullname
                _id
                slug
                updated_at
                data{
                    description
                }
                metadata {
                    key
                    value
                }
            }
        }
    }
`;

export default LIST_AUTHORS;
