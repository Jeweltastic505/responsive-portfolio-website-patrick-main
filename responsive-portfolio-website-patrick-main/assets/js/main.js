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
    emailjs.sendForm('service_ffvbvvk','template_6juy244','#contact-form','7913Jsp4Mjpz0SpdK')
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
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true  
})

sr.reveal('.contact__container')
sr.reveal(' .skills__data, .award__row ', {origin: 'left'})
sr.reveal('.about__image, .skills__content, .about__data, .education__content' , {origin: 'right'})
sr.reveal('.service__card, .projects__card, .timeline-item', { interval:100})

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

// JavaScript to trigger animation after page load
document.addEventListener('DOMContentLoaded', function() {
    animateWords();
});

function animateWords() {
    const container = document.querySelector('.animation-container');
    const text = container.textContent.trim();
    const words = text.split(' ');

    container.textContent = ''; // Clear the container

    words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.opacity = 0; // Start each word with opacity 0
        container.appendChild(span);

        // Delay each word's appearance using setTimeout
        setTimeout(() => {
            span.style.opacity = 1;
        }, 200 * words.indexOf(word)); // Adjust the delay time as needed
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const rotatingTextElement = document.getElementById('rotatingText');
    const texts = [
      "Computer Science with Cyber Security Student",
      "Aspiring Cyber Security Ethusiast",
      "Robotics Enthusiast",
      "CEO and Co-Founder of Chemasterpiece",
      "Software Developer",
      "Vice President of IEEE City Robotics Society"
    ];
  
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function type() {
      rotatingTextElement.textContent = currentText;
  
      if (!isDeleting && charIndex < texts[textIndex].length) {
        // Add a new character to the current text
        currentText += texts[textIndex].charAt(charIndex);
        charIndex++;
        // Adjust typing speed for faster animation
        setTimeout(type, 100); // Typing speed set to 100ms
      } else if (isDeleting && charIndex > 0) {
        // Remove the last character from the current text
        currentText = currentText.slice(0, -1);
        charIndex--;
        // Adjust deleting speed for faster animation
        setTimeout(type, 50); // Deleting speed set to 50ms
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        // Start deleting after the text is fully typed
        isDeleting = true;
        setTimeout(type, 2000); // Pause before deleting, set to 2000ms
      } else if (isDeleting && charIndex === 0) {
        // Move to the next text after deleting all characters
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500); // Delay before typing next text, set to 500ms
      }
    }
  
    type(); // Start typing animation
  });
  
  
