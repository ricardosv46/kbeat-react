function SchemaCronos({ data = [] }) {
    if (!!data.length) {
        const _schemas = data.map(schema=>schema?.content || "").join("");
        return <div id="schema-cronos" dangerouslySetInnerHTML={{__html: _schemas}}></div>;
    }
    return null;
}

export {SchemaCronos};
