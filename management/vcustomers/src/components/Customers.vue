<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <br>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in filterBy(customers,filterInput)">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link>
                    <router-link class="btn btn-primary" v-bind:to="'/update/'+customer.id">修改</router-link>
                    <button class="btn btn-danger" v-on:click='deleteCustomer(customer.id)'>删除</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from "../axios-auth.js";
import Alert from "./Alert"
export default {
  name: "customers",
  data(){
    return {
      customers:[],
      alert:'',
      filterInput:''
    }
  },
  methods:{
      fetchCustomers(){
        axios.get("/users")
        .then(data=>{
            this.customers = data.data;
        })
      },
      deleteCustomer(id){
          axios.delete('users/'+id)
            .then(function(){
                location.reload()
            })
            .then(data=>{
                
                this.alert = '删除用户信息成功'
            })
      },
      filterBy(customers,value){
          return customers.filter(function(customer){
              return customer.name.match(value)
          })
      }
  },
  created(){
      if(this.$route.query.alert){
          this.alert = this.$route.query.alert
      }
      this.fetchCustomers();
  },
  components:{
      Alert
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
