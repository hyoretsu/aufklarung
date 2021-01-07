// @ts-check

module.exports = {
 images: {
  domains: ['aufklarung-dev.herokuapp.com', 'github.com', 'periodicos.ufpb.br'],
 },
 typescript: {
  ignoreBuildErrors: true,
 },
 webpack(config) {
  config.module.rules.push({
   test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
   use: {
    loader: 'url-loader',
    options: {
     limit: 100000,
     name: '[name].[ext]',
     target: 'serverless',
    },
   },
  });
  return config;
 },
};
