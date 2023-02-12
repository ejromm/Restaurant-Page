
function createNav() {
    const container = document.querySelector('#content'); 

    //create navbar and navbar elements
    const header = document.createElement('div'); 
    header.classList.add('header'); 
    container.appendChild(header); 

    const navBar = document.createElement('nav'); 
    navBar.classList.add('nav-bar'); 
    const logo = document.createElement('div'); 
    logo.classList.add('header-logo'); 

    header.appendChild(logo); 
    header.appendChild(navBar); 

    logo.textContent = 'RESTAURANT.';

    const navZero = document.createElement('a'); 
    const navOne = document.createElement('a'); 
    const navTwo = document.createElement('a'); 
    const navThree = document.createElement('a'); 
    
    navZero.classList.add('nav-element'); 
    navOne.classList.add('nav-element'); 
    navTwo.classList.add('nav-element'); 
    navThree.classList.add('nav-element'); 

    navZero.setAttribute('id', 'home-btn'); 
    navOne.setAttribute('id', 'about-btn'); 
    navTwo.setAttribute('id', 'menu-btn'); 
    navThree.setAttribute('id', 'contact-btn'); 

    navZero.textContent = 'HOME'; 
    navOne.textContent = 'ABOUT'; 
    navTwo.textContent = 'MENU'; 
    navThree.textContent = 'CONTACT'; 

    navBar.append(navZero,navOne, navTwo, navThree); 
    
}; 



export { createNav }; 