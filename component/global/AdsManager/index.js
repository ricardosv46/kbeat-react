const AdsManager = props => {
    let contentScript;
    let typePage = '';
    let namePage = '';
    let censured = '';
    let programmatic = '';
    let sponsored = '';
    let tags = ''
    let getCategoriesName;
    let getTargetingCensured;
    //let getTargetingProgrammatic;
    let getTargetingSponsored;
    const {showMediaKit} = props;
    if (props.data && Object.keys(props.data) && Object.keys(props.data).length > 0) {
        const {data: datos} = props;
        //console.log('>>> datos - ads : ',datos);
        //INTERNA
        //if (datos.article && Object.keys(datos.article) && Object.keys(datos.article).length) {
        if (datos && Object.keys(datos) && datos && datos.type && (datos.type === 'article' || datos.type === 'gallery' || datos.type === 'live') ){
            //const {article} = datos;

            getTargetingCensured = datos?.metadata?.filter(c => c.key === 'censored').map(v => v.value);
            getTargetingSponsored = datos?.metadata?.filter(c => c.key === 'sponsored').map(v => v.value);

            typePage = 'Articulo';
            //getCategoriesName = article.data.categories[0].name;
            getCategoriesName = datos?.data?.categories[0]?.name || '';

            if (getCategoriesName && getCategoriesName.length > 0) {
                namePage = getCategoriesName;
            }

            if (getTargetingCensured && getTargetingCensured[0] && getTargetingCensured[0] === '1') {
                censured = 'si';
                programmatic = 'no';
                sponsored = 'si';

                if (getTargetingSponsored && getTargetingSponsored[0] && getTargetingSponsored[0].length > 0) {
                    namePage = getTargetingSponsored[0];
                }
            }

            if (datos.data && datos.data.tags) {
                const _tags = (datos.data.tags?.map(tag => tag.name) || []);
                if (_tags && _tags.length) {
                    tags = _tags.join(',');
                }
            }

            //HOME
        } else if (datos.site && Object.keys(datos.site) && Object.keys(datos.site).length && datos.site.metadata) {
            const {site} = datos;
            getTargetingCensured = site.metadata.filter(c => c.key === 'censored').map(v => v.value);
            getTargetingSponsored = site.metadata.filter(c => c.key === 'sponsored').map(v => v.value);
            namePage = 'Portada';
            typePage = 'Portada';

            //SECTION
        } else {
            getTargetingCensured = datos?.metadata?.filter(c => c.key === 'censored').map(v => v.value);
            getTargetingSponsored = datos?.metadata?.filter(c => c.key === 'sponsored').map(v => v.value);

            if (datos.type === 'section') {
                typePage = 'Portada';
                namePage = datos?.name || '';
            }
        }

        if (getTargetingCensured && getTargetingCensured[0] && getTargetingCensured[0] === '1') {

            censured = 'si';
            programmatic = 'no';
            sponsored = 'si';

            if (getTargetingSponsored && getTargetingSponsored[0] && getTargetingSponsored[0].length > 0) {
                namePage = getTargetingSponsored[0];
            }

        } else {
            censured = 'no';
            programmatic = 'si';
            sponsored = 'no';
            /* namePage = 'Portada'; */
        }

        if (getTargetingCensured && getTargetingCensured[0] && getTargetingCensured[0] === '0') {
            censured = 'no';
            programmatic = 'si';
            sponsored = 'no';
        }
    }
    contentScript = `
        window.addEventListener("load", function(event) {
        if (window.googletag && googletag.apiReady) {
            googletag.cmd.push(function() {
            
            googletag.pubads().setTargeting('LR_tipo','${typePage}');
            googletag.pubads().setTargeting('LR_Seccion','${namePage}');
            googletag.pubads().setTargeting('LR_Tag','${tags}');
            
            googletag.pubads().setTargeting('patrocinado','${sponsored}');
            googletag.pubads().setTargeting('programatica', '${programmatic}');
            googletag.pubads().setTargeting('censurado','${censured}');
            
            googletag.pubads().setTargeting('videoslider','no');${ showMediaKit?`
            googletag.pubads().setTargeting('demo',dfp_demo);
            `:"" }
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.pubads().enableAsyncRendering();
            // C) Enable lazy loading with...
            googletag.pubads().enableLazyLoad({
                // Fetch slots within 5 viewports.
                fetchMarginPercent: 500,
                // Render slots within 2 viewports.
                renderMarginPercent: 200,
                // Double the above values on mobile, where viewports are smaller
                // and users tend to scroll faster.
                mobileScaling: 2.0
              });
            // Register event handlers to observe lazy loading behavior.
            googletag.pubads().addEventListener('impressionViewable', function(event) {
                /* 
                CON ESTE LOG PUEDO VER SI ESTA REGISTRANDO EL MOMENTO EN QUE SE CARGO LA PUBLICIDAD
                
                console.log('impressionViewable', event.slot.getSlotElementId()); 
                */
                updateSlotStatus(event.slot.getSlotElementId());
              });
      
            function updateSlotStatus(slotId) {
                if(slotId!=="videoinread" && slotId!=="Floating" && slotId!=="Floating2" && slotId!=="Videoinread2"  && slotId!=="Videoinread3" ){
                    setTimeout(function(){
                        /* 
                        CON ESTE LOG PUEDO VER SI SE ESTA REGISTRANDO EL MOMENTO EN EL QUE SE RECARGA LA PUBLICIDAD
                        console.log('>>> updateSlotStatus : ',slotId); 
                        */
                        googletag.pubads().refresh([window["slot"+slotId]]);
                    },30 * 1000);
                }
            }
            googletag.enableServices();
            
            });
        }
        });
    `;

    return <>
        <script id={"contentScript"} defer dangerouslySetInnerHTML={{__html: contentScript}}/>
    </>
}

export { AdsManager };  