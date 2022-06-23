const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    (...args) => {
        console.log(args)
        createProxyMiddleware({
            target: 'http://localhost:8087',
            changeOrigin: true,
          })(...args)  
    }
  );
};

