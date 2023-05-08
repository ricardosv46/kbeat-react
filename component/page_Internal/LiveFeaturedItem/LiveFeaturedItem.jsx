import { useRef, useLayoutEffect } from "react";
import style from "component/Page_Internal/LiveFeaturedItem/LiveFeaturedItem.module.scss";

const LiveFeaturedItem = ({ data, amp }) => {
    let liveIsFeatured__date = data?.date.split(" ")[1].split(":")[0] + ":" + data?.date.split(" ")[1].split(":")[1];

    let liveIsFeatured__headline = data?.headline;

    let liveIsFeatured__content = data?.content;

    const elRef = useRef();

    const contentHasAnAncor = (str) => {
        elRef.current.firstElementChild?.childNodes.forEach((el) => {
            if (el.nodeName === "A") {
                el.style.color = "#fe0404";
            }
        });
    };

    useLayoutEffect(() => {
        if (elRef.current?.firstElementChild) {
            elRef.current.firstElementChild.style.display = "inherit";
            contentHasAnAncor(liveIsFeatured__content);
        }
    }, []);

    return (
        <>
            <div className={!amp ? style["liveIsFeatured__container"] : "liveIsFeatured__container"}>
                <a className={!amp ? style["liveIsFeatured__date"] : "liveIsFeatured__date"} href={`#${data.id}`}>
                    <span>{liveIsFeatured__date}</span>
                </a>
                <div className={!amp ? style["liveIsFeatured__content"] : "liveIsFeatured__content"}>
                    <h5 className={!amp ? style["featuredlbp__headline"] : "featuredlbp__headline"}>{liveIsFeatured__headline}</h5>
                    <div
                        ref={elRef}
                        dangerouslySetInnerHTML={{
                            __html: liveIsFeatured__content,
                            className: "liveIsFeatured__item"
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export { LiveFeaturedItem };
