let db = require('../db/index');    //引入数据池
async function getItem (params) {
    let res = await db (`select * from snack_cate`);
    return res;
}
module.exports = {
  getItem
};