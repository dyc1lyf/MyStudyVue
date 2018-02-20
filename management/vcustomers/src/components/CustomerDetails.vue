<template>
  <div class="details container">
    <h1 class="page-header">{{customer.name}}</h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-user"></span> {{customer.phone}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope"></span> {{customer.email}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-book"></span> {{customer.education}}</li>    
    </ul>
     <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-home"></span> {{customer.graduationschool}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-briefcase"></span> {{customer.profession}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-comment"></span> {{customer.introduction}}</li>      
    </ul>
  </div>
</template>

<script>
import axios from "../axios-auth.js";
export default {
  name: 'cumstomerdetails',
  data () {
    return {
      customer:[]
    }
  },
  methods:{
      fetchCustomers(id){
        axios.get('/users/'+id)
         .then(data=>{
           console.log(data.data)
           this.customer = data.data;
         })
      }
  },
  created(){
    let id = this.$route.params.id;
    this.fetchCustomers(id)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
