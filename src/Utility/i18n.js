import languageConfig from "./language.json";

const i18n = ( lang , keyword) =>{
   return languageConfig[lang][keyword];

}