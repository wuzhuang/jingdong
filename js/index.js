

//选项卡
function xuanxiangka(links,cons)
  {
    for (var i = 0; i < links.length; i++) {
      links[i].index=i
      links[i].onmouseover=function()
        {
          
          for (var j = 0; j < cons.length; j++) 
            {
              links[j].style.border=0
              links[j].style.marginTop=0;
              cons[j].style.display="none"

            };
          this.style.borderLeft="solid 1px #c81623"
          this.style.borderRight="solid 1px #c81623"
          this.style.borderTop="solid 3px #c81623"
          this.style.marginTop=-1+"px"
          cons[this.index].style.display="block"
        }
    };
  }
  
 
function Ztlunbo(bannerbox,imgs,btns,container,lefta,righta){
//banner轮播
           var now1=0;
        var z=10;
        var t=setInterval(lunbo,2000)
        var num1=0;
      imgs[0].style.zIndex=5
  function lunbo(){
    num1++;
    if(num1==imgs.length){
         num1=0
    }
    imgs[num1].style.left="439px";
    imgs[num1].style.zIndex=z++;
    btns[now1].style.background="#ccc"
    btns[num1].style.background="red"
    animate(imgs[num1],{left:0})
    animate(imgs[now1],{left:-439})
    now1=num1;
   
}    
    //按钮控制
      for (var i = 0; i < btns.length; i++) {
        	btns[i].index=i;
        	btns[i].onmouseover=function(){
        	   if(now1<this.index){
        	   	btns[now1].style.background="#ccc"
         btns[this.index].style.background="red"
        	 imgs[this.index].style.left="439px"
        	 imgs[this.index].style.zIndex=z++;
        	 animate(imgs[this.index],{left:0})
        	 animate(imgs[now1],{left:-439})
        	 now1=this.index
        	   }
        	   else if(now1>this.index){
        	   	btns[now1].style.background="#ccc"
          btns[this.index].style.background="red"
        	 imgs[this.index].style.left="-439px";
         imgs[this.index].style.zIndex=z++;
         animate(imgs[this.index],{left:0})
        animate(imgs[now1],{left:439})
          now1=this.index;
        	   }	
        	}
        };

      //箭头控制
      container.onmouseover=function(){
      	  clearInterval(t)
       lefta.style.display="block";
       righta.style.display="block";
     

      } 
       container.onmouseout=function(){
          t=setInterval(lunbo,2000)
       lefta.style.display="none";
       righta.style.display="none";
       }


        lefta.onclick=function(){
        
         num1--;
         if(num1==-1){
           num1=imgs.length-1;

         }
        imgs[num1].style.left="-439px";
         imgs[num1].style.zIndex=z++;
         btns[now1].style.background="#ccc"
        btns[num1].style.background="red"
          animate(imgs[num1],{left:0})
          animate(imgs[now1],{left:439})
          now1=num1;

        }
        righta.onclick=function(){
         
         lunbo();

        }

         }



function bannerlunbo(imgbox,btbox,bannerbox,bt,slider,leftbtn,rightbtn){
 
         var num=0
			rightbtn.onclick=function()
				{
					num++
					if(num>5)
					{
						num=0
					}
					
					for(var i = 0; i < imgbox.length; i++)
					{
						bt[i].style.background="#3e3e3e"
						imgbox[i].style.display="none"
					}
					imgbox[num].style.display="block"
					bt[num].style.background="#b61b1f"
				}
			leftbtn.onclick=function()
				{
					num--
					if(num<0)
					{
						num=5
					}
					for(var i = 0; i < imgbox.length; i++)
					{
						bt[i].style.background="#3e3e3e"
						imgbox[i].style.display="none"
					}
					imgbox[num].style.display="block"
					bt[num].style.background="#b61b1f"
					
				}
			var settime=function ()
				{
					num++
					if(num>5)
					{
						num=0
					}
					for(var i = 0; i < imgbox.length; i++)
					{
						bt[i].style.background="#3e3e3e"
						imgbox[i].style.display="none"
					}
					imgbox[num].style.display="block"
					bt[num].style.background="#b61b1f"
				}
			var time=setInterval(settime,2000)
			for(var i=0;i<bt.length;i++)
				{
					bt[i].index=i;
					bt[i].onmouseover=function()
					{
						for(var j=0;j<bt.length;j++)
						{
							bt[j].style.background="#3e3e3e"
							imgbox[j].style.display="none"
						}
						bt[this.index].style.background="#b61b1f"
						imgbox[this.index].style.display="block"
					}
					bt[i].onmouseout=function()
					{
						num=this.index;
					}

				}
			bannerbox.onmouseover=function()
				{
					clearInterval(time);
					slider.style.display="block"
				}
			bannerbox.onmouseout=function()
				{
					time=setInterval(settime,3000)
					slider.style.display="none"
				}

  }


   function yaodong(box,a,img){
      
    a.onmouseover=function(){
        animate(img,{left:-5},300)

      }
      a.onmouseout=function(){
        animate(img,{left:0},300)

      }
 
   }    


