// 兼容性的通过类名获取元素
function checkClass1(className)
		{
			if(document.getElementsByClassName)
			{
				return document.getElementsByClassName(className)
			}
			else
			{
				var all=document.getElementsByTagName("*")
				var newarr=[]
				for (var i = 0; i < all.length; i++) {
					if(all[i].className==className)
					{
						newarr.push(all[i])
					}
				}
				return newarr
			}
			
		}



// 兼容性的通过类名获取元素
		// 如果标签的className内部只是包含我们需要的关键词：
		// 		例如需要找classname=like  
		// 		但是有的标签的classname=like one
		// 		这个时候需要继续精细筛选，就需要再写一个判断方法
function getClass2(selectName)
	{
		if(document.getElementsByClassName)
		{
			return document.getElementsByClassName(selectName)
		}
		else
		{
			var all=document.getElementsByTagName("*")
			var newarr=[]
			for (var i = 0; i < all.length; i++) {
				// 应用下面的判断是否包含关键词
				if(checkClassName(selectName,all[i].className))
				{
					newarr.push(all[i])
				}
			}
			return newarr
		}
		
	}


// 完善后的通过类名获取元素
// 通过后代获取元素也想使用这种方法的话，需要再接受一个参数，接受可能收到的父元素
function getClass(selectName,obj)
	{
		// 如果有传入父级元素，则使用后代获取元素，如果没传入则默认eleobj为document，也不影响运行
		var obj=obj||document
		if(obj.getElementsByClassName)
		{
			return obj.getElementsByClassName(selectName)
		}
		else
		{
			var all=obj.getElementsByTagName("*")
			var newarr=[]
			for (var i = 0; i < all.length; i++) {
				// 应用下面的判断是否包含关键词
				if(checkClassName(selectName,all[i].className))
				{
					newarr.push(all[i])
				}
			}
			return newarr
		}
		
	}

// 定义一个判断all[i].className中是否包含selectName的函数
	// 接受两个参数，一个是selectName-------str
	// 另一个是all[i].classname------lstr
function checkClassName(str,Lstr)
	{
			// 如果类名是两个字符串组合起来的，那肯定是由空格分开，所以先把字符串转化成数组，通过空格转换，用字符串的split方法
			var arr=Lstr.split(" ")
			// 对转化成数组的类名进行循环，判断arr[i]是否有等于str的，如果有，说明包含，如果没有，说明不是需要找的关键词
			for (var i = 0; i < arr.length; i++) {
				if(arr[i]==str)
				{
					return true
				}
			}
			return false
	}





// 兼容性的获取修改文本内容
// 获取两个参数，一个是元素名，一个是需要修改的内容
function getText(element,content)
	{
		// 判断是否需要修改，如果需要修改，content不等于undefined，如果不需要，content==undefined
		if(content==undefined)
			{
				// 如果支持context，返回获取方法
				if(element.textContent)
				{
					return element.textContent
				}
				// 如果不支持context，返回innerText获取方法
				else
				{
					return element.innerText
				}
			}
		else
			// 如果需要修改，判断支持那种获取，修改方式，然后进行赋值
			{
				if(element.textContent)
					element.textContent=content
				else
					element.innerText=content
			}
	}
	


// 兼容性的获取对象的实际样式属性
// 接收两个参数，一个是对象，一个是要获取的属性名stylename在传值时候要加引号
function getStyle(element,stylename)
	{
		// 判断是否支持IE中的currentStyle方法，如果支持，返回方法
		if(element.currentStyle)
			// return element.currentStyle.stylename是错误的，如果这个写相当于return element.currentStyle."stylename",是查不到的，所以用访问对象属性的另一种方法：对象["属性名"]
			return element.currentStyle[stylename]
		// 反之，返回现代浏览器的 getComputedStyle方法
		else
			return window.getComputedStyle(element,null)[stylename]
	}





// 通过多种方式获取元素
	// 接受一个参数，就是标签名，或者类名，或者id
	// 标签名为一个字符串："div"
	// 类名为.开头的字符串：".one"
	// id为#开头的字符串："#name"
	// 所以要先判断这个字符串的第一个字符是什么
	// 用字符串的charAt方法获取字符串的第一个字符charAt(0)
