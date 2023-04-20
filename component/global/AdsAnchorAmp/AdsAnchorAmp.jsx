import Head from "next/head";

const AdsAnchorAMP = () => {
    return <>
        <Head>
            <script async custom-element="amp-script" data-ampdevmode src="https://cdn.ampproject.org/v0/amp-script-0.1.js"/>
            <meta name="amp-script-src" content="sha384-3UOrsUJ8G8hJ3FyKPB2CP8nBDDdI-Plm3rMuNTo2NiA62dviKkhPGwNx-oDuFwl6"/>
        </Head>
        <amp-script layout="fixed-height" height="100" script="text-ads-anchor-script" class="sample">
            <div id="text-ads-anchor" className="text-ads-anchor">Cargando...</div>
            <div className="box-ads-anchor">
                <div className="outside-ads-anchor">
                    <amp-ad width="320" height="100"
                        type="doubleclick"
                        layout="fixed"
                        data-slot="/422621568/larepublica.pe_amp_anchor"
                        data-multi-size="320x100,320x50,300x100,300x50"
                        data-multi-size-validation="true"
                        data-enable-refresh="30">
                    </amp-ad>
                </div>
            </div>
        </amp-script>
        <script id="text-ads-anchor-script" type="text/plain" target="amp-script" dangerouslySetInnerHTML={{__html: `
            const span = document.getElementById('text-ads-anchor');
            span.textContent = "";
        `}}/>
        <style jsx global amp-custom="amp-custom">{`
            .text-ads-anchor:empty + .box-ads-anchor {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #fff;
                z-index: 3;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                transform: translateY(0);
            }
            .outside-ads-anchor {
                padding: 0;
                max-width: 500px;
                margin: 0 auto;
            }
        `}</style>
    </>
}

export { AdsAnchorAMP };