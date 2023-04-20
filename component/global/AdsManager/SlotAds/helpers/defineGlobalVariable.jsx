const defineGlobalVariable = (slot) => {
    let mappingADS = '';
    let slotADS = '';
    let mappingHd = '';
    let mappingDesktop = '';
    let mappingTablet = '';
    let mappingMobile = '';
    let getMappingHd = slot.mapping_dimensions.filter(m => m.key === 'hd').map(v => v.value)[0];
    let getMappingDesktop = slot.mapping_dimensions.filter(m => m.key === 'desktop').map(v => v.value)[0];
    let getMappingTablet = slot.mapping_dimensions.filter(m => m.key === 'tablet').map(v => v.value)[0];
    let getMappingMobile = slot.mapping_dimensions.filter(m => m.key === 'mobile').map(v => v.value)[0];

    if (getMappingHd && getMappingHd.length > 0) mappingHd = getMappingHd;
    if (getMappingDesktop && getMappingDesktop.length > 0) mappingDesktop = getMappingDesktop;
    if (getMappingTablet && getMappingTablet.length > 0) mappingTablet = getMappingTablet;
    if (getMappingMobile && getMappingMobile.length > 0) mappingMobile = getMappingMobile;

    if (slot.slot !== 'defineOutOfPageSlot') {
        //slot.tag === 'Interstitial'
        if (slot.tag === 'Floating' || slot.tag === 'Floating2' || slot.tag == 'videoinread' || slot.tag == 'Videoinread2'  || slot.tag == 'Videoinread3') {
            mappingADS = '';
            slotADS = `window.slot${slot.tag} = googletag.${slot.slot}('/422621568/${slot.zone}',${slot.dimensions},'${slot.tag}')
                    .addService(googletag.pubads());`;

        } else {
            mappingADS = `window.mapping${slot.tag} = googletag.sizeMapping()
                ${mappingHd}
                ${mappingDesktop}
                ${mappingTablet}
                ${mappingMobile}
                .build(); \n`;

            slotADS = `window.slot${slot.tag} = googletag.${slot.slot}('/422621568/${slot.zone}',${slot.dimensions},'${slot.tag}')
                    .defineSizeMapping(window.mapping${slot.tag})
                    .addService(googletag.pubads());`;
        }/* else {
            mappingADS = ''
            slotADS = ''
        }*/

    } else {
        if (slot.tag === 'Interstitial') {
            mappingADS =  `window.slot${slot.tag} = googletag.${slot.slot}('/422621568/${slot.zone}',googletag.enums.OutOfPageFormat.${slot.tag.toUpperCase()})
            .addService(googletag.pubads());`
            slotADS = '';
        } else {

            mappingADS = '';
            slotADS = `window.slot${slot.tag} = googletag.${slot.slot}('/422621568/${slot.zone}',${slot.dimensions},'${slot.tag}')
                .addService(googletag.pubads());`;
        }

    }

    return `\n ${mappingADS} ${slotADS}`;
}
export { defineGlobalVariable };