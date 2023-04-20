import "src/global.scss";
import fetchApi from "services/api/fetchApi";

function MyApp({ Component, pageProps }) {
    if (pageProps.error) {
        return <div>error</div>
    }
    return <Component {...pageProps} />;
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let appProps = {},
    adsPage;
    const mainMenu = await fetchApi("menu", { id: "5f3b422ee3c5391ae1659705" });
    const topicsMenu = await fetchApi("menu", {
        id: "61202c65a3bc283f4b016cf7",
    });
    const footerMenu = await fetchApi("menu", {
        id: "5f3b4614b1e66d41312c56b2",
    });
    
    let customProps = {
        mainMenu,
        footerMenu,
        topicsMenu,
        adsPage,
    };
    if (Component.getInitialProps) {
        appProps = await Component.getInitialProps(ctx);
    }
    if (appProps) {
        if (appProps.error) {
            const relatedArticles = await fetchApi("external", {
                limit: 30,
            });
            ctx.res.statusCode = appProps.error;
            customProps = {
                ...customProps,
                statusCode: appProps.error,
                relatedArticles
            }
        }
        if (appProps.typePage) {
            const { typePage } = appProps;
            adsPage = await fetchApi("ads", { limit: 60 });
            const data = adsPage?.ads?.data?.filter(adItem => adItem?.type?.includes(typePage));
            adsPage = { ads: { data } }
            customProps = {
                ...customProps,
                adsPage
            }
        }
    }


    appProps.pageProps = {
        ...appProps,
        ...customProps,
    };
    return { ...appProps };
};

export default MyApp;
