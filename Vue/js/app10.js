var one = new Vue({
	el: "#vue-app-one",
	data:{
		title:"app-one-title"
	},
	methods:{
		
	},
	computed:{
		greet:function(){
			return "hellow 我是app one"
		}
	}
});

var tow = new Vue({
	el: "#vue-app-tow",
	data:{
		title:"app-tow-title",
	},
	methods:{
		changeTitle:function(){
			one.title = "你被改名字了"
		}
	},
	computed:{
		greet:function(){
			return "hellow 我是app one"
		}
	}
})
tow.title = "app-tow 名字被改变了"