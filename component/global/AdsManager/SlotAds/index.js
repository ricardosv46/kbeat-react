import { convertJson } from "../../../../util/convertJson";
import { defineGlobalVariable } from "./helpers/defineGlobalVariable"

const SlotAds = ({ data, type, hideAdTop }) => {

    const LATERAL_ADS = [
        "Lateral_Left",
        "Lateral_Right",
        /*"Sticky",
        "Middle1_Right",
        "Middle2_Right",
        "Middle2",
        "Inline",
        "Inline2",
        "Inline3", */
    ];
    let slotAds = null,
        styleAds = "";
    /** @PROPS:
     * data: all the ads
     * type: type of the ad, will be used to filter data
     */
    // Filter ad by type:
    let scriptAds;
    let defineSlotAdScript;
    const currentAd = data?.find((ad) => ad.tag === type);
    if (!!currentAd) {
        // define global variable for ad
        defineSlotAdScript = defineGlobalVariable(currentAd);
        // get Data for currentSlot
        const weightAds = currentAd?.weight;
        // set className for curentSlot
        const classAds = `atm-banner-${type.toLowerCase()} ads_${type}`;
        /* Create function for set Ad Slot */
        scriptAds = `
        window.addEventListener("load", function(event) {
            if( window.googletag && googletag.apiReady ){
            ${defineSlotAdScript}
            ${currentAd.slot !== "defineOutOfPageSlot" ? `googletag.cmd.push(function () {
                gptadslots[${weightAds}]= window.slot${type};
                googletag.display("${type}");
            })` : ""};
            }
        });
        `;

        const listStylesByQueries = currentAd?.mapping_dimensions.map((mediaquery) => {
            /* LIMPIANDO INFO */
            const data = mediaquery?.value?.trim()?.replace(".addSize(", "[").replace(")", "]").replace(/'/g, '"').replace(" ", "") || "[]";
            /* SE CREA UN HELPER PARA TRANSFORMAR JSON */
            const querie = convertJson(data, []);
            const minWidth = querie[0] ? querie[0][0] : null;
            const majorHeight = querie[1]?.reduce((prev, curr) => (curr[1] > prev ? curr[1] : prev), 0);

            return {
                minWidth,
                majorHeight,
            };
        });
        const queriedStyles = listStylesByQueries.map((queryItem, index) => {
            const { minWidth, majorHeight } = queryItem;
            const maxWidth = listStylesByQueries[index - 1]?.minWidth;
            if (!!majorHeight) {
                return `@media screen and (min-width: ${minWidth}px)
                ${!!maxWidth ? ` and (max-width: ${maxWidth - 1}px)` : ""}{
                    .ads_${type}-container{
                        display: flex;
                        height: ${majorHeight}px;
                    }
                    ${type == "Top" ? `
                    header{
                        transition: transform 150ms ease-in-out;
                    }
                    @media screen and (max-width: 999px){
                        ${hideAdTop ? `
                        .ads_${type}-container{
                            display: none;
                        }
                        `
                            : `header.hide-ad-top{
                           transform: translateY(${-majorHeight}px);
                        }`
                        }}
                    `: ""}
                }`;
            }
        });
        styleAds = queriedStyles.join("");
        if (LATERAL_ADS.includes(type) || styleAds == "") {
            slotAds = (
                <>
                    <div id={type} className={classAds} />
                    <style>{styleAds}</style>
                    <script dangerouslySetInnerHTML={{ __html: scriptAds }} />
                </>
            );
        } else {
            slotAds = (
                <aside className={`ad-container ads_${type}-container`}>
                    <div id={type} className={classAds} />
                    <style>{styleAds}</style>
                    <script dangerouslySetInnerHTML={{ __html: scriptAds }} />
                </aside>
            );
        }
    }
    return (
        <>
            {slotAds}
        </>
    );
};

export { SlotAds };
