import Script from "next/script"
const InitAdsManager = () => {

    const ANALYTICS = (
        <>
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date);
            gtag("config", "${process.env.KEY_TAGMANAGER}");
            `,
                }}
            />
        </>
    );
    const googletagScriptInit = "var gptadslots = [];var googletag = googletag || {};googletag.cmd = googletag.cmd || [];"
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.KEY_TAGMANAGER}`} />
            {ANALYTICS}
            <Script type="text/javascript" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
            <Script
                dangerouslySetInnerHTML={{
                    __html: googletagScriptInit,
                }}
                
            />
        </>
    );
};

export { InitAdsManager };
