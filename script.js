document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Sol Alt Açılır Buton (FAB) Mantığı ---
    const fabToggle = document.getElementById('fab-toggle');
    const fabWrapper = document.querySelector('.fab-wrapper');

    if (fabToggle && fabWrapper) {
        fabToggle.addEventListener('click', () => {
            fabWrapper.classList.toggle('active');
        });

        // Sayfada başka bir yere tıklanınca FAB menüsünü kapat
        document.addEventListener('click', (e) => {
            if (!fabWrapper.contains(e.target)) {
                fabWrapper.classList.remove('active');
            }
        });
    }

    // --- 2. Mobil Menü ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- 3. Accordion (S.S.S.) ---
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const isAlreadyActive = currentItem.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
            if (!isAlreadyActive) currentItem.classList.add('active');
        });
    });

    // --- 4. Yüksek Performanslı Scroll Animasyonu ---
    const animElements = document.querySelectorAll('.scroll-anim');
    const animObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    animElements.forEach(el => animObserver.observe(el));

    // --- 5. Şeffaf Navbar Scroll Efekti ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });
});