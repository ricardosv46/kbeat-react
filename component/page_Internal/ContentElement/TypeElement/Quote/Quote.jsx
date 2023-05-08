import resizePrototype from "util/resizePrototype";
import style from "component/Page_Internal/ContentElement/TypeElement/Quote/Quote.module.scss";

const newResize = new resizePrototype();

const Quote = (props) => {
    let contentQuote = null;

    if (props.data && Object.keys(props.data) && Object.keys(props.data).length > 0) {
        const { data, amp } = props;
        //console.log('data :-----> ',data);

        if (data.content && Object.keys(data.content) && Object.keys(data.content).length > 0) {
            const { content } = data;

            if (content.includes('cite="https://www.facebook')) {
                let regx = /cite=\"(.*?)\"/gi;
                let postFb;
                content.replace(regx, (all, url) => (postFb = url));

                if (amp) {
                    contentQuote = <amp-facebook width="278" height="472" layout="responsive" data-href={postFb}></amp-facebook>;
                }
            } else if (content.includes('class="wp-block-quote"') || content.includes('class=" wp-block-quote"')) {
                const imageQuote = data?.custom_attributes?.body_link?.multimedia.find(media => media.type == "image")?.path || data?.custom_attributes?.body_link?.multimedia.find(media => media.type == "video")?.data?.image_path;
                const validateContent = /<blockquote[^>]*class="[^"]*"[^>]*>(.*?)<\/blockquote>/is;
                let contentInner = validateContent.exec(content)
                if (contentInner?.length > 1) {
                    contentInner = contentInner[1];
                }
                if (amp) {
                    const anchorAmpValidate = /<a href="https:\/\/larepublica\.pe\//g;
                    contentInner = contentInner.replace(anchorAmpValidate, '<a href="/amp/');
                }
                if (contentInner) {
                    contentQuote = (
                        <div className={!amp ? style["wrapper__quote"] : "wrapper__quote"}>
                            {imageQuote && <img loading="lazy" className={!amp ? style["imgQuote"]: "imgQuote"} src={newResize.resizeWapa(imageQuote, 102, 60)} width="60" height="60" alt="lr.pe" />}
                            <blockquote
                                dangerouslySetInnerHTML={{
                                    __html: contentInner,
                                }}
                            />
                        </div>
                    );
                }
            }
        }
    }

    return contentQuote;
};

export { Quote };
