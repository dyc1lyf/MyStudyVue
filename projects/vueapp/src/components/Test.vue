<template>
  <div class="test">
      <!-- 获取数据 -->
      <h1>{{title}}</h1>
      <p>{{user.firstName}}</p>
      <p v-text="user.lastName"></p>
      <!-- v-if -->
      <p v-if="showName">{{user.firstName}}</p>
      <!-- v-else -->
      <p v-else>没有用户信息</p>
      <!-- v-for -->
      <ul>
        <li v-for="item in items">
          {{item.title}}
        </li>
      </ul>
      <!--v-on-->
      <button v-on:click="changUser">点击切换用户</button>
      <button v-on:click="greet('Hellow Word')">Say Greeting</button>
      <input type="text" v-on:keyup.enter="pressKey">

      <hr>
      <!--computed 计算属性-->
      <label>First Name:</label>
      <input type="text" v-model="user.firstName">
      <label>Last Name:</label>
      <input type="text" v-model="user.lastName">
      <h3>{{fullName}}</h3>

      <!-- props属性 -->
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name:"test",
  props:{
    msg:{
      type:String,
      default:"默认就是当前文字"
    }
  },
  data(){
    return{
       title: "Hello Vue.js!",
       user: {
         firstName:"宇成",
         lastName:"董"
       },
       showName:true,
       items: [
         {title:"item 1"},
         {title:"item 1"},
         {title:"item 1"},
       ]
    }
  },
  methods:{
    changUser:function(){
      this.showName=!this.showName
    },
    greet:function(greeting){
      alert(greeting)
    },
    pressKey:function(){
      console.log('pressKey.....')
    }
  
  },
  computed:{
    fullName:function(){
      return this.user.firstName+""+this.user.lastName;
    }
  }
}
</script>

<style scoped>

</style>

