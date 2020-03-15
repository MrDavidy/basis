
<template>
    <div class="layout">
        <Layout>

            <Sider ref="side1" hide-trigger collapsible  v-model="isCollapsed">
                <Menu theme="dark" width="200">
                <Submenu name="1">
                    <template slot="title">       
                        <Icon type="ios-apps" />
                        分类管理
                    </template>
                    
                    <MenuItem name="1-1" :to="{name:'cateList'}">分类列表</MenuItem>
                   <MenuItem name="1-2" :to="{name:'cateAdd'}">增加分类</MenuItem>
<!--                    <MenuItem name="1-3">分类编辑</MenuItem>-->
                	
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                       <Icon type="md-appstore" />
                        商品管理
                    </template>
                    <MenuItem name="2-1" :to="{name:'itemList'}">商品列表</MenuItem>
<!--                    <MenuItem name="2-2">增加商品</MenuItem>-->
<!--                    <MenuItem name="2-3">商品编辑</MenuItem>-->
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                       <Icon type="md-appstore" />
                        css样式
                    </template>
                    <MenuItem name="3-1" :to="{name:'flex'}">flex布局</MenuItem>
                </Submenu>
            </Menu>
            </Sider>
            <Layout>
                <Header style="padding-left:0px" class="layout-header-bar" >
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                     <Dropdown>
				        <a href="javascript:void(0)">
				            <img src="../../assets/avatar/1.png" alt="" class="avator"/>
				            <Icon type="ios-arrow-down"></Icon>
				        </a>
				        <DropdownMenu slot="list">
				            <DropdownItem>用户详情</DropdownItem>
				     		<DropdownItem>退出登录</DropdownItem>
				        </DropdownMenu>
				    </Dropdown>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <div id="content">
                    	<router-view></router-view>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .layout>.ivu-layout{
        height:100%;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-right:20px;
        
    }
    .ivu-dropdown{
    	height:100%;
    }
    .ivu-dropdown-rel{
    	height:100%;
    }
     .ivu-dropdown-rel>a{
     	display: inline-flex;
     	align-items: center;
     }
    .avator{
    	height:64px;
    	margin-right:20px;
    }
    .ivu-icon-ios-arrow-down{
    	font-size:20px;
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
