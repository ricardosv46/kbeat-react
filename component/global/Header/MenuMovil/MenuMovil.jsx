import React, { useState } from "react";
import { Accordeon } from "component/global/Header/MenuMovil/Accordeon/Accordeon";
import style from "component/global/Header/MenuMovil/MenuMovil.module.scss";

const MenuMovil = ({ open, data, styled }) => {

    let [searchValue, setSearchValue] = useState("");
    let contMenu = null;
    const debounce = (callback, wait) => {
        let timerId;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback(...args);
            }, wait);
        };
    };

    const submitSearch = (event) => {
        event.preventDefault();
        if (searchValue !== "") {
            window.location.href = `/buscador?buscando=${searchValue}`;
        }
    };

    const submitKeyPress = (env) => {
        env.persist();
        const result = env.target.value;
        if (result !== "") {
            debounce(() => {
                if (env.keyCode === 13) {
                    document.location.href = `/buscador?buscando=${result}`;
                }
                setSearchValue((searchValue = result));
            }, 300)();
        } else {
            setSearchValue((searchValue = null));
        }
    };

    if (data?.length) {
        contMenu = data.map((item, key) => {
            return <Accordeon data={item} key={key} />;
        });
    }
    return (
        <>
            <div className={`${open ? style["menu-mobile__open"] : ""} ${style["MenuMovil"]}`} style={styled ? styled : null}>
                <div className={`${style["menu-mobile__search"]}`}>
                    <form className={`${style["menu-mobile__search-form"]}`} onSubmit={submitSearch}>
                        <input
                            name="buscando"
                            type="search"
                            placeholder="Buscar en Kbeat..."
                            onKeyUp={submitKeyPress}
                            className={`${style["menu-mobile__search-input"]}`}
                        />
                    </form>
                </div>
                <div className={`${style["menu-mobile__main-menu-block"]}`}>
                    <ul className={`${style["menu-mobile__main-menu-block-sections"]}`}>
                        <li className={`${style["menu-mobile__main-menu-block--item"]}`} key={`list-init`}>
                            <a href="https://larepublica.pe/ultimas-noticias">Últimas Noticias</a>
                        </li>
                        {contMenu}
                    </ul>
                </div>
            </div>
        </>
    );
};

export { MenuMovil };
