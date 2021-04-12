<template>
  <div class="pc">
    <header-pc />
    <div
      v-preview="
        'data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAJABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQP/xAAlEAABAwMCBgMAAAAAAAAAAAACAQMEAAUGETESEyE0QbJRc3T/xAAYAQACAwAAAAAAAAAAAAAAAAADBQIEBv/EACgRAAEDAQUIAwAAAAAAAAAAAAEAAgMRBBIzUWEFISIxMjRx8IHB0f/aAAwDAQACEQMRAD8AOlXW2Rsgx022YwOS0BxGxa4G3GyRRRC3QV3+emlJntdKyVruK7urzNRks5FUBp9+ULbstQ77LiFbBntSorpu8tEEYiJxIGnhPHXfVajPAxkTXVukEU1zRmFziRohM27HFvoa9TplY+5k8/irDD9zULD2GXfhZ9ioW1saHz9BGs/Q5f/Z'
      "
      v-origin="'https://bing.mcloc.cn/api/'"
    ></div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import HeaderPc from './components/header-pc.vue';

export default {
	// import引入的组件需要注入到对象中才能使用
	components: {
		'header-pc': HeaderPc,
	},
	data() {
		// 这里存放数据
		return {};
	},
	// 监听属性 类似于data概念
	computed: {},
	// 监控data中的数据变化
	watch: {},
	// 方法集合
	methods: {},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	// 生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
	beforeCreate() {}, // 生命周期 - 创建之前
	beforeMount() {}, // 生命周期 - 挂载之前
	beforeUpdate() {}, // 生命周期 - 更新之前
	updated() {}, // 生命周期 - 更新之后
	// beforeDestroy () {}, // 生命周期 - 销毁之前(vue2)
	beforeUnmount() {}, // 生命周期 - 销毁之前(vue3)
	// destroyed () {}, // 生命周期 - 销毁完成(vue2)
	unmounted() {}, // 生命周期 - 销毁完成(vue3)
	activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
// @import url(); 引入公共css类
</style>
