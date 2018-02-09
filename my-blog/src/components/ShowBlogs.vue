<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.title">
        <router-link v-bind:to="'/blog/'+ blog.id">
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from '../axios-auth.js'

export default {
  name: 'show-blogs',
  data(){
      return {
          blogs:[],
          search:""
      }
  },
  created(){
    //   this.$http.get("https://vuedemo-2c3a0.firebaseio.com/post.json")
      axios.get("/post.json")
        .then(function(data){
            // this.blogs = data.body.slice(0,10);
            // return data.json()
            return data.data
        })
        .then((data)=>{
            var blogsArray=[];
            for(let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray
        })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
            return blog.title.match(this.search)
          })
      }
  },
  filters:{
      "to-uppercase":function(value){
         return value.toUpperCase();
       },
       "snippet":function(value){
            return value.slice(0,100) + "...";
        }
  },
  directives:{
      "rainbow":{
           bind(el,binding,vnode){
               el.style.color = "#"+ Math.random().toString(16).slice(2,8);
           }
      }
  }
}
</script>

<style>
#show-blogs * {
    box-sizing: border-box;
}
#show-blogs{
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #5E6ABD;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing:border-box;
    background-color: #eee;
    border:1px dotted #aaa;
}
#show-blogs a{
    color:#444;
    text-decoration:none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing:border-box;
}
</style>
