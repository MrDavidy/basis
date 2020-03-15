
 <template>
 	<div>
		<div v-if="itemData.length">
			<Row>
				<Col span="24">
					<Button type="success" @click="enterAdd">增加商品</Button>
				</Col>
			</Row>
			<Table1 :columns1="col1" :data="itemData" @edit="edit" @del="fn"></Table1>
			<Page :total="total" :page-size="list.pageSize" show-sizer @on-change="change"></Page>
		</div>

		<div v-else="itemData.length" class="loading">
			<Spin size="large"></Spin>
		</div>
		<Modal v-model="delModal" title="删除" @on-ok="delId" @on-cancel="">
			<p>是否删除该分类？</p>
		</Modal>
	</div>
 </template>
<script>
	import Table1 from '@components/Table/Table1'
	import cateApi from '@/api/cate/Cate'
	import {mapMutations,mapState} from 'vuex'
	export default {
    	data(){
    		return{
    			col1:[
    			{
    				title:"商品名称",
    				key:"id"
    			},
    			{
    				title:"商品价格",
    				key:"cateName"
    			}
    			],
    			itemData:[],
				list:{							//分页信息
					current:1,
					pageSize:2
				},
				total:0,
				delModal:false,					//是否显示对话框
				index:0
    		}
    	},
		// 网页一打开请求数据
		mounted(){
    		let params = Object.assign(this.list,{act:'get'});
			cateApi.list(params).then( (res) => {
				let data = [];
				this.itemData = res.data.data.data;
				this.total = res.data.data.res[0].list;
				data = res.data.data.data;
				this.listData(data);
			});
		},
		computed: {
			city: function () {
				console.log(this.$store.getters.getCityFn);
				// 通过vuex的getters方法来获取state里面的数据
				return this.$store.getters.getCityFn;
			},
		},
    	methods:{
			edit (index) {
				this.$router.push({
					name:'cateEdit',
					params:{
						index:index
					}
				})
			},
			// 弹出删除对话框
    		fn(n){
				console.log('aaa');
				this.delModal = true;
				this.index = n;
    		},
			// 确定删除
			delId () {
				let id = this.itemData[this.index].id;
				cateApi.del(
						{
							id:id,
							ctx:'del'
						}).then( (res) => {
					console.log(res);
					this.itemData.splice(this.index,1);
					this.$Message.success(res.data.msg);
				}).catch( (err) => console.log(err))
			},
    		enterAdd(){
    			this.$router.push({
    				name:"itemAdd"
    			});
    		},
			change (n) {
    			this.list.current = n;
				let params = Object.assign(this.list,{act:'get'});
				cateApi.list(params).then( (res) => {
					let data = [];
					this.itemData = res.data.data.data;
					this.total = res.data.data.res[0].list;
					data = res.data.data.data;

				});
			},
			...mapMutations(['listData'])
    	},
    	components:{
    		Table1
    	}
    }
</script>
 <style>
	.loading{
		width:100%;
		height:200px;
		display:flex;
		justify-content:center;
		text-align: center;
		margin: 80px 0 0 0;
	}
 </style>
