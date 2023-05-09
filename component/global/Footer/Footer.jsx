import { useState } from 'react';
// import IconTikTok from '../Icon/IconTikTok';
// import { IconWhatsapp } from '../Icon/IconWhatsapp';
import style from "component/global/Footer/Footer.module.scss"

const date = new Date();

const setLogos = [
    {
        href: 'https://larepublica.pe/',
        name: 'larepublica.pe',
        height: '13',
        img: '/static/logos/logo-LR.svg'
    },
    {
        href: 'https://podcast.larepublica.pe',
        name: 'podcast.larepublica.pe',
        height: '13',
        img: '/static/logos/logo-LR.svg'
    },
    {
        href: 'https://elpopular.pe/',
        name: 'elpopular.pe',
        height: '13',
        img: '/static/logos/logo_elpopular.svg'
    },
    {
        href: 'https://libero.pe/',
        name: 'libero.pe',
        height: '13',
        img:'/static/logos/logo-libero.svg'
    },
    {
        href: 'https://libero.pe/esports',
        name: 'libero.pe/esports',
        img: '/static/logos/logo-liberoEsports.svg',
        height: '36'
    },
    {
        href: 'https://wapa.pe/',
        name: 'wapa.pe',
        height: '16',
        img: '/static/logos/logo_wapa.svg'
    },
    {
        href: 'https://lol.larepublica.pe/',
        name: 'lol.larepublica.pe',
        height: '16',
        img:'/static/logos/logo-aweita.svg'
    },
    {
        href: 'https://buenazo.pe/',
        name: 'buenazo.pe',
        img: '/static/logos/logo-buenazo.svg',
        height: '27'
    },
    {
        href: 'https://larepublica.pe/verificador',
        name: 'larepublica.pe/verificador',
        img: '/static/logos/logo-verificador.svg',
        height: '14'
    },
    {
        href: 'https://perulegal.larepublica.pe/',
        name: 'perulegal.larepublica.pe',
        img: '/static/logos/logo-peruLegal.svg',
        height: '18'
    },
    {
        href: 'https://lrmas.larepublica.pe/',
        name: 'lrmas.larepublica.pe',
        img: '/static/logos/logo-lrmas.svg',
        height: '25'
    },
    {
        href: 'https://perubazar.pe/',
        name: 'perubazar.pe',
        img: '/static/logos/logo-peruBazar.svg',
        height: '25'
    },
    {
        href: 'https://cuponidad.pe/',
        name: 'cuponidad.pe',
        img: '/static/logos/logo-cuponidad.svg',
        height: '13'
    }
];

