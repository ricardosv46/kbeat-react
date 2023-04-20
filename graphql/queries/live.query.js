const DETALLE_LIVEBLOGPOSTING_QUERY = `
  query Live($slug: String) {
    live(site_id: "larepublica", slug: $slug, status: 1) {
      _id
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
      title
      type
      date
      update_date
      slug
      data {
        date_init
        date_end
        body {
          id
          date
          headline
          content
          is_featured
        }
        description
        content_elements
        content_elements_amp
        match {
					opta_id
					team_1 {
						name
						flag
					}
					team_2 {
						name
						flag
					}
					score_team_1
					score_team_2
				}
        authors {
          fullname
          slug
          metadata {
            key
            value
          }
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
    }
  }
`;

export default DETALLE_LIVEBLOGPOSTING_QUERY;
