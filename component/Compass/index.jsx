import Head from "next/head";
import Script from "next/script"
const Compass = ({ amp = false, articleData, meta }) => {
    let metaDataArticles = null;

    if (amp) {
        if (articleData) {
            const authors = articleData?.user_name;
            const sections = articleData?.meta_article_sections?.sort((category) => (category.primary ? 1 : -1))
                .map((category) => category.name)?.join(";");
            const tags = articleData.meta_article_tags?.map((tag) => tag.name)?.join(";");
            metaDataArticles = (
                <>
                    {authors && <meta property="mrf:authors" content={authors} />}
                    {sections && <meta property="mrf:sections" content={sections} />}
                    {tags && <meta property="mrf:tags" content={tags} />}
                </>
            );
        }
        const setting = {
            vars: {
                accountId: "1693",
            },
        };
        if (meta) {
            return metaDataArticles;
        }
        return (
            <>
                <amp-analytics config="https://events.newsroom.bi/amp.v1.json" data-credentials="include">
                    <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(setting) }} />
                </amp-analytics>
            </>
        );
    } else {
        if (articleData) {
            const authors = articleData?.user?.username;
            const sections = articleData?.data?.categories?.sort((category) => (category.primary ? 1 : -1))
                .map((category) => category.name)?.join(";");
            const tags = articleData?.data?.tags?.map((tag) => tag.name)?.join(";");
            metaDataArticles = (
                <>
                    {authors && <meta property="mrf:authors" content={authors} />}
                    {sections && <meta property="mrf:sections" content={sections} />}
                    {tags && <meta property="mrf:tags" content={tags} />}
                </>
            );
        }
        return (
            <>
                <Script>
                    {`function e(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=document.createElement("script");c.src=e,t?c.type="module":(c.async=!0,c.type="text/javascript",c.setAttribute("nomodule",""));var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(c,n)}function t(t,c,n){var a,o,r;null!==(a=t.marfeel)&&void 0!==a||(t.marfeel={}),null!==(o=(r=t.marfeel).cmd)&&void 0!==o||(r.cmd=[]),t.marfeel.config=n,t.marfeel.config.accountId=c;var i="https://sdk.mrf.io/statics";e("".concat(i,"/marfeel-sdk.js?id=").concat(c),!0),e("".concat(i,"/marfeel-sdk.es5.js?id=").concat(c),!1)}!function(e,c){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t(e,c,n)}(window,1693,{} /*config*/);`}
                </Script>
                <Head>
                    {metaDataArticles}
                </Head>
            </>
        );
    }
};

export { Compass };
