const prevs = document.querySelectorAll(".prev");
const nexts = document.querySelectorAll(".next");

function prevSlide(event) {
    const control = event.target.parentNode;
    const carousel = control.closest(".carousel-items");
    const slideWidth = control.closest(".carousel-items").clientWidth;
    carousel.scrollLeft -= slideWidth;
}

function nextSlide(event) {
    const control = event.target.parentNode;
    const carousel = control.closest(".carousel-items");
    const slideWidth = control.closest(".carousel-items").clientWidth;
    carousel.scrollLeft += slideWidth;
}

prevs.forEach(prev => {prev.addEventListener("click", prevSlide)} )
nexts.forEach(next => {next.addEventListener("click", nextSlide)} )

// lightbox
const lightbox = document.querySelector(".lightbox");
lightbox.querySelector(".wrapper .button-close").addEventListener("click", closeLightBox);
lightbox.querySelector(".wrapper .button-close").addEventListener("keydown", closeLightBox);

lightbox.querySelector(".img img").addEventListener("click", closeLightBox);
lightbox.querySelector(".img img").addEventListener("keydown", closeLightBox);

document.querySelectorAll(".img-clk").forEach(img => {
    img.addEventListener("click", showLightbox);
    img.addEventListener("keydown", showLightbox);
})


function showLightbox(img) {
    const trg = (img.code === 'Space' || img.code === 'Enter') ? img.target.lastElementChild : img.target;
    if (img.target.classList.contains("img-round") || img.code === 'Space' || img.code === 'Enter') {
        const lightboxImg = lightbox.querySelector("img");
        lightboxImg.src = trg.src;
        lightboxImg.alt = trg.alt;
        lightbox.classList.add("show");
    }
}

function closeLightBox() {
    lightbox.classList.remove("show");
}

document.onkeyup = (event) => {
    if (event.key === 'Escape') {
        closeLightBox();
    }
}