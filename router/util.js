function delay(time = 0) {
  return new Promise((reslove) => {
    setTimeout(() => { reslove(); }, delay);
  });
}

function makeController(respone, delayTime) {
  return async function (ctx) {
    await delay(delayTime);
    if (typeof respone === 'function') {
      ctx.body = respone(ctx);
    } else {
      ctx.body = respone;
    }
  }
}

module.exports = {
  makeController,
};