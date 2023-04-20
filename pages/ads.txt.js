import fetchApi from "services/api/fetchApi";

const AdsTxt = () => {};
AdsTxt.getInitialProps = async ({ res }) => {
    try {
        const robotsContent = await fetchApi("setting", { type: "ads" });
        const robotsTextContent = robotsContent.setting.data[0].value || "";
        res.write(robotsTextContent);
        res.end();
        return {
            content: robotsTextContent,
        };
    } catch (error) {
        console.error(error);
        return {
            error: 404,
        };
    }
};
export default AdsTxt;
