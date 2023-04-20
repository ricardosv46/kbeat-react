import { getMenu } from "services/graphql/menu/getMenu";
import { getAds } from "services/graphql/ads/getAds";
import { getAuthor, getAuthors } from "services/graphql/author/getAuthors";
import { getCategory, getCategories } from "services/graphql/category/getCategory";
import { getTag, getTags } from "services/graphql/tag/getTag";
import { getPodcasts } from "services/graphql/podcasts/getPodcasts";
import { getArticle, getArticles } from "services/graphql/article/getArticle";
import { getSpotlight } from "services/graphql/spotlight/getSpotlight";
import { getMeta } from "services/graphql/meta/getMeta";
import { getExternal } from "services/graphql/external/getExternal";
import { getPrinteds } from "services/graphql/printeds/getPrinteds";
import { getLive } from "services/graphql/live/getLive";
import { getSetting } from "services/graphql/setting/getSetting";
import { getThirdParty } from "./thirdParty/getThirdParty";

export const getData = ({ query }) => {
    const { entity } = query;
    delete query.entity;
    const dataFetching = {
        params: query,
    };
    /* DETALLE ARTICULO */
    if (entity == "article") {
        return getArticle(dataFetching);
    }
    /* LISTADO DE ARTICULOS*/
    if (entity == "articles") {
        return getArticles(dataFetching);
    }
    /* PUBLICIDADES */
    if (entity == "ads") {
        return getAds(dataFetching);
    }
    /* AUTORES */
    if (entity == "author") {
        return getAuthor(dataFetching);
    }
    if (entity == "authors") {
        return getAuthors(dataFetching);
    }


    /* MENU */
    if (entity == "menu") {
        return getMenu(dataFetching);
    }
    /* CATEGORÍA */
    if (entity == "category") {
        return getCategory(dataFetching);
    }
    /* CATEGORÍAS */
    if (entity == "categories") {
        return getCategories(dataFetching);
    }
    /* ETIQUETA */
    if (entity == "tag") {
        return getTag(dataFetching);
    }
    if (entity == "tags") {
        return getTags(dataFetching);
    }
    /* SPOTLIGHT */
    if (entity == "spotlight") {
        return getSpotlight(dataFetching);
    }
    /* SETTING */
    if (entity == "setting") {
        return getSetting(dataFetching);
    }
    /* META */
    if (entity == "meta") {
        return getMeta(dataFetching);
    }
    /* CHARBEAT */
    if (entity == "external") {
        return getExternal(dataFetching);
    }
    /*LIVEBLOGPOSTING*/
    if (entity == "live") {
        return getLive(dataFetching);
    }
    /* PODCASTS */
    if (entity == "podcasts") {
        return getPodcasts(dataFetching);
    }
    /* PRINTEDS */
    if (entity == "printeds") {
        return getPrinteds(dataFetching);
    }
    /* TERCEROS */
    if (entity == "third-party") {
        return getThirdParty(dataFetching);
    }
    throw Error("There is not a valid entity");
};
