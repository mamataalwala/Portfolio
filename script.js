// Page Load Animation
window.addEventListener("load", function () {
    let headerSection = document.querySelector(".header-text");
    if (headerSection) {
        headerSection.style.opacity = "1";
        // headerSection.style.transform = "scale(1)";
        headerSection.style.transform =  "translateY(0)";
    }
});

// Page Load Animation
// window.addEventListener("load", function () {
//     let Yanimation = document.querySelectorAll(".header-text, .content"); // Select multiple elements

//     Yanimation.forEach(section => {
//         section.style.opacity = "1";
//         section.style.transform = "translateY(0)";
//     });
// });


// window.addEventListener("load", function () {
//     let name = document.querySelector(".about-info h2");
//     if (name) {
//         name.style.opacity = "1";
//         // headerSection.style.transform = "scale(1)";
//         name.style.transform =  "translateX(0)";
//     }
// });

let lastScrollY = window.scrollY;

document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".row, .content, .about-info h2, .skills-resume, .box, .languages, .project");

    let observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active"); // Animate on scroll down
                } else {
                    entry.target.classList.remove("active"); // Reset on scroll up
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    sections.forEach(section => observer.observe(section));
});



// Smooth Scrolling for Navbar Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

