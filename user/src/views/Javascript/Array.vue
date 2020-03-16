<template>

</template>
<script>
    export default{
        data(){
            return {

            }
        },
        mounted(){
            // filter 是对指定数组的检测，并返回一个新的数组，它不会对原始数组进行更改，也不会检测一个空的数组。
            // item是当前的值，index是索引值，arr是要检测的对象
            // 第(1)种写法
            let arr = [1,2,-1,-5,8];
            let min = arr.filter(function(item,index,arr){
                return item < 1
            })
            console.log(min);           // [-1, -5]
            // 第(2)种写法
            // 直接传递item也可以
            let arr1 = [2,3,-3,-1,7];
            let array = arr1.filter( function (item) {
                return item < 1;
            } )
            console.log(array);                 //[-3,-1]
            // map对原始数组的处理，返回一个新的数组，不会改变原始数组的值；
            let arr2 = [2,-2,7,8];
            let map1 = arr2.map( function (item,index,arr2) {
                return item *2;
            });
            console.log(map1);              //[4,-4,14,16]
            // some  判断数组中是否满足条件，返回一个布尔值
            // （1）
            let arr3 = [1,-1,2,4,5];
            let some1 = arr3.some( function (item,index,arr3) {
                return item < 0;
            })
            console.log(some1);             //true
            // （2）
            let arr4 = [1,-2,-8,-9];
            let some2 = arr4.some( function (item) {
                return item < 0;
            });
            console.log(some2);
        },
        methods:{
              
            }
    }
</script>
<style>

</style>