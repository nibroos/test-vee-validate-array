import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import VeeValidate from 'vee-validate';

createApp(App).mount('#app');
App.use(VeeValidate);
