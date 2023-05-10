import { useRouter } from "next/router";
import style from "./InterlinkingSection.module.scss";

const InterlinkingSection = ({ data ,full=false}) => {
    const router=useRouter()
    // console.log("---------------data-------------", data)
    const itemsList = data?.map((item, key) => {
        let itemSlug = item.url;
        let title = item.title;
        if(!full){
            if (key <= 5) {
                return (
                    <li key={key}>
                        <a href={itemSlug}>{title}</a>
                    </li>
                );
            }
        }else{
            
            const match = itemSlug === router.asPath

            return (
                <li key={key}>
                    <a style={{color: match ? '#FE0404' :'#666'}} href={itemSlug}>{title}</a>
                </li>
            );
        }
        
    });
    return <ul className={`${style.main__interlinking} ${full && style.main__interlinking__full}`}>{itemsList}</ul>;
};

export { InterlinkingSection };