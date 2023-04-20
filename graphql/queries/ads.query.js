const LIST_ADS_QUERY = `
    query Ads($_limit: Int, $_type: String) {
        ads(site_id: "larepublica", limit: $_limit, page: 1, order_field: "weight", order_sort: "asc", type: $_type, cache: 60, status: 1) {
            data {
                __typename
                _id
                zone
                tag
                type
                slot
                dimensions
                mapping
                weight
                mapping_dimensions {
                    key
                    value
                }
            }
        }
    }
`;

export default LIST_ADS_QUERY;