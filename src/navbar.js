import { homePage } from './homepage.js'; 
import { aboutPage } from './about.js'; 
import { menuPage } from './menu.js';
import { contactPage } from './contact.js'; 
function createNav() {
    const container = document.querySelector('#content'); 

    //create navbar and navbar elements
    const header = document.createElement('div'); 
    header.classList.add('header'); 
    container.prepend(header); 

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


    const contentContainer = document.querySelector('.content-container')
const homeBtn = document.getElementById('home-btn'); 
const aboutBtn = document.getElementById('about-btn'); 
const menuBtn = document.getElementById('menu-btn'); 
const contactBtn = document.getElementById('contact-btn'); 
let currentPage = 'home'; 
homeBtn.addEventListener('click', function() {
console.log(currentPage); 

if(currentPage === 'home') {
    return; 
} else {
    currentPage = 'home';
    contentContainer.innerHTML = ''; 
    homePage(); 
}

console.log(currentPage); 
})

aboutBtn.addEventListener('click', function() {
    console.log(currentPage);
    if(currentPage === 'about') {
        return; 
    } else  {
           currentPage = 'about'; 
           contentContainer.innerHTML = '';  
           aboutPage();
        }
    


   console.log(currentPage); 
 }); 

menuBtn.addEventListener('click', function() {
console.log(currentPage); 
if (currentPage === 'menu') {
    return; 
} else {
    currentPage = 'menu'; 
    contentContainer.innerHTML = '';  
    menuPage(); 
}
}); 

contactBtn.addEventListener('click', function() {
    if(currentPage === 'contact') {
        return
    } else {
        currentPage = 'contact';
        contentContainer.innerHTML = ''; 
        contactPage(); 
    }
}); 
    
}; 



export { createNav }; 