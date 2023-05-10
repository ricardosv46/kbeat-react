import Script from "next/script";

const MgId = ({amp}) => {
    if (amp) {
        return <amp-embed width="600" height="600" layout="responsive" type="mgid" data-publisher="larepublica.pe" data-widget="1458420" data-container="M878384ScriptRootC1458420" data-block-on-consent="_till_responded" > </amp-embed>
    }

    return (<>
        <div id="M878384ScriptRootC1446817"></div>
        <Script src="https://jsc.mgid.com/l/a/larepublica.pe.1446817.js" strategy="afterInteractive" />
    </>
    )
}

export { MgId };