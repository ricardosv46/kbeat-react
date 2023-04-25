import React from 'react'
import style from "component/global/Header/Networks/Networks.module.scss";

const Networks = () => {
  return (
    <ul className={style['wrapper-main__ul']}>
        <li className={style["wrapper-main__li"]}>
          <a 
              className={style["wrapper-main__link"]} 
              href="https://www.instagram.com/revistawapa/" 
              target="_blank" 
              aria-label="redirect facebook"
              rel="noopener"
          >
              <img 
                  className="wrapper-main__shared" 
                  src="/static/icons/logo-fb.svg"
                  alt="icon_facebook"
                  title="Facebook"
                  
              />
          </a>
        </li>
        <li className={style["wrapper-main__li"]}>
          <a 
              className={style["wrapper-main__link"]} 
              href="https://www.instagram.com/revistawapa/" 
              target="_blank" 
              aria-label="redirect instagram"
              rel="noopener"
          >
              <img 
                  className="wrapper-main__shared" 
                  src="/static/icons/logo-ig.svg"
                  alt="icon_instagram"
                  title="Instagram"
                  
              />
          </a>
        </li>
        <li className={style["wrapper-main__li"]}>
          <a 
              className={style["wrapper-main__link"]} 
              href="https://www.instagram.com/revistawapa/" 
              target="_blank" 
              aria-label="redirect tiktok"
              rel="noopener"
          >
              <img 
                  className="wrapper-main__shared" 
                  src="/static/icons/logo-tk.svg"
                  alt="icon_tiktok"
                  title="Tiktok"
                  
              />
          </a>
        </li>
        <li className={style["wrapper-main__li"]}>
          <a 
              className={style["wrapper-main__link"]} 
              href="https://www.instagram.com/revistawapa/" 
              target="_blank" 
              aria-label="redirect youtube"
              rel="noopener"
          >
              <img 
                  className="wrapper-main__shared" 
                  src="/static/icons/logo-yt.svg"
                  alt="icon_youtube"
                  title="Youtube"
                  
              />
          </a>
        </li>
    </ul>
  )
}

export {Networks}