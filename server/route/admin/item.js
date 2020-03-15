// 分类文件的 总数据处理 响应前端返回值
const router = require('koa-router')();   //引入模块
const multer = require('../../common/upload/multer');           //引入图片封装数据
let ItemApi = require('../../api/item');
router.prefix('/admin');//添加路由前缀

router.post('/item',multer.single('img'), async (ctx,next)=>{
    let params = ctx.request.body;
    let act = params.act;
    switch (act) {
        case 'getItem':
            let res = await ItemApi.getItem();
            ctx.body = res;
            break;
    }
});

module.exports=router;