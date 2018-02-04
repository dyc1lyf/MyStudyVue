<template>
  <header v-on:click="changTitle">
      <h1>{{title1}} {{title}}</h1>
  </header>
</template>

<script>

export default {
  name: 'app-header',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      title1:"Vue.js Dome"
    }
  },
  methods:{
    changTitle:function(){
      // this.title="changTitle"
      this.$emit("titleChanged","向父组件传值")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background-color: lightgreen;
    padding: 10px;
}
h1{
    color:#222;
    text-align:center;
}
</style>
