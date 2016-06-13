function anxu()
	{
		
		window.onscroll=function()
	{
				var obj=document.documentElement.scrollTop==0?document.body:document.documentElement
			
				
			      var pictures=$("img")
			      var wHeight=document.documentElement.clientHeight
			      for (var i = 0; i < pictures.length; i++) {
			      	if (getPosition(pictures[i]).y<wHeight) {
			         pictures[i].src=pictures[i].getAttribute("data-src")

			      	}
		
			      }

			     for (var i = 0; i <pictures.length; i++) 
			     {
			     
			      if (obj.scrollTop+wHeight>getPosition(pictures[i]).y) 
			         {
			              pictures[i].src=pictures[i].getAttribute("data-src")
			         }

			     };
	}
		
	}


	function cblt(elevator,btns,floors,img,words,nums){
    var obj;
    var wHeight=document.documentElement.clientHeight;
    for (var i = 0; i < img.length; i++) {
        if(getPosition(img[i]).y<wHeight){
            img[i].src=img[i].getAttribute("data-src")
        }
    };
   addEvent(window,"scroll",function(){
        obj=document.body.scrollTop==0?document.documentElement:document.body;
        if(obj.scrollTop>=1300){
                elevator.style.display="block";
        }else{
                elevator.style.display="none";
        }
        for (var i = 0; i < img.length; i++) {
            if((wHeight+obj.scrollTop)>getPosition(img[i]).y){
                img[i].src=img[i].getAttribute("data-src")
            }
        };
            
    })
    //楼层按钮的点击效果和鼠标划过的效果 
    var flag=true;    
    for (var i = 0; i < btns.length; i++) {
        btns[i].index=i;
        btns[i].onclick=function(){
            flag=false;
            var ot=floors[this.index].offsetTop;
            console.log(ot);
            animate(obj,{scrollTop:ot},function(){
               flag=true;
            })
            for (var j = 0; j < btns.length; j++) {
                words[j].style.zIndex="1";
                nums[j].style.zIndex="2";
            };
            words[this.index].style.zIndex="2"
            nums[this.index].style.zIndex="1"
            words[this.index].aa=true;
        }
        hover(btns[i],function(){
            words[this.index].style.zIndex="2";
            nums[this.index].style.zIndex="1";
            words[this.index].style.background="#C81623";
            words[this.index].style.color="#fff";
        },function(){
            if(!words[this.index].aa){
            words[this.index].style.zIndex="1";
            nums[this.index].style.zIndex="2";
            words[this.index].style.background="#fff";
            words[this.index].style.color="#C81623";
            }
        }) 
    };
    //页面滚动时文字的切换效果
    addEvent(window,"scroll",function(){
        var scrollTop=obj.scrollTop;
        if(flag){
            for (var a = 0; a < floors.length-1; a++) {
                if(scrollTop>=floors[a].offsetTop&&scrollTop<floors[a+1].offsetTop){
                    for (var j = 0; j < words.length; j++) {
                        words[j].style.zIndex="1"
                        nums[j].style.zIndex="2"
                        words[j].aa=false;
                    };
                    words[a].style.zIndex="2"
                    nums[a].style.zIndex="1"
                    words[a].aa=true;
                }
            };
            if(scrollTop>=floors[floors.length-1].offsetTop){
                for (var b = 0; b < words.length; b++) {
                    words[b].style.zIndex="1"
                    nums[b].style.zIndex="2"
                    words[b].aa=false;
                };
                words[floors.length-1].style.zIndex="2"
                nums[floors.length-1].style.zIndex="1"
                words[floors.length-1].aa=true;
            }
        }
    })
}