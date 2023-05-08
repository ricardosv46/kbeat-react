import { SlotAds } from "component/global/AdsManager/SlotAds";
import { AmpSlotAds } from "component/global/AdsManager/AmpSlotAds/AmpSlotAds";

const AdsBody = ({ data, dataAds, amp }) => {
    let showAds = null;
    if (!amp) {
        showAds = <SlotAds type={data.typeAds} data={dataAds || {}} />;
    } else {
        showAds = (
            <AmpSlotAds
                type={data.ads_type}
                data={dataAds}
            />
        );
    }

    return showAds;
};

export { AdsBody };