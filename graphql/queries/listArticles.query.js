import MULTIMEDIA_FRAGMENT from "../fragments/multimedia.fragment";
import CATEGORIES_FRAGMENT from "../fragments/categories.fragment";

const LIST_ARTICLES_QUERY = `
    query Articles (
        $_limit : Int, 
        $_orderField: String, 
        $_categorySlug: String, 
        $_view: String, 
        $_tagSlug: String,
        $_authorId: String,
        $_page: Int
    ) 
    {
        articles( 
            site_id: "larepublica", limit: $_limit, order_field: $_orderField,
            order_sort: "desc", status: 1, category_slug: $_categorySlug, view: $_view,tag_slug: $_tagSlug, author_id: $_authorId, page: $_page
        ) {
            __typename
            per_page
            data {
                _id
                title
                type
                date
                updated_at
                created_at
                update_date
                slug
                data {
                    teaser
                    authors {
                        fullname
                        slug
                        metadata {
                            key
                            value
                        }
                    }
                    tags {
                        name
                        slug
                    }
                    ...categoriesFragment
                    ...multimediaFragment
                }
                metadata_seo {
                    keywords
                }
            }

        }
    }

    ${CATEGORIES_FRAGMENT}
    ${MULTIMEDIA_FRAGMENT}
`;

export default LIST_ARTICLES_QUERY;
