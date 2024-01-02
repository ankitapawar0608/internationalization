import languageConfig from "./language.json";

const I18n = (lang , keyword) =>{
 return languageConfig[lang][keyword];
}


export default I18n;




