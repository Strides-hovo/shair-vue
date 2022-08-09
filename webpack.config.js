

module.exports = {

    
          resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx",'.vue'],// other stuff
          fallback: {
          "fs": false,
              "path": require.resolve("path-browserify"),
             "url": false,
             //"url": require.resolve('url'),
      }
  },
  module: {
    rules: [
  
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: (file) => {
                return file.split("resources/js/assets")[1];
              },
            },
          },
        ],
      },
  
    ],
  },
};
