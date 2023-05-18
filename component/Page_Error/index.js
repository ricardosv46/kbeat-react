import { useAmp } from "next/amp";
import { Layout } from "Layouts/Layouts";
import { AmpLayout } from "Layouts/AmpLayout";
import { pageError__container } from "./pageError.module.scss";
/* import { Moreseen } from "component/Page_Section/Moreseen/Moreseen"; */
import { HeaderAmp } from "component/global/Header/HeaderAmp/HeaderAmp";
import { Moreseen } from "component/global/Moreseen/Moreseen";

const PageError = (props) => {
    const { statusCode, adsPage, footerMenu, mainMenu, relatedArticles, firstAlertWeb, secondAlertWeb, topicsMenu } = props;
    const isAmp = useAmp();
    const metadataError = {
        site: {
            type: "section",
            name: "Error: Página no encontrada",
            slug: "pagina-no-encontrada",
            metadata_seo: {},
            metadata: [
                { key: "censored", value: "0", __typename: "MetadataType" },
                { key: "sponsored", value: null, __typename: "MetadataType" },
                { key: "color", value: null, __typename: "MetadataType" },
                { key: "logo", value: null, __typename: "MetadataType" },
                { key: "logo_thumb", value: null, __typename: "MetadataType" },
            ],
        },
    };
    const errorInfo = {
        404: {
            image: "/static/404.png",
            statusMessage:
                "El contenido que buscas no está disponible o no existe<br/>Haz click <a href='/'>aquí</a> para regresar al inicio o revisa las notas que te recomendamos a continuación",
        },
    };
    const currentErrorInfo = errorInfo[statusCode],
        errorImage = (currentErrorInfo?.image && (
            <img alt={`Error ${statusCode}`} className="pageError__image" src={currentErrorInfo.image} />
        )) || <h2>{statusCode}</h2>,
        errorMessage = currentErrorInfo?.statusMessage || "No contamos con información en esta página";
    if (!isAmp) {
        return (
            <>
                <Layout dataHeader={mainMenu} dataFooter={footerMenu} adsPage={adsPage} data={metadataError} prebid="HOME">
                    <div className={pageError__container}>
                        {errorImage}
                        <h1 className="pageError__header">Página no disponible</h1>
                        <p
                            className="pageError__message"
                            dangerouslySetInnerHTML={{
                                __html: errorMessage,
                            }}
                        />
                    </div>
                    <Moreseen data={relatedArticles} title="LOS MÁS VISTOS:" />
                </Layout>
            </>
        );
    } else {
        return <>
            <AmpLayout data={metadataError} dataHeader={mainMenu} dataFooter={footerMenu}>
                <HeaderAmp data={mainMenu} topicsMenu={topicsMenu} firstAlertWeb={firstAlertWeb} secondAlertWeb={secondAlertWeb} />
                <div className="container__amp-internal">
                    {errorImage}
                    <h1 className="pageError__header">Página no disponible</h1>
                    <p
                        className="pageError__message"
                        dangerouslySetInnerHTML={{
                            __html: errorMessage,
                        }}
                    />
                </div>
                <style jsx global amp-custom="amp-custom">{`
                    .container__amp-internal {
                        max-width: 600px;
                        margin: 20px auto auto;
                        padding: 0 10px;
                    }
                    .pageError__header {
                        font-size: 36px;
                        font-family: PT serif;
                        margin: 30px 0 0;
                        padding: 0;
                        color: #000;
                        text-align: center;
                    }
                    .pageError__image {
                        display: block;
                        margin: 0 auto;
                        max-width: 100%
                        text-align: center;
                        width: 300px;
                        margin-top: 82px;
                    }
                    .pageError__message {
                        color: #444;
                        font-family: sans-serif;
                        line-height: 20px;
                        font-size: 14px;
                        margin: 1.4rem 0;
                        text-align: center;
                    }
                    .pageError__message a {
                        color: #000;
                        font-weight: 900;
                        text-decoration: none;
                    }
                    .wrapperMediaObject h4 {
                        color: #000;
                        font-family: sans-serif;
                        font-weight: 900;
                    }
                `}</style>
            </AmpLayout>
        </>;
    }
};

export { PageError };
