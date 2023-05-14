import { createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import FontAwesomeIcon from './plugins/icons';
import router from './router';


createApp(App)
  .component('v-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');