import axios from 'axios'
const URL = '/api/admin/item';
async function getItem (params) {
    let res = await axios.post(URL,params);
    return res;
}

export default {
    getItem
};