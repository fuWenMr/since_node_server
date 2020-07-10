const Router = require('koa-router');
const since1 = require('./since1');

const router = new Router();

// since1是该域名下的一个项目

router.use('/since1', since1.routes());

module.exports = router;
