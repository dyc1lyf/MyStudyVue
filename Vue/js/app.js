//实例化Vue对象
new Vue({
	el: "#vue-app",
	data:{
		name:"DYC",
		job:"前端开发",
		website:'http://www.baidu.com',
		websiteTag:"<a href='http://www.baidu.com'>Thenewstep</a>"
	},
	methods:{
		greet:function(time){
			return 'good' + time + '：' + this.name + '!'
		}
	}
})
/*
 * el:element 需要获取的元素
 * data:用于数据存储
 * methods: 用于储存各自方法
 * data-binding:给属性绑定对应的值
 */