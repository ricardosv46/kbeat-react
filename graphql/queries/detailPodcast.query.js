const PODCAST = `
    query Podcast (
        $_id : String
    )
    {
        podcast(site_id: "larepublica", _id: $_id, status: 1) {
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
            update_date
            slug
            status
            data {
                body
                categories {
                    _id
                    name
                    type
                    slug
                    primary
                }
                tags {
                    _id
                    name
                    slug
                }
                authors {
                    _id
                    fullname
                }
                audio {
                    _id
                    type
                    path
                    data {
                        title
                        credits
                        source
                    }
                    metadata {
                        key
                        value
                    }
                }
                multimedia {
                    _id
                    type
                    path
                    subtype
                    data {
                        title
                        credits
                        source
                        image_path
                        type_video
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
        }
    }`

export default PODCAST;