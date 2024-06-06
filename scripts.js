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
