import { createRouter, createWebHashHistory } from 'vue-router'
import TopMovies from './pages/TopMovies.vue'
import Movies from './pages/Movies.vue'
import TopSeries from './pages/TopSeries.vue'
import TopAll from './pages/TopAll.vue'
import Movie from './pages/Movie.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/Movies/:id?', component: Movies, alias: '/' },
    { path: '/topMovies/:id?', component: TopMovies },
    { path: '/topSeries/:id?', component: TopSeries },
    { path: '/topAll/:id?', component: TopAll },
    { path: '/Movie/:id', component: Movie },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;