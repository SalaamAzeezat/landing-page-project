//Global Variables
const nav = document.querySelector('#navbar__list');
const sec = document.querySelectorAll('section');

//Navigation Menu
for (let i = 0; i < sec.length; i++) {
  let newElement = document.createElement('li');
  let anchorElement = document.createElement('a');
  anchorElement.innerHTML = sec[i].getAttribute('data-nav');
  anchorElement.setAttribute('data-section', sec[i].getAttribute('id'));
//Active-class 
  anchorElement.addEventListener('click', function(){
      let current = document.getElementsByClassName('your-active-class');
      for (let j = 0; j < sec.length; j++) {
        sec[j].classList.remove('your-active-class');
      }
      let id = anchorElement.getAttribute('data-section');
      document.getElementById(id).classList.add('your-active-class'); 
    //scroll to appropriate section
      document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});   
    }
  );

//Active Navigation Links
 $(document).ready(function(){
   $('ul li a').click(function(){
     $('li a').removeClass("active");
     $(this).addClass("active");
   });
 });

  newElement.classList.add('navbar__menu');
  anchorElement.classList.add('menu__link');
  newElement.appendChild(anchorElement);
  nav.appendChild(newElement);
}




