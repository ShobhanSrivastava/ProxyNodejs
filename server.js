const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const { PORT, TARGET_URL } = process.env;

const app = express();

app.use(createProxyMiddleware({
    target: TARGET_URL,
}));

app.listen(PORT || 8080, () => {
    console.log(`Server is running on port ${PORT}`);
});