var fibonacci = function (n) {
	
	//n=0
	//n=1
	//n=2
	if(n<=2){
		return 1
	}
	//n>2
	else{
		//arguments.callee 当前执行函数
		return fibonacci(n-1)+fibonacci(n-2)
	}
}

//接收html发送数据
onmessage = function (event) {
	var n = parseInt(event.data)
	console.log("接收n="+n)
	
	var r = fibonacci(42)
	
	//发送消息到html
	postMessage(r)
}