function $1(selector)
	{
		// 如果传入的字符串前面有空格，用正则可以用空字符串替换掉
		// selector=selector.replace(/^\s*|\s*$/g,"")



		// 判断第一个字符是不是.如果是说明为类名查询
		if(selector.charAt(0)==".")
			{
				// 如果是类名查询，则返回上面定义通过类名查询的方法，但是getClass方法只能接受"one"这样的字符串，而传回来的是".one"，所以需要用字符串的slice方法截取从第一个到最后一个字符然后进行查询
				return getClass(selector.slice(1))
			}
		else if(selector.charAt(0)=="#")
			{
				// 如果是id查询，返回id查询获取元素的方法，也需要截取
				return document.getElementById(selector.slice(1))
			}
		else 
			// 如果前两个都不是，说明为标签方式查询获取元素，返回标签方式查询方法，因为标签名查询的话接受的值就是"div"这样的一个字符串，所以不需要截取
			{
				return document.getElementsByTagName(selector)
			}
		// 正则判断是不是纯字符串
			// else if(/^[a-z|A-Z][a-z|A-Z|1-6]*$/g.test(selector))
	}


// 完善后的通过多种方式获取元素，如果既有可能通过各种方式，又想让通过后代也可以使用这样的方式获取元素，就多接收一个参数eleobj来接受又能传入的父级元素名称
function $2(selector,eleobj)
	{
		// 如果有传入父级元素，则使用后代获取元素，如果没传入则默认eleobj为document，也不影响运行
		var eleobj=eleobj||document
		// 如果传入的字符串前面有空格，用正则可以用空字符串替换掉空格
		// selector=selector.replace(/^\s*|\s*$/g,"")



		// 判断第一个字符是不是.如果是说明为类名查询
		if(selector.charAt(0)==".")
			{
				// 如果是类名查询，则返回上面定义通过类名查询的方法，但是getClass方法只能接受"one"这样的字符串，而传回来的是".one"，所以需要用字符串的slice方法截取从第一个到最后一个字符然后进行查询
				return getClass(selector.slice(1),eleobj)
			}
		else if(selector.charAt(0)=="#")
			{
				// 如果是id查询，返回id查询获取元素的方法，也需要截取
				return eleobj.getElementById(selector.slice(1))
			}
		else 
			// 如果前两个都不是，说明为标签方式查询获取元素，返回标签方式查询方法，因为标签名查询的话接受的值就是"div"这样的一个字符串，所以不需要截取
			{
				return eleobj.getElementsByTagName(selector)
			}
		// 正则判断是不是纯字符串
			// else if(/^[a-z|A-Z][a-z|A-Z|1-6]*$/g.test(selector))
	}






// 继续完善的通过多种方式获取元素
// 如果传入的是String类型，说名是要获取元素
// 如果传入的是function类型，就让这个function在window.onload后运行
function $(selector,eleobj)
	{
	// 如果传入的类型是string，就通过方法获取元素
	if(typeof selector=="string")
		{
			// 如果有传入父级元素，则使用后代获取元素，如果没传入则默认eleobj为document，也不影响运行
			var eleobj=eleobj||document
			// 如果传入的字符串前面有空格，用正则可以删掉
			// selector=selector.replace(/^\s*|\s*$/g)



			// 判断第一个字符是不是.如果是说明为类名查询
			if(selector.charAt(0)==".")
				{
					// 如果是类名查询，则返回上面定义通过类名查询的方法，但是getClass方法只能接受"one"这样的字符串，而传回来的是".one"，所以需要用字符串的slice方法截取从第一个到最后一个字符然后进行查询
					return getClass(selector.slice(1),eleobj)
				}
			else if(selector.charAt(0)=="#")
				{
					// 如果是id查询，返回id查询获取元素的方法，也需要截取
					return eleobj.getElementById(selector.slice(1))
				}
			else 
				// 如果前两个都不是，说明为标签方式查询获取元素，返回标签方式查询方法，因为标签名查询的话接受的值就是"div"这样的一个字符串，所以不需要截取
				{
					return eleobj.getElementsByTagName(selector)
				}
			// 正则判断是不是纯字符串
				// else if(/^[a-z|A-Z][a-z|A-Z|1-6]*$/g.test(selector))
		}
	// 如果传入的类型是function，就让这个函数在window.onload后运行
	else if(typeof selector=="function")
		{
			window.onload=function()
				{
					selector()
				}
		}
	}

	//只获取某个对象元素子节点
function getChildren(obj){
 
 var arr=obj.childNodes;
 var newarr=[]
 for (var i = 0; i < arr.length; i++) {
 	if(arr[i].nodeType==1){
    newarr.push(arr[i])

 	}
 };

 return newarr
}

