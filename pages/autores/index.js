import { Layout } from "Layouts/Layouts";
import { MainAuthors } from "component/Page_Authors/MainAuthors/MainAuthors";
import { getDataAuthors } from "helpers/authros/authors";
import WithAuthor from "hocs/author/withAuthor";
import React, { useEffect, useState } from "react";


const metadataAuthor = {
    slug: "/autor",
    type: "section",
    name: "Autor",
    site: {
        _id: "larepublica",
        name: "La República",
        domain: "https://larepublica.pe",
        __typename: "SiteType",
    },
    metadata_seo: {
        keywords: "Columnista",
        seo_description:
            "Conoce todos los periodistas, autores y escritores de todas las noticias de la actualidad de Perú y el mundo en La República.",
        seo_title: "Periodistas y Autores de las últimas noticias | La República",
        __typename: "MetadataSeoType",
    },
    metadata: [
        { key: "censored", value: "0", __typename: "MetadataType" },
        { key: "sponsored", value: null, __typename: "MetadataType" },
        { key: "color", value: null, __typename: "MetadataType" },
        { key: "logo", value: null, __typename: "MetadataType" },
        { key: "logo_thumb", value: null, __typename: "MetadataType" },
    ],
    __typename: "CategoryType",
};

const Authors = (props) => {
    const { footerMenu, topicsMenu, mainMenu, authors, analyticsSeccion, adsPage, perPage, firstAlertWeb, newsAtemporal, analyticsGral } =
        props;

    const [authorsData, setAuthorsData] = useState(authors?.authors?.data || []);
    const [loading, setLoading] = useState(false);
    const [numPage, setNumPage] = useState(1);
    const [showBtn, setShowBtn] = useState(true);
    const limit = 20;
    const showMore = () => {
        setNumPage(numPage + 1);
    };

    useEffect(() => {
        if (numPage > 1) {
            setLoading(true);
            getDataAuthors(limit, numPage)
                .then((response) => {
                    const newAuthors = response?.authors?.authors?.data || [];
                    if (newAuthors.length > 0) {
                        setAuthorsData([...authorsData, ...newAuthors]);
                        setLoading(false);
                        if (newAuthors.length < limit) {
                            setShowBtn(false);
                        }
                    } else {
                        setShowBtn(false);
                        setLoading(false);
                        return;
                    }
                })
                .catch((err) => {
                    console.log("Error", err);
                });
        }
    }, [numPage]);

    return (
        <Layout
            data={metadataAuthor}
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            firstAlertWeb={firstAlertWeb}
            adsPage={adsPage}
            prebid={"SECTION"}
        >
            <MainAuthors 
                authorsData={authorsData}
                loading={loading}
                showBtn={showBtn}
                showMore={showMore}
                dataAds={adsPage?.ads?.data}
                analyticsGral={analyticsGral}
            />
        </Layout>
    );
};

export default WithAuthor(Authors);
