import Lazy from "lazy-child";
import Head from "next/head";
/* import Script from "next/script"; */
const Taboola = ({ type }) => {
    let options, idContainer, sectionBodyScript, headScript;
    if (type == "internal") {
        idContainer = `taboola-below-article-thumbnails`;
        options = {
            mode: "thumbnails-a",
            container: idContainer,
            placement: "Below Article Thumbnails",
            target_type: "mix",
        };
        headScript = `
        !function (e, f, u) {
            e.async = 1;
            e.src = u;
            f.parentNode.insertBefore(e, f);
            }(
                document.createElement('script'), 
                document.getElementsByTagName('script')[0], 
                '//cdn.taboola.com/libtrc/grupolarepblica-larepblica/loader.js'
            );`;
    }
    if (type == "section") {
        idContainer = "taboola-below-section-front-thumbnails";
        options = {
            mode: "thumbs-feed-01",
            container: idContainer,
            placement: "Below Section Front Thumbnails",
            target_type: "mix",
        };
        headScript = `window._taboola = window._taboola || [];
          _taboola.push({category:'auto'});
          !function (e, f, u, i) {
            if (!document.getElementById(i)){
              e.async = 1;
              e.src = u;
              e.id = i;
              f.parentNode.insertBefore(e, f);
            }
          }(document.createElement('script'),
          document.getElementsByTagName('script')[0],
          '//cdn.taboola.com/libtrc/grupolarepblica-larepblica/loader.js',
          'tb_loader_script');
          if(window.performance && typeof window.performance.mark == 'function')
            {window.performance.mark('tbl_ic');}`;
        const flushTaboolaScript = `
                                    window._taboola = window._taboola || []; 
                                    _taboola.push({flush: true});`;
        sectionBodyScript = `
        if(document.body && !document.getElementById("taboola-body-loader")){
            let scriptElement = document.createElement("script");
            scriptElement.innerHTML = ${flushTaboolaScript};
            scriptElement.id="taboola-body-loader";
            document.body.appendChild(scriptElement);
        }
        `;
    }
    const initScript = `
      	window._taboola = window._taboola || [];
          _taboola.push(${JSON.stringify(options)});
          _taboola.push({${type == "internal" ? "article" : "category"}:'auto', url:''})
        `;
    return (
        <>
            <Lazy offsetTop={800} renderPlaceholder={(elementRef) => <div ref={elementRef}>Taboola</div>}>
            <Head>
                <script
                    key="script-taboola"
                    async
                    id="internalTaboola"
                    importance="low"
                    dangerouslySetInnerHTML={{
                        __html: headScript,
                    }}
                />
            </Head>
            </Lazy>
            {sectionBodyScript && (
                <script
                    async
                    defer
                    key="script-taboola-section"
                    id="taboola-section"
                    dangerouslySetInnerHTML={{
                        __html: sectionBodyScript,
                    }}
                />
            )}
            <script async defer id="taboola-init-script" type="text/javascript" dangerouslySetInnerHTML={{ __html: initScript }} />

            <div id={idContainer}>
                <style jsx>{`
                    #${idContainer}{
                        min-height: 800px;
                    }
                `}</style>
            </div>
        </>
    );
};

export { Taboola };
