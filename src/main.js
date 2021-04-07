import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './lib/pmage.css';
import Pmage from './lib/pmage';

const app = createApp(App);

app.use(router);
app.use(Pmage, {
	removePreview: false
});

app.mount('#app');
