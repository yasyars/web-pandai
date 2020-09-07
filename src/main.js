import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import 'fullpage-vue/src/fullpage.css';
import VueScrollactive from 'vue-scrollactive';

Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')