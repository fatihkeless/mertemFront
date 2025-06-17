// Media interaction functionality
document.addEventListener('DOMContentLoaded', function() {
    // Video thumbnails click handler
    const videoItems = document.querySelectorAll('.video-item');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.getElementById('closeModal');

    // Video data mapping
    const videoData = {
        'mertemtanitim': {
            src: '../assets/video/tanitim2.mp4',
            title: 'Nostalji - Özel Video',
            desc: 'Özel anlarımızdan derlenen nostalji videosu'
        },
        'basindabiz': {
            src: '../assets/video/basindabiz.mp4',
            title: 'INT KOREA Fabrika Tanıtım Filmi',
            desc: 'Üretim tesislerimizin detaylı tanıtımı'
        },
        'mertemtanitim2': {
            src: '../assets/video/mertem tanıtım.mp4',
            title: 'Mertem Tanıtım Filmi',
            desc: 'Mertem ürünlerinin detaylı tanıtımı'
        },
        'tgrt_eu': {
            src: '../assets/video/tgrt_eu.mp4',
            title: 'TGRT EUROPA',
            desc: 'TGRT EUROPA ürünlerinin detaylı tanıtımı'
        },
        'fuar': {
            src: '../assets/video/Fuar1.mp4',
            title: 'Mertem Tanıtım Filmi',
            desc: 'Mertem ürünlerinin detaylı tanıtımı'
        },
        'nostalji': {
            src: '../assets/video/nostaljiii.mp4',
            title: 'Fuarda INT KOREA',
            desc: 'INT KOREA ürünlerinin fuarda görüntüleri'
        },
        'tanitim2': {
            src: '../assets/video/111.mp4',
            title: 'Nostalji - Özel Video',
            desc: 'Özel anlarımızdan derlenen nostalji videosu'
        },
        'tanitim3': {
            src: '../assets/video/2323.mp4',
            title: 'İhracat Başarı Hikayesi',
            desc: 'Bloomberg HT de yayınlanan özel röportaj'
        },
        'food-tech': {
            src: '../assets/video/YUNUS ULUPINAR - FOOD-TECH EURASIA 2021 FUAR KONUŞMASI [_NjVGRimsVg].mp4',
            title: 'Food Tech',
            desc: 'Food Tech ürünlerinin detaylı tanıtımı'
        }
    };

    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoKey = this.getAttribute('data-video');
            if (videoKey && videoData[videoKey]) {
                const video = videoData[videoKey];
                const modalVideoContainer = document.querySelector('.basindabiz-modal-video-container');
                
                // Loading state başlat - loaded class'ını kaldır
                modalVideoContainer.classList.remove('loaded');
                
                // Modal content'i doldur
                modalVideo.src = video.src;
                
                // Video yüklenme event'lerini dinle
                modalVideo.addEventListener('loadeddata', function() {
                    modalVideoContainer.classList.add('loaded');
                }, { once: true });
                
                modalVideo.addEventListener('canplay', function() {
                    modalVideoContainer.classList.add('loaded');
                }, { once: true });
                
                // Modal'ı göster
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Video'yu oynat
                modalVideo.play();
            } else {
                console.log('Video opened:', this.querySelector('.media-title').textContent);
            }
        });
    });

    // Modal kapatma işlemleri
    function closeVideoModal() {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        modalVideo.pause();
        modalVideo.src = '';
    }

    closeModal.addEventListener('click', closeVideoModal);

    // Modal overlay'e tıklayınca kapat
    videoModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeVideoModal();
        }
    });

    // ESC tuşu ile kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // Enhanced Photo Gallery with better modal implementation
    const initPhotoGallery = () => {
        let currentImageIndex = 0;
        let images = [];
        
        // Collect all photo items
        const photoItems = document.querySelectorAll('.photo-item');
        photoItems.forEach((item, index) => {
            const imgSrc = item.getAttribute('href');
            const imgAlt = item.querySelector('img').getAttribute('alt');
            images.push({ src: imgSrc, alt: imgAlt, index: index });
        });

        // Create enhanced modal
        const createPhotoModal = () => {
            const modal = document.createElement('div');
            modal.className = 'basindabiz-photo-modal';
            modal.innerHTML = `
                <div class="basindabiz-photo-modal-overlay">
                      <button class="basindabiz-photo-modal-close">
                            <i class="fas fa-times"></i>
                        </button>
                    <div class="basindabiz-photo-modal-content">
                      
                        <img class="basindabiz-photo-modal-image" src="" alt="">
                        <div class="basindabiz-photo-counter">
                                <span class="current-num">1</span> / <span class="total-num">${images.length}</span>
                            </div>
                        <div class="basindabiz-photo-modal-info">
                            
                           
                            
                        </div>
                        
                    </div>
                    <button class="basindabiz-photo-nav-btn basindabiz-photo-nav-prev">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="basindabiz-photo-nav-btn basindabiz-photo-nav-next">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                </div>
            `;
            document.body.appendChild(modal);
            return modal;
        };

        // Show image in modal
        const showImage = (index) => {
            const modal = document.querySelector('.basindabiz-photo-modal') || createPhotoModal();
            const modalImg = modal.querySelector('.basindabiz-photo-modal-image');
            const currentNum = modal.querySelector('.current-num');
            const prevBtn = modal.querySelector('.basindabiz-photo-nav-prev');
            const nextBtn = modal.querySelector('.basindabiz-photo-nav-next');
            
            currentImageIndex = index;
            const image = images[index];
            
            // Update modal content
            modalImg.src = image.src;
            modalImg.alt = image.alt;
            currentNum.textContent = index + 1;
            
            // Update navigation buttons
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === images.length - 1;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        // Close modal
        const closeModal = () => {
            const modal = document.querySelector('.basindabiz-photo-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        };

        // Navigate images
        const navigateImage = (direction) => {
            const newIndex = currentImageIndex + direction;
            if (newIndex >= 0 && newIndex < images.length) {
                showImage(newIndex);
            }
        };

        // Event listeners
        photoItems.forEach((item, index) => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                showImage(index);
            });
        });

        // Modal event listeners (delegated)
        document.body.addEventListener('click', function(e) {
            const modal = document.querySelector('.basindabiz-photo-modal');
            if (!modal) return;

            if (e.target.matches('.basindabiz-photo-modal-close') || e.target.closest('.basindabiz-photo-modal-close')) {
                closeModal();
            } else if (e.target.matches('.basindabiz-photo-nav-prev') || e.target.closest('.basindabiz-photo-nav-prev')) {
                navigateImage(-1);
            } else if (e.target.matches('.basindabiz-photo-nav-next') || e.target.closest('.basindabiz-photo-nav-next')) {
                navigateImage(1);
            } else if (e.target.matches('.basindabiz-photo-modal-overlay')) {
                closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            const modal = document.querySelector('.basindabiz-photo-modal');
            if (!modal || !modal.classList.contains('active')) return;

            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    navigateImage(-1);
                    break;
                case 'ArrowRight':
                    navigateImage(1);
                    break;
            }
        });

        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;

        document.addEventListener('touchstart', function(e) {
            const modal = document.querySelector('.basindabiz-photo-modal');
            if (!modal || !modal.classList.contains('active')) return;
            startX = e.touches[0].clientX;
        });

        document.addEventListener('touchend', function(e) {
            const modal = document.querySelector('.basindabiz-photo-modal');
            if (!modal || !modal.classList.contains('active')) return;
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next image
                    navigateImage(1);
                } else {
                    // Swipe right - previous image
                    navigateImage(-1);
                }
            }
        };
    };
    
    initPhotoGallery();

    // Video and Audio player functionality
    const mainVideo = document.getElementById('mainRadioVideo');
    const audioPlayers = document.querySelectorAll('audio');

    // Handle audio players
    audioPlayers.forEach(audio => {
        audio.addEventListener('play', function() {
            // Pause other audio players when one starts playing
            audioPlayers.forEach(otherAudio => {
                if (otherAudio !== this && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
            
            // Pause main video if playing
            if (mainVideo && !mainVideo.paused) {
                mainVideo.pause();
            }
        });
    });

    // Pause all audio when main video starts
    if (mainVideo) {
        mainVideo.addEventListener('play', function() {
            audioPlayers.forEach(audio => {
                if (!audio.paused) {
                    audio.pause();
                }
            });
        });
    }
});

// Basında Biz Video Gallery JavaScript
// Basında Biz sayfa video verileri
const basindaBizVideos = {
    'tgrt_eu': '/assets/video/tgrt_eu.mp4',
    'basindabiz': '/assets/video/basindabiz.mp4',
    'fuar': '/assets/video/Fuar1.mp4',
    'tanitim': '/assets/video/mertem tanıtım.mp4',
    'nostaljiii': '/assets/video/nostaljiii.mp4',
    'radyo': '/assets/video/Yunus_Ulupinar_Radyo.mp4'
};

// Ana sayfa için basında biz video modal işlevselliği
function initBasindaVideoModal() {
    const modal = document.getElementById('basindaVideoModal');
    const video = document.getElementById('basindaModalVideo');
    const closeBtn = document.getElementById('basindaCloseModal');
    const videoContainer = document.querySelector('.basinda-modal-video-container');
    
    // Video kartlarına tıklama olayı ekle
    document.querySelectorAll('.basinda-video-card.video-item').forEach(card => {
        card.addEventListener('click', function() {
            const videoKey = this.getAttribute('data-video');
            const videoPath = basindaBizVideos[videoKey];
            
            if (videoPath) {
                showBasindaVideoModal(videoPath);
            }
        });
    });
    
    // Modal gösterme fonksiyonu
    function showBasindaVideoModal(videoPath) {
        if (video && modal) {
            video.src = videoPath;
            modal.classList.add('active');
            videoContainer.classList.add('loaded');
            document.body.style.overflow = 'hidden';
            
            // Video yüklendiğinde otomatik oynat
            video.addEventListener('loadeddata', function() {
                video.play().catch(e => {
                    console.log('Autoplay prevented:', e);
                });
            }, { once: true });
        }
    }
    
    // Modal kapatma fonksiyonu
    function closeBasindaVideoModal() {
        if (modal && video) {
            modal.classList.remove('active');
            video.pause();
            video.src = '';
            videoContainer.classList.remove('loaded');
            document.body.style.overflow = '';
        }
    }
    
    // Kapatma butonuna tıklama
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBasindaVideoModal);
    }
    
    // Modal overlay'e tıklama
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('basinda-modal-overlay')) {
                closeBasindaVideoModal();
            }
        });
    }
    
    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeBasindaVideoModal();
        }
    });
}

