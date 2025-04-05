document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.createElement('div');
    scrollButton.className = 'scroll-top';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollButton);

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    };

    scrollButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // URL'den kategori parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get('category');

    // Filtreleme butonlarına tıklama olayı ekle
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aktif butonu güncelle
            updateActiveButton(this);

            // Kategoriyi al
            const category = this.getAttribute('href').replace('#', '');
            
            // URL'yi güncelle
            updateURL(category);
            
            // Ürünleri yükle
            loadCategoryProducts(category);
        });
    });

    // Sayfa yüklendiğinde veya geri/ileri tuşuna basıldığında
    window.addEventListener('popstate', function(event) {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category') || 'tum-urunler';
        
        // Aktif butonu güncelle
        const activeButton = document.querySelector(`.filter-btn[href="#${category}"]`);
        if (activeButton) {
            updateActiveButton(activeButton);
        }

        // Ürünleri yükle
        loadCategoryProducts(category);
    });

    // Sayfa ilk yüklendiğinde
    initializePage(categoryFromUrl);
});

function initializePage(category) {
    // Varsayılan kategori
    const defaultCategory = 'tum-urunler';
    const currentCategory = category || defaultCategory;

    // Aktif butonu güncelle
    const activeButton = document.querySelector(`.filter-btn[href="#${currentCategory}"]`);
    if (activeButton) {
        updateActiveButton(activeButton);
    }

    // URL'yi güncelle (sayfa ilk yüklendiğinde)
    if (!category) {
        updateURL(defaultCategory, true);
    }

    // Ürünleri yükle
    loadCategoryProducts(currentCategory);
}

function updateActiveButton(button) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function updateURL(category, replace = false) {
    const url = `${window.location.pathname}?category=${category}`;
    if (replace) {
        // Sayfa ilk yüklendiğinde history'ye ekleme yapma, mevcut state'i değiştir
        window.history.replaceState({ category }, '', url);
    } else {
        // Kullanıcı kategori değiştirdiğinde history'ye ekle
        window.history.pushState({ category }, '', url);
    }
}

function loadCategoryProducts(categoryName) {
    const productContainer = document.getElementById("product-category");
    
    // Loading state göster
    productContainer.innerHTML = '<div class="loading">Yükleniyor...</div>';

    // Tüm ürünler için özel kontrol
    if (categoryName === 'tum-urunler') {
        const allProducts = [];
        for (const category in window.products) {
            const productsWithCategory = window.products[category].map(product => ({
                ...product,
                category: category
            }));
            allProducts.push(...productsWithCategory);
        }
        
        if (allProducts.length > 0) {
            productContainer.innerHTML = createProductCardsHTML(allProducts);
        } else {
            productContainer.innerHTML = '<p class="no-products">Hiç ürün bulunamadı.</p>';
        }
        return;
    }

    // Belirli kategori için ürünleri yükle
    const productsData = window.products[categoryName];
    if (productsData && productsData.length > 0) {
        const productsWithCategory = productsData.map(product => ({
            ...product,
            category: categoryName
        }));
        productContainer.innerHTML = createProductCardsHTML(productsWithCategory);
    } else {
        productContainer.innerHTML = '<p class="no-products">Bu kategoride ürün bulunamadı.</p>';
    }
}

function createProductCardsHTML(productsList) {
    return productsList.map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image"
                     onerror="this.src='/assets/images/no-image.jpg'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                
                <div class="product-footer">
                    
                    <a href="../urunlerimiz/?id=${product.id}&category=${product.category}" 
                       class="product-detail-btn"
                       onclick="localStorage.setItem('selectedProduct', JSON.stringify(${JSON.stringify(product)}))">
                        Detayları Gör <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function createLoadingCards(count) {
    return Array(count).fill(`
        <div class="product-card loading">
            <div class="product-image-wrapper skeleton"></div>
            <div class="product-info">
                <div class="skeleton" style="height: 24px; width: 80%; margin: 10px auto;"></div>
                <div class="skeleton" style="height: 60px; width: 90%; margin: 10px auto;"></div>
                <div class="skeleton" style="height: 36px; width: 40%; margin: 10px auto;"></div>
            </div>
        </div>
    `).join('');
}

function getStockClass(stock) {
    if (stock > 10) return 'in-stock';
    if (stock > 0) return 'low-stock';
    return 'out-of-stock';
} 