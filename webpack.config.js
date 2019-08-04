const path = require('path');
const fs = require('fs');
const babelPlugins = [
  '@babel/plugin-proposal-class-properties',
  ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
];

const getAlias = themeFile => path.resolve(__dirname, `src/styles/${themeFile}`);
const entry = fs.readdirSync('./src/components').reduce((acc, file) => ({
  ...acc,
  [file.replace('.js', '')]: path.resolve(__dirname, `src/components/${file}`)
}),{});
const themeFiles = fs.readdirSync('./src/styles');

const getConfig = (themeFile) => ({
  entry,
  output: {
    path: path.resolve(__dirname, `dist/${themeFile.replace('.css', '')}`),
  },
  resolve: {
    alias: {
      theme$: getAlias(themeFile) 
    }
  },
  module: {    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: babelPlugins
        }
      },
      {
        test: /\.css$/,
        loaders: [
          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } }
        ]
      }
    ]
  },
})

module.exports = themeFiles.map(getConfig);