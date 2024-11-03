window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.style.opacity = '1';
        } else {
            section.style.opacity = '0.5';
        }
    });
});