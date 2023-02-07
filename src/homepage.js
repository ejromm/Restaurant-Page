

// create homepage
function homePage() {
    // create variable for container 
    const container = document.querySelector('#content'); 

    //create navbar and navbar elements
    const navBar = document.createElement('nav'); 
    const logo = document.createElement('div'); 
    logo.classList.add('logo'); 
    navBar.classList.add('nav-bar'); 
    container.appendChild(logo); 
    logo.textContent = 'Restaurant'; 
    container.appendChild(navBar); 

    const navOne = document.createElement('a'); 
    const navTwo = document.createElement('a'); 
    const navThree = document.createElement('a'); 

    navOne.textContent = 'HOME'; 
    navTwo.textContent = 'MENU'; 
    navThree.textContent = 'RESERVATIONS'; 

    navOne.classList.add('nav-item'); 
    navTwo.classList.add('nav-item'); 
    navThree.classList.add('nav-item'); 

    navBar.appendChild(navOne)
    navBar.appendChild(navTwo)
    navBar.appendChild(navThree); 
}

export { homePage }; 