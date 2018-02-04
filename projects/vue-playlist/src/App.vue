<!--1.模板：html结构-->
<template>
  <div id="app">
 			<ul>
         <li>
           <router-link to="/">Home</router-link>
         </li>
          <li>
            <router-link to="/helloworld">helloworld</router-link>
         </li>
       </ul>
       <router-view></router-view>
  </div>
</template>

<!--2. 行为：处理逻辑-->
<script>

export default {
  name: 'app',
  data(){
  	
  	
  },
  methods:{
    
    
  },
}
</script>
<!--3.样式：解决样式-->
<style>

</style>
