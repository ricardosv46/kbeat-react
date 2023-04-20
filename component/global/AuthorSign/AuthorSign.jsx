import resizePrototype from 'util/resizePrototype';
import style from 'component/global/AuthorSign/AuthorSign.module.scss';

const newResize = new resizePrototype();

const AuthorSign = ({ data,showImage=true}) => {
    let nameAuthor,
    slugAuthor,
    photo;

    if (data && data[0] && data[0].fullname && data[0].fullname.length) {
        nameAuthor = data[0].fullname;
        slugAuthor = data[0].slug;
    }

    if (data && data[0] && data[0].metadata && data[0].metadata.length) {
        photo = data[0].metadata[5].value;
    }

    return (
        <a className={style["authorSign"]} href={slugAuthor}>
             { showImage && <img loading="lazy"  alt={nameAuthor || "LR"} title={nameAuthor || "LR"} className={style["authorSign__image"]} src={newResize.resizeWapa(photo || '/static/lr/lr_author.png',24,24)} />}
            <span className={`${ showImage ?  style['left'] : ''} ${style["authorSign__name"]}`}>{ !showImage ? 'Por ' : ''} {nameAuthor}</span>
        </a>
    )
}

export { AuthorSign };