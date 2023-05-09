import { Paragraph } from "component/Page_Internal/ContentElement/TypeElement/Paragraph";
import { Table } from "component/Page_Internal/ContentElement/TypeElement/Table";
import { Quote } from "component/Page_Internal/ContentElement/TypeElement/Quote/Quote";
import { Heading } from "component/Page_Internal/ContentElement/TypeElement/Heading";
import { Image } from "component/Page_Internal/ContentElement/TypeElement/Image";
import { List } from "component/Page_Internal/ContentElement/TypeElement/List";
import { Inlive } from "component/Page_Internal/ContentElement/TypeInlive/Inlive";
import { AdsBody } from "component/Page_Internal/ContentElement/TypeElement/AdsBody/AdsBody";
import { ContentHtml } from "component/Page_Internal/ContentElement/TypeElement/Html/ContentHtml";
import { ContentEmbed } from "component/Page_Internal/ContentElement/TypeElement/Embed";
// import { CoreEmbed } from "component/page_internal/contentElement/typeElement/coreEmbed";

const ContentElement = (props) => {
    // console.log('props-- elements>>>', props)
    let showContentElement = null;
    let sectionNameImage = null;
    if (props.sectionName && props.sectionName.length > 0) {
        sectionNameImage = props.sectionName;
    }

    if (props.data && Object.keys(props.data) && Object.keys(props.data).length > 0) {
        const { data, amp } = props;

        showContentElement = data.map((element, key) => {
            if (element.type === "ads") {
                return <AdsBody data={element} dataAds={props?.adsPage?.ads?.data || []} amp={props.amp} key={`${element.type}-${key}`} />;
            }
            if (element.type === "paragraph" && !element.content.includes('<div class="fb-post"')) {
                return <Paragraph data={element} amp={props.amp} key={`paragraph-${key}`} />;
            }

            if (element.type.includes("table")) {
                return <Table data={element} key={`table-${key}`} />;
            }

            if (element.type === "quote") {
                return <Quote data={element} amp={amp} key={`quote-${key}`} />;
            }

            if (element.type === "heading") {
                return <Heading data={element} amp={props.amp} key={`heading-${key}`} />;
            }

            if (element.type === "image") {
                return <Image data={element} amp={props.amp} section={sectionNameImage} key={`image-${key}`} />;
            }

            if (element.type === "list") {
                return <List data={element} key={`list-${key}`} />;
            }
            if (element.type === "html") {
                return <ContentHtml data={element} amp={props.amp} key={`html-${key}`} />;
            }
            if (element.type === "embed") {
                return <ContentEmbed data={element} amp={props.amp} key={`embed-${key}`} />;
            }
            // if (element.type.includes('core-embed')) {
            //     //console.log('>>> core-embed : ',element);
            //     return <CoreEmbed data={element} amp={props.amp} key={`${element.type}-${key}`}/>
            // }
            if (element.type === "inlive") {
                return (
                    <Inlive
                        author={props.author}
                        multimedia={props.multimedia}
                        data={element}
                        dataAds={props?.adsPage?.ads?.data || []}
                        amp={props.amp}
                        slug={props.slug}
                        key={`${element.type}-${key}`}
                    />
                );
            }
        });
    }

    return showContentElement;
};

export { ContentElement };
