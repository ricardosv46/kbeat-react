const convertJson = (value, defaultValue) => {
    try {
        return JSON.parse(value);
    } catch (error) {
        return defaultValue || {};
    }
};
export { convertJson };