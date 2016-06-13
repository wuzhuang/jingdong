
$(function(){

var imgbox=$(".image")
			var btbox=$(".btbox")[0]
			var bannerbox=$(".banner")[0]
			var bt=$("li",btbox)
			var slider=$(".slider-page")[0]
			var num=0
			var leftbtn=$(".slider-left")[0]
			var rightbtn=$(".slider-right")[0]
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




})



				