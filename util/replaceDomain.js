const replaceDomain = (url) => {
    let updateUrl = "";
    if (url) {
        updateUrl = url.replace(/www.larepublica.pe/gi, "larepublica.pe");
    }
    return updateUrl;
};

export default replaceDomain;
