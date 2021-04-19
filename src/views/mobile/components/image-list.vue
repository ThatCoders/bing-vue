<template>
  <div class="image-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="(item, index) in imgList" :key="index">
        <div v-preview="item.base64" v-origin="item.url.hd"></div>
      </div>
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
    </van-list>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { List } from 'vant';
import axios from 'axios';

export default {
	// import引入的组件需要注入到对象中才能使用
	components: {
		'van-list': List,
		// 'van-cell': Cell,
	},
	data() {
		// 这里存放数据
		return {
			loading: false,
			finished: false,
			list: [1, 2],
			imgList: [],
		};
	},
	// 监听属性 类似于data概念
	computed: {},
	// 监控data中的数据变化
	watch: {},
	// 方法集合
	methods: {
		init() {
			axios
				.get('https://bing.api.mcloc.cn/getList?pageSize=3&currentPage=1')
				.then((res) => {
					console.log(res);
					this.imgList = res.data.list;
				});
		},
		onLoad() {
			// 异步更新数据
			// setTimeout 仅做示例，真实场景中一般为 ajax 请求
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					this.list.push(this.list.length + 1);
				}

				// 加载状态结束
				this.loading = false;

				// 数据全部加载完成
				if (this.list.length >= 40) {
					this.finished = true;
				}
			}, 1000);
		},
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		this.init();
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
<style lang="scss" scoped>
// @import url(); 引入公共css类
</style>
