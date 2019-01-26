# Web worker

## 目录
1.web worker简述
2.web worker使用

## 课程内容
### 1.web worker简述

q.什么是多任务?

   单任务:  一个程序同时干一件事情
  多任务: 一个程序同时干很多件事情
      举例: 迅雷
      
q. 多线程是什么?
    一个程序是一个进程, 一个进程内有多个线程, 完成不同的事情
    
q.js是啥?
是任务驱动的单线程机制

js里面有一个event loop


### 2.web worker使用

q. 写一个耗时任务的例子
    
    
q. 如何使用web worker

Step1:  创建一个js文件, 里面有一个耗时函数

Step2: html创建worker对象, 参数是js文件

Step3: 发送一个消息给js文件, 开启任务

Step4: js得到消息之后执行任务, 执行完返回

Step5: html中通过onmessage得到执行的结果













