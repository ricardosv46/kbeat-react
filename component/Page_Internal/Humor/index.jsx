import { TitleSection } from "component/global/TitleSection/TitleSection";
import { Layout } from "Layouts/Layouts";
import { HumorInternalSlider } from "./HumorInternalSlider/HumorInternalSlider";
import { Taboola } from "component/global/Taboola";

const HumorInternal = (props) => {
    const { adsPage, footerMenu, mainMenu, topicsMenu, humorData, singleHumor_data } = props;
    const categoryData = singleHumor_data.article?.data?.categories[0]
    let humorDataByUrl,
    slider,
    name,
    slug;
    
    if (humorData) {
        humorDataByUrl = humorData

        if (humorDataByUrl && singleHumor_data) {
            slider = <HumorInternalSlider
                        selected={singleHumor_data?.article}
                        adsPage={adsPage}
                        data={humorDataByUrl.articles?.data}
                    />
        }
    }

    return (
        <Layout adsPage={adsPage} dataHeader={mainMenu} dataFooter={footerMenu} topicMenu={topicsMenu} data={singleHumor_data.article} prebid="SECTION">
            <TitleSection name={name} tag="h2" />
            {slider}
            <Taboola type={"section"} />
        </Layout>
    );
};

export { HumorInternal };