import fetchApi from "../../../services/api/fetchApi";
import { convertirFecha } from "../../../util/convertirFecha";

const MakeSitemap = (content) => {
    // console.log("secciones content", content);
    let xmls = null;

    if (content) {
        const { categories } = content;

        if (categories && categories.data && categories.data.length) {
            xmls = categories.data
                .map((items, key) => {
                    const { slug, updated_at, data } = items;
                    return `
						<url>
                        	<loc>https://larepublica.pe${slug}</loc>
                        	<lastmod>${convertirFecha(updated_at, "iso-global")}</lastmod>
						</url>
					`;
                })
                .join("");
        }
        return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${xmls}</urlset>`;
    }
};

const SeccionesSitemaps = () => {};
SeccionesSitemaps.getInitialProps = async ({ res, query }) => {
    res.setHeader("Content-Type", "text/xml");
    try {
        const date = new Date();
        let nowDate = "";
        const old = new Date();
        let convert = "";

        nowDate = convertirFecha(date, "iso-2");
        old.setDate(old.getDate() - 2);
        convert = convertirFecha(old, "iso-2");

        const datosQuery = await fetchApi("categories", {
            limit: 150,
        });
        // console.log("datos query secciones", datosQuery);

        res.write(MakeSitemap(datosQuery));

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

export default SeccionesSitemaps;
