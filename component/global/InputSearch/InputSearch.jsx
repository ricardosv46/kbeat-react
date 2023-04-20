import style from "component/global/InputSearch/style.module.scss";
import { useState } from "react";

const InputSearch = ({ refBtnSearch, showSearch }) => {

    const [state, setState] = useState({
        resultSearch: "",
    });

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
        const { resultSearch } = state;
        event.preventDefault();

        if (resultSearch !== "") {
            window.location.href = `https://larepublica.pe/buscador?buscando=${resultSearch}`;
        }
    };

    const onKeyUp = (e) => {
        e.persist();
        const result = e.target.value;

        if (result !== "") {
            debounce(() => {
                setState({
                    ...state,
                    resultSearch: result,
                });
            }, 100)();
        } else {
            debounce(() => {
                setState({
                    ...state,
                    resultSearch: "",
                });
            }, 100)();
        }
    };

    const onKeyDown = (e) => {
        e.persist();
        const result = e.target.value;

        if (result !== "") {
            debounce(() => {
                setState({
                    ...state,
                    resultSearch: result,
                });
            }, 100)();
        } else {
            debounce(() => {
                setState({
                    ...state,
                    resultSearch: "",
                });
            }, 100)();
        }
    };

    return (
        <>
            {showSearch ? (
                <div className={`${style.content__input} w-1000`}>
                    <input
                        ref={refBtnSearch}
                        id="inputSearch-g"
                        className="input-search-header"
                        type="search"
                        onKeyUp={onKeyUp}
                        onKeyDown={onKeyDown}
                        placeholder="Buscar en La República"
                    />
                    <button type="button" onClick={onSearch}>Buscar</button>
                    <span className="" aria-hidden="true">
                        <svg
                            data-content="menuBuscador"
                            style={{ width: "20px", height: "20px", fill: "#aaaaaa" }}
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" />
                        </svg>
                    </span>
                </div>
            ) : null}
        </>
    );
};

export { InputSearch };
