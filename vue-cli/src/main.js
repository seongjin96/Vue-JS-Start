import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// // 위의 내용과 동일
// new Vue({
//   el: '#app',
//   // App이라는 컴포넌트 내용을 렌더링
//   render: h => h(App),
// })