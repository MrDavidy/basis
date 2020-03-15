<template>
  <div>
    <Row>
      <i-col span="12">
        <Upload multiple type="drag" action="/api/admin/item" name="img" :before-upload="beforeUpload">
          <div style="padding:20px 0;">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          </div>
        </Upload>
      </i-col>
      <!--            图片展示-->
      <i-col span="12" class="imgWiath">
        <img :src="imgUrl" alt="">
      </i-col>
    </Row>
    <!--        商品详情-->
    <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <Form-item label="商品名称" prop="itemName">
        <i-input v-model="formValidate.itemName" placeholder="请输入商品名称"></i-input>
      </Form-item>
      <Form-item label="商品价格" prop="itemPrice">
        <i-input v-model="formValidate.itemPrice" placeholder="商品价格单位：元" number></i-input>
      </Form-item>
      <Form-item label="商品数量" prop="itemNum">
        <i-input v-model="formValidate.itemNum" placeholder="请输入商品数量" number></i-input>
      </Form-item>
      <Form-item label="商品名称" prop="cateId">
        <i-select v-model="formValidate.cateId" style="width:200px">
          <i-option v-for="item in cityList" :value="item.id">{{ item.cateName }}</i-option>
        </i-select>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formValidate')">上传</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
      </Form-item>
    </i-form>
  </div>

</template>
<script>
  import itemApi from '@/api/cate/item'


  export default {
    data() {
      // 验证规则
      const validatePrice = (rule, value, callback) => { //商品价格
        if (!value) {
          return callback('不能为空')
        }
        if (!Number.isInteger(value)) {
          return callback(new Error('请输入正整数'));
        }
      };
      const validateNum = (rule, value, callback) => { //商品数量
        if (!value) {
          return callback('不能为空')
        }
        if (!Number.isInteger(value)) {
          return callback(new Error('请输入正整数'));
        }
      };
      return {
        formValidate: { //商品分类
          itemName: '',
          itemPrice: 0,
          itemNum: 0,
          cateId: ""
        },
        cityList: [], //分类名称
        ruleValidate: { //验证
          itemName: [{
            required: true,
            message: '不能为空',
            trigger: 'blur'
          }],
          itemPrice: [{
            validator: validatePrice,
            trigger: 'blur'
          }],
          itemNum: [{
            validator: validateNum,
            trigger: 'blur'
          }]
        },
        imgUrl: '' //获取图片路径
      }
    },
    created() {
      // 请求所有分类信息
      itemApi.getItem({
        act: 'getItem'
      }).then(res => {
        this.cityList = res.data;
      }).catch(err => {
        console.log(err)
      });
    },
    methods: {
      // 上传图片
      beforeUpload(file) {
        let fd = new FileReader();
        fd.readAsDataURL(file);
        let that = this;
        fd.onload = function () {
          that.imgUrl = this.result;
        };
      },
      // 上传商品函数
      handleSubmit(name) {
        console.log(this.formValidate);
        this.$refs[name].validate((valid) => {
          if (valid) {
            itemApi.getItem(this.formValidate).then((res) => {
              console.log(res);
            });
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  }

</script>
<style>
  .imgWiath {
    width: 100px;
    height: 100px;
  }

  .imgWiath img {
    width: 100%;
    height: 100%;
    margin: 0 0 0 100%;
  }

</style>
