function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


document.getElementById("year").textContent =
    new Date().getFullYear();


// Close mobile menu when a link is clicked

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList
            .remove("active");

    });

});
