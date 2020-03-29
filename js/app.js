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
    }
  );
//Active Navigation Links
 let anchor = document.querySelectorAll('.menu__link');
for (let a = 0; a < anchor.length; a++) {
  anchor[a].onclick = function() {
    let c = 0;
    while (c < anchor.length) {
      anchor[c++].classList.remove('your-active-class');
    }
    anchor[a].classList.add('your-active-class');
  };
}
  newElement.classList.add('navbar__menu');
  anchorElement.classList.add('menu__link');
  newElement.appendChild(anchorElement);
  nav.appendChild(newElement);
}
//scroll to appropriate section
document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});



