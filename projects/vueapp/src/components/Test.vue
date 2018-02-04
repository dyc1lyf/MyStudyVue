<template>
  <div class="test">
      <!-- 获取数据 -->
      <h1>{{title}}</h1>
      <p>{{user.firstName}}</p>
      <p v-text="user.lastName"></p>
      <!-- v-if -->
      <p v-if="showName">{{user.firstName}}</p>
      <!-- v-else -->
      <p v-else>Nobody</p>

      <!-- v-for -->
      <ul>
        <li v-for="item in items">
          {{item.title}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:"test",
  data(){
    return{
       title: "Hello Vue.js!",
       user: {
         firstName:"宇成",
         lastName:"董"
       },
       showName:false,
       items: [
         {title:"item 1"},
         {title:"item 1"},
         {title:"item 1"},
       ]
    }
  }
}
</script>

<style scoped>

</style>

