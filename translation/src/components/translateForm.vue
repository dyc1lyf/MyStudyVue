<template>
  <div id="translateForm">
      <form v-on:submit.prevent="formSubmit">
          <div class="sreech">
              <input type="text" placeholder="输入需要翻译的内容" v-model="textToTranslate">
              <select v-model="language">
                  <option value="en">English</option>
                  <option value="ru">Russian</option>
                  <option value="ko">Korean</option>
                  <option value="ja">Janpenese</option>
              </select>
              <input type="submit" value="翻译">
          </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data () {
      return {
      textToTranslate:"",
      language:""
  }
  },
  methods:{
      formSubmit:function(){
        //  console.log(this.textToTranslate)
         this.$emit("forSubmit",this.textToTranslate,this.language)
      }
  },
  created:function(){
      this.language ="en"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.sreech{
    background-color: #F4F1F4;
    border-radius: 5px;
    padding: 20px;
}
input{
    height: 30px;
    background-color: #F4F1F4;
    border:none;
    border-bottom: 1px solid #ccc;
    padding-left: 5px;
    outline:none;
}
select{
    height: 30px;
    background-color: #F4F1F4;
    border:none;
    border-bottom: 1px solid #ccc;
    outline:none;    
}
input[type="submit"]{
    background-color: #2189F1;
    color: #fff;
    padding: 0 20px;
    border-radius: 5px;
    cursor: pointer;   
}
</style>
