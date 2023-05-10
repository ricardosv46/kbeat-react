import fetchApi from "services/api/fetchApi";
import { convertirFecha } from "util/convertirFecha";

const MakeSitemap = (content) => {
    let xmls = "";
    let imageLoc = null;
    if (content) {
        const { articles } = content;
        if (articles && articles.data && articles.data.length) {
            xmls = articles.data
                .map((items) => {
                    const { slug, update_date, data } = items;
                    const mediaArticle = data.multimedia?.filter((media) => media.type == "video" || media.type == "image");
                    if (mediaArticle) {
                        imageLoc = mediaArticle.map((imgArticle) => {
                            const {
                                data: { title, alt },
                            } = imgArticle;
                            const srcImage = imgArticle.type == "image" ? imgArticle?.path : imgArticle?.data?.image_path;
                            return `<image:image>
                              <image:loc>${srcImage}></image:loc>
                              <image:title><![CDATA[${title}]]></image:title>
                              <image:caption><![CDATA[${alt || title}]]></image:caption>
                              <image:geo_location>Lima, Perú</image:geo_location>
                          </image:image>`;
                        });
                    }

                    return `<url>
                          <loc>https://larepublica.pe${slug}</loc>
                          <lastmod>${convertirFecha(update_date, "iso-global")}</lastmod>
                              ${imageLoc}
                          </url>`;
                })
                .join("");
        }
        return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${xmls}</urlset>`;
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
    if (query && query.seccion && query.seccion.includes("xml") && querySitemap !== "home") {
        try {
            const datosQuery = await fetchApi("articles", {
                limit: 100,
                category_slug: querySitemap,
                sitemap: true,
            });

            res.write(MakeSitemap(datosQuery));
            res.end();
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
