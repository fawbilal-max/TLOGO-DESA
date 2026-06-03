// ======================================
// DESA TLOGO PREMIUM SCRIPT
// ======================================

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".header");

    if (window.scrollY > 50) {

        navbar.style.background = "#0f172a";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";

    } else {

        navbar.style.background = "rgba(15,23,42,0.95)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// BACK TO TOP
// ===============================

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 300) {

        backTop.style.opacity = "1";
        backTop.style.visibility = "visible";

    } else {

        backTop.style.opacity = "0";
        backTop.style.visibility = "hidden";

    }

});

// ===============================
// ANIMASI SCROLL
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(
".card,.activity-card,.gallery-item,.contact-card,.stat-box"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";

    observer.observe(el);

});

// ===============================
// LIGHTBOX
// ===============================

function openImage(src){

    const lightbox =
    document.getElementById("lightbox");

    const lightboxImg =
    document.getElementById("lightbox-img");

    if(lightbox && lightboxImg){

        lightbox.style.display = "flex";

        lightboxImg.src = src;

    }

}

function closeImage(){

    const lightbox =
    document.getElementById("lightbox");

    if(lightbox){

        lightbox.style.display = "none";

    }

}

// ESC KEY

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeImage();

    }

});

// KLIK AREA GELAP

const lightbox =
document.getElementById("lightbox");

if(lightbox){

    lightbox.addEventListener("click", function(e){

        if(e.target === this){

            closeImage();

        }

    });

}

// ===============================
// COUNTER STATISTIK
// ===============================

const counters =
document.querySelectorAll(".stat-box h3");

const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {

        const target =
        +counter.innerText.replace(/\D/g,'');

        const count =
        +counter.getAttribute("data-count") || 0;

        const increment =
        target / speed;

        if(count < target){

            const value =
            Math.ceil(count + increment);

            counter.setAttribute(
            "data-count",
            value
            );

            counter.innerText = value;

            setTimeout(updateCount,10);

        }else{

            counter.innerText = target;

        }

    };

    updateCount();

});

// ===============================
// MENU AKTIF
// ===============================

const currentPage =
window.location.pathname.split("/").pop();

document.querySelectorAll(".menu a")
.forEach(link => {

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.style.color = "#38bdf8";
        link.style.fontWeight = "700";

    }

});

// ===============================
// WELCOME TEXT
// ===============================

const text =
document.getElementById("text");

if(text){

    text.innerHTML =
    "Selamat Datang di Website Resmi Desa Tlogo 🌿";

}

// ===============================
// LOADING HALUS
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});