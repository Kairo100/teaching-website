var muneBtn= document.getElementById("menuBtn");
var sideNav= document.getElementById("sidenav");



muneBtn.onclick= function (){
   if(sideNav.style.right=="-250px"){
       sideNav.style.right="0px";
   
   }
   else{
       sideNav.style.right= "-250px";
      
   }
}