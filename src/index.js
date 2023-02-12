import './style.css';
import { homePage } from './homepage.js'; 
import { aboutPage } from './about.js'; 
import { createNav } from './navbar';
import { menuPage } from './menu';
 


homePage(); 
const container = document.querySelector('#content');
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
    container.innerHTML = ''; 
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
           container.innerHTML = '';  
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
    container.innerHTML = '';  
    menuPage(); 
}

console.log(currentPage); 
}); 












