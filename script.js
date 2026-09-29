/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");


    const icon = menuToggle.querySelector("i");


    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
========================= */

const navLinks = document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");


        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    const icon = themeToggle.querySelector("i");


    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});



/* =========================
   SCROLL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight = window.innerHeight;


    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);


/* Run once when page loads */

revealOnScroll();



/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const message =
        document.getElementById("message").value.trim();


    // Error elements

    const nameError =
        document.getElementById("nameError");


    const emailError =
        document.getElementById("emailError");


    const messageError =
        document.getElementById("messageError");


    const successMessage =
        document.getElementById("successMessage");


    // Clear previous errors

    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    successMessage.textContent = "";


    let isValid = true;


    /* Name validation */

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    /* Message validation */

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message should contain at least 10 characters.";

        isValid = false;

    }


    /* Success */

    if (isValid) {

        successMessage.textContent =
            "Your message has been validated successfully!";

        contactForm.reset();

    }

});