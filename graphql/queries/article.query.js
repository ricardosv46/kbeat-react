const INTERNAL_QUERY = `
    query articles($internalSlug: String) {
        article(site_id: "larepublica", slug: $internalSlug, status: 1, category_data: true) {
            __typename
            _id
            title
            
            site {
                _id
                name
                domain
            }
            user {
                _id
                username
                email
            }
            type
            date
            updated_at
            created_at
            update_date
            slug
            status
            redirect {
                url
                code
            }
            schemas {
                content
            }
            metadata_redes {
                title
            }
            data {
                teaser
                teaser_html: teaser(format: TEXT_HTML)
                content_elements
                detected_elements
                validate_elements
                categories {
                    name
                    type
                    slug
                    primary
                }
                tags {
                    name
                    slug
                }
                authors {
                    fullname
                    _id
                    slug
                    metadata {
                        key
                        value
                    }
                    data {
                        description
                        columnist {
                            column_url
                            column_name
                        }
                    }
                }
                related {
                    tags {
                        name
                        slug
                    }
                    items {
                        title
                        slug
                        image
                        is_featured
                    }
                    inlive
                }
                multimedia {
                    type
                    path
                    data {
                        title
                        credits
                        source
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
            metadata_seo {
                keywords
                seo_title
                seo_description
            }
            metadata {
                key
                value
            }
            #redirect {
            #    url_redirect,
            #    code
            #}
        }
    }
`;

export default INTERNAL_QUERY;
