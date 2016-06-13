function jdlb(box,imgs,btns,lefta,righta) {
      var width=parseInt(getStyle(imgs[0],"width"))
//alert(imgs)
	    var num=0;
      var now=0;
      var z=5;
   var t=setInterval(move,1000)
     // btns[0].style.color="#000"
      btns[0].style.background="#B61B1F" 
        function move(){
          num++;
          if(num==imgs.length){
            num=0;
          } 
          imgs[num].style.left=width+"px";
          imgs[num].style.zIndex=z++;
          btns[num].style.background="#B61B1F"
         // btns[num].style.color="#000"
          btns[now].style.background="#3e3e3e"
         // btns[now].style.color="#fff"
          animate(imgs[now],{left:-width})
          animate(imgs[num],{left:0})
          now=num;

         }


         for (var i = 0; i < btns.length; i++) {
           btns[i].index=i;
           btns[i].onmouseover=function(){
             if(now<=this.index){
           btns[now].style.background="#3e3e3e"
          // btns[now].style.color="#fff"
           btns[this.index].style.background="#B61B1F"
           //btns[this.index].style.color="#000"
           imgs[this.index].style.left=width+"px"

           imgs[this.index].style.zIndex=z++;
           animate(imgs[now],{left:-width})
           animate(imgs[this.index],{left:0})
              now=this.index;
         }
          if(now>this.index){

           btns[now].style.background="#3e3e3e"
           //btns[now].style.color="#fff"
           btns[this.index].style.background="#B61B1F"
           //btns[this.index].style.color="#000"
           imgs[this.index].style.left=-width+"px"
           imgs[this.index].style.zIndex=z++;
           animate(imgs[now],{left:width})
           animate(imgs[this.index],{left:0})
           now=this.index;
         }
           }

         };
         box.onmouseover=function(){
            clearInterval(t)
         }
         box.onmouseout=function(){
            t=setInterval(move,2000)
         }
         righta.onclick=function(){
         
          move()
          
         }
         lefta.onclick=function(){
           num--;
          
          if(num==-1){
            num=imgs.length-1
          }
          imgs[num].style.left=-width+"px";
          imgs[num].style.zIndex=z++;
          btns[num].style.background="#B61B1F"
          //btns[num].style.color="#000"
          btns[now].style.background="#3e3e3e"
          //btns[now].style.color="#fff"
          animate(imgs[now],{left:width})
          animate(imgs[num],{left:0})
          now=num;      
         }
}


