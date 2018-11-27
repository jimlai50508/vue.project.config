## 建立Vue專案
---
### 1. 設置package.json
- 相依套件(vue-loader, sass-loader等等)
- 開發模式套件(webpack, webpack-cli,& webpack-dev-server)
- 執行命令(npm run)
### 2. 設置Webpack.config.json
- 進入腳本(src/index.js)和輸出路徑(dist/build.js)
- 設置module和plugin
- 設置devServer
### 3. 設置index.js
index.js為app的進入點，在index.js中加載vue元件。
### 4. 執行
- ``npm run dev``開發模式啟動server。
- ``npm run build``生產模式產生build.js檔案。