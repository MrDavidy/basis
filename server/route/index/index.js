const index=require('koa-router')();
const aa =require('./aa');
index.get('/', async (ctx,next)=>{
	ctx.body='我是首页'
});
index.use(aa.routes());
module.exports=index;