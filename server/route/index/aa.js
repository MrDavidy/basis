const aa=require('koa-router')();

aa.get('/aa', async (ctx,next)=>{
	ctx.body='是详情页'
});

module.exports=aa;