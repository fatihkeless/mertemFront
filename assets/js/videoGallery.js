document.addEventListener('DOMContentLoaded', function() {
    // Video verileri
    const videos = [
        {
            id: 'hw3MfWL0GKQ',
            title: 'TORTİLLA - LAVAŞ ( MEKSİKA TORTİLLASI )',
            type: 'youtube'
        },
        {
            id: 'VazYpKqXdiA',
            title: 'PİZZA, PİZZATOST, PİDE, LAHMACUN ÜRETİM HATTI',
            type: 'youtube'
        },
        {
            id: '24710169',
            title: 'Sigara Böreği Makinası',
            type: 'vimeo'
        },
        {
            id: 'Gsx_TKKtLDE',
            title: 'DONUT MAKİNESİ',
            type: 'youtube'
        }
        ,
        {
            id: 'afAF5muEFJc',
            title: 'TORTİLLA HATTI',
            type: 'youtube'
        }
        ,
        {
            id: 'bagCNSlUgNY',
            title: 'NOSTALJİ',
            type: 'youtube'
        }
        ,
        // {
        //     id: 'euNx68k6dRo',
        //     title: 'MANTI MAKİNESİ',
        //     type: 'youtube'
        // }
        // ,
        // {
        //     id: 'DxmkWNZV18',
        //     title: 'OTOMATİK ÇÖP ŞİŞ MAKİNASI',
        //     type: 'youtube'
        // }
        // ,
        // {
        //     id: 'AwOMQ1Yxyo',
        //     title: 'OTOMATİK ÇÖP ŞİŞ MAKİNASI 2',
        //     type: 'youtube'
        // }
        ,
        {
            id: 'nwmTFzlEgxU',
            title: 'DEPOZİTÖR',
            type: 'youtube'
        }
        ,
        {
            id: 'qdtoa6uWAhA',
            title: 'DOĞAL TÜRK LAVAŞ MAKİNASI',
            type: 'youtube'
        }
        ,
        {
            id: 'Vrzy5fGzw64',
            title: 'EKMEK HATTI',
            type: 'youtube'
        }
        ,
        {
            id: 'coHOyGFVAHQ',
            title: 'GRİSSİNİ HATTI',
            type: 'youtube'
        }
        ,
        {
            id: 'Wq7noAFk90Q',
            title: 'HAMBURGER HATTI',
            type: 'youtube'
        }
        ,
        {
            id: 'V5xIL1i58tw',
            title: 'KRUVASAN MAKİNESİ',
            type: 'youtube'
        },
        {
            id: 'w2Y-arjKfts',
            title: 'Lavaş Sayma Makinası',
            type: 'youtube'
        },
        {
            id: 'ax7HucGOJ6o',
            title: 'DOLGULU KRUVASAN MAKİNESİ',
            type: 'youtube'
        },
        {
            id: '_1FdZqwdBBo',
            title: 'OTOMATİK ÇÖP ŞİŞ MAKİNESİ',
            type: 'youtube'
        },
        {
            id: 'uOPqlplNlcc',
            title: 'PATATES CİPS MAKİNASI',
            type: 'youtube'
        },
        {
            id: 'Y-7kgS8SVW8',
            title: 'PİZZA, PİZZATOST, PİDE, LAHMACUN ÜRETİM HATTI',
            type: 'youtube'
        },
        {
            id: 'qIRfQljDmDU',
            title: 'RULO KAT MAKİNASI (4 ŞERİTLİ)',
            type: 'youtube'
        },
        // {
        //     id: 'jNKuUR9lsQ',
        //     title: 'Ultrasonik Giyotin 3',
        //     type: 'youtube'
        // },
        {
            id: 'rQvwIWxI3us',
            title: 'YUFKA MAKİNASI',
            type: 'youtube'
        },
        {
            id: 'yKx3M3crRCM',
            title: 'YUMURTA KIRMA MAKİNASI',
            type: 'youtube'
        },
        {
            id: 'CVGCmkAi7zQ',
            title: 'YUMURTA KIRMA MAKİNASI 2',
            type: 'youtube'
        }

        // Diğer videoları buraya ekleyin
    ];

    // Swiper initialization
    const swiper = new Swiper('.video-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            2160: {
                slidesPerView: 4,
                spaceBetween: 40,
            }
        },
    });

    // Thumbnail URL'lerini kontrol eden yardımcı fonksiyon
    function getThumbnailUrl(videoId, type) {
        if (type === 'vimeo') {
            return `https://vumbnail.com/${videoId}.jpg`;
        }
        
        // YouTube için birden fazla thumbnail seçeneği dene
        return {
            default: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            high: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            standard: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
        };
    }

    // Her video için kart oluştur
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'swiper-slide';
        
        const thumbnails = getThumbnailUrl(video.id, video.type);
        
        let imgHTML = '';
        if (video.type === 'vimeo') {
            imgHTML = `<img src="${thumbnails}" alt="${video.title}">`;
        } else {
            imgHTML = `
                <img 
                    src="${thumbnails.default}" 
                    onerror="if (this.src !== '${thumbnails.high}') this.src='${thumbnails.high}';
                            else if (this.src !== '${thumbnails.medium}') this.src='${thumbnails.medium}';
                            else this.src='${thumbnails.standard}';"
                    alt="${video.title}"
                >
            `;
        }

        videoCard.innerHTML = `
            <div class="video-card">
                <div class="video-thumbnail" data-video-id="${video.id}" data-video-type="${video.type}">
                    ${imgHTML}
                    <div class="play-icon">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                </div>
            </div>
        `;

        document.getElementById('videoGrid').appendChild(videoCard);
    });

    // Modal işlemleri
    const modal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    const closeBtn = document.querySelector('.close-modal');

    // Video kartlarına tıklama olayı ekle
    document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoId = this.dataset.videoId;
            const videoType = this.dataset.videoType;
            
            const embedUrl = videoType === 'youtube'
                ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
                : `https://player.vimeo.com/video/${videoId}?autoplay=1`;

            videoContainer.innerHTML = `
                <iframe
                    src="${embedUrl}"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                ></iframe>
            `;
            
            modal.style.display = 'flex';
        });
    });

    // Modal kapatma işlemleri
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        videoContainer.innerHTML = ''; // Video iframe'ini temizle
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoContainer.innerHTML = '';
        }
    }
});

// Video oynatma fonksiyonu
function playVideo(videoId) {
    // Video URL'sini oluştur
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    // Yeni sekmede videoyu aç
    window.open(videoUrl, '_blank');
}

// Thumbnail kontrolü için yardımcı fonksiyon
function checkThumbnail(img, videoId) {
    img.onerror = function() {
        // Yüksek kalite thumbnail bulunamazsa varsayılan thumbnail'ı kullan
        this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };
} 