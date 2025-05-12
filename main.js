document.addEventListener("DOMContentLoaded", function () {
    
    const sections = document.querySelectorAll('.section');

    
    function checkSectionInView() {
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + scrollY;
            const sectionHeight = section.offsetHeight;

            if (scrollY + viewportHeight > sectionTop + sectionHeight / 3) {
                section.classList.add('visible');
            }
        });
    }

    
    checkSectionInView();
    window.addEventListener('scroll', checkSectionInView);
});

let lastScrollTop = 0; 
const header = document.querySelector('.site-header'); 

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        
        header.style.top = '-100px'; 
    } else {
        
        header.style.top = '0'; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const burger = document.getElementById('burger');
const nav = document.querySelector('.main-nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('open');
});
