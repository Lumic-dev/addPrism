const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/backend",
        createProxyMiddleware({
            target: "http://141.164.55.226:9001",
            changeOrigin: true,
        })
    );
};
