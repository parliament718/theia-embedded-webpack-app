const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
const monacoEditorCorePath = '/home/abhi/Documents/other_git/theia-embedded-demo/node_modules/@typefox/monaco-editor-core/min/vs';
const monacoCssLanguagePath = '/home/abhi/Documents/other_git/theia-embedded-demo/node_modules/monaco-css/release/min';
const monacoHtmlLanguagePath = '/home/abhi/Documents/other_git/theia-embedded-demo/node_modules/monaco-html/release/min';

module.exports = {
  node: {
    net: "mock",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.useable\.css$/,
        use: [
          {
            loader: 'style-loader/useable',
            options: {
              singleton: true,
              attrs: { id: 'theia-theme' },
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),

  ]


};
