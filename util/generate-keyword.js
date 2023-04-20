export const generateKeyword = (keywords, type) => {
    const _listTags = keywords?.listTags;
    let lTags = [];

    if (_listTags && _listTags.length) {
        if (typeof _listTags != "string") {
            _listTags.map(item => {
                lTags.push(item?.name || '');
            })
        }
    }

    if (type === 'array' && typeof _listTags != "string") {
        return lTags.length ? lTags : [];
    }

    if (type === 'array' && typeof _listTags == "string") {
        return _listTags.split(",");
    }

    if (type === "string") {
        return lTags.length ? lTags.join(",") : '';
    }

    return [];

}