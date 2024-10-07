// toogle navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    // remove toggle icon 
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Software Engineer', 'UI UX Designer', 'Product Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

// Menggunakan Intersection Observer untuk mendeteksi saat elemen masuk ke tampilan
const paragraphs = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    threshold: 0.1 // 10% dari elemen harus terlihat untuk memicu animasi
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Tambahkan kelas untuk memulai animasi
            observer.unobserve(entry.target); // Hentikan pengamatan setelah muncul
        }
    });
}, options);

paragraphs.forEach(paragraph => {
    observer.observe(paragraph); // Mulai mengamati setiap paragraf
});
