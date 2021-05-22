import Vue from 'vue'
import VuexConfig from "./service/VuexConfig";
import App from "./App";
import RouterConfig from "./RouterConfig";
import vuetify from "./VuetifyConfig";

Vue.config.productionTip = false

let routerConfig = new RouterConfig();
let router = routerConfig.configRouter(Vue);

let vuexConfig = new VuexConfig();
let store = vuexConfig.configStore(Vue);

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
