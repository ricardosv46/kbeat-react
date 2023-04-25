import React from 'react';

const ListMenu = ({ items ,settings }) => {
    return (
        <div className={`header__listMenu ${settings.activeMenu && 'enabled__menu'}`}>
            <React.Fragment>
                <div className="listMenu__container">
                    <div className="container__header">
                        <a href="/">
                            <img 
                                className="header__logo logo-listMenu" 
                                src="/static/images/wapa_mobil.png" 
                                alt="logo wapa-mobile" 
                                title="logo wapa-mobile"
                                height="25"
                                width="90"
                            />
                        </a>
                    </div>
                    <ul className="container__listSections">
                        <li className="wrapper__listSections">
                            <a href="/">
                                <span className="listSection__name">home</span>
                            </a>
                        </li>
                        {items}
                    </ul>
                    <div className="container__shared-social">
                        <a 
                            className="shared_social shared_fb" 
                            href="http://www.facebook.com/RevistaWapa" 
                            aria-label="shared-facebook"
                        >
                            <img 
                                className="shared__icon" 
                                src="/static/images/icon_fb.svg" 
                                alt="icon_fb"
                                title="Facebook"
                            />
                        </a>
                        <a 
                            className="shared_social shared_ig" 
                            href="https://www.instagram.com/revistawapa/" 
                            aria-label="shared-instagram"
                        >
                            <img 
                                className="shared__icon" 
                                src="/static/images/icon_ig.svg" 
                                alt="icon_instagram"
                                title="Instagram"
                            />
                        </a>
                        <a 
                            className="shared_social shared_pint" 
                            href="https://www.tiktok.com/@revistawapa" 
                            aria-label="shared-tiktok"
                        >
                            <img 
                                className="shared__icon" 
                                src="/static/images/wapa_tiktok.svg"
                                alt="icon_tiktok"
                                title="Tiktok"
                            />
                        </a>
                        <a 
                            className="shared_social shared_yt" 
                            href="https://www.youtube.com/channel/UCVjcKcSVeW5dbn6Y_hdFY-w" 
                            aria-label="shared-youtube"
                        >
                            <img 
                                className="shared__icon" 
                                src="/static/images/icon_yt.svg" 
                                alt="icon_youtube"
                                title="Youtube"
                            />
                        </a>
                    </div>
                </div>
                <div className="listMenu__bg" onClick={settings.closeMenu}></div>
            </React.Fragment>
        </div>
    )
}

export default ListMenu;
/*espaciado prueba2*/