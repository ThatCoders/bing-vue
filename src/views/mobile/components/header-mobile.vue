<template>
  <div class='header-mobile'>
      <van-button plain type="primary">主要按钮</van-button>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { Button } from 'vant';

export default {
	name: 'header-mobile',
	// import引入的组件需要注入到对象中才能使用
	components: {
		'van-button': Button
	},
	data () {
		// 这里存放数据
		return {

		};
	},
	// 监听属性 类似于data概念
	computed: {},
	// 监控data中的数据变化
	watch: {},
	// 方法集合
	methods: {

	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created () {

	},
	// 生命周期 - 挂载完成（可以访问DOM元素）
	mounted () {

	},
	beforeCreate () {}, // 生命周期 - 创建之前
	beforeMount () {}, // 生命周期 - 挂载之前
	beforeUpdate () {}, // 生命周期 - 更新之前
	updated () {}, // 生命周期 - 更新之后
	// beforeDestroy () {}, // 生命周期 - 销毁之前(vue2)
	beforeUnmount () {}, // 生命周期 - 销毁之前(vue3)
	// destroyed () {}, // 生命周期 - 销毁完成(vue2)
	unmounted () {}, // 生命周期 - 销毁完成(vue3)
	activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
// @import url(); 引入公共css类

</style>
