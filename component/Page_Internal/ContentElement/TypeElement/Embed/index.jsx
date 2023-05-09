import React from "react";
import dynamic from "next/dynamic";
// import {TwitterTweetEmbed} from "react-twitter-embed";
import Head from "next/head";
import { InstEmbed } from "component/InstEmbed";
import { TiktokEmbed } from "component/TiktokEmbed";
import { FbEmbed } from "component/FbEmbed";
import { TwEmbed } from "component/TwEmbed";

// const LoadInstEmbed = dynamic(() => import('component/InstEmbed/index'));
// const LoadFbEmbed = dynamic(() => import('component/FbEmbed/index'));
// const LoadTiktokEmbed = dynamic(() => import('component/TiktokEmbed/index'));

const ContentEmbed = (props) => {
    let showContentEmbed = null;
    let getUrlPhoto;

    //console.log('------ContentEmbed props : ',props.data);

    if (props.data && Object.keys(props.data) && Object.keys(props.data).length > 0) {
        const { data } = props;
        if (data && data.attributes && Object.keys(data.attributes) && Object.keys(data.attributes).length > 0) {
            const { attributes } = data;

            if (attributes.type === "rich" && attributes.url && attributes.url.length > 0 && attributes.providerNameSlug === "twitter") {
                let status = attributes.url.match(/^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)$/);
                if (props.amp) {
                    if (status && status[3] != undefined) {
                        showContentEmbed = (
                            <amp-twitter width="375" height="472" layout="responsive" data-tweetid={status[3]}></amp-twitter>
                        );
                    }
                } else {
                  if(status && status[3] && status[1]) {
                    /* showContentEmbed = <TwEmbed tweetId={status[3]} contentId={"emebed-twitt"}/>; */

                    showContentEmbed = <TwEmbed
                        className='emebed-twitter'
                        tweetId={status[3]}
                        contentId={status[1]}
                    />;
                  }
                }
            } else if (
                attributes.type === "rich" &&
                attributes.url &&
                attributes.url.length > 0 &&
                attributes.providerNameSlug === "instagram"
            ) {
                const regEx = /(https?:\/\/(?:www\.)?instagram\.com\/p\/([^?#&]+)).*/g;
                let postId = "";
                attributes.url.replace(regEx, (link, origin, post) => {
                    if (post.includes("/")) {
                        postId = post.replace("/", "");
                    } else {
                        postId = post;
                    }
                });

                if (props.amp) {
                    showContentEmbed = <amp-instagram data-shortcode={postId} width="375" height="472" layout="responsive"></amp-instagram>;
                } else {
                    showContentEmbed = <InstEmbed instPost={postId} contentId={postId} />;
                }
            } else if (
                attributes.type === "video" &&
                attributes.url &&
                attributes.url.length > 0 &&
                attributes.providerNameSlug === "youtube"
            ) {
                const regexp = /^(?:(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube(?:-nocookie)?\.com\/|m\.youtube\.com\/|youtu\.be\/))(?:watch\?(?=.*v=[^#\&\?]*)(?:\S+)?v=|embed\/|v\/|live_stream\/|shorts\/)?([\w\-]{11})(?:\S+)?$/gi
                let postId = "";
                const urlValidated=attributes.url.split("?t=")[0].trim()
                urlValidated.replace(regexp, (origin, post) => (postId = post));
                if (props.amp) {
                    showContentEmbed = <amp-youtube data-videoid={postId} layout="responsive" width="375" height="375"></amp-youtube>;
                } else {
                    showContentEmbed = React.createElement("iframe", {
                        width: "100%",
                        height: "320",
                        src: `https://www.youtube.com/embed/${postId}`,
                        frameBorder: "0",
                        title: `type-embed-iframe-youtube-${postId}`,
                        allowFullScreen: "",
                        className: "element_youtube",
                    });
                }
            } else if (
                (attributes.type === "rich" || attributes.type === "video") &&
                attributes.url &&
                attributes.url.length > 0 &&
                attributes.providerNameSlug === "facebook"
            ) {
                if (props.amp) {
                    showContentEmbed = (
                        <amp-facebook width="278" height="472" layout="responsive" data-href={attributes.url}></amp-facebook>
                    );
                } else {
                    showContentEmbed = <FbEmbed url={attributes.url} />;
                }
            } else if (
                (attributes.type === "rich" || attributes.type === "video") &&
                attributes.url &&
                attributes.url.length > 0 &&
                attributes.providerNameSlug == "tiktok"
            ) {
                const idEmbed = attributes.url.split("/").pop().split("?")[0];
                if (props.amp) {
                    showContentEmbed = (
                        <>
                            <amp-tiktok width="580" height="575" data-src={idEmbed} layout="responsive" />
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
                    showContentEmbed = <TiktokEmbed data={attributes} />;
                }
            } else {
                showContentEmbed = null;
            }

            if (attributes.type === "photo" && attributes.url && attributes.url.length > 0) {
                getUrlPhoto = attributes.url;

                if (props.amp) {
                    showContentEmbed = (
                        <amp-img
                            alt="A view of the sea"
                            src={getUrlPhoto}
                            width="478" //
                            height="252"
                            layout="responsive"
                        ></amp-img>
                    );
                } else {
                    showContentEmbed = React.createElement("img", {
                        src: getUrlPhoto,
                    });
                }
            }
        }
    }

    return showContentEmbed;
};

export { ContentEmbed };
