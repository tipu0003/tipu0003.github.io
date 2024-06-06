function showMore() {
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const publicationsSection = document.getElementById('publications');

    aboutSection.style.display = 'block';
    skillsSection.style.display = 'block';
    publicationsSection.style.display = 'block';

    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
}


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
