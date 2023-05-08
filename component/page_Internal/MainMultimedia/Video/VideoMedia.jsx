import { videoInternalContainer } from "./VideoMedia.module.scss";
import { ImageMedia } from "../image/ImageMedia";
import { getDataMedia } from "./VideoMedia.helper";
import { VideoEmbed } from "component/global/VideoEmbed/VideoEmbed";

const VideoMedia = (props) => {
    const { amp, data, resize } = props
    if(amp){
        return <VideoEmbed {...props} />
    }
    function loadVideo(event) {
        if (event.currentTarget.classList.contains("not-loaded")) {
            const videoContainer = event.currentTarget;
            const typeVideo = data.data.type_video;
            videoContainer.classList.remove("not-loaded");
            videoContainer.classList.add("loading");
            /* Si es youtube o mediastream creara un iframe con autoplay */
            if (["youtube", "mediastream"].includes(typeVideo)) {
                let videoPath;
                if (data.data.embed) {
                    const embedUrl = data.data.embed;
                    videoPath = embedUrl
                        .match(/ src=['"][^\'\"]+['"] /g)
                        ?.find((val) => val)
                        .replace(/ src=['"]/, "")
                        .replace(/['"] /, "")
                        .replace("http:", "https:");
                } else {
                    videoPath = data.path;
                }
                const iframePath = getDataMedia(videoPath).embedUrl;
                const videoFrame = document.createElement("iframe");
                videoFrame.allow = "fullscreen;autoplay";
                videoFrame.src = iframePath;
                videoFrame.width = "100%";
                videoFrame.height = "100%";
                videoFrame.style.position = "absolute";
                videoFrame.style.top = 0;
                videoContainer.appendChild(videoFrame);
                videoFrame.addEventListener("load", function () {
                    videoContainer.classList.remove("loading");
                    videoContainer.classList.add("loaded");
                    setTimeout(function () {
                        videoContainer.querySelector(":not(iframe)").remove();
                    }, 500);
                });
            } else if (typeVideo == "facebook") {
                /* Si es facebook creara un div para la insecion del video */
                const embedUrl = data.path;
                const facebookRoot = document.createElement("div");
                facebookRoot.id = "fb-root";
                /* Loading root div */
                document.body.prepend(facebookRoot);
                /* creating script */
                if (!document.getElementById("facebook-jssdk")) {
                    const scriptElement = document.createElement("script");
                    scriptElement.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
                    scriptElement.id = "facebook-jssdk";
                    scriptElement.async = true;
                    scriptElement.defer = true;
                    scriptElement.addEventListener("load", function () {
                        videoContainer.classList.remove("loading");
                    });
                    scriptElement.crossorigin = "anonymous";
                    /* loading script */
                    document.body.prepend(scriptElement);
                }

                /* Add div for embed element */
                const videoEmbedContainer = document.createElement("div");
                videoEmbedContainer.id = "video-player";
                videoEmbedContainer.className = "fb-video";
                videoEmbedContainer.dataset.href = embedUrl;
                videoEmbedContainer.dataset.width = "1000";
                videoEmbedContainer.dataset.height = "560";
                videoEmbedContainer.dataset.autoplay = "true";
                videoEmbedContainer.dataset.allowfullscreen = "true";
                videoContainer.innerHTML = "";
                videoContainer.appendChild(videoEmbedContainer);
            }
        }
    }
    return (
        <div onClick={loadVideo} className={`${videoInternalContainer} not-loaded`}>
            <ImageMedia showCredits data={data} resize={resize} />
        </div>
    );
};

export { VideoMedia };
