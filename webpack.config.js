var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'Editor.js'),
  //eslint: {
  //  configFile: '.eslintrc'
  //},
  module: {
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'src')
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-class-properties', 'add-module-exports'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
      //{
      //  test: /\.js$/,
      //  loader: 'eslint'
      //}
    ]
  },
  output: {
    // export itself to a global var
    libraryTarget: "var",
    // name of the global var: "Foo"
    library: "Editor",
    //filename: "Editor.js",
    //path: "dist"
  },
  externals: {
    immutable: 'Immutable',
    react: 'React',
    'react-dom': 'ReactDOM',
    'draft-js': 'Draft',
  }
}