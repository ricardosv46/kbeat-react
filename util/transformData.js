export const transform = (content) => {
    if (content) {
        const {data, code} = content;
        if (code === 200 && Object.keys(data).length) {
            const {all} = data;
            const newListado = [];
            all.map(item => {
                const itemListado = {
                    category: item.category,
                    title: item.title,
                    image: item.image,
                    url: item.url,
                };
                newListado.push(itemListado);
            });
            return {list: newListado};
        }
    }
    return {};
};