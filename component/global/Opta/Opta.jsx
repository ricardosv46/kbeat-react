
const Opta = () => {
    return <>
        <script id={"initOpta"} dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener("DOMContentLoaded", function(){
                setTimeout(function() {
                    var st = document.createElement("link"), elSt = document.getElementsByTagName("link")[0];
                    st.id = 'initCSSOpta';
                    st.rel = 'stylesheet';
                    st.href = 'https://secure.widget.cloud.opta.net/v3/css/v3.football.opta-widgets.css';
                    elSt.parentNode.insertBefore(st, elSt);
                    var s = document.createElement("script"),
                    el = document.getElementsByTagName("script")[0];
                    s.id = 'initJsOpta';
                    s.defer = true;
                    s.src = (document.location.protocol === "https:" ? "https://" : "http://") + "secure.widget.cloud.opta.net/v3/v3.opta-widgets.js";
                    el.parentNode.insertBefore(s, el);
                }, 2000)
            });
            `
        }}/>
        <script id={"initOptaSettings"} dangerouslySetInnerHTML={{
            __html: `var opta_settings = {
                subscription_id: '28c97085f542ea8bfde63411a47da936',
                language: 'es_CO',
                timezone: 'America/Lima'
            };`
        }}/>
    </>
}

export { Opta };