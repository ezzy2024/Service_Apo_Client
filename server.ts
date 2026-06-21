import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
app.use(cors());

const BOT_SERVICE_URL = 'https://serviceapotheke-pdl-bot-830781040278.europe-west3.run.app'; 

app.use('/api/telepharmacy', createProxyMiddleware({
    target: BOT_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { '^/api/telepharmacy': '/api/telepharmacy' }
}));

app.use('/api/timesheet', createProxyMiddleware({
    target: 'https://api.serviceapotheke.tech',
    changeOrigin: true
}));

const PORT = 3001;
app.listen(PORT, () => console.log(`Production-ready Frontend Proxy executing on port ${PORT}`));
