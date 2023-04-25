import { Layout } from "Layouts/Layouts";
import SectionCard from "component/page_home/sectionCard/SectionCard";
import SectionGrid from "component/page_home/sectionGrid/SectionGrid";
import SectionGridDouble from "component/page_home/sectionGridDouble/SectionGridDouble";
import SectionGridDoubleTypeSmall from "component/page_home/sectionGridDoubleTypeSmall/SectionGridDoubleTypeSmall";
import WithHome from "hocs/withHome";

const Home = (props) => {
    const { metaSite, newsSociety, newsWorld, newsSports } = props;


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
            {/* <SectionGridDouble
                dataPrimary={newsSociety}
                dataSecondary={newsSociety}
                sectionTitlePrimary=""
                sectionTitleSecondary=""
                linkToSecondary=""
                linkToPrimary=""
            /> */}
            <SectionGridDoubleTypeSmall
                dataPrimary={newsWorld}
                dataSecondary={newsSports}
                linkToSecondary={"#"}
                sectionTitlePrimary={"CINE Y TV"}
                sectionTitleSecondary={"TRENDING"}
            />
            <div style={{
                width: "100%",
                height: "90px",
                backgroundColor: "#c4c4c4",
                textAlign: "center"
            }}>Publicidad Ad</div>
            <SectionGridDoubleTypeSmall
                dataPrimary={newsWorld}
                dataSecondary={newsSports}
                linkToSecondary={"/especiales-bibimbap"}
                linkToPrimary={"/k-beauty"}
                sectionTitlePrimary={"K-BEAUTY"}
                sectionTitleSecondary={"ESPECIALES BIBIMBAP"}
            />
            <div className="container__publicidadAd" >
                <div>
                    <SectionGrid data={newsWorld} sectionTitle="ASIA FAMA" linkTo="" nColumnas={1} />
                    <SectionGrid data={newsWorld} sectionTitle="SERIES BL" linkTo="" nColumnas={1} />
                </div>
                <div className="publicity-300" >
                    Publicidad Ad
                </div>
                <style jsx>{`
             .container__publicidadAd{
                display: flex;
                gap:14px;
             }
             .publicity-300{
                min-width :300px;
                display: none;
                background-color: #c4c4c4;
                height: 600px;
                margin-top:40px;
                text-align: center;
             }

            @media (min-width: 769px) {
                .publicity-300{
                    display:block ;
                }
            }
          `}</style>
            </div>

        </Layout>
    );
};

export default WithHome(Home);
