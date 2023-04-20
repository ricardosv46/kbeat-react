const LIST_COLUMNISTS = `
    query Authors($_limit: Int, $_page: Int) {
        authors(site_id: "larepublica", limit: $_limit, page: $_page, status: 1, type:"columnist") {
            __typename
            data {
                fullname
                type
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

export default LIST_COLUMNISTS;
