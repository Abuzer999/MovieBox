import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'swiper/swiper-bundle.css'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import router from './router'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(autoAnimatePlugin)
  .use(VuePlyr, {
    plyr: {}
  })
  .mount('#app')
