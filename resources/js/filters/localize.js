import store from "../store";


const context = require.context('../translate', true, /.json$/);
const all = get_files(context);

function get_files(context){
    const files = {}
    context.keys().forEach((key) => {
        files[key.replace('./','').replace('.json','')] = context(key);
    });
    return files
}


 function get_translate_files(context){
        context.keys().forEach((key) => {
            const fileName = key.replace('./', '');
            const resource = require(`../translate/${fileName}`);
            const namespace = fileName.replace('.json', '');
            all[namespace] = JSON.parse(JSON.stringify(resource));
        });
}


export function _lang(key) {
    const language = store.getters["lang/GET_SITE_LANGUAGE"] || 'en'
    return language.code && all[language.code] && all[language.code][key] ? all[language.code][key] : key;
}


export  function _translate(language_code = null) {

    if (language_code) return all[language_code]
    const language = store.getters["lang/getLanguage"] || 'en'
    return language.code ? all[language.code] : null;
}



