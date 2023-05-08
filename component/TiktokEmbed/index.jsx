import Head from "next/head";

const TiktokEmbed = ({ data }) => {
  const embedUrl = data.url.split("?")[0]
  const postId = embedUrl.split("/").pop()
    return (
        <>
            <blockquote
                class="tiktok-embed"
                cite={embedUrl}
                data-video-id={postId}
                data-embed-from="oembed"
                style={{ maxWidth: "605px", minWidth: "325px" }}
            >
                <section />
            </blockquote>
            <Head>
                <script key={"tiktok-script"} id="tiktok-embed" async defer src="https://www.tiktok.com/embed.js"></script>
            </Head>
        </>
    );
};

export {TiktokEmbed};
