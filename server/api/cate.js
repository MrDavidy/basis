// 对数据库进行处理
let db = require('../db/index');   //引入模块
async function add (params) {	  //  async await 异步处理 请求 响应
	// 添加分类  往数据库插入数据 insert into 表名（字段） values (${值})
	let res = await db(`insert into snack_cate (cateName) values ('${params}')`)
}
async function list (params) {
	// 查询总页数
	let res = await db (`select count(*) as list from snack_cate`);
	// 分页
	let data = await db (`select * from snack_cate limit ${(params.current-1) * params.pageSize},${params.pageSize}`);
	return {
		res,
		data
	}
}
// 修改数据库  分类名称
async function edit (params) {
	let res = await db(`update snack_cate set cateName='${params.cateName}' where id=${params.id}`);
	return res;
}
// 删除分类
async function del (params) {
	let res = await db (`delete from snack_cate where id=${params.id}`);
	console.log(res);
	return res;
}
module.exports = {			//导出模块
	add,
	list,
	edit,
	del
};