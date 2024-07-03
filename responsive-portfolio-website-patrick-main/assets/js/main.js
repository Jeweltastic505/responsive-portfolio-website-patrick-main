/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')          
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
    
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===============CHANGE BACKGROUND HEADER =============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add scroll hear to header tag
    this.scrollY >=50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add blur hear to header tag
    this.scrollY >=50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_cdv07z9','template_8jjblub','#contact-form','2V6M2qCs5vQAyv7xY')
        .then(() => {
            //Show sent Message
            contactMessage.textContent = 'Message sent sucessfully! '

            //Remove Message after 5secs. 
            setTimeout(() => {
                contactMessage.textContent = ''
            },5000)

            //clear input fields 
            contactForm.reset() 
            
        },() => {
            //Show error message
            contactMessage.textContent = 'Message not sent (service error) '
        })
}     

contactForm.addEventListener('submit',sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
