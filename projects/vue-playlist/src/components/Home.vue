<!--1.模板：html结构-->
<template>
  <div id="home">
 			<app-header v-on:titleChanged="updateTitle($event)"   v-bind:title="title"></app-header>
      <users v-bind:users="users"></users>
      <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!--2. 行为：处理逻辑-->
<script>
// 局部注册组件
import Users from "./Users"
import Header from "./Header"
import Footer from "./Footer"

export default {
  name: 'home',
  data(){
  	return {
  		users:[
        // {name:"董宇成",position:"Web前端",show:false},
        // {name:"董宇成",position:"Web前端",show:false},
        // {name:"董宇成",position:"Web前端",show:false},
        // {name:"董宇成",position:"Web前端",show:false},
        // {name:"董宇成",position:"Web前端",show:false},
        // {name:"董宇成",position:"Web前端",show:false},
        // {name:"董宇成",position:"Web前端",show:false},
        // {name:"董宇成",position:"Web前端",show:false},
        // {name:"董宇成",position:"Web前端",show:false},
      ],
      title:"传递的是一个值（strig number boolean）"
  	}
  },
  methods:{
    updateTitle:function(title){
      this.title=title
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
      // console.log(data)
        this.users = data.body
    })
  }
}
</script>
<!--3.样式：解决样式-->
<style>

</style>
