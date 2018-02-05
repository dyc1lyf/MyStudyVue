<template>
  <div class="users">
      <h1>users</h1>
      <!--添加信息-->
      <form v-on:submit="addUser">
          <input type="text" v-model="newUser.name" placeholder="Enter name">
          <input type="text" v-model="newUser.email" placeholder="Enter email">
          <input type="submit" value="Subimt">    
      </form>
      <!--展示信息-->
      <ul>
          <li v-for="user in users">
              <input type="checkbox" class="toggle" v-model="user.contacted">
              <span :class="{contacted:user.contacted}">
                  {{user.name}}:{{user.email}}
                   <button v-on:click="deleteUser(user)">删除</button>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:"users",
  data(){
    return{
      newUser:{

      },
      users:[
          {
              name:"董宇成",
              email:"dyc@gmail.com",
              contacted:false
          },
          {
              name:"王童",
              email:"WT@gmail.com",
              contacted:false
          },
           {
              name:"杨忠诚",
              email:"yzc@gmail.com",
              contacted:false
          }
      ]
    }
  },
  methods:{
    addUser:function(e){
        e.preventDefault();
        this.users.push({
            name: this.newUser.name,
            email: this.newUser.email,
            contacted:false
        })
    },
    deleteUser:function(user){
        this.users.splice(this.users.indexOf(user),1)
    }
  
  }
}
</script>

<style scoped>
    .contacted{
        text-decoration:line-through;
    }
</style>

