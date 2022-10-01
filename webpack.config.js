require('dotenv').config();
let webpack = require('webpack')

let dotenvplugin = new webpack.DefinePlugin({
    'process.env': {
        RECAPTCHA_SECRET: JSON.stringify(process.env.RECAPTCHA_SECRET ),
        RECAPTCHA_KEY: JSON.stringify(process.env.RECAPTCHA_KEY ),
        MAP_API: JSON.stringify(process.env.MAP_API ),
    }
})

module.exports = {
    experiments: {
        topLevelAwait: true
    },
    plugins: [
        dotenvplugin,
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx",'.vue'],// other stuff

        fallback: {
            //"fs": fs,
            "path": require.resolve("path-browserify")
        }
    },
    module: {
        rules: [

        ],
    },
};