function showDetails() {
    const detailsSection = document.getElementById('details-section');
    if (detailsSection.style.display === 'none' || detailsSection.style.display === '') {
        detailsSection.style.display = 'block';
        window.scrollTo({ top: detailsSection.offsetTop, behavior: 'smooth' });
    } else {
        detailsSection.style.display = 'none';
    }
}
