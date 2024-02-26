const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const { PORT, TARGET_URL } = process.env;

const app = express();

app.use(createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true, 
    secure: false,
    onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader('ngrok-skip-browser-warning', 'true');
    }
}));

app.listen(PORT || 8080, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;