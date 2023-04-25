import { useMemo } from 'react';
import { TodayTopic } from '../TodayTopic/TodayTopic';

const AmpLogo = (
    <amp-img 
        src="./static/logos/logo-LR.svg"
        alt="logo lr-amp"
        title="logo lr-amp"
        width="124"
        height="28"
    />
);

const Arrow = (
    <amp-img
        className="accordion__arrow" 
        src="/static/lr/arrow.svg" 
        alt="arrow-accordion amp" 
        title="arrow-accordion amp"
        layout="responsive"
        width="20"
        height="20"
    />
);

const HeaderAmp = ({data, topicsMenu}) => {

    let showItem = null;
    let showList = null;

    let showMenu = null;
    let subItems = null;

    useMemo(() => {
        if( data && Object.keys(data) && Object.keys(data).length ){
            
            if( data && data.menu && data.menu.links ){
                const { links } = data.menu;

                showList = links.map(( item, key ) => {
                    return (
                        <li className="header__subList-item" key={`itemSubList-${key}`}>
                            <a className="subList__link" href={item.path || '#'}>
                                {item.title}
                            </a>
                        </li>
                    )
                })

                showItem = links.map(( item, key ) => {
                    return (
                        <section key={`itemList-amp-${key}`}>
                            <li className="accordion__item">
                                <a 
                                    className="accordion__link" 
                                    href={item.path || '#'}
                                >
                                    {item.title}
                                </a>
                            </li>
                            <ul className="accordion__ul">
                                {
                                    item.children.map(( subItem, subKey) => {
                                        return (
                                            <li 
                                                key={`subItemList-amp-${subKey}`}
                                                className="accordion__item">
                                                    <a 
                                                        className="accordion__link" 
                                                        href={subItem.path || '#'}
                                                    >
                                                        {subItem.title}
                                                    </a>
                                            </li>        
                                        )
                                    })
                                }
                            </ul>
                        </section>
                    )
                });
            }
        }
    },[ data ])

    // console.log("DAT", data)
    return (
        <>
            <div itemScope itemType="http://www.schema.org/SiteNavigationElement">
                <amp-sidebar className="amp__sidebar" id="sidebar1" layout="nodisplay" side="left">
                    <nav className="tem-lay-larepublica-menuHamburger sidebar__nav">
                        <li className="accordion__item">
                            <a href="/" className="accordion__link">
                            Inicio</a>
                        </li>
                        {showItem}
                        {/* <amp-accordion className="amp__accordion">
                        </amp-accordion> */}
                    </nav>
                </amp-sidebar>

                <header id="header" className="box-header">
                    <TodayTopic data={topicsMenu} type="amp"/>
                    <div className="tem-lay-larepublica-header">
                        <div className="larepublica-header__main c-both">
                            <div className="cgrid-container" style={{position:'relative', height: '50px'}}>
                                <button className="hamburger" on='tap:sidebar1.toggle'>
                                    <span/>
                                    <span/>
                                    <span/>
                                </button>
                                <strong className="f-left larepublica-header-logo">
                                    <a href="/"><amp-img alt="La Republica"
                                                        src="https://cdn.larepublica.pe/images/content/default/logo-lr.svg"
                                                        width="200"
                                                        height="35"/></a>
                                </strong>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        </>
    )
}
export { HeaderAmp };