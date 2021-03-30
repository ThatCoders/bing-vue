module.exports = {
	presets: ['@vue/cli-plugin-babel/preset'],
	plugins: [
		[
			'import',
			{
				libraryName: 'element-plus',
				customStyleName: (name) => {
					return `element-plus/lib/theme-chalk/${name}.css`;
				},
			},
		],
		[
			'import',
			{
				libraryName: 'vant',
				libraryDirectory: 'es',
				style: true,
			},
			'vant',
		],
	],
};
