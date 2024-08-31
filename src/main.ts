import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import lazyLoadDirective from './directives/lazyload'

const app = createApp(App)

app.use(router)

app.directive('lazy', lazyLoadDirective),

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')