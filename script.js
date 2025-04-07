// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const texts = ["Learn", "Secure", "Laws"];
let index = 0;
function changeText() {
    document.querySelector(".changing-text").textContent = texts[index];
    index = (index + 1) % texts.length;
}
setInterval(changeText, 3000);

let slideIndex = 0;
let slideInterval;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoSlide();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    resetAutoSlide();
}

function autoSlide() {
    plusSlides(1);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 3000);
}

function startSlideshow() {
    slideIndex = 1;
    showSlides(slideIndex);
    slideInterval = setInterval(autoSlide, 3000);
}

startSlideshow();




document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                alert(`Redirecting to ${button.innerText} section...`);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let containers = document.querySelectorAll(".container_03");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });
    
    containers.forEach(container => {
        observer.observe(container);
    });
    
    const text = "Women's Safety & AI Assistance";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing-header").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".team-box").forEach(box => {
        box.addEventListener("click", () => {
            window.open(box.getAttribute("data-url"), "_blank");
        });
    });
});



window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero-section");

    // Check scroll position
    if (window.scrollY > heroSection.clientHeight - 100) {
        navbar.classList.add("scrolled"); // Apply new styles
    } else {
        navbar.classList.remove("scrolled"); // Reset to transparent
    }
});


let hasExitedHero = false;

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero-section");
    const signUpButton = document.querySelector(".signup-btn"); // Select Sign Up button
    const loginButton = document.querySelector(".login-btn"); // Select Log In button

    // Detect if user leaves the hero section
    if (window.scrollY > heroSection.clientHeight - 100 && !hasExitedHero) {
        navbar.classList.add("scrolled", "animated");
        signUpButton.classList.add("scrolled-btn"); // Change Sign Up button color
        loginButton.classList.add("scrolled-btn"); // Change Log In button color
        hasExitedHero = true;

        // Remove animation class after 2 seconds
        setTimeout(() => {
            navbar.classList.remove("animated");
        }, 2000);
    }

    // Detect if user scrolls back up into the hero section
    if (window.scrollY < heroSection.clientHeight - 100) {
        hasExitedHero = false; // Reset flag so animation triggers again next time
        navbar.classList.remove("scrolled"); // Reset navbar to transparent
        signUpButton.classList.remove("scrolled-btn"); // Reset Sign Up button to original color
        loginButton.classList.remove("scrolled-btn"); // Reset Log In button to original color
    }
});
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('active');
    });
    box.addEventListener('mouseout', () => {
        box.classList.remove('active');
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const words = ["VandanaAIVerse", "Future of AI", "Smart Learning", "AI-Powered Tech"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 1500;
    
    const textElement = document.getElementById("my2");

    function typeText() {
        if (charIndex < words[wordIndex].length) {
            textElement.textContent += words[wordIndex][charIndex];
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(eraseText, delayBetweenWords);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section_01");
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show_01");
            }
        });
    };
    window.addEventListener("scroll", revealSections);
    revealSections();
});


document.getElementById("learn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("demo3").scrollIntoView({ behavior: "smooth" });
});