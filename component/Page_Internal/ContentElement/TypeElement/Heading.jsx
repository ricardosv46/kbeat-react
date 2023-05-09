import React from 'react';
const Heading = props => {
    let contentHeading = null;
    let typeHeading;
    let dataHeading = null;

    const regExScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gm;
    const regExIframe = /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gm;

    if (props.data && Object.keys(props.data) && Object.keys(props.data).length > 0) {
        const { data } = props;

        if (data.attributes && Object.keys(data.attributes) && Object.keys(data.attributes).length > 0 && data.attributes.level) {
            const { attributes: { level = {} } } = data;
            typeHeading = `h${level}`;
        }
        if (data.custom && Object.keys(data.custom) && Object.keys(data.custom).length > 0
            && data.custom.level && data.custom.level.length > 0) {
            const { custom: { level = {} } } = data;
            typeHeading = `h${level}`;
        }

        if (data.content && data.content.length > 0 && data.content.includes(typeHeading)) {
            if (props.amp) {
                dataHeading = {
                    dangerouslySetInnerHTML: {
                        __html: data.content
                            .replace(regExScript, '')
                            .replace(regExIframe, '')
                            .replace(/(<\/?h)([0-6]>)/ig, '')
                            .replace(/ping=".*?"/, '')
                            .replace(/spellcheck=".*?"/, '')
                            .replace(/ao_us_href=".*?"/, '')
                            .replace(/that=".*?"/, '')
                            .replace(/alt=".*?"/, ''),
                    },
                };
            } else {
                dataHeading = {
                    dangerouslySetInnerHTML: {
                        __html: data.content.replace(/(<\/?h)([0-6]>)/ig, '')
                    },
                };
            }
        
            contentHeading = React.createElement(typeHeading, dataHeading);
        }
    }

    return contentHeading
}

export { Heading };