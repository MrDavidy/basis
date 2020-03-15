import axios from 'axios'
const URL = '/api/admin/cate';
async function add (params) {
    let res = await axios.post(URL,params);
    return res;
}
async function list (params) {
    let res = await axios.post(URL,params);
    return res;
}
async function del (params) {
    let res = await axios.post(URL,params)
    return res;
}
export default {
    add,
    list,
    del
};