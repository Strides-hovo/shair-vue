const api_routes = require('./routes.json');

export default function () {
    const args = Array.prototype.slice.call(arguments);
    const name = args.shift();

    if (api_routes[name] === undefined) {
        console.log('error not routing')
    }
    else {
        return '/'
            + api_routes[name]
                .split('/')
                .map(str => {
                   return str[0] == '{' ? args.shift() : str
                }).join('/');
    }

}