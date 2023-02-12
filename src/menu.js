import Icon6 from './images/menuimg1.jpeg'; 
import Icon7 from './images/menuimg2.jpeg'; 
import Icon8 from './images/menuimg3.jpeg'; 
import Icon9 from './images/menuimg4.jpeg'; 
import Icon10 from './images/menuimg5.png'; 
import Icon11 from './images/menuimg6.jpeg'; 


function menuPage() {
 
    const container = document.querySelector('#content'); 
    const contentContainer = document.querySelector('.content-container'); 
    //create menu div and item container
    const menuDiv = document.createElement('div'); 
    menuDiv.classList.add('menu-div'); 
    contentContainer.appendChild(menuDiv); 

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
    menuOneText.classList.add('menu-one-text'); 

    const menuTwoText = document.createElement('div'); 
    menuTwoText.classList.add('menu-two-text'); 

    const menuThreeText = document.createElement('div'); 
    menuThreeText.classList.add('menu-three-text'); 

    const menuFourText = document.createElement('div'); 
    menuFourText.classList.add('menu-four-text'); 

    const menuFiveText = document.createElement('div'); 
    menuFiveText.classList.add('menu-five-text'); 

    const menuSixText = document.createElement('div'); 
    menuSixText.classList.add('menu-six-text'); 

    // append all images and text divs to corresponding item divs
    menuItemOne.append(menuOneImg, menuOneText); 
    menuItemTwo.append(menuTwoText, menuTwoImg); 
    menuItemThree.append(menuThreeImg, menuThreeText); 
    menuItemFour.append(menuFourText, menuFourImg); 
    menuItemFive.append(menuFiveImg, menuFiveText); 
    menuItemSix.append(menuSixText, menuSixImg); 

    // add text and buttons to all text divs
    //div one
    const menuOneHeader = document.createElement('div');
    menuOneText.appendChild(menuOneHeader); 
    menuOneHeader.classList.add('menu-header');
    menuOneHeader.innerHTML = 'VALENTINE\'S DAY<br>DINNER';
    const menuOneTimes = document.createElement('div'); 
    menuOneTimes.classList.add('menu-one-times'); 
    menuOneText.appendChild(menuOneTimes); 
    menuOneTimes.textContent = '5-10pm'
    const menuOneDescription = document.createElement('div'); 
    menuOneDescription.classList.add('menu-one-desc');
    menuOneText.appendChild(menuOneDescription); 
    menuOneDescription.textContent = 'Four-course menu, $195'; 
    const menuoneBtn = document.createElement('button'); 
    menuoneBtn.classList.add('menu-one-btn'); 
    menuoneBtn.textContent = 'VIEW MENU'
    menuOneText.appendChild(menuoneBtn);
  
    //div two
    const menuTwoHeader = document.createElement('div'); 
    menuTwoHeader.classList.add('menu-two-header'); 
    menuTwoHeader.textContent = 'LUNCH'
    menuTwoText.appendChild(menuTwoHeader); 
    const menuTwoButton = document.createElement('button'); 
    menuTwoButton.classList.add('menu-two-btn'); 
    menuTwoButton.textContent = 'VIEW MENU'; 
    menuTwoText.appendChild(menuTwoButton); 
    
    // div three
    const menuThreeHeader = document.createElement('div'); 
    menuThreeHeader.classList.add('menu-three-header'); 
    menuThreeHeader.textContent = 'DINNER'
    menuThreeText.appendChild(menuThreeHeader); 
    const menuThreeButton = document.createElement('button'); 
    menuThreeButton.classList.add('menu-three-btn'); 
    menuThreeButton.textContent = 'VIEW MENU'; 
    menuThreeText.appendChild(menuThreeButton); 
    //div four 
    const menuFourHeader = document.createElement('div'); 
    menuFourHeader.classList.add('menu-four-header'); 
    menuFourHeader.textContent = 'DESSERT'
    menuFourText.appendChild(menuFourHeader); 
    const menuFourButton = document.createElement('button'); 
    menuFourButton.classList.add('menu-four-btn'); 
    menuFourButton.textContent = 'VIEW MENU'; 
    menuFourText.appendChild(menuFourButton);
    // dive five
    const menuFiveHeader = document.createElement('div'); 
    menuFiveHeader.classList.add('menu-five-header'); 
    menuFiveHeader.textContent = 'BAR'
    menuFiveText.appendChild(menuFiveHeader); 
    const menuFiveBtnOne = document.createElement('a'); 
    const menuFiveBtnTwo = document.createElement('a'); 
    menuFiveBtnOne.classList.add('menu-five-btn-1');  
    menuFiveBtnTwo.classList.add('menu-five-btn-1'); 
    menuFiveBtnOne.textContent = 'Menu'
    menuFiveBtnTwo.textContent = 'Cocktails'
    menuFiveText.append(menuFiveBtnOne, menuFiveBtnTwo); 
    //div six
    const menuSixHeader = document.createElement('div'); 
    menuSixHeader.classList.add('menu-six-header'); 
    menuSixHeader.textContent = 'WINE LIST'
    menuSixText.appendChild(menuSixHeader); 
    const menuSixButton = document.createElement('button'); 
    menuSixButton.classList.add('menu-six-btn'); 
    menuSixButton.textContent = 'VIEW LIST'; 
    menuSixText.appendChild(menuSixButton);
}


export { menuPage }; 