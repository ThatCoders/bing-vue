<template>
  <div class="header">
    <div class="mobile-count-down">
      离下次图片更新还有
      <van-count-down :millisecond="millisecond" :time="time" :format="format" />
    </div>
    <van-switch v-model="millisecond" size="24px" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { CountDown, Switch } from "vant";
import "vant/lib/switch/style"
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    "van-count-down": CountDown,
    "van-switch": Switch,
  },
  data() {
    // 这里存放数据
    return {
      time: 0,
      millisecond: true,
      format: "HH:mm:ss:SS",
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
      millisecond(val) {
          if (val) {
              this.format = "HH:mm:ss:SS";
          } else {
              this.format = "HH:mm:ss";
          }
      }
  },
  // 方法集合
  methods: {
    getKeyTime() {
      let keyTime = new Date();
      keyTime.setDate(keyTime.getDate() + 1);
      keyTime.setHours(0);
      keyTime.setMinutes(1);
      keyTime.setSeconds(30);
      keyTime.setMilliseconds(0);
      let nowTime = new Date();
      this.time = keyTime.getTime() - nowTime.getTime();
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getKeyTime();
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
.header {
  background: #fff;
  height: 60px;
}
</style>
