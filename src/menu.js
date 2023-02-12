import Icon6 from './images/menuimg1.jpeg'; 
import Icon7 from './images/menuimg2.jpeg'; 
import Icon8 from './images/menuimg3.jpeg'; 
import Icon9 from './images/menuimg4.jpeg'; 
import Icon10 from './images/menuimg5.png'; 
import Icon11 from './images/menuimg6.jpeg'; 

import { createNav } from './navbar';
function menuPage() {
     createNav(); 
    const container = document.querySelector('#content'); 

    //create menu div 
    const menuDiv = document.createElement('div'); 
    menuDiv.classList.add('menu-div'); 
    container.appendChild(menuDiv); 

    // create six divs for each menu 
    const menuItemOne = document.createElement('div'); 
    const menuItemTwo = document.createElement('div'); 
    const menuItemThree = document.createElement('div'); 
    const menuItemFour = document.createElement('div'); 
    const menuItemFive = document.createElement('div'); 
    const menuItemSix = document.createElement('div'); 

    menuItemOne.classList.add('menu-item'); 
    menuItemTwo.classList.add('menu-item'); 
    menuItemThree.classList.add('menu-item'); 
    menuItemFour.classList.add('menu-item'); 
    menuItemFive.classList.add('menu-item'); 
    menuItemSix.classList.add('menu-item'); 

    menuDiv.append(menuItemOne, menuItemTwo, menuItemThree, menuItemFour, menuItemFive, menuItemSix);  

    // two divs for each menu item, one for image , one for description
    const menuOneImg = new Image(); 
    menuOneImg.src = Icon6; 
    menuOneImg.classList.add('menu-img'); 

    const menuTwoImg = new Image(); 
    menuTwoImg.src = Icon7; 
    menuTwoImg.classList.add('menu-img'); 

    const menuThreeImg = new Image(); 
    menuThreeImg.src = Icon8;
    menuThreeImg.classList.add('menu-img'); 

    const menuFourImg = new Image(); 
    menuFourImg.src = Icon9; 
    menuFourImg.classList.add('menu-img'); 

    const menuFiveImg = new Image(); 
    menuFiveImg.src = Icon10; 
    menuFiveImg.classList.add('menu-img'); 

    const menuSixImg = new Image(); 
    menuSixImg.src = Icon11; 
    menuSixImg.classList.add('menu-img'); 

    const menuOneText = document.createElement('div'); 
    menuOneText.classList.add('menu-text'); 

    const menuTwoText = document.createElement('div'); 
    menuOneText.classList.add('menu-text'); 

    const menuThreeText = document.createElement('div'); 
    menuOneText.classList.add('menu-text'); 

    const menuFourText = document.createElement('div'); 
    menuOneText.classList.add('menu-text'); 

    const menuFiveText = document.createElement('div'); 
    menuOneText.classList.add('menu-text'); 

    const menuSixText = document.createElement('div'); 
    menuOneText.classList.add('menu-text'); 

    // append all images and text divs to corresponding item divs
    menuItemOne.append(menuOneImg, menuOneText); 
    menuItemTwo.append(menuTwoText, menuTwoImg); 
    menuItemThree.append(menuThreeImg, menuThreeText); 
    menuItemFour.append(menuFourText, menuFourImg); 
    menuItemFive.append(menuFiveImg, menuFiveText); 
    menuItemSix.append(menuSixText, menuSixImg); 

  
    
}


export { menuPage }; 