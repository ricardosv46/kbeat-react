import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AmpOpta } from "component/Page_Internal/ContentElement/TypeElement/AmpOpta/index";
import { parseIframe } from "util/parseIframe";
import Head from "next/head";
import { TwEmbed } from "component/TwEmbed";
import { InstEmbed } from "component/InstEmbed";
import { useWindowDimensions } from "../../../../../util/useWindowDimensions";
import {contentElement__html, contentElement__flourish} from "component/Page_Internal/ContentElement/TypeElement/Html/ContentHtml.module.scss"

// const LoadTwEmbed = dynamic(() => import('component/TwEmbed/index'));
// const LoadInstEmbed = dynamic(() => import('component/InstEmbed/index'));

const ContentHtml = ({ data, amp }) => {
    let showContentHTML = null;

    if (data && Object.keys(data) && Object.keys(data).length > 0) {
        //console.log('ContentHtml --- HTML : ',data);
        if (data.content && data.content.length > 0) {
            const { content } = data;
            if (content.includes("twitter-tweet")) {
                let regex = /(https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+))/g;
                let dataIns = [];
                content.replace(regex, (all, url, userName, post) => {
                    dataIns.push(userName, post);
                });
                
                if (amp) {
                    if (dataIns[1] != undefined) {
                        showContentHTML = (
                            <amp-twitter width="375" height="472" layout="responsive" data-tweetid={dataIns[1]}></amp-twitter>
                        );
                    }
                } else {
                     showContentHTML = <TwEmbed tweetId={dataIns[1]} contentId={dataIns[0]} />;
                }
            }
            if (content.includes("img")) {
                let getSRC = content.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);

                if (getSRC && getSRC.length && getSRC[1] && getSRC[1].length) {
                    if (amp) {
                        showContentHTML = (
                            <amp-img alt="A view of the sea" src={getSRC[1]} width="478" height="252" layout="responsive"></amp-img>
                        );
                    } else {
                        showContentHTML = React.createElement("img", {
                            src: getSRC[1],
                            className: "image-html",
                        });
                    }
                }
            }
            if (content.includes("jwplayer")) {
                if (amp) {
                    showContentHTML = null;
                } else {
                    showContentHTML = null;
                    //showContentHTML = <div className={'embed-html-jwplayer'} dangerouslySetInnerHTML={{__html: content}}/>
                }
            }
            if (content.includes("https://www.tiktok.com") && content.includes('class="tiktok-embed"')) {
                const regExData = /data-video-id=\"(.*?)\"/gi;
                const idEmbed = content.match(regExData)[0]?.replace('data-video-id="', "").replace('"', "");
                if (idEmbed) {
                    if (amp) {
                        showContentHTML = (
                            <>
                                <amp-tiktok width="580" height="575" data-src={idEmbed} layout="responsive"></amp-tiktok>
                                <Head>
                                    <script
                                        key={"tiktok-script"}
                                        async
                                        custom-element="amp-tiktok"
                                        src="https://cdn.ampproject.org/v0/amp-tiktok-0.1.js"
                                    />
                                </Head>
                            </>
                        );
                    } else {
                        showContentHTML = <div className={"embed-html-tiktok"} dangerouslySetInnerHTML={{ __html: content }} />;
                        //showContentHTML = <div className={'embed-html-jwplayer'} dangerouslySetInnerHTML={{__html: content}}/>
                    }
                }
            }
            if (content.includes('class="instagram-media"')) {
                const regEx = /(https?:\/\/(?:www\.)?instagram\.com\/p\/([^?#&]+)).*/g;
                const regExData = /data-instgrm-permalink=\"(.*?)\"/gi;
                let postId = "";
                let urlInst = "";

                if (content.includes("data-instgrm-permalink")) {
                    content.replace(regExData, (all, url) => (urlInst = url));

                    urlInst.replace(regEx, (link, origin, post) => {
                        if (post.includes("/")) {
                            postId = post.replace("/", "");
                        } else {
                            postId = post;
                        }
                    });
                } else {
                    content.replace(regEx, (link, origin, post) => {
                        if (post.includes("/")) {
                            postId = post.replace("/", "");
                        } else {
                            postId = post;
                        }
                    });
                }

                if (amp) {
                    showContentHTML = <amp-instagram data-shortcode={postId} width="375" height="472" layout="responsive"></amp-instagram>;
                } else {
                    if (postId) {
                        showContentHTML = <InstEmbed instPost={postId} contentId={postId} />;
                    } else {
                        showContentHTML = null;
                    }
                }
            }
            if (content.includes("iframe")) {
                if (content.includes("content.jwplatform.com") || content.includes("cdn.jwplayer.com")) {
                    return null;
                } else if (content.includes('https://flo.uri.sh/visualisation/') || content.includes('https://flo.uri.sh/story/')) {
                    if(amp){
                        showContentHTML = (
                            <div className={contentElement__html}>
                                <amp-iframe
                                    width="350"
                                    height="300"
                                    title={`type-element-html embed-mdstrm-flourish`}
                                    sandbox="allow-scripts allow-same-origin allow-popups"
                                    layout="responsive"
                                    frameborder="0"
                                    src={`${parseIframe(content).src}`}
                                ></amp-iframe>
                            </div>
                        );
                    } else {
                        showContentHTML = (
                            <div className={contentElement__flourish} dangerouslySetInnerHTML={{ __html: content }} />
                        );
                    }
                } else {

                    const iframeParsed = parseIframe(content);
                    let getSRC = iframeParsed.src;
                    let getWidth = iframeParsed.width.includes("%") ? 640 : iframeParsed.width || 640;
                    let getHeight = iframeParsed.height.includes("%") ? 480 : iframeParsed.height || 480;
                    const finalProportion = (getHeight / getWidth) * 100;
                    const finalProportion2 = (getHeight / getWidth) * 200;
                    const style = {
                        paddingTop: (Math.round(finalProportion, -1) || "56") + "%",
                        position: "relative",
                        overflow: "hidden",
                    };
                    const { width } = useWindowDimensions();
                    const style2 = () => {
                        if (width < 600) {
                            return {
                                paddingTop: (Math.round(finalProportion2, -1) || "56") + "%",
                                position: "relative",
                                overflow: "hidden",
                            };
                        } else {
                            return style;
                        }
                    };
    
                    if (amp) {
                        /* && getSRC[1].includes('mdstrm.com/embed') */
                        if (getSRC) {
                            if(!getSRC.includes('https')) {
                                getSRC = `https:${getSRC}`
                            } 
                            showContentHTML = (
                                <div className={contentElement__html}>
                                    <amp-iframe
                                        width={getWidth}
                                        height={getHeight}
                                        title={`type-element-html embed-mdstrm-${getSRC}`}
                                        sandbox="allow-scripts allow-same-origin allow-popups"
                                        layout="responsive"
                                        frameborder="0"
                                        src={`${getSRC}`}
                                    ></amp-iframe>
                                </div>
                            );
                        } else {
                            showContentHTML = null;
                        }
                    } else {
                        if (content.includes("https://www.facebook.com/")) {
                            const iframe = `
                            <iframe
                                class="type-element-coreEmbed element_youtube" 
                                src="${getSRC}" 
                                width="100%"
                                height="380" 
                                frameborder="0"
                                fullscreen
                                loading="lazy"
                                allowfullscreen
                                title="type-elment-html-embed-mdstrm-${getSRC}"
                            ></iframe>
                        `;
    
                            showContentHTML = (
                                <div alt="content-type-element-html html__mdstrm">
                                    <div style={style2()} className={contentElement__html} dangerouslySetInnerHTML={{ __html: iframe }} />
                                </div>
                            );
                        } else if (getSRC && getSRC) {
                            const iframe = `
                                <iframe
                                    class="type-element-coreEmbed element_youtube" 
                                    src="${getSRC}" 
                                    width="100%"
                                    height="380" 
                                    frameborder="0"
                                    fullscreen
                                    loading="lazy"
                                    allowfullscreen
                                    title="type-elment-html-embed-mdstrm-${getSRC}"
                                ></iframe>
                            `;
    
                            showContentHTML = (
                                <div alt="content-type-element-html html__mdstrm">
                                    <div style={style}
                                    className={contentElement__html}
                                     dangerouslySetInnerHTML={{ __html: iframe }} />
                                </div>
                            );
                        } else {
                            showContentHTML = null;
                        }
                    }
                }
            }
            if (content.includes("opta-widget")) {
                if (!amp) {
                    showContentHTML = React.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: data.content || "sin-data",
                        },
                        className: "opta-widget",
                    });
                } else {
                    showContentHTML = <AmpOpta data={data.content} />;
                }
            }
            if (content.includes("linkList")) {
                if (!amp) {
                    showContentHTML = React.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: data.content || "sin-data",
                        },
                        className: "linkList",
                    });
                }
            }
        }
    }

    return showContentHTML;
};

export { ContentHtml };
