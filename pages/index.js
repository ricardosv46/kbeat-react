import { Layout } from "Layouts/Layouts";
import SectionGrid from "component/page_home/sectionGrid/SectionGrid";
import WithHome from "hocs/withHome";

const Home = (props) => {
    const { metaSite, newsSociety } = props;


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
        >


            <SectionGrid data={newsSociety} sectionTitle="K-DRAMAS" linkTo="" />


        </Layout>
    );
};

export default WithHome(Home);
