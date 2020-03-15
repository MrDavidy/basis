const actions = {
    // count:0,
    // 设置城市信息
    // 参数列表：{commit, state}
    // state指的是state数据
    // commit调用mutations的方法
    // name就是调用此方法时要传的参数
    setCityName({commit,state}, name){
        // 跟后台打交道
        // 调用mutaions里面的方法
        commit("setCity", name);
    }
};
export default actions;
