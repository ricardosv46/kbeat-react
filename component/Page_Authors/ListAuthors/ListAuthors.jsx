import style from "component/Page_Authors/ListAuthors/ListAuthors.module.scss"
import { AuthorOverview } from "component/Page_Author_Internal/AuthorOverview/AuthorOverview";
const ListAuthors = ({ data }) => {
    return (
        <section className={style["authors__list"]}>
            {data.map((author, index) => (
                <article className={style["author__card"]} key={`${author?._id}-${index}`}>
                    <AuthorOverview author={author} isAuthor />
                </article>
            ))}
        </section>
    );
};

export { ListAuthors };
