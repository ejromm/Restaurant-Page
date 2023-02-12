function contactPage() {

    const container = document.querySelector('#content'); 
    const contentContainer = document.querySelector('.content-container'); 

    const contactDiv = document.createElement('div'); 
    contactDiv.classList.add('contact-div'); 
    contentContainer.appendChild(contactDiv); 

    const contactHeader = document.createElement('div'); 
    contactHeader.classList.add('contact-header'); 
    contactDiv.appendChild(contactHeader); 
    contactHeader.textContent = 'CONTACT';

    const contactText = document.createElement('div'); 
    contactText.classList.add('contact-text'); 
    contactText.innerHTML = '<h1>PRESS INQUIRIES</h1><br><br><p><b>Dick Cheese</b></p><br><span>Dick@Restaurant.Restaurant</span><br><br><br><h1>RESTAURANT CHOCOLATES</h1><br><br><p>PLEASE CONTACT</p><br><span>Chocolates@Restaurant.Restaurant</span> '
    contactDiv.appendChild(contactText); 


}


export { contactPage }