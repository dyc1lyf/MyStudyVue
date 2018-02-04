<template>
  <footer>
      <p>{{copyright}} {{title}}</p>
  </footer>
</template>

<script>

export default {
  name: 'app-footer',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      copyright:"copyright 2017 Vue Dome"
    }
  }
}
</script>

<style scoped>
footer{
    background-color: #222;
    padding: 6px;
}
p{
    color:lightgreen;
    text-align:center;
}
</style>
