var p_height=window.innerHeight-110;


//this function is used to init the status of my website,for example,some div's height and etc.
function innit(){

document.querySelectorAll(".resume>div").forEach(
     function(e){
     	e.style.height=p_height+"px";
     }
	);

document.querySelectorAll('.skills>div').forEach(function(e,index){
    e.style.order=++index;
});

}



window.onload=function(){
	innit();

//make the nav buttom has listener
var listener=PersonalNav();
document.querySelectorAll(".personal-nav li").forEach(
     function(e){
     	let el=e.dataset.bind;
     	if(el!="item-personal")
        document.getElementsByClassName(el)[0].style.display="none";
     	e.addEventListener("click",listener);
     }
	);


//this is works for skill nav,there are something the same with above;

var skillListener=skillNav();
document.querySelectorAll('.items>div').forEach(
	function(e){
        e.addEventListener('click',skillListener);
	}

	);

//these code is for scroll to next context
document.querySelector('.fa-angle-double-down').addEventListener('click',(e)=>{
  window.scrollBy( 0,window.innerHeight);
});




}


function active(element){
	element.style.display=null;
}

function off(element){
	element.style.display="none";
}



function PersonalNav(){
   let current=document.getElementsByClassName("item-personal")[0];
   let clicked=document.querySelectorAll(".personal-nav li")[0];
   current.style.display=null;
   clicked.style.color="#ff4547";
   current.classList.add('enter_start');
   current.classList.add('enter_animater');
   setTimeout(()=>current.classList.add('enter_end'),1000);
   return  function(event){
   	    if(current.className==this.dataset.bind)
 			return;

   	   	current.style.display="none";
   	   	current.classList.remove("enter_start");
   	   	current.classList.remove("enter_end");
   	   	current.classList.remove("enter_animater");
   	    clicked.style.color=null;  

   		current=document.getElementsByClassName(this.dataset.bind)[0];
   		clicked=this;
   		current.classList.add('enter_start');
   		current.classList.add('enter_animater');
   		setTimeout(()=>current.classList.add('enter_end'),1000);
   		current.style.display=null;
   		this.style.color="#ff4547";
   };
}


function skillNav(){
	let current=document.querySelector('.skill-language');
	return function(event){
		let tem=document.getElementsByClassName(this.dataset.bind)[0].style.order;
    document.getElementsByClassName(this.dataset.bind)[0].style.order=current.style.order;
    current.style.order=tem;
    current=document.getElementsByClassName(this.dataset.bind)[0];
	};
}

