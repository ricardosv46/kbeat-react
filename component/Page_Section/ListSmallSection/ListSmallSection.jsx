import style from "component/Page_Section/ListSmallSection/ListSmallSection.module.scss";
import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const ListSmallSection = ({ data }) => {
    let showItems = null;
    if(data && Object.keys(data) && Object.keys(data).length > 0){
        const itemList = data.map ((item, key) => {
            let image, slug, title = null;
            if(item.type === 'article'){
                image = item?.data?.multimedia?.find(media => media.type === 'image')?.path || item?.data?.multimedia?.find(media=>media.type=='video')?.data?.image_path || process.env.IMAGE_DEFAULT_1250x735;
                slug = item.slug;
                title = item.title;
            } else {
                image = item?.image?.url || process.env.IMAGE_DEFAULT_1250x735;
                slug = item.url;
                title = item.title;
            }
            return (
                <div className={`${style["list__small--item"]} extend-link--outside`} key={key}>
                    <figure>
                        <img  
                            src={newResize.resizeWapa(image, 96,60)}
                            decoding="async"
                            alt={title}     
                            width={96}
                            height={60}
                            title={title}
                            className={`${style["list__small--image"]}`}
                        />
                    </figure>
                    <a href={slug} className={`${style["list__small--content"]} extend-link`}>
                        <h2 className={style["list__small--title"]}>{title}</h2>
                    </a>
                </div>
            )
        })
        showItems = <div className={style["list__small"]}>
            {itemList}
        </div>

    }
    return showItems;
};

export { ListSmallSection };
