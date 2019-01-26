# Storage

## 目录
1.web存储简述
2.localStorage使用
3.sessionStorage使用
4.使用localstraoge的事件实现界面通信
5.实战案例
扩展内容
    localstorage和sessionStorage区别
    使用注意事项
    
    
## 课程内容
### 1.web存储简述

####  q.在web中存储数据可以使用什么方式?

cookie: js学过的方式

  优点: 几乎每个浏览器都支持, 支持过期时间
  缺点: 获取cookie得到手是字符串, 字符串需要解析获取数据
          每次请求的时候, cookie放在请求头中发送
          
localStorage和sessionStorage


网络数据
  通过接口存储在服务端, 例如购物车数据, 收藏的数据
  
大量数据
  H5技术1:  WebSQL存储
  H5技术2:  IndexDB



### 2.localStorage使用

#### q.localStorage是什么, 作用是什么?

localStorage称为本地存储, 作用是持久化的存储数据, 网页关了,数据还在, 存储或获取数据非常简单, 通过键值对方式直接设置或者获取


#### q.localStorage如何使用(DEMO1)

首先检测是否可用

常用的函数   
设置值 localStorage.setItem(key,value)
获取值 localStorage.getItem(key)
移除值 localStorage.removeItem(key)
清除值 localStorage.clear()


注意1:  跨浏览器能用么?
hbuilder是一个浏览器, 外部chrome又是一个, 两个之间不能用

注意2: 浏览器删了localStorage数据还在么?
不在了

注意3: value的格式只能是字符串, 或者能转换为字符串的数据
一个对象, 要存储最好转化为JSON


### 3.sessionStorage使用

#### q.sessionStorage是什么, 作用是什么?

sessionStorage称为会话存储, 什么是会话, 一次会话访问网站的一个流程, 关闭浏览器截止,
会话存储其他地方和localStorage, 不一样的地方会话存储的数据关闭浏览器就不存在了
常用于界面传值

#### q.如何使用?

首先检测是否可用

常用的函数   
设置值 sessionStorage.setItem(key,value)
获取值 sessionStorage.getItem(key)
移除值 sessionStorage.removeItem(key)
清除值 sessionStorage.clear()

注意1:  跨浏览器能用么?
hbuilder是一个浏览器, 外部chrome又是一个, 两个之间不能用

注意2: 浏览器删了sessionStorage数据还在么?
不在了

注意3: value的格式只能是字符串, 或者能转换为字符串的数据
一个对象, 要存储最好转化为JSON

注意4: sessionStorage有效期
  A界面跳B界面,  a界面中 sessionStorage在B中有效的

### 4.实战案例

### life小项目

核心逻辑
  1.程序加载的时候检测life在不在
      如果不在, 以前存储过数据吗?  没有存储, 给一个初始化数据
      如果在, 以前存储过,  我们加载以前的数据
      
  2.当改变数据的时候, 同时存储数据到localStorage



### 5.扩展内容
  
面试: cookie, localstorage和sessionStorage区别
    
    可用性: 
          cookie,  h5之前能用, h5中也能用
          storage只能在h5之后用
          
    有效时间
        cookie,  取决于设定的过期时间
        localstorage 一直能用
        sessionStorage  a界面切换到b界面能用, 关闭浏览器不能用了
        
    大小
       cookie最大大小一般是2KB~4KB, 个数20个左右
       storage大小是一般是5M,个数没有限制
       
    接口
      cookie比较麻烦
      storage直接通过 setItem设置值和getItem获取值
    
作业:
  