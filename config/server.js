var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./development.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: {
    errors: true,
    warnings: true,
  },
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});