Vue.component('click-counter',{
    template:'<bunton @click="count++">{{count}}</bunton>',
    data(){
        return{
            count: 0
        }
    }
});
new Vue({
    el:'#app'
});