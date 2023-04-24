import fetchApi from "services/api/fetchApi";
import fetchContent from "services/api/fetchContent";
import { transform } from "util/transformData";

const WithHome = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {
        
        const metaSite = await fetchApi("meta", {});
         
        const newsSociety = await fetchApi("articles", {
            category_slug: "sociedad",
            limit: 9,
            view: "home",
        });
       


        const typePage = "home";
        return {
            typePage,
            metaSite,
            newsSociety
        };
    };

    return hocComponent;
};

export default WithHome;
