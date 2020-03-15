<template>
    <div>
        <div class="top_content">
            <div class="_first">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
            <div class="two"></div>
        </div>
    </div>
</template>
<script>

</script>
<style>
    .top_content{
        
    }
    ._first{
        display:flex;
        /* 水平起点在左侧  */
        /* flex-direction:row; */
        /* 水平起点在底部        */
        /* flex-direction:column-reverse;
        /* 水平起点在上部        */



        /*** 定义了在主轴上的对齐方式 ****/
        /* 靠左对齐 */
        /* justify-content:flex-start;   */
        /* 靠右对齐    */
        /* justify-content:flex-end; */
        /* 居中对齐 */
        /* justify-content:center; */
        /* 两端对齐，项目之间的距离相等 */
        /* justify-content:space-around; */
        /* 项目之间的距离相等，再居中 */
        /* justify-content:space-between; */

        /***项目在交叉轴对齐方式***/
        align-items:flex-start;
    }
    ._first>div{
        margin:2px 2px;
        width:200px;
        height:200px;
    }
    ._first div:nth-child(1){
        background:blue;
    }
    ._first div:nth-child(2){
        background:#000;
    }
    ._first div:nth-child(3){
        background:#001;
    }
    ._first div:nth-child(4){
        background:#111;
    }
    ._first div:nth-child(5){
        background:rgb(19, 1, 5);
    }
    ._first div:nth-child(6){
        background:#876;
    }
    ._first div:nth-child(7){
        background:rgb(219, 9, 9);
    }
</style>