import Head from "next/head";
import { convertMediumDateTwo } from 'util/convertMediumDateTwo';
import { cleanHtml } from "util/cleanHtml";

const LiveSchema = ({data}) => {
    // console.log('data inlive schema>>>>', data)
    let schemaAutor,
    itemsLive=[],
    schemaLive;

    if (data && Object.keys(data)) {
        const {
            url_note,
            content_elements,
            data_description,
            data_title,
            date_init,
            date_end,
            date_update,
            data_id,
            data_authors,
            image_live
        } = data;

        schemaAutor = [
            {
                "@type": "Person",
                "name": "Redacción La República"
            }
        ];
        if (data_authors && data_authors.length) {
            schemaAutor = data_authors.map(author => {
                const { fullname, slug } = author;
                return {
                        "@type": "Person",
                        "@id": "http://schema.org/#author",
                        "name": fullname,
                        "url": `${process.env.SITE_DOMAIN_URL}${slug}/`,
                    }
            } )
        }

        if(content_elements && content_elements.length) {
            content_elements.map((schema) => {
                const {id, headline, content, date, date_updated, user} = schema;
                let itemSchema = {
                    "@type": "BlogPosting",
                    "headline": headline || data_title,
                    "url": `${process.env.SITE_DOMAIN_URL}${url_note}#${id}`,
                    "@id": `#${id}`,
                    "mainEntityOfPage": {
                        "@type": "WebPage"
                    },
                    "datePublished": convertMediumDateTwo(date),
                    "dateModified": convertMediumDateTwo(date_updated),
                    "articleBody": cleanHtml(content || ""),
                    "image": {
                        "@type": "ImageObject",
                        "url": `${process.env.SITE_DOMAIN_URL}${process.env.LOGO_PUBLISHER}`
                    },
                    "author": {
                        "@type": "Person",
                        "name": schemaAutor[0]?.name ?? '',
                        "url": schemaAutor[0]?.url ?? ''
                    },
                    "publisher": {
                        "name": "Diario La República",
                        "@type": "Organization",
                        "@id": "#PublisherOrg"
                    }
                };
                itemsLive.push(itemSchema);
            });
        }

        schemaLive = {
            "@context": "http://schema.org",
            "@type": "LiveBlogPosting",
            "headline":  data_title,
            "publisher": {
                "@type": "Organization",
                "name": process.env.SITE_NAME,
                "url": `${process.env.SITE_DOMAIN_URL}`,
                "@id": "#PublisherOrg",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${process.env.SITE_DOMAIN_URL}${process.env.LOGO_PUBLISHER}`
                }
            },
            "about": {
                "@type": "Event",
                "name": data_title,
                "startDate": convertMediumDateTwo(date_init) ,
                "endDate": convertMediumDateTwo(date_end),
                "location ": {
                    "@type": "Place",
                    "name": process.env.SITE_NAME,
                    "address":{
                        "@type": "PostalAddress",
                        "addressCountry": {
                            "@type": "Country",
                            "name": "PE"
                        }
                    },
                },
                "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "http://schema.org/EventScheduled",
                "description": data_description || data_title,
                "image": image_live || `${process.env.SITE_DOMAIN_URL}/static/image-larepublica.png`,
                "performer": {
                    "@type": "Organization",
                    "name": process.env.SITE_NAME,
                    "url": process.env.SITE_DOMAIN_URL
                },
                "organizer": {
                    "@type": "Organization",
                    "name": process.env.SITE_NAME,
                    "url": process.env.SITE_DOMAIN_URL
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage"
            },
            "url": `${process.env.SITE_DOMAIN_URL}${url_note}`,
            "@id": '#liveBlogPosting',
            "description": data_description || data_title,
            "coverageStartTime": convertMediumDateTwo(date_init),
            "coverageEndTime": convertMediumDateTwo(date_end),
            "dateModified": convertMediumDateTwo(date_update),
            "author": schemaAutor,
            "liveBlogUpdate": itemsLive
        };
    } else {
        return null
    }

    return (
        <Head>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaLive)}}/>
        </Head>
    )
}

export { LiveSchema };
