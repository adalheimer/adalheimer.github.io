document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");
    const galleryImages = document.querySelectorAll('.gallery-image');
    const linkGalleryImages = document.querySelectorAll('.link-gallery-image');

    function updateImages(theme) {
        galleryImages.forEach(img => {
            if (theme === 'dark') {
                img.src = img.getAttribute('data-dark');
            } else {
                img.src = img.getAttribute('data-light');
            }
        });

        linkGalleryImages.forEach(img => {
            if (theme === 'dark') {
                img.src = img.getAttribute('data-dark');
            } else {
                img.src = img.getAttribute('data-light');
            }
        });
    }

    function toggleTheme(currentTheme) {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateImages(newTheme);
    }

    // Initial theme setting
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateImages(currentTheme);

    mode_toggle.addEventListener('click', function() {
        toggleTheme(localStorage.getItem('theme'));
    });
});
