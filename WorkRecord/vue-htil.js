export function mountVue(selector, config) {
  return window.vue = Vue.createApp ?
    Vue.createApp(config).mount(selector)//Vue 3
    : new Vue(config).$mount(selector);//Vue 2
}
export default{mountVue}