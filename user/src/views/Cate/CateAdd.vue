<template>
    <child a="zhe" :e="bbb"></child>
</template>
<script>
    import child from '@components/Child'
    export default {
        data(){
            return {
                bbb:{
                    name:'123',
                    object:null
                }
            }
        },
        components:{
            child
        }
    }
</script>
<style>

</style>