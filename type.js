const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// ------------show-----------------

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// --------------- hidden --------------

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

// ----------- remove menu--------------

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ------------ scroll section active link-------------

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

var scrollActive = () => {

    {
        const scrolly = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50
            sectionId = current.getAttribute('id')

            if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
            }
            else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')

            }
        })
    }
}




// ---------------------------------- send mail -----------------------
