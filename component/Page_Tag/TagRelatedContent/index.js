import style from "../TagAboutContent/TagAboutContent.module.scss";

const TagRelatedContent = ({ data }) => {
    const { tagRelated, extraTag } = data;
    let tagRelatedList;
    if (tagRelated) {
        tagRelatedList = <ul>
            {tagRelated.map(item => (<li>
                <a href={item.slug}>
                    {item.name}
                </a>
            </li>))}
        </ul>
    }
    return (
        <>
            {(tagRelatedList || extraTag) && <div className={`${style.container}`}>
                {tagRelatedList && <div className={style.tagInfo__related}>
                    <h3>Temas relacionados:</h3>
                    {tagRelatedList}
                </div>}
                {extraTag && <div className={`${style.tagInfo__extra}`} dangerouslySetInnerHTML={{ __html: extraTag }} />}
            </div>}
        </>
    );
};

export { TagRelatedContent };