//获取第一个元素子节点
function getFirst(obj){

 return getChildren(obj)[0]


}
//获取最后一个元素子节点

function getLast(obj){

  var arr=getChildren(obj)
 return  arr[arr.length-1]

}
// 获取下一个元素子节点

function getNext(obj) {

	var next=obj.nextSibling;
     if(next==null){return null}
     while (next.nodeType!=1){
       next=next.nextSibling;

     if (next==null) {

     	return null;
     }

     }	
     return next; 
} 

//获取上一个元素节点

function getPrevious(obj) {

	var next=obj.previousSibling;
     if(next==null){return null}
     while (next.nodeType!=1){
       next=next.previousSibling;

     if (next==null) {

     	return null;
     }

     }	
     return next; 
} 


function $(selector,eleobj){  //选择器  元素对象
  //console.log(selector)  selector 可以是div .one .class 
if(typeof selector=="string"){
  // 如果有传入父级元素，则使用后代获取元素，如果没传入则默认eleobj为document，也不影响运行
     eleobj=eleobj||document;
    selector=selector.replace(/^\s*|\s*$/g,"") //参数初始化
 //console.log(selector)
if (selector.charAt(0)==".") {
// 如果是类名查询，则返回上面定义通过类名查询的方法，但是getClass方法只能接受"one"这样的字符串，而传回来的是".one"，所以需要用字符串的slice方法截取从第一个到最后一个字符然后进行查询
  return getClass(selector.slice(1),eleobj)       //var one=$(".one")[0]
                                                //var divs=$("div",one)                                           //console.log(divs)
}else if( selector.charAt(0)=="#"){

 return eleobj.getElementById(selector.slice(1))  //eleobj.getElementById获取子元素 子元素的class="id"
                                                  //selector.slice(1)=id
}else if(/^[a-z|A-Z][a-z|A-Z|1-6]*$/g.test(selector)){

 return eleobj.getElementsByTagName(selector)   ////eleobj.getElementById获取子元素 子元素的div


} else if(/^<[a-z|A-Z][a-z|A-Z|1-6]*>$/g.test(selector)){

return document.createElement(selector.slice(1,-1))

}                                           
}
else if 
  (typeof selector=="function") {
   window.onload=function(){
      selector();
      }

}
}

//insertBefore方法

function insertAfter(newobj,oldpbj){
 //insertBefore
 var next=getNext(oldobj);
 var parent=oldobj.parentNode;
  parent.insertBefore(newobj,next)


}

/*获取某一个元素文档的坐标*/

/*function getPosition(obj){


var left=obj.offsetLeft;
//重复的判断

var parent=obj.parentNode
while(parent.nodeName!="BODY"){
if (getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative") {

left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"))


};
parent=parent.parentNode


}

return {x:left,y:right}；


}*/

function getPosition(obj){

 var left=obj.offsetLeft;
 var top=obj.offsetTop;
 var parent=obj.parentNode

 while(parent.nodeName!="BODY"){
 if (getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative") {

left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"))
top+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth"))
 }
parent=parent.parentNode


 }
  return{x:left,y:top}

}


//兼容的绑定多个事件的函数
function addEvent(obj,event,fun){

if (obj.addEventListener) {

 obj.addEventListener(event,fun,false)
 

}else{

obj.attachEvent("on"+event,fun)


}

}

//兼容的删除多个事件的函数
function removeEvent(obj,event,fun){

if (obj.addEventListener) {

 obj.removeEventListener(event,fun,false)

}else{

obj.detachEvent("on"+event,fun)


}


}

/*添加滚轮事件*/
function mousewheel(obj,upfun,downfun){

if(document.attachEvent){
 obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
  }
  else if(document.addEventListener){
obj.addEventListener("mousewheel",scrollFn,false);
//chrome,safari -webkit-
obj.addEventListener("DOMMouseScroll",scrollFn,false);
}
function scrollFn(e){
   //-3 3 huohu
   //120 -120 guge
  var ev=e||window.event   
 if (ev.preventDefault()) {ev.preventDefault()} 
 else
 	{ev.returnValue = false}                         
  var dir=ev.detail||ev.wheelDelta
  if (dir==-3||dir==120) {
   upfun.call(obj) 
  }else{

  downfun.call(obj)
  	
  }

}

}


//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }


//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,e);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,e);
        }
      }
    }
}
 
  function getEvent(e){
    return e||window.event;
  } 