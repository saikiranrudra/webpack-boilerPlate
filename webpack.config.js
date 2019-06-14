const path = require('path'); // path module for giving absolute path
const TerserPlugin = require('terser-webpack-plugin'); // plugin for minifing js 
module.exports = {
    entry: './src/index.js', // path from which js bundeling starts

    output: {
         
        filename: "bundle.js", // output bundle file name
        path: path.resolve(__dirname, './dist'), // js bundle absolute path
        publicPath: './dist/' // public css and image files location
    
    },

    // loaders are installed using npm install <loader-name> --save-dev
    module: { // loaders are difined in module property inside rules array
        rules: [
            {
                test: /\.(png|jpg)$/, // files which match this regex
                use: [
                    'file-loader' // this loaders are use in it
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'scss-loader'
                ]
            }
        ]
    },
    plugins: [ // plugins are declared here
        // running webpack plugin
       new TerserPlugin(), // new plugin instance is created
       
    ],
    /**
     * Types of build mode
     * none
     * production
     * developement
     */
    mode: 'none' // webpack build mode 
}