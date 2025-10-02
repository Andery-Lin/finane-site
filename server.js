// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// 優先使用 Vite 的 dist，其次 CRA 的 build
const distPath  = path.join(__dirname, 'client', 'dist');
const buildPath = path.join(__dirname, 'client', 'build');
const staticRoot = require('fs').existsSync(distPath) ? distPath : buildPath;

app.use(express.static(staticRoot));

// 讓前端路由可直接刷新
app.get('*', (req, res) => {
  res.sendFile(path.join(staticRoot, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
