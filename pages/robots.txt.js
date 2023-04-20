import fetchApi from "services/api/fetchApi";

const RobotsTxt = () => {};
RobotsTxt.getInitialProps = async ({ res }) => {
    try {
        const robotsContent = await fetchApi("setting", { type: "robots" });
        const robotsTextContent = robotsContent?.setting?.data[0]?.value || "";
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
export default RobotsTxt;
