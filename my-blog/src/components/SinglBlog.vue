<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <p>作者：{{blog.author}}</p>
        <p>分类:</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">
                {{category}}
            </li>
        </ul>
        <article>{{blog.content}}</article>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name:"single-blog",
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created(){
            // this.$http.get('https://vuedemo-2c3a0.firebaseio.com/post/' + this.id +".json")
            axios.get('/post/' + this.id +".json")
                .then((data)=>{
                   this.blog = data.data;
                })
        }
    }
</script>

<style scoped>
    #single-blog {
        box-sizing: border-box;
        margin: 0 auto;
        max-width: 600px;
        padding: 20px;
        background-color: #eee;
        border:1px dotted #aaa;
    }
</style>