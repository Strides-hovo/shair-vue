

module.exports = {
    experiments: {
        topLevelAwait: true
    },

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