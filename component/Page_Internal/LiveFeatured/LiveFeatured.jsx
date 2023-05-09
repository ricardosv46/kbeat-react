import { Score } from "component/Page_Internal/LiveScore/LiveScore";
import { LiveFeaturedItem } from "component/Page_Internal/LiveFeaturedItem/LiveFeaturedItem";
import style from "component/Page_Internal/LiveFeatured/LiveFeatured.module.scss"

const LiveFeatured = ({ dataLiveIsFeatured, dataLive, showImage, legendImage, amp }) => {
    let liveFeatured = null;
    if (dataLiveIsFeatured && dataLiveIsFeatured.length) {
        liveFeatured = dataLiveIsFeatured.map((item, index) => {
            return <LiveFeaturedItem data={item} key={index} amp={amp}/>;
        });
    }
    return (
        <>
            <div className={!amp ? style["mainContent__live"] : "mainContent__live"}>
                <div className={!amp ? style["mainContent__live-content"] : "mainContent__live-content"}>
                    {dataLive?.type === "score" && <Score data={dataLive?.data?.match} amp={amp} />}
                    {showImage}
                    {amp && legendImage}
                    <div className={!amp ? style["mainContent__live-title"] : "mainContent__live-title"}>
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.44721 12.1056L6 11.882L5.55279 12.1056L1 14.382V2C1 1.45228 1.45228 1 2 1H10C10.5477 1 11 1.45228 11 2V14.382L6.44721 12.1056Z"
                                stroke="#fe0404"
                                strokeWidth="2"
                            />
                        </svg>
                        <h2>MOMENTOS DESTACADOS</h2>
                    </div>
                    {liveFeatured}
                </div>
            </div>
        </>
    );
};

export { LiveFeatured };
