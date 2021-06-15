import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default class ToastificationConfig {
    static configure(vue){
        vue.use(VueToast);
    }
}