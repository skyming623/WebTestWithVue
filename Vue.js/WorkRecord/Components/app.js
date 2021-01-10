Vue.component('click-counter',{
    template:'#click-counter-template',
    data(){
        return{
            count: 0
        }
    }
});
new Vue({
    el:'#app'
});
Vue.component('input-view',{
    template:'#input-template',
    data:{
        input1:'0',
        input:'2'
    }
})
new Vue({
    el:'#app2'
})