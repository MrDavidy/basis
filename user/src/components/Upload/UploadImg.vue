<template>
    <div>
        <Upload
            :before-upload="handleUpload"
            action="action">
              <Button icon="ios-cloud-upload-outline">上传图片</Button>
        </Upload>
        <div>
        	<Button type="success" @click="upload">上传</Button>
        </div>
    </div>
</template>
<script>
    export default {
    	props:{
    		action:{
    			type:String
    		}
    	},
        data () {
            return {
                file: null 	
            }
        },
        methods: {
            handleUpload (file) {
                this.file = file;
               
                return false;
            },
            upload () {
            	this.$emit('upload',this.file);
            }
        }
    }
</script>
