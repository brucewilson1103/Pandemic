import Home from './components/Home.vue';
import Government from './components/government/Government.vue';
import Medical from './components/medical/Medical.vue';



export const routes = [
  { path: '/', component: Home},
  { path: '/government', component: Government},
  { path: '/medical', component: Medical}
]
