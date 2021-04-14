import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vProgressiveImage from 'v-progressive-image';

const app = createApp(App);

app.use(router);
app.use(vProgressiveImage, {
	removePreview: false,
	animation: true,
	scale: 1,
	time: 0.5,
	blur: 20
});

app.mount('#app');
