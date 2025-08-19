document.addEventListener('DOMContentLoaded', function() {
    // URL'den ürün ID ve kategori bilgisini al
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const category = urlParams.get('category');

    // LocalStorage'dan ürün bilgisini al
    let product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (!product) {
        product = findProduct(productId, category);
    }

    if (!product) {
        console.error('Ürün bulunamadı');
        window.location.href = 'Kategori.html';
        return;
    }
    



    // Sayfa başlığını güncelle
    document.title = product.name;

    // Breadcrumb'ı güncelle
    updateBreadcrumb(product.name, getCategoryName(category));

    // Ürün detaylarını doldur
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-full-description').textContent = 
        product.fullDescription || product.description;

    // Stok durumu
    const stockBadge = document.getElementById('stock-badge');
    stockBadge.className = `stock-badge ${getStockClass(product.stock)}`;
    stockBadge.textContent = `Stok: ${product.stock}`;

    // Teknik özellikleri doldur
    if (product.specifications) {
        const specList = document.getElementById('specifications-list');
        specList.innerHTML = `
            <ul class="spec-list">
                ${Object.entries(product.specifications)
                    .map(([key, value]) => `
                        <li class="spec-item">
                            <div class="spec-bullet"></div>
                            <div class="spec-content">
                                <span class="spec-text">${value}</span>
                            </div>
                        </li>
                    `).join('')}
            </ul>
        `;
    }

       // Slider'ı oluştur
       setupProductGallery(product);

           // PDF butonu (sadece product.pdf varsa)
            const contactDiv = document.querySelector('.product-contact');
            if (product.pdf && contactDiv) {
                const pdfLink = document.createElement('a');
                pdfLink.href = product.pdf;
                pdfLink.target = '_blank';
                pdfLink.rel = 'noopener';
                pdfLink.className = 'contact-btn';
                pdfLink.innerHTML = '<i class="fas fa-file-pdf"></i> Ürün Kataloğu';
                contactDiv.appendChild(pdfLink);
            }
   
       // Ürün detayları yüklendikten sonra vitrini yükle
       loadShowcase(product);
});

function setupProductGallery(product) {
    // Tüm resimleri bir dizide topla
    let images = [product.image];
    if (Array.isArray(product.productImages)) {
        images = product.productImages
    }

    // Ana slider HTML'i
    const mainSliderEl = document.getElementById('product-slider');
    mainSliderEl.innerHTML = `
        <div class="splide__track">
            <ul class="splide__list">
                ${images.map(image => `
                    <li class="splide__slide">
                        <img src="${image}" alt="Ürün görüntüsü">
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    // Thumbnail slider HTML'i
    const thumbnailSliderEl = document.getElementById('thumbnail-slider');
    thumbnailSliderEl.innerHTML = `
        <div class="splide__track">
            <ul class="splide__list">
                ${images.map((image, index) => `  <!-- Index ekledik -->
                    <li class="splide__slide" data-splide-index="${index}">
                        <img src="${image}" alt="Thumbnail">
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    // Ana slider'ı başlat
    const mainSlider = new Splide('#product-slider', {
        type:  'loop',
        perPage: 1,
        perMove: 1,
        arrows: product.productImages.length > 1,
        pagination: product.productImages.length > 1,
        breakpoints: {
            768: {
                arrows: product.productImages.length > 1,
                pagination: product.productImages.length > 1,
            }
        },
        classes: {
            pagination: 'splide__pagination showcase-pagination',
        }
    });

    // Thumbnail slider'ı başlat
    const thumbnailSlider = new Splide('#thumbnail-slider', {
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true, // Bu önemli
        arrows: false,
        breakpoints: {
            768: {
                fixedWidth: 60,
                fixedHeight: 44,
            }
        }
    });
    // Slider'ları senkronize et ve mount et
    mainSlider.sync(thumbnailSlider); // Thumbnail ile ana slider'ı bağladık
    mainSlider.mount();
    thumbnailSlider.mount();
}

function findProduct(id, category) {
    if (!window.products || !window.products[category]) return null;
    return window.products[category].find(p => p.id.toString() === id);
}

function getTotalProductCount() {
    let total = 0;
    for (const category in window.products) {
        total += window.products[category].length;
    }
    return total;
}

function generateSitemapEntries(baseUrl = 'https://mertem.com.tr/urunlerimiz/') {
    let xml = '';

    for (const category in window.products) {
        const products = window.products[category];
        for (const product of products) {
            const url = `${baseUrl}?id=${product.id}&category=${category}`;
            xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
        }
    }

    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xml}