// Basında biz sayfası için orijinal video modal işlevselliği
function initVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const closeBtn = document.getElementById('closeModal');
    const videoContainer = document.querySelector('.basindabiz-modal-video-container');
    
    // Video kartlarına tıklama olayı ekle
    document.querySelectorAll('.video-item').forEach(card => {
        card.addEventListener('click', function() {
            const videoKey = this.getAttribute('data-video');
            const videoPath = basindaBizVideos[videoKey];
            
            if (videoPath) {
                showVideoModal(videoPath);
            }
        });
    });
    
    // Modal gösterme fonksiyonu
    function showVideoModal(videoPath) {
        if (video && modal) {
            video.src = videoPath;
            modal.classList.add('active');
            videoContainer.classList.add('loaded');
            document.body.style.overflow = 'hidden';
            
            // Video yüklendiğinde otomatik oynat
            video.addEventListener('loadeddata', function() {
                video.play().catch(e => {
                    console.log('Autoplay prevented:', e);
                });
            }, { once: true });
        }
    }
    
    // Modal kapatma fonksiyonu
    function closeVideoModal() {
        if (modal && video) {
            modal.classList.remove('active');
            video.pause();
            video.src = '';
            videoContainer.classList.remove('loaded');
            document.body.style.overflow = '';
        }
    }
    
    // Kapatma butonuna tıklama
    if (closeBtn) {
        closeBtn.addEventListener('click', closeVideoModal);
    }
    
    // Modal overlay'e tıklama
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('basindabiz-modal-overlay')) {
                closeVideoModal();
            }
        });
    }
    
    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeVideoModal();
        }
    });
}

