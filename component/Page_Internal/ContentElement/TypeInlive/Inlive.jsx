import React from 'react';
import { LiveSchema } from 'component/global/Schemas/LiveSchemas';
import { AdsBody } from "component/Page_Internal/ContentElement/TypeElement/AdsBody/AdsBody";
import style from "component/Page_Internal/ContentElement/TypeInlive/Inlive.module.scss"

const MakeElementLBP = ({setElement, dataAds, tolalAds, amp}) => {
    let result = null;
    if(setElement?.length) {
        const newSetElement = setElement.concat([]);
        if(tolalAds) {
            if(amp) {
                for (let index = 1; index <= tolalAds; index++) {
                    newSetElement.splice(index === 1 ? 6 : (6 * index) + index - 1, 0, { type: "ads", ads_type: `amp_Live${index}`, _id: `ADSLive${index}` })            
                }
            }else {
                for (let index = 1; index <= tolalAds; index++) {
                    newSetElement.splice(index === 1 ? 6 : (6 * index) + index - 1, 0, { type: "ads", typeAds: `Live${index}`, _id: `ADSLive${index}` })
                }
            }
        }
        result = newSetElement?.map((item, key) => {
            if(item?.type === 'ads') {
                if(amp) {
                    return <AdsBody data={item} dataAds={dataAds} key={`ads-${item?._id}`} amp/>
                } else {
                    return <AdsBody data={item} dataAds={dataAds} key={`ads-${item?._id}`} /> 
                }
            } else {
                const { headline, content, date, id } = item;
                const dateTime = new Date(date);
                return (<div id={id} className={!amp ? style["comp-live-posting_live__item"] : "comp-live-posting_live__item"} key={`item-live-post-${key}`}>
                    <div className={!amp ? style["comp-live-posting_live-items"] : "comp-live-posting_live-items"} >
                        <div className={!amp ? style["comp-live-posting_text-time"] : "comp-live-posting_text-time"}>
                            <span>{`${(dateTime.getHours() < 10 ? '0' : '')}${dateTime.getHours()}:${(dateTime.getMinutes() < 10 ? '0' : '')}${dateTime.getMinutes()}`}</span>
                        </div>
                        <div className={!amp ? style["comp-live-posting_text-date"] : "comp-live-posting_text-date"}>
                            {`${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`}
                        </div>
                    </div>
                    {headline && <h2 className={!amp ? style["comp-live-posting_text-title"] : "comp-live-posting_text-title"}>{headline}</h2>}
                    <div className={!amp ? style["comp-live-posting_content"] : "comp-live-posting_content"} dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                );
            }
        })
        return result;
    }
    
    
    return result;
}

const Inlive = (props) => {
    let contentLive,
        titleLive,
        contentBody,
        dataSchema,
        image_live,
        date_init,
        date_end,
        date_update,
        data_description,
        contentElements = [],
        inliveId = {},
        showSchema = null;

    const {data, amp, dataAds, author,multimedia} = props;

    if (data && data?.data?.body && Object.keys(data?.data?.body).length) {
        const anchor =  data?.custom?.anchor;
        if(anchor){
            inliveId = {id: anchor}
        }
        date_init = data?.data?.date_init;
        date_end = data?.data?.date_end;
        date_update = data?.update_date;
        data_description = data?.description;
        contentBody = data?.data?.body || [];
        image_live = data?.data?.multimedia?.find(media=>media.type==="image")?.path ||
            data?.data?.multimedia?.find(media=>media.type==="video")?.data?.image_path ||
            data.image?.find(media=>media.type==="image")?.path ||
            data?.image?.find(media=>media.type==="video")?.data?.image_path;
        if(amp){
            contentElements = data?.data?.content_elements_amp || [];
        } else{
            contentElements = data?.data?.content_elements || [];
        }

        const authors = data?.data?.authors?.length > 0 ? data?.data?.authors : author;
        titleLive = <h2 className={style["comp-live-posting_title"]}> {data.title}</h2>

        const totalElement = contentElements.length;
        let totalAds = 0;
        
        if (totalElement >= 6 && totalElement % 6 === 0) {
            totalAds = totalElement / 6 >= 5 ? 5 : totalElement / 6;
        } else if (totalElement >= 6 && (totalElement % 6 === 1 || totalElement % 6 === 2 || totalElement % 6 === 3 || totalElement % 6 === 4 || totalElement % 6 === 5)) {
            totalAds = ((totalElement - (totalElement % 6)) / 6) >= 5 ? 5 : (totalElement - (totalElement % 6)) / 6;
        }

        if (amp) { 
            contentLive = <MakeElementLBP setElement={contentElements} dataAds={dataAds} tolalAds={totalAds} amp/>
        } else {
            contentLive = <MakeElementLBP setElement={contentBody} dataAds={dataAds} tolalAds={totalAds}/>
        }

        dataSchema = {
            url_note: props.slug || data?.slug || "",
            content_elements: contentElements, 
            data_description,
            data_title: data?.title,
            date_init,
            date_end,
            date_update,
            data_id: data?._id,
            data_authors: authors,
            image_live 
        }

        showSchema = <LiveSchema data={dataSchema} />
    }


    return (
         <div {...inliveId}>
             {titleLive}
             {contentLive}
             {showSchema}
     </div>
    )
}

export {Inlive};