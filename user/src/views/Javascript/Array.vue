<template>
    <!-- 对数组的处理 -->
    <div>
        <div>
            {{popMessage}}
            <i-button type="primary" @click="popClick">pop尾部删除</i-button>
        </div>
        <div>
            <i-button type="primary" @click="pushClick">push尾部添加</i-button>
        </div>
        <div>
            <i-button type="primary" @click="shiftClick">shift头部删除</i-button>
        </div>
        <div>
            <i-button type="primary" @click="unshiftClick">unshift头部添加</i-button>
        </div>
        <br>
        <div>
            {{spliceMessage}}
            <i-button type="primary" @click="spliceClick">splice删除并添加</i-button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                popMessage:['zhang','san','li','li','si'],
                pushMessage:['1','2','3','4','5'],
                shiftMessage:['ttt','aaa','sss','ddd','ggg'],
                unshiftMessage:['汉','中华','国','地球','地大物博'],
                spliceMessage:[1,2,3,4,4,5,6]
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
            })
            console.log(array);                 //[-3,-1]
            // 案例（3）
            let bb = [1,1,2,3,4,5,5,6,7];
            let filter2 = bb.filter( function (item,index,self) {
                return self.indexOf(item) === index;
            });
            console.log('filter过滤数组'+filter2);           //[1,2,3,4,5,6,7] 
            // 案例（4）
            let bb1 = [1,2,3,4,5,5,6,7,7,8];
            let filter3 = bb1.filter( (item,index,self) => 
                self.indexOf(item) === index
            );
            console.log("过滤数组的第二种方式"+filter3);            //1,2,3,4,5,6,7,8
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
            // sort 处理数组排序
            //按照字母顺序进行排序
            let point = ['banna','apple','studet','home','father','mather','pie'];
            point.sort();
            console.log(point);     //['apple','banna','father','home','mather','pie','student']
            //但是,r如果是数字的话，就会出现问题,因为3比1大
            let number1 = [7,8,11,9,3,2];
            number1.sort();
            console.log(number1);   //[11,2,3,7,8,9]
            // 使用比值函数可以解决这个问题
            number1.sort( (a,b) => {
                return a -b;
            });
            console.log(number1);
            // 比值函数
            function test (num1,num2) {
                return num1>num2?true:false;
            }
            // 使用相同的技巧对数组进行降序排列
            let array1 = [111,34,77,520,1314,45];
            array1.sort( (a,b) => {
                return b - a;
            });           
            console.log(array1);                 //[1314,520,111,77,45,34]
            test();
            if ( test(1,2) ) {
                console.log("1比2大")
            } else {
                console.log("2比1大")
            }

        },
        methods:{
            // 数组尾部删除
            popClick(){
                this.popMessage.pop();
            },
            // 数组尾部添加
            pushClick(){
                this.popMessage.push('99','12',123);
            },
            // 数组头部删除
            shiftClick(){
                this.popMessage.shift();
            },
            // 数组头部添加
            unshiftClick(){
                this.popMessage.unshift('水稻','大米');
            },
            spliceClick(){
                // [1,2,3,4,4,5,6]
                this.spliceMessage.splice(3,1,7,8)
            }
        }
    }
</script>
<style>

</style>