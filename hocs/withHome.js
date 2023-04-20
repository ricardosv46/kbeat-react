import fetchApi from "services/api/fetchApi";
import fetchContent from "services/api/fetchContent";
import { transform } from "util/transformData";

const WithHome = (WrapperComponent) => {
    const hocComponent = ({ ...props }) => <WrapperComponent {...props} />;

    hocComponent.getInitialProps = async ({ query, asPath }) => {
        
        const metaSite = await fetchApi("meta", {});
       
        const typePage = "home";
        return {
            typePage,
            metaSite,
        };
    };

    return hocComponent;
};

export default WithHome;