// Fotoğraf modal işlevselliği
function initPhotoModal() {
    const photoModal = document.createElement('div');
    photoModal.id = 'photoModal';
    photoModal.className = 'basindabiz-photo-modal';
    photoModal.innerHTML = `
        <div class="basindabiz-photo-modal-overlay">
            <button class="basindabiz-photo-modal-close">
                <i class="fas fa-times"></i>
            </button>
            <div class="basindabiz-photo-modal-content">
                <img class="basindabiz-photo-modal-image" src="" alt="">
                <div class="basindabiz-photo-modal-info">
                    <div class="basindabiz-photo-counter"></div>
                    <h3 class="basindabiz-photo-modal-title"></h3>
                    <p class="basindabiz-photo-modal-desc"></p>
                </div>
            </div>
            <button class="basindabiz-photo-nav-btn basindabiz-photo-nav-prev">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="basindabiz-photo-nav-btn basindabiz-photo-nav-next">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
    document.body.appendChild(photoModal);
    
    const photos = document.querySelectorAll('.photo-item');
    const modalImage = photoModal.querySelector('.basindabiz-photo-modal-image');
    const modalTitle = photoModal.querySelector('.basindabiz-photo-modal-title');
    const modalDesc = photoModal.querySelector('.basindabiz-photo-modal-desc');
    const modalCounter = photoModal.querySelector('.basindabiz-photo-counter');
    const closeBtn = photoModal.querySelector('.basindabiz-photo-modal-close');
    const prevBtn = photoModal.querySelector('.basindabiz-photo-nav-prev');
    const nextBtn = photoModal.querySelector('.basindabiz-photo-nav-next');
    
    let currentPhotoIndex = 0;
    
    // Fotoğraflara tıklama olayı
    photos.forEach((photo, index) => {
        photo.addEventListener('click', function() {
            currentPhotoIndex = index;
            showPhoto(index);
            photoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Fotoğraf gösterme fonksiyonu
    function showPhoto(index) {
        const photo = photos[index];
        const img = photo.querySelector('img');
        const title = photo.querySelector('h4')?.textContent || '';
        const desc = photo.querySelector('p')?.textContent || '';
        
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalCounter.textContent = `${index + 1} / ${photos.length}`;
        
        // Navigasyon butonlarını güncelle
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === photos.length - 1;
    }
    
    // Modal kapatma
    function closePhotoModal() {
        photoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closePhotoModal);
    
    prevBtn.addEventListener('click', function() {
        if (currentPhotoIndex > 0) {
            currentPhotoIndex--;
            showPhoto(currentPhotoIndex);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentPhotoIndex < photos.length - 1) {
            currentPhotoIndex++;
            showPhoto(currentPhotoIndex);
        }
    });
    
    // Modal overlay'e tıklama
    photoModal.addEventListener('click', function(e) {
        if (e.target === photoModal || e.target.classList.contains('basindabiz-photo-modal-overlay')) {
            closePhotoModal();
        }
    });
    
    // Klavye navigasyonu
    document.addEventListener('keydown', function(e) {
        if (!photoModal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closePhotoModal();
                break;
            case 'ArrowLeft':
                if (currentPhotoIndex > 0) {
                    currentPhotoIndex--;
                    showPhoto(currentPhotoIndex);
                }
                break;
            case 'ArrowRight':
                if (currentPhotoIndex < photos.length - 1) {
                    currentPhotoIndex++;
                    showPhoto(currentPhotoIndex);
                }
                break;
        }
    });
} 