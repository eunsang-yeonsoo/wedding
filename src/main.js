import './assets/uikit.css'
import './assets/main.css'
import './assets/js/uikit.js'
import './assets/js/uikit-icons.js'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

function shareLocation() {
    Kakao.Navi.share({
        name: 'SC제일은행 본점',
        x: 37.5708467,
        y: 126.9822199,
        coordType: 'wgs84',
    });
}