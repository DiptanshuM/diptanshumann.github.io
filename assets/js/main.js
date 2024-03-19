/*===== Popup on img click =====*/ 

// Add event listeners to 9 images
for (var i = 1; i <= 9; i++) {
document.getElementById("myImg" + i).addEventListener("click", function() {
    var currentPopup = document.getElementById("myPopup" + this.id.slice(-1));
    var allPopups = document.querySelectorAll(".popup");
    for (var j = 0; j < allPopups.length; j++) {
    allPopups[j].style.display = "none";
    }
    currentPopup.style.top = (window.innerHeight - currentPopup.offsetHeight) / 2 + window.scrollY + "px";
    currentPopup.style.left = (window.innerWidth - currentPopup.offsetWidth) / 2 + window.scrollX + "px";
    currentPopup.style.display = "block";
});
}

// Add event listeners to 9 close buttons
for (var i = 1; i <= 9; i++) {
document.getElementById("myPopup" + i).addEventListener("click", function(event) {
    if (event.target === this) {
    this.style.display = "none";
    }
});
document.querySelector("#myPopup" + i + " .close").addEventListener("click", function() {
    this.parentElement.style.display = "none";
});
}

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
