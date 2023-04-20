const SITEMAPNEWS_QUERY = `
    query Articles($limit: Int, $category_slug: String, $date: String, $date_end: String) {
        articles(
            site_id: "larepublica"
            limit: $limit
            page: 1
            order_field: "update_date"
            order_sort: "desc"
            category_slug: $category_slug
            date: $date
            field_date: "update_date"
            date_end: $date_end
            status: 1
        ) {
            data {
                _id
                title
                site {
                    _id
                    name
                    domain
                }
                date
                updated_at
                update_date
                slug
                status
                data {
                    teaser
                    content_elements
                    authors {
                        _id
                        fullname
                    }
                    multimedia {
                        type
                        path
                        data {
                            title
                            alt
                            credits
                            source
                            type_video
                            image_path
                            embed
                        }
                    }
                    categories {
                        _id
                        name
                        type
                        slug
                        primary
                    }
                }
                metadata_seo {
                    keywords
                }
                metadata {
                    key
                    value
                }
            }
            per_page
            current_page
            last_page
        }
    }
`;

export default SITEMAPNEWS_QUERY;
