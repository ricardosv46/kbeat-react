import { validateGeolocation } from 'helpers/seoData/geolocalSections';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })
        const initialProps = await Document.getInitialProps(ctx);
        const { req, res } = ctx;
        let lang = "es";
        if (res?.statusCode == 200 && req?.url) {
            lang = validateGeolocation(req.url || "") || "es"
        }
        return { ...initialProps, lang };
    }

    render() {
        const { lang } = this.props;
        return (
            <Html lang={lang}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;