import fetchApi from "services/api/fetchApi";
import { convertirFecha } from "util/convertirFecha";

const TITLE_SITE_LR = "La República: Últimas noticias de última hora del Perú y el mundo";
const DESCRIPTION_SITE_LR =
    "Noticias del Perú y del mundo en larepublica.pe - Últimas noticias de política, espectáculos, deportes, economía, tendencias, tecnología, salud, sociedad, mundo, cine y más.";

const MakeSitemap = (content, website) => {
    const Url = website.replace(".xml", "");
    let xmlHeader = null;

    let xmls = null;
    //let categoriasMain = null;

    let categoriasMain = "",
        categoriasUrl = "",
        srcImage = "",
        altImage = "",
        autor = "";

    if (content) {
        const { articles } = content;
        let body = null;
        if (articles && articles.data && articles.data.length) {
            xmls = articles.data
                .map((items, key) => {
                    const { slug, date, update_date, data, title } = items;
                    const update_date_encoded = convertirFecha(update_date, "iso-global-rss");
                    if (data && Object.keys(data)) {
                        srcImage =
                            data.multimedia?.find((item) => item.type === "video")?.data.image_path ||
                            data.multimedia?.find((item) => item.type === "image")?.path ||
                            process.env.IMAGE_DEFAULT_1250x735;
                        altImage =
                            data.multimedia?.find((item) => item.type === "video")?.data?.title ||
                            data.multimedia?.find((item) => item.type === "image")?.data?.title ||
                            title ||
                            "";

                        if (
                            data.authors &&
                            data.authors.length &&
                            data.authors[0] &&
                            Object.keys(data.authors[0]) &&
                            data.authors[0].fullname &&
                            data.authors[0].fullname.length
                        ) {
                            const { fullname } = data.authors[0];
                            autor = fullname;
                        }

                        if (data.categories && data.categories.length > 0) {
                            const catLocated = data?.categories.find((category) => category.slug == `/${Url}` || category.primary);
                            if (catLocated) {
                                categoriasMain = catLocated.name;
                                categoriasUrl = catLocated.slug;
                            }
                        }

                        if (data.content_elements && data.content_elements.length) {
                            const { content_elements } = data;

                            body = content_elements
                                .map((data, key) => {
                                    return data.content;
                                })
                                .join("");
                        }
                    }
                    if (Url.includes("autor/") && Url.length > 8) {
                        return `
                    <item>
                        <title> ${title} </title>
                        <link> https://larepublica.pe${slug} </link>
                        <guid isPermaLink="true">https://larepublica.pe${slug}</guid>
                        <dc:creator>${autor}</dc:creator>
                        <pubDate>${update_date_encoded}</pubDate>
                        <description>  <![CDATA[ ${data?.teaser ?? ""} ]]></description>
                    </item>
                `;
                    } else {
                        return `
                        <item>
                            <title>
                                <![CDATA[ ${title} ]]>
                            </title>
                            <link> https://larepublica.pe${slug} </link>
                            <description>  
                            <![CDATA[ ${data?.teaser ?? ""} ]]>
                            </description>
                            <image:image>
                            <image:loc>${srcImage}</image:loc>
                            <image:title><![CDATA[${altImage}]]></image:title>
                            </image:image>
                            <category domain="https://larepublica.pe${categoriasUrl}">${categoriasMain}</category>
                            <dc:creator>${autor}</dc:creator>
                            <pubDate>${update_date_encoded}</pubDate>
                            <media:content height="735" width="1250" type="image/jpeg" url="${srcImage}">
                            <media:description type="html">
                            <![CDATA[ ${title} ]]>
                            </media:description>
                            </media:content>
                            ${(body && `<content:encoded><![CDATA[${body}]]></content:encoded>`) || ""}
                        </item>
                    `;
                    }
                })
                .join("");
        }
    }
    if (Url.includes("autor/") && Url.length > 8) {
        const { author } = content;

        let description = author?.data?.description || `Notas escrita por ${author?.fullname}`;
        xmlHeader = `
            <rss xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
                <channel>
                <title>${author?.fullname}</title>
                <description>${description}  </description>
                <link>https://larepublica.pe/</link>
                <atom:link href="https://larepublica.pe/rss/${website}" rel="self" type="application/rss+xml"/>    
                <lastBuildDate>${new Date()?.toString()}</lastBuildDate>
                <ttl>1</ttl>
                    ${xmls}
                </channel>
            </rss>
        `;
    } else if (Url === "home") {
        xmlHeader = `
            <rss xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:media="http://search.yahoo.com/mrss/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0" xml:base="https://larepublica.pe">
                <channel>
                    <title>${content?.site?.metadata_seo?.seo_title}</title>
                    <link>https://larepublica.pe</link>
                    <description>${content?.site?.metadata_seo?.seo_description}</description>
                    <language>es</language>
                    ${xmls}
                    <copyright>Noticias destacadas de La República</copyright>
                </channel>
            </rss>`;
    } else {
        xmlHeader = `
            <rss xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:media="http://search.yahoo.com/mrss/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
                <channel>
                <title>${TITLE_SITE_LR}</title>
                <link>${process.env.SITE_DOMAIN_URL}</link>
                <description>${DESCRIPTION_SITE_LR}</description>
                <language>es</language>
                    ${xmls}
                </channel>
            </rss>
        `;
    }
    return `${xmlHeader}`;
};

const SeccionesSitemaps = () => {};
SeccionesSitemaps.getInitialProps = async ({ res, query }) => {
    res.setHeader("Content-Type", "text/xml");
    const date = new Date();
    let nowDate = "";
    const old = new Date();
    let convert = "";
    nowDate = convertirFecha(date, "iso-2");
    old.setDate(old.getDate() - 2);

    convert = convertirFecha(old, "iso-2");
    try {
        const { rss } = query;
        const rssSlug = rss.join("/");
        if (rss.length === 2 && rssSlug.endsWith(".xml") && rssSlug.includes("autor/")) {
            const slug_author = rssSlug.replace(".xml", "");
            const author_data = await fetchApi("author", {
                slug: slug_author,
            });
            const authorId = author_data.author?._id;

            if (authorId) {
                const datosQuery = await fetchApi("articles", {
                    limit: 250,
                    author_id: authorId,
                });
                res.write(MakeSitemap({ ...datosQuery, ...author_data }, rssSlug));
                res.end();
                return { content: datosQuery };
            } else {
                res.end();
                return { error: 404 };
            }
        } else if (rss.length <= 2 && rssSlug.endsWith(".xml")) {
            let cat = "";
            let newData = {};
            const querySitemap = rssSlug.replace(".xml", "");
            if (querySitemap !== "home") {
                cat = querySitemap;
            }

            const datosQuery = await fetchApi("articles", {
                limit: 250,
                category_slug: cat,
                sitemap: true,
            });
            let metaSite;
            if (querySitemap == "home") {
                metaSite = await fetchApi("meta", {});
            } else {
                metaSite = await fetchApi("category", {
                    slug: querySitemap,
                });
            }
            newData = { ...metaSite, ...datosQuery };
            res.write(MakeSitemap(newData, rssSlug));
            res.end();
            return { content: newData };
        } else {
            return { error: 404 };
        }
    } catch (error) {
        res.write(
            `<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0"></rss>`
        );
        res.end();
        return { error: 404 };
    }
};

export default SeccionesSitemaps;
