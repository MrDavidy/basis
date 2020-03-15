<template>
    <div class="city">
        <ul>
            <li v-for="(item,index) in cityArr" @click="backFn(index)">
                <h2>{{item}}</h2>
            </li>
        </ul>
    </div>
</template>

<script>
    // import {mapStore} from 'vuex'
    export default {
        name: "City",
        data () {
            return {
                cityArr:['北京','上海','广州','深圳','茂名','张家界','清远','汕头','佛山']
            }
        },
        methods:{
            backFn : function(index){
                console.log(index);
                // 调用vuex的ations设置城市的值
                this.$store.dispatch("setCityName", this.cityArr[index]).then(res => {
                    //返回到首页
                    this.$router.push({
                        name:'cateList',

                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>