<template>
  <div class="swipe">
    <van-swipe :autoplay="5000" lazy-render>
      <van-swipe-item v-for="item in imagesData" :key="item.bing_id">
        <div class="title-wrap">
          <p class="swipe-font">{{ item.bing_title }}</p>
        </div>
        <img :src="item.bing_imgurl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import Swipe from "vant/lib/swipe";
import "vant/lib/swipe/style";
import SwipeItem from "vant/lib/swipe-item";
import "vant/lib/swipe-item/style";

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
  },
  data() {
    // 这里存放数据
    return {};
  },
  props: {
    imagesData: Array,
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
<style lang="scss" scoped>
// @import url(); 引入公共css类
.swipe {
  width: 100%;

  .title-wrap {
    position: absolute;
    bottom: 0;

    .swipe-font {
      color: #fff;
      width: 60%;
      margin: 0 auto 10px;
    }
  }

  img {
    width: 100%;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
