const siteTitle = document.getElementById("js-company-name");
const letters = siteTitle.textContent.split('');
siteTitle.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomWeight = [200, 700][Math.floor(Math.random() * 3)];
    siteTitle.children[randomIndex].style.fontWeight = randomWeight;
}, 250);

const site_header = document.getElementById("js-site-header");

document.querySelectorAll('[data-project-colour]').forEach(project => {
    project.addEventListener('mouseenter', () => {
        const colour = project.getAttribute('data-project-colour');
        document.body.style.backgroundColor = colour;
        site_header.style.backgroundColor = colour;
    });

    project.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = 'var(--gameful-white)';
        site_header.style.backgroundColor = 'var(--gameful-white)';
    });
});