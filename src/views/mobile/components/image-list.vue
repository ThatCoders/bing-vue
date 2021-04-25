<template>
  <div class="image-list">
    <van-list
      v-model:loading="loading"
      v-model:error="error"
      :finished="finished"
      finished-text="没有更多了"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <div v-for="(item, index) in imgList" :key="index">
        <van-swipe-cell>
          <div v-preview="item.base64" v-origin="item?.url.hd"></div>
          <template #right>
            <div class="swipe-cell-wrap">
              <div class="swipe-cell-left">
                <div class="swipe-cell-date">
                  <van-tag color="#999">{{ item.date }}</van-tag>
                </div>
                <div class="swipe-cell-title">
                  {{ item.title }}
                </div>
                <div class="swipe-cell-btn">
                  <van-button
                    class="swipe-cell-btn-download"
                    square
                    type="primary"
                    text="下载"
                  />
                </div>
              </div>
              <div class="swipe-cell-right">
                <div class="swipe-cell-color">
                  <div
                    class="color-block"
                    :style="{ 'background-color': item.color.Vibrant }"
                  ></div>
                  <div
                    class="color-block"
                    :style="{ 'background-color': item.color.DarkVibrant }"
                  ></div>
                  <div
                    class="color-block"
                    :style="{ 'background-color': item.color.LightVibrant }"
                  ></div>
                  <div
                    class="color-block"
                    :style="{ 'background-color': item.color.Muted }"
                  ></div>
                  <div
                    class="color-block"
                    :style="{ 'background-color': item.color.DarkMuted }"
                  ></div>
                  <div
                    class="color-block"
                    :style="{ 'background-color': item.color.LightMuted }"
                  ></div>
                </div>
              </div>
            </div>
          </template>
        </van-swipe-cell>
      </div>
    </van-list>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { List, SwipeCell, Button, Tag } from 'vant';
import axios from 'axios';

export default {
	// import引入的组件需要注入到对象中才能使用
	components: {
		'van-list': List,
		'van-swipe-cell': SwipeCell,
		'van-button': Button,
		'van-tag': Tag,
	},
	data() {
		// 这里存放数据
		return {
			loading: false,
			error: false,
			finished: false,
			imgList: [],
			pageSize: 5,
			currentPage: 1,
		};
	},
	// 监听属性 类似于data概念
	computed: {},
	// 监控data中的数据变化
	watch: {},
	// 方法集合
	methods: {
		// 请求图片
		loadImg(pageSize, currentPage) {
			return axios.get(
				`https://bing.api.mcloc.cn/getList?pageSize=${pageSize}&currentPage=${currentPage}`
			);
		},
		onLoad() {
			// 异步更新数据
			this.loadImg(this.pageSize, this.currentPage).then((res) => {
				console.log(res);
				this.imgList = [...this.imgList, ...res.data.list];
				// 加载状态结束
				this.loading = false;
				if (this.imgList.length >= res.data.totle) {
					// 全部加载完成
					this.finished = true;
				}
			}).catch(() => {
				this.error = true;
			});
			this.currentPage++;
		},
	},
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
<style lang="scss" scoped>
// @import url(); 引入公共css类
.swipe-cell-wrap {
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .swipe-cell-left {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .swipe-cell-date {
      margin-top: 10px;
    }
    .swipe-cell-title {
      padding: 0 10px;
      color: #333;
      font-size: 14px;
    }
    .swipe-cell-btn {
      width: 100%;
      .swipe-cell-btn-download {
        width: 100%;
      }
    }
  }
  .swipe-cell-right {
    height: 100%;
    .swipe-cell-color {
      width: 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .color-block {
        flex: 1;
      }
    }
  }
}
</style>
