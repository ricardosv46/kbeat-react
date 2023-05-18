const AmpSlotAds = ({ data, type, section }) => {
    const adFiltered = data?.find((ad) => ad.tag == type);
    if (adFiltered) {
        const dimensions = JSON.parse(adFiltered.dimensions);
        const sizes = dimensions.map((dimension) => dimension[0] + "x" + dimension[1]).join(",");
        const ampWidth = dimensions.map((dimension) => dimension[0]).reduce((prev, current) => (current > prev ? current : prev), 0);
        const ampHeight = dimensions.map((dimension) => dimension[1]).reduce((prev, current) => (current > prev ? current : prev), 0);

        //console.log('>>> sizes -ads : ',sizes);
        return (
            <div className="t-a-center">
                {(type == "amp_flying" && (
                    <amp-fx-flying-carpet height={ampHeight}>
                        <amp-ad
                            width={ampWidth}
                            height={ampHeight}
                            type="doubleclick"
                            data-slot={"/422621568/" + adFiltered.zone}
                            layout="fixed"
                            data-multi-size={sizes}
                            data-enable-refresh="30"
                            data-loading-strategy="1"
                        ></amp-ad>
                    </amp-fx-flying-carpet>
                )) ||
                    (type == "amp_Sticky" && (
                        <amp-sticky-ad layout="nodisplay">
                            <amp-ad
                                width={ampWidth}
                                height={ampHeight}
                                type="doubleclick"
                                data-slot={"/422621568/" + adFiltered.zone}
                                layout="fixed"
                                data-multi-size={sizes}
                                data-enable-refresh="30"
                                data-loading-strategy="1"
                            ></amp-ad>
                        </amp-sticky-ad>
                    )) ||
                    (type == "amp_Videoinread" && (
                        <amp-ad width="300" height="1" type="teads" data-pid="91277" layout="responsive" />
                    ))
                    || (
                        <amp-ad
                            width={ampWidth}
                            height={ampHeight}
                            type="doubleclick"
                            data-slot={"/422621568/" + adFiltered.zone}
                            data-multi-size={sizes}
                            data-enable-refresh="30"
                            data-loading-strategy="1"
                        ></amp-ad>
                    )}
                <style jsx global amp-custom="amp-custom">{`
                    .t-a-center {
                        margin: 10px auto;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    } else {
        return <></>;
    }
};
export { AmpSlotAds };
