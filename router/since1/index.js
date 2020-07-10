const Router = require('koa-router');
const apiConfigs = require('./config');
const { makeController } = require('../util');

let routers = new Router();

for (let config of apiConfigs) {
  const [ method, url, respone, delay = 300 ] = config;
  routers = routers[method](url, makeController(respone, delay));
}

// routers = routers.get('aa', async);

module.exports = routers;