const Footer = ({ data }) => {
    const [resultSearch, setresultSearch] = useState(null);

    let data_menu;
    let contentTags = null;
    if (data && data.menu && data.menu.links && Object.keys(data.menu.links)) {
        data_menu = data.menu.links;
    }

    const debounce = (callback, wait) => {
        let timerId;
        return (...args) => {
          clearTimeout(timerId);
          timerId = setTimeout(() => {
            callback(...args);
          }, wait);
        };
    };
    
    const onSearch = (event) => {
        event.preventDefault();
        if (resultSearch !== '') {
            window.location.href = `/search?searching=${resultSearch}`;
        }
    };

    const onKeyUp = (e) => {

        e.persist();
        const result = e.target.value;

        if (result !== '') {
            debounce(() => {
                setresultSearch(result);
            }, 100)();
        } else {
            debounce(() => {
                setresultSearch('');
            }, 100)();
        }
    };
    const onKeyDown = (e) => {
        e.persist();
        const result = e.target.value;

        if (result !== '') {
            debounce(() => {
                setresultSearch(result);
            }, 100)();
        } else {
            debounce(() => {
                setresultSearch('');
            }, 100)();
        }
    };
      
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    const contentMedios = <ul className={`${style['footer__logotipos']} ${style['d-flex']} ${style['align-center']}`}>
        {
            setLogos.map((item, key) => {
                const { name, href, img, height } = item;
                return <li className={`${style['footer__item']}`} key={`item-medio-informativo-${key}`}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                </li>
            })
        }    
    </ul>

    data_menu && 
    (contentTags = <ul className={`${style['footer__tags']} ${style['d-flex']} ${style['flex-wrap']}`}>
            {
                data_menu.map((item, key) => {
                    const { title, path } = item;
                    return <li className={`${style['footer__item-tag']}`} key={`item-tag-${key}`}>
                        <a href={path}>{title}</a>
                    </li>
                })
            }    
        </ul>)


    const siteLogo =  <a href="/" className={`${style['footer__mainLogo']}`} aria-label={'redirect home'}>
                        <img src='static/logo-kbeat.svg' alt="Diario la República hoy portada" width="177" height="59" loading="lazy"/>
                      </a>

    const contactLinks = <div className={`${style['footer__contact--links']}`}>
            <a className="" href="#">Contáctanos</a>
            <a className="" href="#" >Suscríbete</a>
            <a className="" href="https://wapa.pe/terminos-de-uso"> Términos de uso</a>
            {/* <a className="" href="https://larepublica.pe/politicas-y-estandares">Políticas y Estándares</a> */}
    </div>

    const searchBlock = <div style={{margin:'auto 7px'}}><form
                            className={`${style['footer__search']}`}
                            onSubmit={onSearch}>
                            <div className={`${style['footer__search--items']}`}>
                                <button role="button" style={{border:"none", marginRight: "10px"}} 
                                    id="btn-main-menu-search"
                                    className={style["footer__search--btn"]}
                                    aria-label="buscar noticia" 
                                    data-content="menuBuscador">
                                    <span className={`${style['icon-span']} ${style['svg-baseline']}`} aria-hidden="true">
                                        <svg style={{width: "20px", fill:"#aaa", maxWidth: "20px"}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" />
                                        </svg>
                                    </span>
                                </button>
                                <input
                                    id="menuFocus"
                                    className={style["footer__search--input"]}
                                    type="search"
                                    onKeyUp={onKeyUp}
                                    onKeyDown={onKeyDown}
                                    placeholder="Buscar "
                                />
                                
                            </div>
                            <button role="button" style={{border:"none"}} 
                                id="btn-main-menu-search"
                                className={style["footer__search--btn2"]}
                                aria-label="buscar noticia" 
                                data-content="menuBuscador">
                                Buscar
                            </button>
                        </form>
                        </div>

    const mediaLinks  = <ul className={`${style['footer__btnsocial']} ${style['d-flex']}`}>
                                <li className={style["menulist-btn-social"]}>
                                    <a 
                                        className={`${style['media__fb']} ${style['atm-menu-tsocial']}`} href={process.env.SITE_FACEBOOK}
                                        style={{backgroundColor:'#2D88FF'}}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                            <svg style={{width: '24px', fill: '#fff'}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t24 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className={style["menulist-btn-social"]}>
                                    <a 
                                        className={`${style['media__tw']} ${style['atm-menu-tsocial']}`} href={process.env.SITE_YOUTUBE}
                                        rel="noopener noreferrer"
                                        style={{backgroundColor:'#FF0000'}}
                                        target="_blank"
                                        >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                            <svg width="34" height="24" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.5647 2.2575C19.3353 1.40292 18.8324 0.679583 17.9706 0.452083C16.4088 0.0379167 10 0 10 0C10 0 3.59118 0.0379167 2.02941 0.452083C1.16765 0.679583 0.667647 1.40292 0.435294 2.2575C0.0176471 3.80625 0 7 0 7C0 7 0.0176471 10.1937 0.435294 11.7425C0.664706 12.5971 1.16765 13.3204 2.02941 13.5479C3.59118 13.9621 10 14 10 14C10 14 16.4088 13.9621 17.9706 13.5479C18.8324 13.3204 19.3353 12.5971 19.5647 11.7425C19.9824 10.1937 20 7 20 7C20 7 19.9824 3.80625 19.5647 2.2575ZM7.94118 9.91667V4.08333L13.2353 7L7.94118 9.91667Z" fill="white"/>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className={style["menulist-btn-social"]} >
                                    <a 
                                        className={`${style['media__ig']} ${style['atm-menu-tsocial']}`} href={process.env.SITE_INSTAGRAM}
                                        style={{background:'radial-gradient(208.43% 208.43% at -10.92% 135.02%, #F9ED41 0%, #FF833D 24.12%, #EE5568 40.1%, #E7407B 48.88%, #0028FF 100%)'}}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <span style={{padding:'8px'}} aria-hidden="true">
                                            <svg style={{width: '24px', fill: '#fff'}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zm-502-220q-7 0-76.5-.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" />
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            </ul>


    return <footer className={style["wrapper__footer"]}>
            <div className={style["backButton__wrapper"]}>
                <button className={style["backButton"]} onClick={scrollToTop}>
                    <div className={`${style['d-flex']} ${style['item-center']} ${style['gap-10']}`}>
                        <div>                        
                            <img src="/static/icons/arrow_top.svg" loading="lazy" alt="Regresar al inicio" height="15" width="13" />
                        </div>
                        Regresar al inicio
                    </div>
                       
                </button>
            </div>
            <div className={style["footer"]}>
                {siteLogo}
                <div className={style["footer__tags-media"]}>
                    <div className={style["footer__logos--items"]}>
                        <p className={style["footer__interested--title"]}>Enlaces de interés</p>
                        {contentTags}
                        <div className={style["contactLinks__mobile"]}>
                            {contactLinks}
                        </div>
                    </div>
                    <div className={style["footer__media--items"]}>
                        <p className={style["footer__interested--title"]}>Nuestras Redes Sociales</p>
                        {mediaLinks}
                        {searchBlock}
                        <div className={style["contactLinks__desktop"]}>
                            {contactLinks}
                        </div>
                    </div>
                </div>
                <p className={style["footer__moreMedios"]}>Visita también</p>
                {contentMedios}
                <p className={style["copyright"]}>©TODOS LOS DERECHOS RESERVADOS - {date.getFullYear()}</p>
            </div>  
        </footer>

}

export {Footer};