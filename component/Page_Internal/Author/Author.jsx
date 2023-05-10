import style from "component/Page_Internal/Author/Author.module.scss";
import resizePrototype from "util/resizePrototype";

 const authorDefault = [{
    fullname: "La República",
    metadata: [
    {key: 'email', value: ''},
    {key: 'url_twitter', value: ''},
    {key: 'url_linkedin', value: null},
    {key: 'url_facebook', value: null},
    {key: 'url_website', value: null},
    {key: 'url_photo', value: process.env.LOGO_LR_AUTHOR},
    {key: 'url_photo_origin', value: process.env.LOGO_LR_AUTHOR}],
    slug: "",
    _id: ""
}]


const Author = ({ data, amp,subText }) => {

    const newResize = new resizePrototype();

    let author_name = null;
    let author_slug = null;
    let show_image = null;
    let imgAuthorPath = null;
    let show_author_content = null;
    let showAuthor = null;
    let authorName;

        const authors = data?.data?.authors?.length>0 ? data.data.authors  : authorDefault;

        if (authors.length > 1) {
            showAuthor = authors.map((author, key) => {
                imgAuthorPath = author.metadata?.find((meta) => meta.key == "url_photo")?.value || process.env.LOGO_LR_AUTHOR;
                authorName =  author.fullname;
                if (amp) {
                    show_image = <amp-img alt={authorName || ""} title={authorName || ""} layout="responsive" src={newResize.resizeWapa(imgAuthorPath,24,24)} width="24" height="24" />
                } else {
                    show_image = <img loading="lazy" itemProp="image" alt={author_name || "Foto del autor"} src={newResize.resizeWapa(imgAuthorPath,24,24)} width="24" height="24" />;
        
                }
                return (
                    <a href={author.slug} itemProp="url" className={!amp ? style["author__redSocial_link"] : "author__redSocial_link"} key={key}>
                        <div className={!amp ? style["author__image"] : "author__image"}>{show_image}</div>
                        {subText}{authorName}
                    </a>
                )
            })

        } else {
            authorName = authors[0].fullname;
            author_slug = authors[0].slug;
            imgAuthorPath = authors[0].metadata?.find((meta) => meta.key == "url_photo")?.value || process.env.LOGO_LR_AUTHOR;
            if (amp) {
                show_image = <amp-img alt={authorName || "Foto del autor"} layout="responsive" src={newResize.resizeWapa(imgAuthorPath,24,24)} width="24" height="24" />
            } else {
                show_image = <img loading="lazy" itemProp="image" alt={author_name || "Foto del autor"} src={newResize.resizeWapa(imgAuthorPath,24,24)} width="24" height="24" />;
    
            }
            showAuthor = (
                <a href={author_slug} itemProp="url" className={!amp ? style["author__redSocial_link"] : "author__redSocial_link"}>
                    <div className={!amp ? style["author__image"] : "author__image"}>{show_image}</div>
                    {subText}{authorName}
                </a>
            )
        }
        show_author_content = (
                <div className={!amp ? style["comp__author"] : "comp__author"}>
                    {showAuthor}
                </div>
        )

    return show_author_content;
};

export { Author };
