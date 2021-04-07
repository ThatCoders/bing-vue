<template>
  <div class="progressive-image">
    <!-- <div :ref="'img-' + timeStamp">
      <img :src="preview" alt="" />
    </div> -->
    <div
      v-preview="'https://bing.mcloc.cn/api/?thumbnail=1'"
      v-origin="'https://bing.mcloc.cn/api/'"
    >
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
	// import引入的组件需要注入到对象中才能使用
	components: {},
	data() {
		// 这里存放数据
		return {
			timeStamp: 0,
			img: {},
		};
	},
	props: {
		src: String, // 原图
		preview: String, // 预览图
	},
	// 监听属性 类似于data概念
	computed: {},
	// 监控data中的数据变化
	watch: {},
	// 方法集合
	methods: {
		// // 创建唯一标识符
		// createKey() {
		// 	this.timeStamp = new Date().getTime();
		// },
		// // 初始化图片
		// initImage() {
		// 	this.img = new Image();
		// 	this.img.className = 'pi-origin';
		// 	this.img.onload = this.mountImage();
		// 	this.img.src = this.src;
		// },
		// // 挂载图片
		// mountImage() {
		// 	console.log('111');
		// 	const id = 'img-' + this.timeStamp;
		// 	this.$nextTick(() => {
		// 		this.$refs[id].appendChild(this.img);
		// 	});
		// },
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		// this.createKey();
		// this.initImage();
	},
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
