import React from 'react';

const AlertaWebAMP = ({ alertWebData = {}, variant = "primary", cssName="" }) => {

    if(alertWebData?.spotlight?.data) {
        const { data } = alertWebData.spotlight;
        const header = (data?.header && data?.header[0]) || "",
            title = (data?.title && data?.title[0]) || "",
            url = (data?.url && data?.url[0]) || "https://larepublica.pe";

    
        if(url && title) {
            return (
                <>
                    <div className='content-alertaWebAmp'>
                        <div className={`alertBlock ${cssName}`}>
                            <a href={url} className={`${cssName}`}>
                                <span className="alertaweb--btn twinkle"/>
                                <span className="alertaweb--title" dangerouslySetInnerHTML={{__html: `${header ? header + ' - ' : ""}${title || ""}`}} /> 
                            </a>
                        </div>
                    </div>
                    <style jsx global amp-custom="amp-custom">{`
                    .content-alertaWebAmp{
                        width: 100%;
                        max-width: 600px;
                        margin: 0;
                        line-height: 24px;
                        box-sizing: border-box; 
                        margin-top: 3px
                    }
                    .twinkle{
                        display: inline-block;
                        background-color: #fff;
                        border-radius: 50%;
                        margin-right: 8px;
                    }
                    .alertaweb--btn {
                        width: 9px;
                        height: 9px;
                    }
                    a .alertaweb--title {
                        font-size: 14px;
                        line-height: 1;
                        color: #fff;
                        display: inline-block;
                        font-family: "Roboto", sans-serif
                    }
                    .alertBlock{
                        overflow-x: auto;
                        scroll-behavior: smooth;
                        white-space: nowrap;
                        padding: 10px 15px;
                    }
                    .alertBlock a:-webkit-any-link {
                        text-decoration: none;
                    }
                    .wrapper-nav{
                        position: relative;
                        font-family: "Roboto", sans-serif;
                        text-align: center;
                    }
                    .nav__side-left{
                        position: absolute;
                        top: 0;
                        left: 0;
                        padding: 0 10px;
                        font-size: 12px;
                        font-weight: 700;
                    }
                `}</style>
            </>
            );
            
        }
        return null;
    }
    return null;
};
 
export {AlertaWebAMP};