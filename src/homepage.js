
import Icon from './Carne-Mare-Read-McKendree.jpeg';

// create homepage
function homePage() {
    // create variable for container 
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

    const navOne = document.createElement('a'); 
    const navTwo = document.createElement('a'); 
    const navThree = document.createElement('a'); 

    navOne.classList.add('nav-element'); 
    navTwo.classList.add('nav-element'); 
    navThree.classList.add('nav-element'); 

    navOne.textContent = 'ABOUT'; 
    navTwo.textContent = 'MENU'; 
    navThree.textContent = 'CONTACT'; 

    navBar.append(navOne, navTwo, navThree); 

    // main content

    const mainBottom = document.createElement('div'); 
    mainBottom.classList.add('main-content'); 
    container.appendChild(mainBottom); 

    const mainImg = new Image(); 
    mainImg.src = Icon; 
    mainImg.classList.add('main-image'); 
    mainBottom.appendChild(mainImg); 
    

}

export { homePage }; 