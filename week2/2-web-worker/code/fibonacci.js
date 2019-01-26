// fabonacci数列
//	1 1 2 3 5 8 13 21 34 55 ......
//	特点: 第一个和第二个都是1
//			以后每个数都是前两个数之和

/*
f6
f5+f4
f4+f3+f3+f2
f3+f2+f2+f1+f2+f1+f2
f2+f1+f2+f2+f1+f2+f1+f2
=1+1+1+1+1+1+1+1
=8

			


*/
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