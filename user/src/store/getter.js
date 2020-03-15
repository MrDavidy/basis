const getter = {
    // 参数列表state指的是state数据
    getCityFn(state){
        console.log(state);
        return state.city;
    }
};
export default getter;