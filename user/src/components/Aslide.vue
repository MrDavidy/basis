<template>
	<div>
		<Menu theme="dark" width="200px">
			<Submenu name="1">
				<template slot="title">
					<Icon type="ios-paper" /> 分类管理
				</template>
				<MenuItem name="1-1">分类列表</MenuItem>
				<MenuItem name="1-2">添加分类</MenuItem>
				<MenuItem name="1-3">分类编辑</MenuItem>
			</Submenu>
			<Submenu name="2">
				<template slot="title">
					<Icon type="ios-people" /> 商品管理
				</template>
				<MenuItem name="2-1">商品列表</MenuItem>
				<MenuItem name="2-2">添加商品</MenuItem>
			</Submenu>
			
		</Menu>
	</div>
</template>

<script>
	export default {
		
	}
</script>

