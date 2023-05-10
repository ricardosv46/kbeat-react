import fetchApi from "services/api/fetchApi";
import { convertirFecha } from "util/convertirFecha";
import { parseIframe } from "util/parseIframe";

const MakeSitemap = (content) => {
    let xmls = "";
    let srcImage = "";
    let description = "";
    let contentVideo = "";
    let expirationDate = "";

    if (content) {
        const { articles } = content;
        if (articles && articles?.data && articles?.data.length) {
            xmls = articles?.data
                ?.map((items, key) => {
                    const { slug, title, date, update_date, data } = items;
                    description = data.teaser || title;
                    expirationDate = convertirFecha(update_date, "iso-global");

                    if (
                        data &&
                        Object.keys(data) &&
                        data.multimedia &&
                        data.multimedia.length &&
                        data.multimedia[0] &&
                        Object.keys(data.multimedia[0]) &&
                        data.multimedia[0].data &&
                        Object.keys(data.multimedia[0].data)
                    ) {
                        const { image_path, embed } = data.multimedia[0].data;
                        srcImage = image_path || `${process.env.SITE_DOMAIN_URL}/static/images/placeholder.png`;
                        contentVideo = parseIframe(embed)?.src || srcImage;
                    }

                    return `<url>
				<loc>https://larepublica.pe${slug}</loc>
				<lastmod>${convertirFecha(update_date, "iso-2")}</lastmod>
				<video:video>
				  <video:thumbnail_loc>${srcImage}</video:thumbnail_loc>
				  <video:title><![CDATA[${title}]]></video:title>
				  <video:description><![CDATA[${description}]]></video:description>
				  <video:player_loc> <![CDATA[https:${contentVideo}]]></video:player_loc>
				  <video:duration>180</video:duration>
				  <video:expiration_date>${expirationDate}</video:expiration_date>
				  <video:rating>4.2</video:rating>
				</video:video>
			  </url>`;
                })
                .join("");
        }
        return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${xmls}</urlset>`;
    }
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
    const { seccion } = query;
    const querySitemap = seccion.replace(".xml", "");
    const cat = `videos/${querySitemap}`;
    if (query && query.seccion && query.seccion.includes("xml") && querySitemap !== "home") {
        try {
            const datosQuery = await fetchApi("articles", {
                limit: 100,
                order_by: "update_date",
                category_slug: cat,
                sitemap: true,
            });

            res.write(MakeSitemap(datosQuery, querySitemap));
            res.end();
            // Tiene que retornar algo
            return {
                content: datosQuery,
            };
        } catch (error) {
            console.error("Error: ", error);
            return {
                error: 404,
            };
        }
    } else {
        res.write(`<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0"></rss>`);
        res.end();
        return {
            error: 404,
        };
    }
};

export default SeccionesSitemaps;
