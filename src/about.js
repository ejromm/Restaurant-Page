import Icon2 from './images/finedining1.jpeg'; 
import Icon3 from './images/finedining2.jpeg'; 
import Icon4 from './images/finedinging3.jpeg'; 
import Icon5 from './images/finedining4.jpeg'; 

import { createNav } from './navbar';
function aboutPage() {

createNav();  
const container = document.querySelector('#content'); 
//create about div
const aboutDiv = document.createElement('div'); 
aboutDiv.classList.add('about-div'); 
container.appendChild(aboutDiv); 

//create about header
const aboutHeader = document.createElement('div'); 
aboutHeader.classList.add('about-header'); 
aboutDiv.appendChild(aboutHeader); 
aboutHeader.textContent = 'ABOUT US'; 

//create about content
const aboutText = document.createElement('div'); 
aboutText.classList.add('about-text'); 
aboutDiv.appendChild(aboutText);
aboutText.innerHTML = 'In November of 2021, Restaurant reopened with new owners for the first time since 1984. After closing for 18 months during the pandemic, Restaurant came back with an updated name—trading “Bar and Grill” for “Restaurant”— a redesigned interior by its original architect Jimmy Babette, and a new menu with longtime former pastry chef Bob Johnson in the role of executive chef.<br><br> Historically decorated with an unprecedented six three-star New York Times reviews, Restaurant\'s new owners—former Managing Partner Tony Honephorner and environmentalist Balls Sack—sought to honor this legacy while ushering Restaurant into a greener, more mindful era. Filling the restaurant with books, music, and art to complement its world-class dining, Billy\'s stated goal is to make Restaurant “the most meaningful restaurant in New York.” Arts and dining programming, from evening jazz to exclusive wine dinners, make Restaurant a vibrant, ever-evolving destination like the city it calls home.<br><br> Over the years a host of iconic chefs have cut their teeth in Restaurant kitchen. With Restaurant\'s four decades of culinary history behind him, Bobby has captured the spirit of Restaurant\'s approachable yet unforgettable cuisine while introducing his own vision for the menu. The goal to provide unpretentious service in an environment that inspires you and your conversation remains the same today as in 1984.'; 

//create about images
const aboutImages = document.createElement('div'); 
aboutImages.classList.add('about-images'); 
aboutDiv.appendChild(aboutImages); 

const aboutImgOne = new Image(); 
aboutImgOne.src = Icon2; 
aboutImgOne.classList.add('about-img'); 
const aboutImgTwo = new Image(); 
aboutImgTwo.src = Icon3; 
aboutImgTwo.classList.add('about-img'); 
const aboutImgThree = new Image(); 
aboutImgThree.src = Icon4; 
aboutImgThree.classList.add('about-img'); 
const aboutImgFour = new Image(); 
aboutImgFour.src = Icon5; 
aboutImgFour.classList.add('about-img'); 

aboutImages.append(aboutImgOne, aboutImgTwo, aboutImgThree, aboutImgFour); 






}; 


export { aboutPage }; 
