import style from "./TitleInterna.module.scss";


const TitleInterna = ({title}) => {    
    return (
        <h1 className={style["main__title"]}>{title}</h1>
    );
};

export { TitleInterna };
