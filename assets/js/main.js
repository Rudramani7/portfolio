// NAV MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav_toggle','nav_menu');

const navLink = document.querySelectorAll('.nav_link');
navLink.forEach(n => n.classList.remove('active'));

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// CONTACT FORM
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e){
    e.preventDefault(); // prevent default form submission

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all required fields.");
        return;
    }

    // Encode data for mailto
    const mailtoLink = `mailto:rudramani1410@gmail.com?subject=Feedback from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;

    // Open user's email client
    window.location.href = mailtoLink;

    // Alert and clear fields
    alert("Your message has been sent!");
    contactForm.reset();
});
