<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="分类名称" prop="cateName">
            <Input v-model="formValidate.cateName" placeholder="请输入分类名字"></Input>
        </FormItem>
      
            <Button type="primary" @click="handleSubmit('formValidate')">上传</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
    </Form>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        data () {
            return {
                formValidate: {
                    cateName: ''
                  
                    
                },
                ruleValidate: {
                    cateName: [
                        { required: true, message: '不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        created () {
            console.log(this.listData[this.$route.params.index]);
            this.formValidate = this.listData[this.$route.params.index];

        },
        methods: {
            // 修改分类
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let params = Object.assign(this.formValidate,{act:'edit'});
                        console.log(params);
                        this.http.post('/api/admin/cate',params).then( (res) => {
                            console.log(res);
                            this.$Message.success(
                                {
                                    content:res.data.msg,
                                    onClose:()=>{
                                        this.$router.go(-1);
                                    }
                                }
                                );
                        });

                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
        },
        computed : {
        ...mapState(['listData'])
        }
    }
</script>
