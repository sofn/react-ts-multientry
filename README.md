#### React + TypeScript + Router + Mobx + Antd + 多页面开发模板（免npm run eject） 

### 1.基础模板： create-react-app 

### 2.开发模式
* src/setupProxy.js配置代理
* 执行  
npm run start 
或
yarn run start

打开：http://localhost:3000/ 默认index页面
打开：http://localhost:3000/admin.html 打开admin页面

### 3.构建线上文件
* 执行  
npm run build 
或
yarn run build

build目录下将生成两个html文件： index.html和admin.html 分别对应连个entry入口

### 4.构建过程  
多页面开发参考文章：https://segmentfault.com/a/1190000017858725  
需要改动的地方：
require.resolve('./node_modules/react-scripts/config/polyfills.js')  
改成  
require.resolve('react-app-polyfill/stable')

Mobx支持及静态类型支持参考：src/index/components/header/Header.tsx

Router支持参考：src/index/components/header/Header.tsx
