const mutations = {
    listData (state,data) {
        state.listData = data;
        console.log(state.listData)
    },
    // state指的是state的数据
    // name传递过来的数据
    setCity(state, name){
        state.city = name;//将传参设置给state的city
    }
};
export default mutations;
