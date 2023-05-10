import { getDataArticlesByAuthor } from "helpers/authros/authors";
import WithAuthorInternal from "hocs/author/withAuthorInternal";
import { Layout } from "Layouts/Layouts";
import React, { useEffect, useState } from "react";
import { AuthorInternalComp } from "component/Page_Author_Internal/AuthorInternal/AuthorInternal";

const AuthorInternal = (props) => {
    const {
        footerMenu,
        topicsMenu,
        mainMenu,
        newsAtemporal,
        analyticsGral,
        adsPage,
        perPage,
        firstAlertWeb,
        author_data,
        articlesByAuthor,
    } = props;
    const [articlesData, setArticlesData] = useState(articlesByAuthor?.articles?.data || []);

    const [loading, setLoading] = useState(false);
    const [numPage, setNumPage] = useState(1);
    const [showBtn, setShowBtn] = useState(true);
    const limit = 30;

    const authorId = author_data.author?._id;

    const showMore = () => {
        setNumPage(numPage + 1);
    };

    useEffect(() => {
        if (numPage > 1) {
            setLoading(true);
            getDataArticlesByAuthor(limit, numPage, authorId)
                .then((response) => {
                    const newArticles = response?.articles?.articles?.data || [];
                    if (newArticles.length > 0) {
                        fetch(`${process.env.SITE_DOMAIN_URL}/comscoreview.txt?token=${Math.floor(Math.random() * 500000) + 1}`)
                        .then(response => {
                            if (!response.ok) throw Error(response.status);
                            return response;
                        })
                        .then(response => console.log("ok"))
                        .catch(error => console.log(error));
                        setArticlesData([...articlesData, ...newArticles]);
                        setLoading(false);
                        if (newArticles.length < limit) {
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
            adsPage={adsPage}
            data={author_data?.author}
            articlesData={articlesData}
            dataHeader={mainMenu}
            dataFooter={footerMenu}
            topicMenu={topicsMenu}
            firstAlertWeb={firstAlertWeb}
            prebid={"INTERNA"}
        >
            <AuthorInternalComp
                author={author_data?.author || []}
                articlesData={articlesData}
                showMore={showMore}
                loading={loading}
                showBtn={showBtn}
                newsAtemporal={newsAtemporal}
                analyticsGral={analyticsGral}
                adsPage={adsPage}
            />
        </Layout>
    );
};

export default WithAuthorInternal(AuthorInternal);
