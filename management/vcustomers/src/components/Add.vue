<template>
  <div class="add container">
      <modal v-bind:message="modal"></modal>
      <h1 class="page-header">
          添加用户
      </h1>
      <form v-on:submit.prevent="addCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名:</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label>电话：</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>Email：</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>学历:</label>
                    <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label>毕业学校:</label>
                    <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label>职业:</label>
                    <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <textarea class="form-control" rows="10" v-model="customer.introduction"></textarea>
                </div>
                <p class="text-center">
                    <router-link class="btn btn-default" to="/">返回</router-link>
                    <button type="submit" class="btn btn-primary">提交</button>
                </p>
            </div>
          
      </form>
  </div>
</template>

<script>
import axios from "../axios-auth.js";
import modal from "../components/modal"
export default {
  name: "add",
  data() {
    return {
      customer: {},
      modal:''
    };
  },
  methods: {
    addCustomer(e) {
        console.log(3333)
        // e.preventDefault();
        if(!this.customer.name||!this.customer.phone){
            this.modal = '请添加对应信息';
           $('#myModal').modal('show')
        }else{
            let newCustomer = {
                name:this.customer.name,
                phone:this.customer.phone,
                email:this.customer.email,
                education:this.customer.education,
                graduationschool:this.customer.graduationschool,
                profession:this.customer.profession,
                introduction:this.customer.introduction
            }
            axios.post("/users", newCustomer)
                .then(data => {
                    this.$router.push({path:'/',query:{alert:"用户信息添加成功！"}})
                });
        }
    }
  },
  components:{
      modal
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
