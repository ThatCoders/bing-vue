// plugins/i18n.js
export default {
	install: (app, options) => {
		app.directive('preview', {
			// 当指令第一次绑定到元素并且在挂载父组件之前调用
			beforeMount(el, binding) {
				console.log(el, binding);
				el.className = 'pmage';
				// 初始化图片
				const img = new Image();
				img.className = 'pi-preview';
				img.onload = () => {
					el.appendChild(img);
					el.style.backgroundImage = 'url(' + img.src + ')';
				};
				img.src = binding.value;
			},
		});

		app.directive('origin', {
			// 当被绑定的元素插入到 DOM 中时
			mounted(el, binding) {
				console.log(el, binding);
				// 初始化图片
				const img = new Image();
				img.className = 'pi-origin';
				img.onload = () => {
					setTimeout(() => {
						if (options && options.removePreview) {
							el.childNodes.forEach((item, index) => {
								if (item.className === 'pi-preview') {
									el.removeChild(el.childNodes[index]);
								}
							});
						} else {
							img.className += ' pi-abs';
						}
						el.appendChild(img);
					}, 1000);
				};
				img.src = binding.value;
			},
		});
	},
};
