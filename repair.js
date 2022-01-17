let navLinks = document.querySelector('.header .nav .links');
let menu = document.querySelector('#menu-btn');

document.querySelector('#menu-btn').onclick = () => {
   navLinks.classList.toggle('active');
   menu.classList.toggle('fa-times');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navLinks.classList.remove('active');
   
   if(window.scrollY > 60){
      document.querySelector('.header .nav').classList.add('active');
   } 
   else{
      document.querySelector('.header .nav').classList.remove('active');
   }
}

