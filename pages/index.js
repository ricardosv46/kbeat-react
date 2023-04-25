import { Layout } from "Layouts/Layouts";
import WithHome from "hocs/withHome";

const Home = (props) => {
    const {metaSite,adsPage,mainMenu,footerMenu,topicsMenu} = props;
    console.log({props})
    
    return (
        <Layout
            data={metaSite}
            hideAdTop
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            prebid={"HOME"}
            adsPage={adsPage}
            listNote={[]}
        ><div style={{height:'2000px',background:'blue'}}>hello</div></Layout>
    );
};

export default WithHome(Home);
