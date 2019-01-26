# canvas绘图

## 目录
1. canvas简述
2. 如何画一个矩形
3. 如何画线
4. 如何画多边形
5. 如何画圆和扇形
6. 绘制图片
7. 如何绘制文字
8. 如何绘制渐变(线性渐变和放射性渐变)
9. 如何实现椭圆(仿射变换和状态管理)
练习1: 太极图
练习2: 饼形图
练习3: K形图

写点东西???

## 课程内容

### 1. canvas简述

  q,什么是canvas, 应用是什么?
  
    最早的时候是苹果系统中出现的绘图技术, 能让我们去绘制各种图形, 还能利用显卡进行加速显示
    
    应用场景1:  写游戏, 水果忍者, 朋友圈游戏
    应用场景2: 绘制数据对应图形, 办公软件, 数据报表软件, 证券类的
    应用场景3: VR
  
  

### 2. 如何画一个矩形

q.如何画一个矩形

Step1: 创建canvas标签, 用来显示内容, 设置宽度和高度

Step2: js获取这个对象, 同时获取它的绘图上下文

Step3: 利用获取的绘图上下文实现各种图形的绘制



### 3. 如何画线

q.如何画线

Step1: 首先需要用  beginPath() 开始

Step2: 使用moveTo() 移动到起点

Step3: 使用lineTo() 绘制线段

Step4: 使用fill()填充, 使用stroke描边


### 4. 如何画多边形

q.如何画线

Step1: 首先需要用  beginPath() 开始

Step2: 使用moveTo() 移动到起点

Step3: 使用lineTo() 绘制线段

Step4: 使用fill()填充, 使用stroke描边




### 5. 如何画圆和扇形

q.如何画圆

Step1: 首先需要用  beginPath() 开始

Step2: 使用moveTo() 移动到起点

Step3: 使用arc() 绘制圆或者圆的曲线

Step4: 使用fill()填充, 使用stroke()描边


q.如何扇形

Step1: 首先需要用  beginPath() 开始

Step2: 使用moveTo() 移动到   [圆心位置]

Step3: 使用arc() 绘制圆或者圆的曲线

Step4: 使用fill()填充, 使用stroke()描边


### 6. 绘制图片

q.如何绘制图片

Step1: 首先需要用 创建 Image()对象

Step2: 设置Image对象的src

Step3: 监听onload事件, 表示图片加载完成

Step4: 如果图片加载完成,开始绘制


### 7. 如何绘制文字

Step1: 使用  drawText() 绘制文本





### 8. 如何绘制渐变(线性渐变和放射性渐变)

q. 绘制线性渐变色

```javascript
      //渐变色:
			//0,0,  0,400,   white==>black
			//参数列表
			//	起始点x
			//	起始点y
			//	结束点x
			//	结束点y
			var c = ctx.createLinearGradient(0,0,0,400)
			c.addColorStop(0,"white")
			//c.addColorStop(0.5,"yellow")
			c.addColorStop(1,"black")
```


q.绘制放射性渐变森

```javascript
      //从一个圆圈到另外一个圆圈
			var c = ctx.createRadialGradient(200,200,10,200,200,50)
			c.addColorStop(0,"yellow")
			c.addColorStop(1,"#ffffdd")
```



### 9. 如何实现椭圆(仿射变换和状态管理)

q.如何绘制一个椭圆

```javascript
      //save用来保存状态
			ctx.save()
			ctx.scale(1,0.5)
			
			ctx.beginPath()
			ctx.moveTo(250,200*2)
			ctx.arc(200,200*2,50,0,Math.PI*2)
			ctx.stroke()
			//恢复状态
			ctx.restore()

```