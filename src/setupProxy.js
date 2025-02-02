//https://z94hdbw4bg.execute-api.us-west-2.amazonaws.com/test/stabled

const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
  target: 'https://z94hdbw4bg.execute-api.us-west-2.amazonaws.com/',
  changeOrigin: true,
};
module.exports = function (app) {
  app.use('/test', createProxyMiddleware(proxy));
};
