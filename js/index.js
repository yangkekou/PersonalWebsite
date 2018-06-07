var p_height=window.innerHeight-120;


//this function is used to init the status of my website,for example,some div's height and etc.
function innit(){

document.querySelectorAll(".resume>div").forEach(
     function(e){
     	e.style.height=p_height+"px";
     }
	);

document.querySelector('.skills').style.height=window.innerHeight+'px';


document.querySelector('.works').style.height=p_height+'px';
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
document.querySelector('.fa-angle-double-down').addEventListener('click',function(e){
  window.scrollBy( 0,window.innerHeight);
  if(document.body.scrollTop+window.innerHeight>document.body.clientHeight||document.documentElement.scrollTop+window.innerHeight>document.body.clientHeight){
    this.classList.remove('fa-angle-double-down');
    this.classList.add('fa-angle-double-up');
     this.removeEventListener("click",arguments.callee);
     let down=arguments.callee;
     document.querySelector('.fa-angle-double-up').addEventListener('click',function(e){
                  window.scrollTo(0,0);
                  this.classList.remove('fa-angle-double-up');
                  this.classList.add('fa-angle-double-down');
                  this.removeEventListener("click",arguments.callee);
                  this.addEventListener('click',down);
          });
  }
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
  let colors=['#ff9966','#009999','#01d578','#66cccc','#009966'];
	let current=document.querySelector('.skill-language');
  current.classList.add('slider');
  current.style.display="inline-block";
  let i=(Math.ceil(Math.random()*4)%4+1);
  current.style.backgroundColor=colors[i];
  let start=0;


function slider(){
  start++;
  start=start%5;
  current.style.display=null;
let s=document.querySelectorAll('.skills>div')[start];
let colors=['#ff9966','#009999','#01d578','#66cccc','#009966'];
let i=(Math.ceil(Math.random()*4)%4+1);
s.classList.add('slider');
s.style.display="inline-block";
s.style.backgroundColor=colors[i];
current=s;
}



  setInterval(slider,5000);
  
	return function(event){
	 current.classList.remove('slider');
   current.style.display=null;
   current=document.getElementsByClassName(this.dataset.bind)[0];
   start=this.dataset.order;
   current.classList.add('slider');
   current.style.display="inline-block";
   current.style.backgroundColor=colors[(Math.ceil(Math.random()*4)%4+1)];
	};
}