function xuanting (){
      for (var i = 0; i < 2; i++) {
        var box=$(".pzsh-one")[i]
      var a=$("a",box)[0]
      var img=$("img",a)[0]
      yaodong(box,a,img)
      }
     for (var i = 0; i < 6; i++) {
       var box1=$(".ttdj-bo-img")[i]
       var  a=$("a",box1)[0]
       var img=$("img",a)[0]
      yaodong(box,a,img)
       };  
       var box2=$(".ttdj-img")[0]
       var a=$("a",box2)[0]
       var img=$("img",a)[0]
        yaodong(box,a,img)
  
}

//右侧导航

function you(){

 var siderbarBtn=$(".siderbar1");
      var siderInfo=$(".siderbar2");
        siderbarBtn[5].onclick=function(){
      var obj=document.body.scrollTop==0?document.documentElement:document.body
       animate(obj,{scrollTop:0})

        }

      for(var i=0;i<siderbarBtn.length;i++){
        siderbarBtn[i].index=i;
         siderbarBtn[i].onmouseover=function(){
          this.style.background="#CB1623";
                 animate(siderInfo[this.index],{right:21})
          }
          siderbarBtn[i].onmouseout=function(){
          this.style.background="#7A6E6E";
                 animate(siderInfo[this.index],{right:-40})
          }

        }

}
//banner二级导航
	function daohang(first,second)
  {
    first.onmouseover=function()
      {
        second.style.display="block"
      }
    first.onmouseout=function()
      {
        second.style.display="none"
      }
  }


//top二级导航
function toperji(first,second)
{   
        for (var i = 0; i < first.length; i++) {
          first[i].index=i;
          
          hover(first[i],function(){
            first[this.index].style.background="#fff"
            second[this.index].style.display="block";
          },function(){
            first[this.index].style.background="#f2f2f2"
            second[this.index].style.display="none";
          })
        };
        for (var i = 0; i < second.length; i++) {
          second[i].index=i;
          hover(second[i],function(){
            second[this.index].style.display="block";
          },function(){
            second[this.index].style.display="none";
          })
          };
}

// 猜你喜欢

function hyp(){

 var right=$(".right")[0]
 var con1=$(".cnxh-bottom1")[0]

 var con2=$(".cnxh-bottom2")[0]

 var con3=$(".cnxh-bottom3")[0]
   right.onclick=function(){
           if(con1.style.display=="block")
           {
            con2.style.display="block"
            con3.style.display="none"
            con1.style.display="none"
           }
            else if(con2.style.display=="block")
           {
            con2.style.display="none"
            con3.style.display="block"
            con1.style.display="none"
           }
            else if(con3.style.display=="block")
           {
           con2.style.display="none"
           con3.style.display="none"
            con1.style.display="block"
           }
           else{
          con2.style.display="none"
         con3.style.display="none"
          con1.style.display="block"
           }
           
        }

}

function Move(box,imgs,left,right){
     var num=0;
     var now=0;
       var z=10; 
      imgs[0].style.zIndex=1  
    var width=parseInt(getStyle(imgs[0],"width"));

    left.onclick=function(){
      num--;
      if (num==-1) {
      num=imgs.length-1
      }
   
      imgs[num].style.left=-width+"px";
      animate(imgs[now],{left:width})
    imgs[num].style.zIndex=z++;
    animate(imgs[num],{left:0})
    now=num

    }
   right.onclick=function(){
     num++
    // num=1
       if (num==imgs.length) {
        num=0

      }
    imgs[num].style.left=width+"px";
   animate(imgs[now],{left:-width})
    imgs[num].style.zIndex=z++;
    animate(imgs[num],{left:0})
    now=num
   }
   box.onmouseover=function(){
    left.style.display="block"
      right.style.display="block"

   }
  box.onmouseout=function(){
    left.style.display="none"
      right.style.display="none"

   }

 }


/*function Move(box,imgs,left,right){
   var num=0;
    var now=0;
    var z=10;
    imgs[0].style.zIndex=1; 
    var width=parseInt(getStyle(imgs[0],"width"));
    
  box.onmouseover=function(){
    left.style.visibility="visible";
    right.style.visibility="visible";
  }
  box.onmouseout=function(){
    left.style.visibility="hidden";
    right.style.visibility="hidden";
  }
   left.onclick=function(){
    num--;
    if(num==-1){
        num=imgs.length-1;
      } 
        imgs[num].style.left=-width+"px";
        animate(imgs[now],{left:width});
        imgs[num].style.zIndex=z++;
        animate(imgs[num],{left:0});
  
        now=num;    
   } 
   right.onclick=function(){
     num++;
      if(num==imgs.length){
        num=0;  
      } 
        imgs[num].style.left=width+"px";
        animate(imgs[now],{left:-width});
        imgs[num].style.zIndex=z++;
        animate(imgs[num],{left:0});
  
         now=num;     
   }
 }
*/












