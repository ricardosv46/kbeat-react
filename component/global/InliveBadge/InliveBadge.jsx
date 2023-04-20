import { IconSignalStream } from "component/global/Icon/IconSignalStream";
import style from "component/global/InliveBadge/InliveBadge.module.scss";

const InliveBadge = ({ label = "" , wIcon = "21", hIcon = "15", variant = "medium"}) => {
    return (
        <span className={`${style[variant]} ${style["inlive-badge"]} d-i-flex align-center`}>
            <IconSignalStream width={wIcon} height={hIcon} className="twinkle"/>
            {label}
        </span>
    );
};

export { InliveBadge };
