import { Layout } from "Layouts/Layouts";

import MainGrid from "component/Page_home/MainGrid/MainGrid";
import { SlotAds } from "component/global/AdsManager/SlotAds";
import SectionGrid from "component/Page_home/SectionGrid/SectionGrid";
import SectionGridDegradedColors from "component/Page_home/SectionGridDegradedColors/SectionGridDegradedColors";
import SectionGridDoubleTypeSmall from "component/Page_home/SectionGridDoubleTypeSmall/SectionGridDoubleTypeSmall";
import SectionGridLastNews from "component/Page_home/SectionGridLastNews";
import WithHome from "hocs/withHome";

const Home = (props) => {
    const { metaSite, adsPage, mainMenu, footerMenu, topicsMenu, newsWorld, newsSociety, newsSports, newsMovies, newsLast, mainGrid } = props;
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
        >
            <MainGrid data={mainGrid} />


            <div className='container__columns'>
                    <SectionGridLastNews data={newsLast} /> 
                <article className='col__content offset-300'>
                    <SlotAds type={"Middle"} data={adsPage?.ads?.data} />
                </article>
                    
            </div>

            <SectionGridDegradedColors data={newsMovies} />

            <SectionGrid data={newsSociety} sectionTitle="K-DRAMAS" linkTo="" />
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
        </Layout >
    );
};

export default WithHome(Home);
