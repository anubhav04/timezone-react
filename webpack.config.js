const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'timezone-react.min.js',
    library: 'ReactTimezone',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: ['styled-jsx/babel', 'transform-class-properties'],
        },
      },
    ],
  },
};
