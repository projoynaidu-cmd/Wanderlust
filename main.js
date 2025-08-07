  // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Initialize Splide carousel
        document.addEventListener('DOMContentLoaded', function() {
            new Splide('.splide', {
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: '2rem',
                pagination: false,
                breakpoints: {
                    1024: {
                        perPage: 2
                    },
                    768: {
                        perPage: 1
                    }
                }
            }).mount();
        });
        
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Counter animation
        function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            const speed = 200;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target;
                }
            });
        }
        
        // Only run counters when they are in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.counter'));
        
        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });
        
        // Floating button animation
        const floatingBtn = document.querySelector('.floating');
        floatingBtn.addEventListener('mouseenter', () => {
            floatingBtn.classList.remove('floating');
            floatingBtn.classList.add('pulse-slow');
        });
        
        floatingBtn.addEventListener('mouseleave', () => {
            floatingBtn.classList.add('floating');
            floatingBtn.classList.remove('pulse-slow');
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });