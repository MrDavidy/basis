<template>
    <div>
        {{a}}<br> {{e.name}}
    </div>
</template>
<script>
    export default {
        props:["a","e"],
        data(){
            return{
            }
        }
    }
</script>