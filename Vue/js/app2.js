new Vue({
	el: '#vue-app',
	data:{
		age:"24",
		x:0,
		y:0
	},
	methods:{
		add:function(inc){
			this.age += inc;
		},
		subtract:function(dec){
			this.age -= dec;
		},
		updateXY:function(){
			console.log(event)
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving:function(event){
			event.stopPropagation()
		},
		alert:function(){
			alert('hello word')
		}
	}
}) 
