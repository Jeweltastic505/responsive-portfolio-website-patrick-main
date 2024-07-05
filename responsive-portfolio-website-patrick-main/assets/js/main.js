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

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58, 
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('nav_menu a[href* = ' + sectionId +' ]')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/


/*====================Pop-up =========================*/
document.addEventListener('DOMContentLoaded', () => {
    // Get all buttons that open modals
    const buttons = document.querySelectorAll('.projects__button');

    // Get all modals
    const modals = document.querySelectorAll('.modal');

    // Get all elements that close the modals
    const spans = document.querySelectorAll('.close');

    // When the user clicks the button, open the modal 
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = "block";
        });
    });

    // When the user clicks on <span> (x), close the modal
    spans.forEach(span => {
        span.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = "none";
        });
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});
