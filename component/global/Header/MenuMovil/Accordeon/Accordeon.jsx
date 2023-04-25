import React, {useState} from 'react';
import style from "component/global/Header/MenuMovil/Accordeon/Acordeon.module.scss"

const MakeArrow =  ({handle, stateActiveAccordion}) => <div className={`${style["item-humor__span"]} ${stateActiveAccordion ? style['rotate'] : ''}`} onClick={handle ? handle : () => false }/>;

const MakeChildrenLi = ({name, link, submenu, statusAccordion, handle}) => {
    if(name && link) {
        if(submenu && submenu.length) {
            return <li className={`${style["menu-mobile__main-menu-block--item"]}`} style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <a href={link} style={{width: 'auto'}}>
                    {name}
                </a>
                <MakeArrow stateActiveAccordion={statusAccordion} handle={handle} />
            </li>
        } else {
            return <li className={`${style["menu-mobile__main-menu-block--item"]}`}>
                <a href={link}>
                    {name}
                </a>
            </li>            
        }
    } else {
        if(!link) {
            if(submenu && submenu.length) {
                return <li className={`${style["menu-mobile__main-menu-block--item"]} ${style["withoutLink"]}`} style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}} onClick={handle}>
                    {name}
                    <MakeArrow stateActiveAccordion={statusAccordion} />
                </li>
            }
        }
        return null;
    }
}

const Accordeon = ({data}) => {

    let showChildren = null;
    const [ activeAccordion, setActiveAccordion ] = useState(false);

    

    const handleOnClick = (e) => {
        e.preventDefault();
        setActiveAccordion(!activeAccordion);
    }
    if( data && data?.children && Object.keys(data?.children) && Object.keys(data?.children)?.length ){
        const {children} = data;
        showChildren = children.map((item, key) => (
            <li className={`${style["menu-mobile__main-menu-block--item"]}`} key={`list-${key}`}>
                    <a itemProp="url" href={item?.path}>{item?.title}</a>
                </li>
        ))
    }

    return (<>
        <MakeChildrenLi name={data?.title} link={data?.path} submenu={data?.children} statusAccordion={activeAccordion} handle={handleOnClick}/>
        <ul style={{paddingLeft: '40px'}}>
            {activeAccordion && showChildren}
        </ul>
    </>)
}

export {Accordeon};