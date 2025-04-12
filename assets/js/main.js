document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close mobile menu and dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = 'auto';
            
            // Close all dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Close menu when clicking a nav link (except dropdown toggles on mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.parentElement.classList.contains('dropdown') || window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
    });

    // Initialize Splide slider
    var splide = new Splide('#image-slider', {
        type: 'fade',
        cover: true,
        height: "85vh",
        rewind: false,
        autoplay: false,
        interval: 30000,
        pauseOnHover: false,
        arrows: false,
        pagination: true,
        breakpoints: {
            900: {
                height: '70vh',
            }
        }
    });

    // Function to handle animations
    function handleSlideAnimation(slide) {
        // Remove animation classes from all slides first
        document.querySelectorAll('.splide__slide').forEach(function(slide) {
            slide.querySelectorAll('.animate-text').forEach(function(element) {
                element.classList.remove('animate');
            });
        });

        // Add animation classes to current slide
        const animatedElements = slide.querySelectorAll('.animate-text');
        animatedElements.forEach(function(element) {
            element.classList.add('animate');
        });
    }

    // Handle animations on slide change
    splide.on('moved', function(newIndex) {
        const currentSlide = splide.Components.Elements.slides[newIndex];
        handleSlideAnimation(currentSlide);
    });

    // Handle animation for initial slide
    splide.on('mounted', function() {
        const currentSlide = splide.Components.Elements.slides[0];
        handleSlideAnimation(currentSlide);
    });

    splide.mount();

    

    // scripts.js bölümünü buraya taşıyoruz ve tekrar eden DOMContentLoaded'i kaldırıyoruz
    var category = new URL(window.location.href).searchParams.get("category");
    
    if (category) {
        loadCategoryProducts(category);
    } else {
        loadAllProducts(); // Kategori yoksa tüm ürünleri göster
    }

    function loadCategoryProducts(categoryName) {
        var productsData = window.products[categoryName];
        if (productsData) {
            document.getElementById("product-category").innerHTML = createCategoryProductsHTML(productsData);
        } else {
            console.error("Kategori bulunamadı:", categoryName);
        }
    }

    function createCategoryProductsHTML(productsList) {
        var html = '';
        
        for (var product of productsList) {
            html += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span>Stok: ${product.stock}</span>
            </div>`;
        }
        
        return html;
    }

    // Video slider'ı başlat
    const videoSlider = new Splide('#video-slider', {
        type: 'slide',
        perPage: 3,
        perMove: 1,
        gap: 20,
        pagination: true,
        arrows: true,
        
        classes: {
            arrows: 'splide__arrows video-slider-arrows',
            arrow: 'splide__arrow video-slider-arrow',
            pagination: 'splide__pagination video-slider-pagination',
        },

        breakpoints: {
            992: {
                perPage: 2,
                arrows: true,
                pagination: true,
            },
            768: {
                perPage: 1,
                arrows: true,
                pagination: true,
            }
            
        }
    });

    videoSlider.mount();

});