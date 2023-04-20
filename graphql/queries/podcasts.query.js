const PODCASTS = `
    query Podcasts (
        $_limit: Int,
        $_orderField: String,
        $_page: Int
    )
    {
        podcasts(
            site_id: "larepublica",
            limit: $_limit,
            order_field: $_orderField,
            order_sort: "desc",
            page: $_page,
            status: 1
        ) {
        data {
            _id
            title
            type
            date
            slug
            data {
                categories {
                    type
                    name
                    slug
                }
                tags {
                    name
                    slug
                }
                authors {
                    fullname
                    slug
                }
                multimedia {
                    path
                    type
                    data {
                        title
                        alt
                        source
                        credits
                        type_video
                        image_path
                        embed
                    }
                    metadata {
                        key
                        value
                    }
                }
            }
            status
            }
        }
    }`;

export default PODCASTS;