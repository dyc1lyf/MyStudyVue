<template>
  <div id="app">
      <h1>在线翻译</h1>
      <h5 class="text-muted">简单/易用/便捷</h5>
      <translateForm v-on:forSubmit="translateText"></translateForm>
      <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import translateForm from './components/translateForm'
import translateOutput from './components/translateOutput'
import axios from 'axios'
export default {
  name: 'App',
  data:function(){
    return{
      translatedText:""
    }
  },
  components: {
    translateForm,translateOutput
  },
  methods:{
    translateText:function(text,language){
      axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180210T032656Z.fc4f72554a7f076b.431d3fb7b37f3f90a078c27dcb1dcdb711097d67&lang='+language+'&text='+text)
        .then((data)=>{
          console.log(data)
          this.translatedText = data.data.text[0];
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
