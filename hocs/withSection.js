import fetchApi from "services/api/fetchApi";
import { portadas } from "util/portadas";

const WithSection = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {

        // const slug_article = asPath + "/";
        const { section } = query;

        const section_about =
            await fetchApi("category", {
                slug: section,
            });
        if (section_about.category) {
            // const idPortada = portadas[section];

            // const spotlight_general = await fetchApi("spotlight", {
            //     id: "61f9538bcae98460f475007a",
            // });
            const analyticsSeccion = await fetchApi("external", {
                limit: 6,
                category_slug: section,
            });

            const section_data = await fetchApi("articles", {
                limit: 50,
                order_by: "update_date",
                view: "section",
                category_slug: section === "ultimas-noticias" ? "" : section,
            });
            // const portada = await fetchApi("spotlight", {
            //     id: idPortada,
            // });
            const typePage = "section";
            return {
                typePage,
                // spotlight_general,
                section_data,
                section_about,
                analyticsSeccion,
                // portada,
            };
        }
        return {
            error: 404,
            typePage: "otros"
        };
    };

    return hocComponent;
};

export default WithSection;
