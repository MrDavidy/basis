import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const setRouter = new Router({
	routes: [
		{
			path: '/',
			component: ()=>import('@views/Index/Index'),
			children:[
				{
					path:"",
					name:"Welcome",
					component:()=>import('@views/Welcome/Welcome'),
				},
				{
					path:"cateList",
					name:"cateList",
					component:()=>import('@views/Cate/CateList'),
				},
				{
					path:"cateAdd",
					name:"cateAdd",
					component:()=>import('@views/Cate/CateAdd'),
				},
				{
					path:"cateEdit",
					name:"cateEdit",
					component:()=>import('@views/Cate/CateEdit'),
				},
				{
					path:"city",
					name:"city",
					component:()=>import('@views/Cate/City'),
				},
				{
					path:"itemList",
					name:"itemList",
					component:()=>import('@views/Item/itemList'),
				},
				{
					path:"itemAdd",
					name:"itemAdd",
					component:()=>import('@views/Item/itemAdd'),
				},
				{
					path:"itemEdit",
					name:"itemEdit",
					component:()=>import('@views/Item/itemEdit'),
				},
				{
					path:"flex",
					name:"flex",
					component:()=>import('@views/Css/flex'),
				},
				{
					path:"array",
					name:"array",
					component:()=>import('@views/Javascript/array'),
				},
			]
		}
  ]
});
export default setRouter;
