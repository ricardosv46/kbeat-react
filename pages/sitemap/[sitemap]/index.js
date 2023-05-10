import fetchApi from "../../../services/api/fetchApi";
import { convertirFecha } from "../../../util/convertirFecha";

const MakeSitemap = (content, webUrl) => {
    let xmls = "";
    let srcImage = "";

    if (webUrl === "indice-web" || webUrl === "indice-videos" || webUrl === "indice-imagenes") {
        var fechaInicio = new Date();
        var fechaFin = new Date().setDate(new Date().getDate() - 30);
        while (fechaInicio.getTime() > fechaFin) {
            const day = fechaInicio.getDate() < 10 ? "0" + fechaInicio.getDate() : fechaInicio.getDate();
            const fullmonth = fechaInicio.getMonth() + 1;
            const month = fullmonth < 10 ? "0" + fullmonth : fullmonth;
            fechaInicio.setDate(fechaInicio.getDate() - 1);
            xmls += `<sitemap>
                <loc>
                    https://larepublica.pe/sitemap/${webUrl}/${fechaInicio.getFullYear() + "/" + month + "/" + day}
                </loc>
                <lastmod>${fechaInicio.getFullYear()}-${month}-${day}T22:59:59Z</lastmod>
            </sitemap>`;
        }
        return `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmls}</sitemapindex>`;
    }
    if (content) {
        const { articles } = content;
        if (articles && articles.data && articles.data.length) {
            xmls = articles.data
                .map((items, key) => {
                    const {
                        slug,
                        title,
                        metadata_seo: { keywords },
                        update_date,
                        data,
                    } = items;

                    if (data && Object.keys(data) && data.multimedia && data.multimedia.length > 0) {
                        srcImage =
                            data.multimedia.find((media) => media.type == "image")?.path ||
                            data.multimedia.find((media) => media.type == "video")?.data?.image_path;
                    }

                    return `<url>
                  <loc>https://larepublica.pe${slug}</loc>
                  <lastmod>${convertirFecha(update_date, "iso-global")}</lastmod>
                  <news:news>
                    <news:publication>
                      <news:name>La República</news:name>
                      <news:language>es</news:language>
                    </news:publication>
                    <news:publication_date>${convertirFecha(update_date, "iso-global")}</news:publication_date>
                    <news:title>
                      <![CDATA[ ${title} ]]>
                    </news:title>
                    <news:keywords>
                      <![CDATA[ ${keywords || ""} ]]>
                    </news:keywords>
                  </news:news>
                  <image:image>
                    <image:loc> ${srcImage} </image:loc>
                    <image:title><![CDATA[ ${title} ]]></image:title>
                  </image:image>
                </url>`;
                })
                .join("");
        }
        return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${xmls}</urlset>`;
    }
};

const Sitemap = () => {};
Sitemap.getInitialProps = async ({ res, query }) => {
    res.setHeader("Content-Type", "text/xml");
    try {
        let datosQuery;

        if (query && query.sitemap && query.sitemap.includes("xml")) {
            const { sitemap } = query;
            const querySitemap = sitemap.replace(".xml", "");
            
            if (querySitemap === "indice-web" || querySitemap === "indice-videos" || querySitemap === "indice-imagenes") {
                res.write(MakeSitemap(null, querySitemap));
            } else {
                let cat = "";

                if (querySitemap !== "noticias") {
                    cat = querySitemap;
                    datosQuery = await fetchApi("articles", {
                        limit: 1000,
                        order_by: "update_date",
                        category_slug: cat,
                        sitemap_light: true
                    });
                } else if (querySitemap === "noticias") {
                    //-- /sitemap/noticias.xml
                    cat = "";
                    datosQuery = await fetchApi("articles", {
                        limit: 1000,
                        order_by: "update_date",
                        category_slug: cat,
                        sitemap_light: true,
                    });
                }
                res.write(MakeSitemap(datosQuery, querySitemap));
            }
        } else {
            res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"></urlset>`);
        }
        res.end();
        return {
            content: datosQuery,
        };
    } catch (error) {
        console.error(error);
        return {
            error: 404,
        };
    }
};

export default Sitemap;
