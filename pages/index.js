import { Layout } from "Layouts/Layouts";
import WithHome from "hocs/withHome";

const Home = (props) => {
    const {metaSite} = props;
    console.log({props})
    
    return (
        <Layout
            data={metaSite}
            hideAdTop
            dataHeader={{}}
            dataFooter={{}}
            topicMenu={{}}
            prebid={"HOME"}
            adsPage={{}}
            listNote={{}}
        >hgello</Layout>
    );
};

export default WithHome(Home);