</urlset>`;
}


function updateBreadcrumb(productName, categoryName) {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="../">Ana Sayfa</a>
            <i class="fas fa-chevron-right"></i>
            <a href="../Kategori/">Ürünler</a>
            <i class="fas fa-chevron-right"></i>
            <a href="../Kategori/?category=${getCategorySlug(categoryName)}">${categoryName}</a>
            <i class="fas fa-chevron-right"></i>
            <span class="current">${productName}</span>
        `;
    }
}

function getCategoryName(categorySlug) {
    const categories = {
        'unlu-mamul': 'Unlu Mamul Ürünleri',
        'restorant': 'Restorant Makinaları',
        'tatli': 'Tatlı Ürünleri',
        'paketleme': 'Paketleme Ürünleri',
        'gida': 'Gıda Makineleri',
        'endustriyel': 'Endüstriyel Makinalar',
        'tum-urunler': 'Tüm Ürünler'
    };
    return categories[categorySlug] || categorySlug;
}

function getCategorySlug(categoryName) {
    const slugs = {
        'Unlu Mamul Ürünleri': 'unlu-mamul',
        'Restorant Makinaları': 'restorant',
        'Tatlı Ürünleri': 'tatli',
        'Paketleme Ürünleri': 'paketleme',
        'Gıda Makineleri': 'gida',
        'Endüstriyel Makinalar': 'endustriyel',
        'Tüm Ürünler': 'tum-urunler'
    };
    return slugs[categoryName] || categoryName.toLowerCase();
}

function getStockClass(stock) {
    if (stock > 10) return 'in-stock';
    if (stock > 0) return 'low-stock';
    return 'out-of-stock';
}

function loadShowcase(currentProduct) {
    const categoryName = currentProduct.category;
    let products = [];

    if (window.products && window.products[categoryName]) {
        products = window.products[categoryName]
            .filter(p => p.id !== currentProduct.id)
            .slice(0, 6);
    }

    const showcaseContainer = document.getElementById('related-products');
    
    // Eğer birden fazla ürün varsa slider'ı göster
    if (products && products.length >= 1) {
        const splideDiv = document.createElement('div');
        splideDiv.className = 'splide';
        
        splideDiv.innerHTML = `
            <div class="splide__track">
                <ul class="splide__list">
                    ${products.map(product => `
                        <li class="splide__slide">
                            <div class="showcase-card">
                                <div class="showcase-image">
                                    <img src="${product.image}" alt="${product.name}">
                                </div>
                                <div class="showcase-info">
                                    <h3>${product.name}</h3>
                                    <p>${product.description || ''}</p>
                                    <a href="../urunlerimiz/?id=${product.id}&category=${categoryName}" 
                                       class="showcase-link"
                                       onclick="localStorage.setItem('selectedProduct', JSON.stringify(${JSON.stringify(product)}))">
                                        İncele <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        showcaseContainer.appendChild(splideDiv);

        try {
            const splide = new Splide(splideDiv, {
                type: 'slide',
                perPage: 3,
                perMove: 1,
                gap: 20,
                pagination: true,
                arrows: true,
                
                classes: {
                    // Özel class'lar ekleyelim
                    arrows: 'showcase-arrows',
                    arrow: 'showcase-arrow',
                    pagination: 'splide__pagination showcase-pagination',
                },

                breakpoints: {
                    768: {
                        perPage: 2,
                        arrows: true,
                        pagination: products.length > 2, // 2'den fazla ürün varsa pagination'ı göster
                    },
                    480: {
                        perPage: 1,
                        arrows: true,
                        pagination: products.length > 1, // 1'den fazla ürün varsa pagination'ı göster
                    }
                }
            });
            
            splide.mount();
        } catch (error) {
            console.error("Splide başlatma hatası:", error);
        }
    } else if (products.length === 1) {
        // Tek ürün için daha basit bir link yapısı
        const product = products[0];
        showcaseContainer.innerHTML = `
           <div class="showcase-card single-product">
            <div class="showcase-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="showcase-info">
                <h3>${product.name}</h3>
                <p>${product.description || ''}</p>
                <a 
                    href="urun.html?id=${product.id}&category=${categoryName}" 
                    class="showcase-link" 
                    onclick="event.preventDefault(); localStorage.setItem('selectedProduct', decodeURIComponent('${productData}')); window.location.href=this.href;"
                >
                    İncele <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
        `;
    } else {
        showcaseContainer.innerHTML = '<p class="no-related">Bu kategoride başka ürün bulunmamaktadır.</p>';
    }
}

// Fonksiyonu global scope'ta tanımla
window.setProductAndNavigate = function(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));

}; 