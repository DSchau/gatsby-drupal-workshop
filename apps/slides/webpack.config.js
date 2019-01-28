const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin(
      Object.keys(process.env).reduce((merged, key) => {
        const mergedKey = `process.env.${key}`;
        let value = process.env[key];
        if (value === 'true' || value === 'false') {
          value = JSON.parse(value);
        } else {
          value = JSON.stringify(value);
        }
        merged[mergedKey] = value;
        return merged;
      }, {})
    ),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)/,
        use: ['file-loader'],
      },
    ],
  },
};
