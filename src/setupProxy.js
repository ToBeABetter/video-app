const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://baobab.kaiyanapp.com/api',
      pathRewrite:{'^/api': ''} ,
      changeOrigin: true
    })
  )
}

