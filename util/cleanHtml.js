const cleanHtml = (html) => {
    if ((html === null) || (html === ''))
        return false;
    else
        html = html
            .toString()
            .replace(/(<([^>]+)>)/ig, "")
            .replace(/(\r\n|\n|\r|"|&nbsp;|\r\n\t)/gmi, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&#x27;/g, ' ')
            .replace(/(\\r|\\n|\\t)/g, '')
            .replace(/\\t/gmi, '')
            .replace(/\”|\“/gm, '')
            .replace(/"/g, '')
            .replace(/\(|\)|\ツ|\_|\\|\*/gm, '');

    return html;
};

export { cleanHtml };