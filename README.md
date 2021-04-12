# bing-vue

### 使用 vue3 构建的必应每日一图

> 服务端仓库: https://github.com/androidmumo/bing-serve



> #### 额外收获：一个优雅的插件
>
> 为了实现图片的平滑加载，`bing-vue` 使用了图片渐进加载的技术，我把这部分抽出来写了个插件。现在，用这个插件即可在你的项目中实现一样的效果。
>
> 插件仓库地址： [v-progressive-image](https://github.com/androidmumo/v-progressive-image)       npm地址：[v-progressive-image](https://www.npmjs.com/package/v-progressive-image)
>
> 安装/使用方法请去上述仓库的自述文件查看。
>
> ##### v-progressive-image 是一个适用于vue3的渐进式图片加载插件，只需在原标签上添加两行自定义指令，即可实现图片的平滑过渡。除此之外无需做任何更改。