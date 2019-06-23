/*
 * create-react-app启动run start时，通过此配置文件转发
 */
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/user/**', {target: 'http://localhost:8080/'}));
    app.use(proxy('/api/**', {target: 'http://localhost:8080/'}));
    app.use(proxy('/javadoc/**', {target: 'http://localhost:8080/'}));
};