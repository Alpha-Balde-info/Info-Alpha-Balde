// Mise à jour automatique de l'année dans le footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Fonctionnalité pour afficher/masquer les détails des expériences
document.querySelectorAll('.experience-item').forEach(item => {
    const header = item.querySelector('.experience-header');
    const content = item.querySelector('.experience-content');
    
    header.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});

// Animation smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
