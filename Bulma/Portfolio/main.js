// Mobile menu
const burger = document.querySelector('.navbar-burger')
const navbar = document.querySelector('.navbar-menu')

burger.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
});


// tabToggle

// const allLi = document.querySelector('li');

// allLi.addEventListener('click', () => {
//     window.alert('alo');
// });

// Navbar pages

const mainSectionButton = document.querySelector("#aboutButton")
const contactSectionButton = document.querySelector("#contactButton")
const mainSection = document.querySelector('#mainSection')
const contactSection = document.querySelector('#contactSection')
const profileContainer = document.querySelector('#profileContainer')



mainSectionButton.addEventListener('click', () => {
    mainSection.style.display = "block";
    contactSection.style.display = "none";
});
contactSectionButton.addEventListener('click', () => {
    mainSection.style.display = "none";
    contactSection.style.display = "block";

});
$("#contactButton").click(function() {
    $("#profileContainer").prependTo($("#profileColumnsDiv"));
  });
$("#aboutButton").click(function() {
    $("#profileContainer").prependTo($("#mainColumnsDiv"));
  });

    // relativo graadual 178