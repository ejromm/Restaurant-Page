
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

    const mainImageDiv = document.createElement('div'); 
    mainImageDiv.classList.add('main-content'); 
    container.appendChild(mainImageDiv); 

    const mainImg = new Image(); 
    mainImg.src = Icon; 
    mainImg.classList.add('main-image'); 
    mainImageDiv.appendChild(mainImg); 

    //location content

    const locationDiv = document.createElement('div'); 
    locationDiv.classList.add('location'); 
    mainImageDiv.appendChild(locationDiv); 

    //location text 
    const locationText = document.createElement('div'); 
    locationText.classList.add('location-text'); 
    locationText.innerHTML = `<h1><u>Hours &amp; Location</u></h1><br><br><span><b>Tuesday-Sunday</b></span><br><br><span><b>Dinner:</b> 5pm to 10pm</span><br><br><span><b>Breakfast: </b> 7:30am to 10:30am</span><br><br><span><b>Lunch:</b> 12pm to 2:30PM (Thursday & Friday only)</span><br><br><span><b>Weekend Brunch:</b> 10am to 2:30pm</span>

    `
    locationDiv.appendChild(locationText); 

    function initMap() {
        const mapDiv= document.createElement('div'); 
        mapDiv.classList.add('map'); 
        locationDiv.appendChild(mapDiv)
      
        mapDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388616.6560445083!2d-74.19946370213873!3d40.451640191993164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1675910989646!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`; 
        


    
    }
    initMap(); 
    

    

}

export { homePage }; 