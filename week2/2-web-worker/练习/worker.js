var fibonacci = function (n) {
	if(n<=2){
		return 1
	}
	//n>2
	else{
		//arguments.callee 当前执行函数
		return fibonacci(n-1)+fibonacci(n-2)
	}
}

onmessage = function(e){
	var n = parseInt(e.data);
	console.log("接收="+n);
	var r = fibonacci(n);
	postMessage(r);
}
