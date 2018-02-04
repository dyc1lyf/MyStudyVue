Vue.component("greeting",{
	template:"<p>{{name}}: 给大家介绍我的女朋友@关晓彤 <button v-on:click='changeName'>点击换名字</button></p>",
	data:function(){
		return data={
			name:"鹿晗"
		}
	},
	methods:{
		changeName:function(){
			this.name = "刘某";
		}
	}
})

var one = new Vue({
	el: "#vue-app-one"
});

var tow = new Vue({
	el: "#vue-app-tow"
})