import './style.css';
import { homePage } from './homepage.js'; 
import { aboutPage } from './about.js'; 
import { createNav } from './navbar.js';



createNav(); 
homePage(); 

const container = document.querySelector('#content'); 
const mainImageDiv = document.querySelector('.main-content'); 
let currentPage = 'home'; 


const homeBtn = document.getElementById('home-btn'); 
const aboutBtn = document.getElementById('about-btn'); 
const menuBtn = document.getElementById('menu-btn'); 
const contactBtn = document.getElementById('contact-btn'); 

homeBtn.addEventListener('click', function() {

if(currentPage === 'home') {
    return; 
} else {
    homePage(); 
}

})

aboutBtn.addEventListener('click', function() {
    if(currentPage === 'about') {
        return; 
    } else  {
           currentPage = 'about'; 
           mainImageDiv.remove(); 
           aboutPage();
        }
    


   
 }); 

menuBtn.addEventListener('click', function() {

menuPage(); 

}); 

contactBtn.addEventListener('click', function() {

contactPage(); 

})





