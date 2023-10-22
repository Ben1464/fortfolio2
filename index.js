document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Lazy Loading Images
    let images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        let imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let image = entry.target;
                    image.src = image.dataset.src;
                    imageObserver.unobserve(image);
                }
            });
        });

        images.forEach(function(image) {
            if (image.hasAttribute('data-src')) {
                imageObserver.observe(image);
            }
        });
    } else {
        images.forEach(function(image) {
            if (image.hasAttribute('data-src')) {
                image.src = image.dataset.src;
            }
        });
    }
});

    
