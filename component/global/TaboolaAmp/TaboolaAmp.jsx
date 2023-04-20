const TaboolaAMP = () => {
    const newroom = `{"vars": {"aid": "grupolarepblica-larepblica"}}`;   
    return <>
        <amp-analytics type="taboola" id="taboola">
            <script type="application/json" dangerouslySetInnerHTML={{__html: newroom}} />
        </amp-analytics>
        <div className="tem-lay-larepublica-body">
            <amp-embed width="100" height="100"
                       type="taboola"
                       layout="responsive"
                       data-publisher="grupolarepblica-network"
                       data-mode="thumbnails-a-amp"
                       data-placement="Below Article Thumbnails AMP"
                       data-target_type="mix"
                       data-article="auto"
                       data-url=''/>
        </div>
    </> 
    
};

export { TaboolaAMP };