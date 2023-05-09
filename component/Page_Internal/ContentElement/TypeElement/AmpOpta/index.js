const AmpOpta = ({ data }) => {
    const attributes = data
        .trim()
        .replace("<opta-widget ", "")
        .replace("></opta-widget>", "")
        .split(" ")
        .filter((attr) => attr);
    const dataParsed = attributes.map((attr) => attr.replace('="', "~").replace('"', "")).join("¦");
    return (
        <amp-iframe
            width="350"
            layout="responsive"
            frameborder="0"
            height="300"
            sandbox="allow-scripts allow-same-origin"
            frameborder="0"
            src={`https://secure.widget.cloud.opta.net/v3/amp.html?w=${dataParsed}&s=28c97085f542ea8bfde63411a47da936&t=user&l=es_CO`}
        ></amp-iframe>
    );
};
export {AmpOpta};