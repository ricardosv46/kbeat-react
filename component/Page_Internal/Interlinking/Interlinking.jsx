import style from "component/Page_Internal/Interlinking/Interlinking.module.scss";

const Interlinking = ({ data, section, amp }) => {
    if (data?.length > 0) {
        const itemsList = data?.map((item, key) => {
            let itemSlug = item?.url;
            let title = item?.title;

            /* Tomo el caso de amp */
            if (amp) {
                if (itemSlug.startsWith("https://larepublica.pe/")) {
                    itemSlug = item.url.replace("https://larepublica.pe/", "https://larepublica.pe/amp/");
                } else if (itemSlug.startsWith("/")){
                    itemSlug = item.url.replace("/", "https://larepublica.pe/amp/");
                }
            }

            return (
                <li key={key} className={!amp ? style["interlinking__item"]: "interlinking__item"}>
                    <a href={itemSlug} className={!amp ? style["interlinking__link"] : "interlinking__link"}>
                        {title}
                    </a>
                </li>
            );
        });
        return (
                <ul className={!amp ? style["main__interlinking"] : "main__interlinking"}>{itemsList}</ul>
        );
    }
    return null;
};

export { Interlinking };