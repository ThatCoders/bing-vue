<template>
  <div class="header-mobile">
    <div class="header">
      <div class="header-content">
        <i class="iconfont icon-bingvue-biying"></i>
        <span class="content-title">必应每日一图</span>
      </div>
      <div class="header-menu" @click="clickBtn">
        <i class="iconfont icon-bingvue-caidan1"></i>
      </div>
    </div>
    <van-popup
      :show="show"
      closeable
      close-icon-position="top-left"
      position="right"
      :style="{ height: '100%', width: '60%' }"
      @click-overlay="clickOverlay"
      @click-close-icon="clickCloseIcon"
    >
      <div class="right-pop">
        <div class="pop-count-down">
          <div class="pop-count-down-text">距下次更新还有</div>
          <div class="pop-count-down-content">
            <van-count-down :time="keyTime">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { Popup, CountDown } from 'vant';

export default {
	name: 'header-mobile',
	// import引入的组件需要注入到对象中才能使用
	components: {
		'van-popup': Popup,
		'van-count-down': CountDown,
	},
	data() {
		// 这里存放数据
		return {
			show: false,
			keyTime: 0,
		};
	},
	// 监听属性 类似于data概念
	computed: {},
	// 监控data中的数据变化
	watch: {},
	// 方法集合
	methods: {
		init() {
			this.getKeyTime();
		},
		getKeyTime() {
			let keyTime = new Date();
			keyTime.setDate(keyTime.getDate() + 1);
			keyTime.setHours(0);
			keyTime.setMinutes(1);
			keyTime.setSeconds(30);
			keyTime.setMilliseconds(0);
			this.keyTime = keyTime.getTime() - new Date();
		},
		clickBtn() {
			this.show = true;
		},
		// 点击遮罩层时触发
		clickOverlay() {
			this.show = false;
		},
		// 点击关闭按钮时触发
		clickCloseIcon() {
			this.show = false;
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
.header-mobile {
  .header {
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-content {
      margin-left: 42px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-bingvue-biying {
        color: rgb(31, 168, 161);
        font-size: 26px;
        margin-right: 10px;
      }
      .content-title {
        color: #666;
        font-size: 14px;
      }
    }
    .header-menu {
      margin-right: 16px;
      .icon-bingvue-caidan1 {
        color: #c8c9cc;
        font-size: 26px;
      }
    }
  }
  .right-pop {
    height: calc(100% - 32px);
    background-color: #fff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .pop-count-down {
      display: flex;
      flex-direction: column;
      align-items: center;
      .pop-count-down-text {
        color: #666;
        font-size: 14px;
        margin-bottom: 10px;
      }
      .pop-count-down-content {
        .block {
          display: inline-block;
          width: 22px;
          color: #fff;
          font-size: 12px;
          text-align: center;
          border-radius: 3px;
          background-color: rgb(31, 168, 161);
        }
        .colon {
          display: inline-block;
          margin: 0 4px;
          color: rgb(31, 168, 161);
        }
      }
    }
  }
}
</style>
