const Chartbeat = (props) => {
    //console.log('data analytics==>', props)
    const { section, title, userName, author, tags, keywords } = props;

    const comscore = { vars: { c2: "6906594" }, extraUrlParams: { comscorekw: "amp" } };

    const googleanalytics = {
        vars: {
            account: "UA-6536106-1",
        },
        triggers: {
            defaultPageview: {
                on: "visible",
                request: "pageview",
                vars: {
                    title: title,
                },
                extraUrlParams: {
                    cd6: "La República",
                    /* cd10: horaPublicacion, */
                    cd14: author,
                    cd3: section,
                    cd5: tags,
                    cd2: "nota",
                },
            },
        },
    };

    return (
        <>
            <amp-analytics type="googleanalytics" id="googleanalytics">
                <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(googleanalytics) }} />
            </amp-analytics>
            <amp-analytics type="comscore">
                <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comscore) }} />
            </amp-analytics>
        </>
    );
};

export { Chartbeat };
