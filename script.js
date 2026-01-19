function openInvitation() {
    const envelope = document.getElementById('envelope');
    const overlay = document.getElementById('invitation-overlay');

    envelope.classList.add('is-open');

    setTimeout(() => {
        overlay.classList.add('dismissed');
        document.body.style.overflowY = "auto";
    }, 1400);
}

let slideIdx = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[slideIdx].classList.remove('active');
    slideIdx = (slideIdx + 1) % slides.length;
    slides[slideIdx].classList.add('active');
}

setInterval(nextSlide, 5000);
document.body.style.overflow = "hidden";