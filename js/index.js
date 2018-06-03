window.onload=function(){

//make the nav buttom has listener
var listener=PersonalNav();
document.querySelectorAll(".personal-nav li").forEach(
     function(e){
     	let el=e.dataset.bind;
     	if(el!="item-personal")
        document.getElementsByClassName(el)[0].style.display="none";
     	e.addEventListener("click",listener);
     }
	)
	
}



function active(element){
	element.style.display=null;
}

function off(element){
	element.style.display="none";
}



function PersonalNav(){
   let current=document.getElementsByClassName("item-personal")[0];
   current.style.display=null;
   return  function(event){
   	    if(current&&current!=this)
   	    current.style.display="none";
   		else
   		retrun;
   		current=document.getElementsByClassName(this.dataset.bind)[0];
   		current.style.display=null;
   };
}