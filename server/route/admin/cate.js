// 分类文件的 总数据处理 响应前端返回值
const router=require('koa-router')();   //引入模块
let cateApi = require("../../api/cate");     //引入封装模块
router.prefix('/admin');//添加路由前缀
router.post('/cate', async (ctx,next)=>{
	//增加分类  act:add   edit  编辑  act:show  
	let params = ctx.request.body;
    if (params.act === 'add') {
        let res = await cateApi.add(params.cateName);
        ctx.body = {     //响应 前端 返回数据
            success:0,
            msg:'添加分类成功'
        }
    }else if(params.act === 'get'){
        //接收参数
        let current = params.current?params.current:1;
        let pageSize = params.pageSize?params.pageSize:5;

        let res = await cateApi.list({current,pageSize});
        //后端应该返回 总条数 当前页的数据
        ctx.body={
            ERROK:1,
            msg:"success",
            data:res
        }
    } else if (params.act === 'edit') {
        let res = await cateApi.edit(params);
        ctx.body = {
            ERROK:0,
            msg:'修改分类成功',
        }
    } else if (params.ctx === 'del') {
        // let res = await cateAPi.de(params);
        let res = await cateApi.del(params);
        // let res = await cateApi.edit(params);
        ctx.body = {
            ERROK:1,
            msg:'删除成功'
        }
    }
});

module.exports=router;