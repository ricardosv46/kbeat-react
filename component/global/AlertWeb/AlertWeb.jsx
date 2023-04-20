import { CloseButtonContainer } from "component/global/CloseButtonContainer/CloseButtonContainer";
import style from "component/global/AlertWeb/AlertWeb.module.scss";
const AlertWeb = ({ alertWebData = {}, variant = "primary", cssName="" }) => {
    if (alertWebData?.spotlight?.data) {
        const { data } = alertWebData.spotlight;
        const header = (data?.header && data?.header[0]) || "",
            title = (data?.title && data?.title[0]) || "",
            url = (data?.url && data?.url[0]) || "https://larepublica.pe";

        if (url && title) {
            return (
                <CloseButtonContainer>
                    <div className={`w-1000 ${style["alertweb"]} ${style[variant]}`}>
                        <a href={url} className={`${style["alertweb__title"]} ${cssName}`}>
                            <span className={`twinkle ${style["alertweb__twinkle"]}`} />
                            {(header && `${header} - `) + title}
                        </a>
                    </div>
                </CloseButtonContainer>
            );
        }
        return null;
    }
    return null;
};

export { AlertWeb };
