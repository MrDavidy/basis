<template>
	<div>
		<Menu mode="horizontal" theme="dark" active-name="1">
			<MenuItem name="1">
			<Icon type="md-cafe" /> 欢迎使用后台管理项目
			</MenuItem>
			<Submenu name="2">
				<template slot="title">
					<img src="../assets/avatar/1.png" alt=""> 小明同学：欢迎您
				</template>
				<MenuGroup title="操作">
					<MenuItem name="2-1">注销登录</MenuItem>
					<MenuItem name="2-2">详细信息</MenuItem>
				</MenuGroup>
			</Submenu>

		</Menu>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.ivu-menu{
		display: flex;
		justify-content: space-between;
	}
	.ivu-menu-submenu-title img {
		height: 60px;
		vertical-align: middle;
	}
</style>
