import Head from "next/head";
import { MetaTags } from "component/global/MetaTags/MetaTags";
// import { FooterAmp } from "component/global/Footer/FooterAmp/FooterAmp";
import { AdsAnchorAMP } from "component/global/AdsAnchorAmp/AdsAnchorAmp";
import { Schemas } from "component/global/Schemas/Schemas";
import { Compass } from "component/Compass";
import { Chartbeat } from "component/dataLayer/amp";
import { FooterAmp } from "component/global/Footer/FooterAmp/FooterAmp";

const AmpLayout = ({ children, data, dataSchema, sectionName,title }) => {
    // console.log('>>> data layout - amp : ',data)
    let page_title = title ?? data?.title;

    return (
        <>
            <Head>
                <title>{page_title || "Página no encontrada"}</title>
                <link rel="canonical" href={`${process.env.SITE_DOMAIN_URL}${data?.meta_slug || "/pagina-no-encontrada"}`} />
                <MetaTags internalAmp={true} data={data} metaAmp={true} />
                <Compass amp meta articleData={data} />
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />

                <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
                <script async custom-element="amp-sticky-ad" src="https://cdn.ampproject.org/v0/amp-sticky-ad-1.0.js" />
                <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js" />
                <script async custom-element="amp-jwplayer" src="https://cdn.ampproject.org/v0/amp-jwplayer-0.1.js" />
                <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
                <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js" />

                <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js" />
                <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js" />
                <script async custom-element="amp-instagram" src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js" />
                <script async custom-element="amp-facebook" src="https://cdn.ampproject.org/v0/amp-facebook-0.1.js" />
                <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
                <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js" />
                <script async custom-element="amp-fx-flying-carpet" src="https://cdn.ampproject.org/v0/amp-fx-flying-carpet-0.1.js" />
                <script async custom-element="amp-vimeo" data src="https://cdn.ampproject.org/v0/amp-vimeo-0.1.js" />
                <script
                    async
                    custom-element="amp-install-serviceworker"
                    src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"
                />
                <script async custom-element="amp-audio" src="https://cdn.ampproject.org/v0/amp-audio-0.1.js" />
                <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js" />
            </Head>
            <AdsAnchorAMP />
            <Schemas data={dataSchema} speakable={false} />
            <Compass amp articleData={data} />
            {children}
            <FooterAmp />
            <Chartbeat
                section={sectionName}
                title={data?.title || ""}
                author={data?.author_name || ""}
                userName={data?.user_name || ""}
                tags={data?.meta_article_tags?.map((tag) => tag.name).join(",") || ""}
                keywords={data?.meta_keywords || ""}
            />
            <style jsx global amp-custom="amp-custom">{`
                *,
                *:before,
                *:after {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    font-family: "Roboto", sans-serif;
                }
                html {
                    -ms-text-size-adjust: 100%;
                    font-size: 62.5%;
                    -webkit-text-size-adjust: 100%;
                    scroll-behavior: smooth;
                    overflow-y: scroll;
                }
                body {
                    line-height: 1.5;
                    -webkit-font-smoothing: antialiased;
                }
                html,
                body {
                    min-height: 100%;
                }
                p,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    overflow-wrap: break-word;
                    color: #333;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-family: "PT Serif", serif;
                    text-rendering: optimizelegibility;
                }
                input,
                button,
                textarea,
                select,
                ol:not(.list-content),
                ul:not(.list-content) {
                    list-style: none;
                }
                a {
                    text-decoration: none;
                    font: inherit;
                    color: inherit;
                    line-height: inherit;
                }
                button {
                    padding: 0;
                }
                .container_author_time{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom:16px;
                }

                // Here css-component
                .wrapper__quote {
                    position: relative;
                    background-color: rgba(232, 73, 95, 0.2);
                    padding: 14.5px 15px;
                    display: flex;
                    border-radius: 0px 0px 5px 5px;
                    border: 1px solid #e4e4e4;
                    border-top: 3px solid #E8495F;
                    margin-bottom: 24px;
                    margin-top: 8px;
                }
                .wrapper__quote blockquote p strong,
                .wrapper__quote blockquote p b {
                    color: #E8495F;
                    font-size: 14px;
                    font-weight: 700;
                    font-feature-settings: "smcp", "c2sc";
                    font-variant: all-small-caps;
                }
                .wrapper__quote a:before {
                    inset: 0px;
                    content: "";
                    overflow: hidden;
                    position: absolute;
                    white-space: nowrap;
                }
                .wrapper__quote blockquote p a {
                    color: #000;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 16px;
                    display: block;
                }
                .wrapper__quote blockquote {
                    margin: 0;
                    padding: 0;
                    padding-left: 10px;
                }
                .imgQuote {
                    border-radius: 5px;
                    object-fit: cover;
                }
                .comp__author {
                    display: flex;
                    flex-direction: column;
                }
                .author__redSocial_link {
                    color: #E8495F;
                    font-weight: 700;
                    font-variant: all-small-caps;
                    text-decoration: none;
                    margin: 4px 0;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    font-feature-settings: "smcp", "c2sc";
                }
                .author__image {
                    display: inline-block;
                    vertical-align: middle;
                    background-color: #bfbfbf;
                    border-radius: 50%;
                    height: 25px;
                    margin: 0 10px 0 0;
                    width: 25px;
                    overflow: hidden;
                }
                .main__interlinking {
                    margin: 8px 0px 16px 0;
                    border-left: 3px solid #E8495F;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    padding: 0;
                    list-style: none;
                }
                .content__interlinking {
                    color: #E8495F;
                    list-style: none;
                    font-size: 18px;
                }
                .interlinking__item {
                    line-height: 16px;
                    padding: 0 16px;
                }
                .interlinking__link {
                    font-size: 14px;
                    font-weight: 700;
                    color: #E8495F;
                    line-height: 16px;
                }
                .mainContent__tags_list {
                    width:100%;
                    margin-bottom: 20px;
                    display: inline-flex;
                }
                .mainContent__tags-list {
                    padding: 8px 0 7px;
                    width:100%;
                    border-top: 1px solid #E8495F;
                    border-bottom: 2px solid #E8495F;
                }
                .mainContent__tags-list:before {
                    content: "Temas";
                    font-family: "Roboto", serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 18px;
                    margin-right: 10px;
                }
                .tags-item__internal {
                    display: inline-block;
                    font-size: 14px;
                    line-height: 16px;
                    text-transform: uppercase;
                    font-weight: 700;
                    font-variant: all-small-caps;
                    border-left: 1px solid #E8495F;
                }
                .tags-item-link {
                    color: #E8495F;
                    font-size: 14px;
                    padding-right: 10px;
                    margin: 5px 0 5px 10px;
                }
                // .tags-item__internal:last-child {
                //     border: none;
                // }
                //-----box header---
                .amp__sidebar {
                    background-color: #333;
                    width: 300px;
                }
                .element_table-container {
                    max-width: 100%;
                    overflow: auto;
                }
                .element_table {
                    width: 100%;
                }
                .siderbar__header {
                    background-color: #005fde;
                    border-bottom: 1px solid #e4e4e4;
                    padding: 11px 0;
                    position: fixed;
                    text-align: center;
                    top: 0;
                    width: 100%;
                }
                .sidebar__nav {
                    height: calc(100vh - 106px);
                    overflow-y: scroll;
                    overflow-x: hidden;
                    margin: 50px 0 0 0;
                }
                .accordion__item {
                    background-color: #333;
                    border: none;
                    margin-bottom: 1rem;
                    padding: 15px;
                    position: relative;
                    text-transform: uppercase;
                    list-style: none;
                }
                .accordion__link {
                    color: #fff;
                    font-size: 1.5rem;
                    font-weight: 500;
                    text-decoration: none;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    text-decoration: none;
                }
                .accordion__arrow {
                    height: 40px;
                    left: 80%;
                    transition: all 0.3s;
                    transform: rotate(90deg);
                    top: 9%;
                    position: absolute;
                    width: 30px;
                }
                .accordion__ul {
                    padding: 0;
                }
                .header__subList {
                    background-color: #fff;
                    margin: 0;
                    overflow-x: scroll;
                    text-transform: uppercase;
                    padding: 5.5px 0 6.5px 0;
                    white-space: nowrap;
                    width: 100%;
                    z-index: 1;
                }
                .header__subList-item {
                    display: inline-block;
                    padding: 0 10px;
                }
                .subList__link {
                    color: #535353;
                    font-size: 13px;
                    font-weight: 400;
                    text-decoration: none;
                }
                .nav__side-right {
                    padding-left: 40px;
                }
                .box-header {
                    width: 100vw;
                }
                .content-page {
                    width: 100vw;
                }
                .tem-lay-kbeat-header {
                    background: linear-gradient(270deg, #4695E3 0%, #F200CC 100%);
                    
                }
                .cgrid-container{
                    height:80px;
                    display:flex;
                    padding:0 16px;
                    justify-content:space-between;
                    align-items:center;
                }
                .cgrid-container div{
                    height:20px;
                    width:20px;
                }
                .kbeat-header__main {
                    max-width: 600px;
                    margin: 0 auto;
                }
                .hamburger {
                    width: 28px;
                    height: 27px;
                    border: none;
                    font-size: 0;
                    background-color: transparent;
                }
                .hamburger span:first-of-type {
                    top: 8px;
                }
                hamburger span:nth-of-type(2) {
                    top: 10px;
                }
                .hamburger span:nth-of-type(3) {
                    top: 20px;
                }
                .hamburger span {
                    display: block;
                    border-radius: 16px;
                    height: 2px;
                    background-color: #fff;
                    opacity: 1;
                    transform: rotate(0);
                    transition: 0.25s ease-in-out;
                    transform-origin: left center;
                    margin-top:4px;
                }
                .kbeat-header-logo {
                    
                }
                .container__amp-internal {
                    max-width: 550px;
                    margin: 0 auto auto;
                    padding: 0 16px;
                }
                .internalBadge {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-sizing: border-box;
                    margin: 16px 0 ;
                    border-top: 1px solid #E8495F;
                    border-bottom: 1px solid #E8495F;
                    padding: 8px 0;
                    
                }
                .internalBadge a {
                    font-size: 24px;
                    line-height:28px;
                    font-family: "Roboto", serif;
                    text-transform: uppercase;
                    font-weight: 700;
                    color: #333333;

                    
                }
                .comp__badges {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 2.2rem;
                    padding-left: 8px;
                    margin: 0;
                    font-family: "PT Serif", serif;
                }
                .comp__badges a {
                    text-decoration: none;
                }
                .author__date {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 16px;
                    font-feature-settings: "smcp", "c2sc";
                    font-variant: all-small-caps;
                    color: #666;
                }
                .title__internal {
                    font-size: 24px;
                    margin: 0.5rem 0;
                    letter-spacing: 0;
                    font-weight: 700;
                    text-rendering: optimizespeed;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-size: 24px;
                    line-height: 24px;
                    color: #333333;
                }
                .teaser__internal {
                    font-size: 14px;
                    font-weight: 400;
                    letter-spacing: inherit;
                    line-height: 16px;
                    font-family: Roboto, sans-serif;
                    padding: 8px 0;
                    margin: 0;
                    color: #000;
                }
                .teaser__internal p {
                    margin: 0;
                }
                .teaser__internal a {
                    text-decoration: underline;
                    color: #E8495F;
                }
                .container__legend-internal {
                    background-color: hsla(0, 0%, 90.2%, 0.658824);
                }
                .legend__text {
                    color: #000;
                    display: block;
                    font-size: 10px;
                    padding: 8px;
                    line-height: 14px;
                }
                /*amp btns*/
                amp-social-share[type="facebook"] {
                    margin-right: 8px;
                    background: #2D88FF;
                    border-radius: 4px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 69%;
                    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23fff" d="M212 197h-37v60h37v176h70V257h50l5-60h-55v-33c0-14 3-20 17-20h38V83h-49c-52 0-76 23-76 67v47z"/></svg>');
                }

                amp-social-share[type="twitter"] {
                    background: #1DA1F2;
                    margin-right: 8px;
                    border-radius: 4px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 69%;
                    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><g fill="none" fill-rule="evenodd"><path d="M0 0h400v400H0z"/><path fill="%23fff" fill-rule="nonzero" d="M153.6 301.6c94.4 0 146-78.2 146-146 0-2.2 0-4.4-.2-6.6a104.4 104.4 0 0 0 25.6-26.5 102.4 102.4 0 0 1-29.5 8 51.5 51.5 0 0 0 22.6-28.3 102.8 102.8 0 0 1-32.6 12.4 51.3 51.3 0 0 0-87.4 46.8 145.6 145.6 0 0 1-105.7-53.6 51.3 51.3 0 0 0 15.9 68.5 51 51 0 0 1-23.3-6.4v.6a51.3 51.3 0 0 0 41.1 50.3 51.2 51.2 0 0 1-23.1.9 51.4 51.4 0 0 0 48 35.6 103 103 0 0 1-63.8 22 104.4 104.4 0 0 1-12.2-.7 145.2 145.2 0 0 0 78.6 23"/></g></svg>');
                }

                amp-social-share[type="whatsapp"] {
                    margin-right: 8px;
                    background: #22C145;
                    border-radius: 4px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 69%;
                    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46"><path fill="%23fff" d="M35.4 10.4a18.27 18.27 0 0 0-31.2 13c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2a18.4 18.4 0 0 0 13-31.3zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2l-1.5 1.7c-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6a5.1 5.1 0 0 0-.6 5.4l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"/></svg>');
                }
                .shared__title {
                    font-size: 8px;
                    margin-right: 8px;
                    line-height: 9px;
                }
                .amp-shared__googlenews {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    height: 35px;
                    width: 35px;
                    border: 1px solid black;
                    line-height: 26px;
                    border-radius: 4px;
                    background: white;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 69%;
                    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 27.197 19"><path fill="currentColor" d="M27.197 0h-27.2v19h27.2Zm-9.8 8.425h7.071v2.151h-7.075Zm5.879-4.3v2.151h-5.883V4.125ZM8.968 15.774a6.274 6.274 0 1 1 4.323-10.819l-1.484 1.556a4.123 4.123 0 1 0 1.133 4.058H8.961V8.418h6.274v1.075a6.285 6.285 0 0 1-6.274 6.274Zm8.425-3.047h5.875v2.151h-5.875Z" /></svg>');
                }

                .compatir{
                    font-size: 10px;
                    line-height: 12px;
                    font-weight: 700;
                    color: #535353;
                    margin-right: 4px;
                }

                /*author block*/
                .comp__author {
                    display: flex;
                    flex-direction: column;
                }
                .author__image {
                    display: inline-block;
                    vertical-align: middle;
                    background-color: #bfbfbf;
                    border-radius: 50%;
                    height: 25px;
                    margin: 0 10px 0 0;
                    width: 25px;
                    overflow: hidden;
                }
                /*text content*/
                .content--autor-btnsm {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 8px;
                    margin-bottom: 24px;
                }
                .shared__container {
                    display: flex;
                    align-items: center;
                }
                .container__body-amp h2 {
                    font-size: 24px;
                    line-height: 28px;
                    margin-bottom: 0.5rem;
                }
                .container__body-amp h3 {
                    font-size: 22px;
                    line-height: 26px;
                }
                .container__body-amp h4 {
                    font-size: 20px;
                    line-height: 24px;
                    margin: 10px 0;
                }

                .container__body-amp h5 {
                    font-size: 18px;
                    line-height: 22px;
                }
                .container__body-amp p {
                    font-size: 14px;
                    line-height: 18px;
                    margin-bottom: 1rem;
                    margin-top: 0;
                    font-weight: 400;
                }
                .container__body-amp p a {
                    color: #E8495F;
                    text-decoration: underline;
                    overflow-wrap: break-word;
                }
                .container__body-amp p strong {
                    font-weight: 700;
                }
                .container__body-amp table {
                    width: 100%;
                    margin-bottom: 8px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                }
                .container__body-amp table tr {
                    background: rgba(0, 0, 0, 0.11);
                }
                .container__body-amp table td {
                    padding: 8px;
                }
                .container__body-amp table th {
                    vertical-align: bottom;
                    border-bottom: 2px solid #dee2e6;
                }
                .container__body-amp table tr:nth-of-type(even) {
                    background: #fff;
                }
                .container__body-amp ul {
                    padding-left: 35px;
                    list-style: none;
                    padding: 0;
                    background-color: $white;
                }
                .container__body-amp ul li {
                    font-size: 16px;
                    font-weight: 300;
                    padding: 7px 7px 7px 2rem;
                    border-bottom: 1px solid #b5b3b5;
                    position: relative;
                }
                .container__body-amp ol {
                    font-size: 14px;
                    padding-left: 20px;
                    line-height: 1.6;
                }
                .container__body-amp ul:not([class*="Opta"]) > li:before {
                    content: "";
                    border-radius: 50%;
                    width: 5px;
                    height: 5px;
                    background-color: #E8495F;
                    position: absolute;
                    top: 50%;
                    left: 1rem;
                    transform: translateY(-50%);
                }
                a:-webkit-any-link {
                    text-decoration: none;
                }
                .container__footer-amp {
                    background-color: #eee;
                    max-width: 600px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    padding: 30px;
                }
                .footer__logo {
                    width: 169px;
                    margin: auto;
                }
                .footer__owner {
                    font-size: 1.5rem;
                    margin: 15px 0;
                }
                .footer__copy-rigth {
                    font-size: 1.2rem;
                }
                .container__google-news-amp {
                    display: flex;
                    gap: 16px;
                    justify-content: space-around;
                }
                .wrapper_btn_news_google_amp a {
                    border-radius: 5px;
                    display: flex;
                    color: #fff;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 1.15;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-feature-settings: "smcp", "c2sc";
                    font-variant: all-small-caps;
                }
                .icon__news {
                    justify-content: center;
                    display: flex;
                    align-items: center;
                    border-radius: 5px;
                    min-width: 45px;
                    height: 45px;
                }
                .icon_news--title {
                    padding: 8px 16px;
                }
                /* LBP */
                .comp-live-posting_title {
                    color: #000;
                    line-height: 28px;
                    font-family: "PT serif", serif;
                    font-size: 24px;
                }
                .comp-live-posting_live__item {
                    background: rgba(228, 228, 228, 0.2);
                    border: 1px solid #e4e4e4;
                    border-radius: 5px;
                    padding: 16px;
                    margin-bottom: 16px;
                }
                .comp-live-posting_live-items {
                    display: flex;
                    margin-bottom: 16px;
                }
                .comp-live-posting_text-time {
                    width: 50%;
                }
                .comp-live-posting_text-time span {
                    background: #E8495F;
                    padding: 8px;
                    border-radius: 3px;
                    color: #eee;
                    font-weight: 700;
                    font-size: 16px;
                }
                .comp-live-posting_text-date {
                    width: 50%;
                    text-align: right;
                    color: #E8495F;
                    font-weight: 700;
                    font-size: 14px;
                }
                .comp-live-posting_text-title {
                    font-size: 22px;
                    font-height: 26px;
                    font-family: "PT serif", serif;
                }
                .comp-live-posting_content {
                    font-size: 14px;
                    line-height: 18px;
                }
                .comp-live-posting_content amp-iframe {
                    position: relative;
                    width: 100%;
                    margin: 8px 0;
                }
                amp-img{
                    margin: 0 -16px;
                }
                .comp-live-posting_content amp-img {
                    width: 100%;
                    height: 100%;
                    margin: 8px 0;
                }
                .container__taboola {
                    display: flex;
                }
                .liveIsFeatured__container {
                    display: flex;
                    justify-content: flex-start;
                    margin-bottom: 15px;
                }
                .liveIsFeatured__date {
                    margin-right: 10px;
                }
                .liveIsFeatured__date span {
                    display: inline-block;
                    padding: 8px;
                    background-color: #E8495F;
                    color: #fff;
                    border-radius: 3px;
                    line-height: 18px;
                    text-align: left;
                    font-size: 18px;
                    font-weight: bold;
                }
                .liveIsFeatured__content {
                    font-size: 13px;
                    line-height: 15px;
                    margin-bottom: 5px;
                }
                .liveIsFeatured__content div,
                .liveIsFeatured__content p {
                    display: inline;
                }
                .liveIsFeatured__item {
                    margin: 5px 0;
                    display: inline;
                }
                .featuredlbp__headline {
                    display: block;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 18px;
                    margin: 0;
                    font-family: "PT Serif", serif;
                }
                .mainContent__live-content {
                    background: #fff8fc;
                    border: 0.5px solid #E8495F;
                    border-radius: 5px;
                    padding: 8px;
                }
                .mainContent__live-title {
                    display: flex;
                    align-items: center;
                    margin: 8px 0 12px 0;
                }
                .mainContent__live-title h2 {
                    color: #E8495F;
                    font-size: 14px;
                    margin-left: 12px;
                    line-height: 16px;
                }
            `}</style>
        </>
    );
};

export { AmpLayout };
