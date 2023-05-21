// TODO: review social media in app y add nofollow

import { IconFacebook } from "component/global/Icon/IconFacebook";
import { IconGoogleNews } from "component/global/Icon/IconGoogleNews";
import { IconTwitter } from "component/global/Icon/IconTwitter";
import { IconWhatsapp } from "component/global/Icon/IconWhatsapp";

import style from "component/global/BtnShared/BtnShared.module.scss";




const BtnShared = (props,header=false) => {


    const socialMedia = {
        facebook: {
            label: "compartir la nota por facebook",
            href: slug => `https://www.facebook.com/sharer.php?u=${slug}`,
            component: <IconFacebook height={header ? 20 : 15} width={header ? 20 : 15} />,
            text: ""
        },
        twitter: {
            href: (slug, title) => `https://twitter.com/intent/tweet?text=${encodeURI(title)} ${slug}&via=${process.env.SITE_TWITTER_ACCOUNT}`,
            label: "compartir la nota por twitter",
            component: <IconTwitter height={header ? 20 : 15} width={header ? 20 : 15} />,
            text: ""
        },
        whatsapp: {
            href: (slug, title) => `https://api.whatsapp.com/send?p&text=${encodeURI(title)} ${slug}`,
            label: "compartir la nota por whatsapp",
            component: <IconWhatsapp height={header ? 20 : 15} width={header ? 20 : 15} />,
            text: ""
        },
        googlenews: {
            href: () => process.env.SITE_NEWS_GOOGLE,
            component: <IconGoogleNews height="17" width="17"/>,
            text: "Siguenos en Google News"
        }
    };

    const { type = "", data = {}, variant = "" } = props;
    const cssNameModule = style[variant];

    if (!socialMedia[type]) {
        return <span>Configurar la red social</span>;
    }

    const TitleShared = data?.title || "";
    const SlugShared = `https://larepublica.pe${data?.slug || ""}`;

    return <a
        href={socialMedia[type]["href"](SlugShared, TitleShared)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={socialMedia[type]["label"]}
        className={`${style["item-social"]} ${header ? style[`bg-share`] : style[`bg-${type}`]} ${header ? style[`item-social-36`] : ''} ${cssNameModule}`}>
            {socialMedia[type]["component"]}
            {socialMedia[type]["text"]}
    </a>
};

export { BtnShared };
