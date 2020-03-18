/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const newElement =document.createElement('li'); 
for(let I = 1; I <=3; I++) { 
         const anchorElement = document.createElement('a');
         anchorElement.innerHTML = 'section_1'
        newElement.appendChild(anchorElement); 
}
const navBar = document.getElementById('#navbar_list');
navBar.appendChild(newElement);
document.body.append(navBar);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


