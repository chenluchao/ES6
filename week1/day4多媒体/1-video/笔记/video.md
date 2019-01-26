# 视频播放

## 目录
- 1.视频播放的简述
- 2.标签的使用和常用属性
- 3.js操纵视频对象
- 4.视频播放常用事件
- 5.视频播放的实例
- 6.练习

## 课程内容

### 1.视频播放的简述

#### q.在网页中如何播放一个视频?
播放视频的方式有以下几种
1.flash   优酷,土豆,b站,a站
2.浏览器插件 百度视频, 快播qvod,西瓜视频
3.html5使用video标签

#### q.如何使用video播放视频?
  
  在页面添加一个video标签, 设置src属性, 添加其他属性,就能播放视频了


### 2.标签的使用和常用属性

q.video的基本使用
  
    在页面添加一个video标签, 设置src属性, 添加属性controls, 添加width和height, ,就能播放视频了
```html
<video src="res/dzs.mp4" controls="controls" width="300px" height="260px"></video>
``````

q.video常用的属性有哪些?

src 视频的路径, 本地文件, http://地址
width 视频的宽度
height 高度
loop 是否循环播放
preload 是否预加载
autoplay 是否自动播放(chrome高版本禁止自动播放,除非设置静音)
muted 静音

````html
<video src="res/dzs.mp4" 
			controls="controls" 
			width="300px" 
			height="260px"
			loop="loop"
			preload="preload"
			autoplay="autoplay"
			></video>
``````

### 3.js操纵视频对象

q.为什么通过js操作视频对象

每种不同的浏览器对于视频的支持不一样, 默认controls的样式不一样
所以, 项目中默认取掉原始的控制UI, 我们要自己写

q.操作视频对象有哪些属性和方法?

```
    //网络状态 
		- Media.currentSrc; //返回当前资源的URL
		- Media.src = value; //返回或设置当前资源的URL
		- Media.canPlayType(type); //是否能播放某种格式的资源
		- Media.networkState; //0.此元素未初始化 1.正常但没有使用网络 2.正在下载数据 3.没有找到资源
		- Media.load(); //重新加载src指定的资源
		- Media.buffered; //返回已缓冲区域，TimeRanges
		- Media.preload; //none:不预载 metadata:预载资源信息 auto:
		
		//准备状态 
		- Media.readyState;//1:HAVE_NOTHING 2:HAVE_METADATA 3.HAVE_CURRENT_DATA 4.HAVE_FUTURE_DATA 5.HAVE_ENOUGH_DATA
		- Media.seeking; //是否正在seeking
		
		//回放状态
		Media.currentTime = value; //当前播放的位置，赋值可改变位置
		Media.startTime; //一般为0，如果为流媒体或者不从0开始的资源，则不为0
		Media.duration; //当前资源长度 流返回无限
		Media.paused; //是否暂停
		Media.defaultPlaybackRate = value;//默认的回放速度，可以设置
		Media.playbackRate = value;//当前播放速度，设置后马上改变
		Media.played; //返回已经播放的区域，TimeRanges，关于此对象见下文
		Media.seekable; //返回可以seek的区域 TimeRanges
		Media.ended; //是否结束
		Media.autoPlay; //是否自动播放
		Media.loop; //是否循环播放
		Media.play(); //播放
		Media.pause(); //暂停
		
		//视频控制
		Media.controls;//是否有默认控制条
		Media.volume = value; //音量
		Media.muted = value; //静音
		TimeRanges(区域)对象
		TimeRanges.length; //区域段数
		TimeRanges.start(index) //第index段区域的开始位置
		TimeRanges.end(index) //第index段区域的结束位置
	
```

一个代码实例

```html
<div class="play-area">
			<video id="player"
				width="600px" 
				height="400px"></video>
				
			<div>
				<button onclick="dealPlay()">播放</button>
				<button onclick="dealPause()">暂停</button>
			</div>
		</div>
		
		
		<script type="text/javascript">
			
			var player = document.getElementById("player")
			
			var currentIndex = 0
			var list = [
				{
					"title":"斗战神",
					"src":"res/dzs.mp4"
				},{
					"title":"诛仙",
					"src":"zmxl-zhuxian.mp4"
				}
			]
			function loadMedia () {
				var dict = list[currentIndex]
				
				player.src = dict.src
			}
			
			function dealPlay(){
				player.play()
			}
			function dealPause(){
				player.pause()
			}
			
			loadMedia ()
		</script>

```


### 4.视频播放常用事件

q.视频播放器常用事件有哪些?

```javascript
var eventTester = function(e){
			Media.addEventListener(e,function(){
	         	console.log((new Date()).getTime(),e)
	    		},false);
		}
		eventTester("loadstart"); //客户端开始请求数据
		eventTester("progress"); //客户端正在请求数据
		eventTester("suspend"); //延迟下载
		eventTester("abort"); //客户端主动终止下载（不是因为错误引起）
		eventTester("loadstart"); //客户端开始请求数据
		eventTester("progress"); //客户端正在请求数据
		eventTester("suspend"); //延迟下载
		eventTester("abort"); //客户端主动终止下载（不是因为错误引起），
		eventTester("error"); //请求数据时遇到错误
		eventTester("stalled"); //网速失速
		eventTester("play"); //play()和autoplay开始播放时触发
		eventTester("pause"); //pause()触发
		eventTester("loadedmetadata"); //成功获取资源长度
		eventTester("loadeddata"); //
		eventTester("waiting"); //等待数据，并非错误
		eventTester("playing"); //开始回放
		eventTester("canplay"); //可以播放，但中途可能因为加载而暂停
		eventTester("canplaythrough"); //可以播放，歌曲全部加载完毕
		eventTester("seeking"); //寻找中
		eventTester("seeked"); //寻找完毕
		eventTester("timeupdate"); //播放时间改变
		eventTester("ended"); //播放结束
		eventTester("ratechange"); //播放速率改变
		eventTester("durationchange"); //资源长度改变
		eventTester("volumechange"); //音量改变

```

一个事件使用的代码
```javascript

      //添加一个ended事件处理函数
			//参数1: 播放器事件类型
			//参数2: 匿名处理函数
			player.addEventListener("ended",function () {
				alert("播放结束")
			})

```


### 5.视频播放的实例

q.如何实现播放和暂停功能?

使用play()和pause()函数


q.如何实现全屏功能?
使用一下代码

```javascript
        if(player.requestFullscreen){
					player.requestFullscreen()
				}
				else if(player.webkitRequestFullScreen){
					player.webkitRequestFullScreen()
				}
				else if(player.msRequestFullscreen){
					player.msRequestFullscreen()
				}
				else if(player.oRequestFullscreen){
					player.oRequestFullscreen()
				}
				else if(player.mozRequestFullScreen){
					player.mozRequestFullScreen()
				}

```

q.关于时间控制, 如何获取当前时间和总时间?

使用 player.currentTime获取当前时间

使用 player.duration获取总时间


q.如何实现列表控制?



q.如何实现遮罩的隐藏和显示?




### 6.练习












