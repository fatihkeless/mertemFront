document.addEventListener('DOMContentLoaded', function() {
    // Video verileri
    const videos = [
        {
            id: 'nXLQOKR7Ji4',
            title: 'YUFKA ÜRETİM HATTI - 20 YILLIK MÜŞTERİMİZİN DEVAM EDEN MEMNUNİYETİ',
            type: 'youtube'
        },
        {
            id: 'omFehy_dfNw',
            title: 'MERTEM SARMA KORNET - İÇ RENKLİ',
            type: 'youtube'
        },
        {
            id: 'IR7caUolgrA',
            title: 'MERTEM SARMA KORNET MAKİNESİ',
            type: 'youtube'
        },
        {
            id: 'g2hsZ_gKT1c',
            title: 'MERTEM - YARI OTOMATİK DONUT MAKİNESİ',
            type: 'youtube'
        },
        {
            id: 'q4kWRg_BbB8',
            title: 'MERTEM - İÇLİ KÖFTE MAKİNESİ / YUNUSULUPINAR.COM',
            type: 'youtube'
        },
        {
            id: 'E_Kp_yRAaoQ',
            title: 'YUNUS ULUPINAR "TİCARET ODASINDA SİYASET OLMAZ! TİCARETİN İDEOLOJİSİ OLAMAZ!"',
            type: 'youtube'
        },
        {
            id: 'ucNliqTtBvs',
            title: 'YUNUS ULUPINAR "ÜLKEM İÇİN YATIRIM YAPACAKLARA PROJELERİM HEP ÜCRETSİZ"',
            type: 'youtube'
        },
        {
            id: '5mxSjVmYhxQ',
            title: 'YUNUS ULUPINAR "HERKES KENDİNİ SİLKELEMELİ VE SORMALI. ÜLKEM İÇİN NE YAPTIM?"',
            type: 'youtube'
        },
        {
            id: 'b9Q00IynKuU',
            title: 'YUNUS ULUPINAR "TİCARET ODASI MECLİS ÜYELERİ HANGİ ÜYELERİNİN DERTLERİNİ DİNLEDİLER?"',
            type: 'youtube'
        },
        {
            id: 'ddVNgo9Lepo',
            title: 'YUNUS ULUPINAR ÖZGEÇMİŞİ ve ADAYLIK KONUŞMASI',
            type: 'youtube'
        },
        {
            id: '2t7fgYXc3W8',
            title: 'MERTEM DONUT MAKİNESİ',
            type: 'youtube'
        },
        {
            id: 'kp98UOwHAsE',
            title: 'YUNUS ULUPINAR - TİCARET ODASI KONUŞMASI (2017)',
            type: 'youtube'
        },
        {
            id: '6qD0WOa6slI',
            title: 'ANTEP YUVALAMA MAKİNESİ',
            type: 'youtube'
        },
        {
            id: '_HFWr_mQbgA',
            title: '%100 YERLİ TÜRK İÇLİ KÖFTE ve DOLGULU KURABİYE MAKİNESİ',
            type: 'youtube'
        },
        {
            id: 'euNx68k6dRo',
            title: '%100 YERLİ TÜRK MANTI MAKİNESİ - ANKOMAK TÜRKİYE',
            type: 'youtube'
        },
        {
            id: 'VazYpKqXdiA',
            title: 'PİZZA, PİZZATOST, PİDE, LAHMACUN ÜRETİM HATTI - ÖZEL PROJE',
            type: 'youtube'
        },
        {
            id: 'e-7T0eeKdKo',
            title: 'Kruvasan Makinesi',
            type: 'youtube'
        },
        {
            id: 'f4NlQgUvOzg',
            title: 'KÜLAH MAKİNESİ - MERTEM',
            type: 'youtube'
        },
        {
            id: 'RJngyoCX8AA',
            title: 'KÜLAH MAKİNESİ - MERTEM',
            type: 'youtube'
        },
        {
            id: 'afAF5muEFJc',
            title: 'TORTİLLA HATTI - MERTEM',
            type: 'youtube'
        },
        {
            id: 'Gsx_TKKtLDE',
            title: 'DONUT MAKİNESİ - MERTEM GIDA TEKNOLOJİLERİ A.Ş',
            type: 'youtube'
        },
        {
            id: 'dChWaQZMVlw',
            title: 'TORTİLLA HATTI - MERTEM MAKİNE',
            type: 'youtube'
        },
        {
            id: '_NjVGRimsVg',
            title: 'YUNUS ULUPINAR - FOOD-TECH EURASIA 2021 FUAR KONUŞMASI',
            type: 'youtube'
        },
        {
            id: 'bagCNSlUgNY',
            title: 'NOSTALJİ - MERTEM',
            type: 'youtube'
        },
        {
            id: 'ns4rbxcWeWc',
            title: 'KOL BÖREK HATTI - MERTEM MAKİNE',
            type: 'youtube'
        },
        {
            id: 'gVjj0oO9PAU',
            title: 'SOĞAN DOĞRAMA / SOĞAN HALKASI MAKİNE - MERTEM / ANKOMAK TÜRKİYE',
            type: 'youtube'
        },
        {
            id: '74j4nTxB1as',
            title: 'BÖREK ÜRETİM HATTI - MERTEM',
            type: 'youtube'
        },
        {
            id: '23QyCe3GaZ0',
            title: 'MERTEM A.Ş VE ANKO GIDA MAKİNALARI YÖNETİM KURULU GENEL MÜDÜRÜ YUNUS ULUPINAR - RADYO RÖPORTAJI',
            type: 'youtube'
        },
        {
            id: 'oud02io3qAk',
            title: 'MUFFIN KEK MAKİNASI',
            type: 'youtube'
        },
        {
            id: 'hw3MfWL0GKQ',
            title: 'TORTİLLA - LAVAŞ ( MEKSİKA TORTİLLASI )',
            type: 'youtube'
        },
        {
            id: 'd4zcNEy0KVw',
            title: 'Mertem Gıda Teknolojileri ve Anko Gıda Makineleri Yönetim Kurulu Başkanı Yunus Ulupınar',
            type: 'youtube'
        },
        {
            id: 'QckN1XPV6Lg',
            title: 'MERTEM GIDA TEKNOLOJİLERİ - TORTİLLA LAVAŞ ÜRETİM HATTI',
            type: 'youtube'
        },
        {
            id: 'LMoOc0sWWyA',
            title: 'WAFFLE MAKİNASI 2',
            type: 'youtube'
        },
        {
            id: '_3IFnq3xJEo',
            title: 'DONDURMA KÜLAH MAKINASI',
            type: 'youtube'
        },
        {
            id: 'CFf2aRp6z5o',
            title: 'DONDURMA KÜLAH MAKİNASI',
            type: 'youtube'
        },
        {
            id: '6EiQEPB_Cag',
            title: 'WAFFLE MAKİNASI',
            type: 'youtube'
        },
        {
            id: 'kM-bfrUimWo',
            title: 'YUNUS ULUPINAR ILE ENDÜSTRİ RADYODA GEÇEN SOHBET 3.BÖLÜM',
            type: 'youtube'
        },
        {
            id: 'CArObgS54ZA',
            title: 'YUNUS ULUPINAR ILE ENDÜSTRİ RADYODA GEÇEN SOHBET 2.BÖLÜM',
            type: 'youtube'
        },
        {
            id: 'nYL-xoFtJQU',
            title: 'YUNUS ULUPINAR ILE ENDÜSTRİ RADYODA GEÇEN SOHBET 1.BÖLÜM',
            type: 'youtube'
        },
        {
            id: '-Ri2fBpMFkw',
            title: 'Yufka Makinası',
            type: 'youtube'
        },
        {
            id: 'TeTbtOBhPJI',
            title: 'İÇLİ KÖFTE MAKİNASI',
            type: 'youtube'
        },
        {
            id: 'CPBFO8-I0IY',
            title: 'KÜLAH MAKİNESİ (BARDAK KUP) Dondurma Külahı Makinası',
            type: 'youtube'
        },
        {
            id: 'wl0XMypcpPI',
            title: 'KOL BÖREĞİ HATTI',
            type: 'youtube'
        },
        {
            id: 'oB1r-RxKlf4',
            title: 'KOL BÖREK MAKİNESİ',
            type: 'youtube'
        },
        {
            id: '-jNKuUR9lsQ',
            title: 'Ultrasonik Giyotin 3',
            type: 'youtube'
        },
        {
            id: 'V5xIL1i58tw',
            title: 'KRUVASAN MAKİNESİ - MERTEM MAKİNE',
            type: 'youtube'
        },
        {
            id: 't5vAPrI0Pig',
            title: 'Yumurta Kırma Makinası',
            type: 'youtube'
        },
        {
            id: 'dMZqsX3lvvw',
            title: 'Sigara Böreği Makinası',
            type: 'youtube'
        },
        {
            id: '_1FdZqwdBBo',
            title: 'OTOMATİK ÇÖP ŞİŞ MAKİNESİ',
            type: 'youtube'
        },
        {
            id: 'HxtAUo38tl4',
            title: 'Yumurta Sarı ve Beyazını Ayıran Makina',
            type: 'youtube'
        },
        {
            id: 'fGpec9GaLmQ',
            title: 'OTOMATİK ÇÖP ŞİŞ MAKİNESİ - MERTEM',
            type: 'youtube'
        },
        {
            id: 'ru2Lwqj0ksM',
            title: 'MERTEM A.Ş. - ASTON FOODS VAKUM SOĞUTMA SİSTEMLERİ SÜREKLİ SİSTEM',
            type: 'youtube'
        },
        {
            id: 'ufgPZn61FkE',
            title: 'MERTEM A.Ş. - ASTON FOODS VAKUM SOĞUTMA SİSTEMLERİ',
            type: 'youtube'
        },
        {
            id: '__nj5NUsBuM',
            title: 'MERTEM A.Ş. Kek Dolum makinesi CP 510 Cake Depositor',
            type: 'youtube'
        },
        {
            id: 'h5MjAYgbZrw',
            title: 'CP 502 Kurabiye dolum makinesi CP 502 Cookie Depositor',
            type: 'youtube'
        },
        {
            id: 'ax7HucGOJ6o',
            title: 'MERTEM DOLGULU KRUVASAN MAKİNESİ',
            type: 'youtube'
        },
        {
            id: 'PRP9B6z5rGA',
            title: 'DOLGUSUZ KRUVASAN MAKİNESİ - MERTEM',
            type: 'youtube'
        },
        {
            id: '1o59mrLkhzE',
            title: 'YUMURTA KIRMA MAKİNASI UDTJ-10 MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'yKx3M3crRCM',
            title: 'YUMURTA KIRMA MAKİNASI - MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'i1V5pwhyocU',
            title: 'ZARF TİPİ PAKETLEME MAKİNESİ - MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'SDkiq46tZT0',
            title: 'MİNİ DONUT MAKİNASI - MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'w0lUrP4Noms',
            title: 'Yunus ULUPINAR - TV PROGRAMI',
            type: 'youtube'
        },
        {
            id: 'HVgyWhgpcGI',
            title: 'KURABİYE MAKİNASI (CD-502)-MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: '5vT29uauCdA',
            title: 'PASTA DİLİMLEME MAKİNASI(CD-630)-MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'VCnoiN6LhIY',
            title: 'KEK DEPOZİTÖR VE KURABİYE MAKİNASI MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'Vo96h11fy2Q',
            title: 'YUFKA MAKİNESİ - MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'j7YSOQ7q8SY',
            title: 'YUNUS ULUPINAR - TGRT EU KANALI',
            type: 'youtube'
        },
        {
            id: '6_AVIKHkrw0',
            title: 'Sandviç ve Ekler Dolum Makinası - MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'blBtX3mJ2_g',
            title: 'Yumurta Kırma Makinası Sarı ile Beyazını Ayırır. -MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'e2bEvYuoYQw',
            title: 'YUMURTA KIRMA MAKİNASI -MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: '4p1cZotZ8S4',
            title: 'YARI OTOMATİK FRİTÖZ(DONUT) - MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'at_K1X7wP3U',
            title: 'OTOMATİK DONUT FRİTÖZ- MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'APv5v6ytK2I',
            title: 'KURABİYE HATTI-MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'AsOBP72LgFQ',
            title: 'FREEZER MAKİNASI(DONDURUCU) -MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'ptQ8FcN_ebY',
            title: 'PASTA DİLİMLEME MAKİNASI-MERTEM A.Ş',
            type: 'youtube'
        },
        {
            id: 'Wq7noAFk90Q',
            title: 'HAMBURGER HATTI MERTEM A Ş',
            type: 'youtube'
        },
        {
            id: 'MEAfhFjwiIM',
            title: 'ÇOK FONKSİYONLU BİSKÜVİ, DOLGULU-DOLGUSUZ KURABİYE MAKİNALARI 3 - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: '4lfNzs4hai0',
            title: 'ÇOK FONKSİYONLU BİSKÜVİ, DOLGULU-DOLGUSUZ KURABİYE MAKİNALARI 2 - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: '-1UjXlaB_jU',
            title: 'ÇOK FONKSİYONLU BİSKÜVİ, DOLGULU-DOLGUSUZ KURABİYE MAKİNALARI 1 - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'VKsc1fjq0DY',
            title: 'YAĞ PASTA ÜRETİM MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: '3bpN7pze7dg',
            title: 'DEPOZİTÖR (MASA ÜSTÜ) - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'I2Gq8Qdz24Y',
            title: 'MANTI MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'coHOyGFVAHQ',
            title: 'GRİSSİNİ HATTI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'CVGCmkAi7zQ',
            title: 'YUMURTA KIRMA MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'Vrzy5fGzw64',
            title: 'EKMEK HATTI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'tLQKNX9Ntp4',
            title: 'SANDVİÇ İÇİ DOLDURMA MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'LPJKbXGzl34',
            title: 'TORTİLLA MİNİ PRES - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'vFOGkgk9XOc',
            title: 'Spiral Tünel Soğutucu - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: '-AwOMQ1Yxyo',
            title: 'ÇÖP ŞİŞ MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: '46nXPZeFyNI',
            title: 'DONDURMA MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'H2SzXWB9xFc',
            title: 'KRUVASAN ÜRETİM HATTI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: '0fKfhK2SP7U',
            title: 'YUFKA HATTI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'rQvwIWxI3us',
            title: 'YUFKA MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'uOPqlplNlcc',
            title: 'PATATES CİPS MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'H5eHeb6VO9c',
            title: 'KRUVASAN MAKİNESİ 2 - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: '4g5mVSsyy3k',
            title: 'MİNİ DONUT MAKİNESİ - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'sweMTZXz5YE',
            title: 'TAM OTOMATİK PET ŞİŞİRME MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'bgH4PK9vOxk',
            title: 'HAMBURGER HATTI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: '-DxmkWNZV18',
            title: 'OTOMATİK ÇÖP ŞİŞ MAKİNASI - MERTEM AŞ',
            type: 'youtube'
        },
        {
            id: 'VSZlh2rLK9I',
            title: 'KOL BÖREĞİ MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'qdtoa6uWAhA',
            title: 'DOĞAL TÜRK LAVAŞ MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'X03LbRmgNqE',
            title: 'ULTRASONİK DONUK KEK VE PASTA KESME MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'B5gLvM1fQsQ',
            title: 'GAZLI ÇİFT GÖZLÜ VAKUM MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'EQUf7nt4yiU',
            title: 'KEK DEPOZİTÖRÜ ve KURABİYE, MAKARON, EKLER MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'l0DjNLB6ynM',
            title: 'EKLER DOLUM MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'ah110qN56bE',
            title: 'BAKLAVA MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'qIRfQljDmDU',
            title: 'RULO KAT MAKİNASI (4 ŞERİTLİ) - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'Y-7kgS8SVW8',
            title: 'PİZZA MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'flcaqH8IaDE',
            title: 'PASTA MAKİNESİ - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'GyM1vU1DL3g',
            title: 'KOL BÖREĞİ MAKİNASI - MERTEM A.Ş.',
            type: 'youtube'
        },
        {
            id: 'roa8i_-s_oQ',
            title: 'YUNUS ULUPINAR-GIDA MAK.-ENDÜSTRİYEL TEKNOLOJİLER-UNLU MAM.MAKİNALARI',
            type: 'youtube'
        }
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
            default: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
            high: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
            medium: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
            standard: `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
            frame2sec: `https://i.ytimg.com/vi/${videoId}/2.jpg`,
            frame1sec: `https://i.ytimg.com/vi/${videoId}/1.jpg`,
            frame5sec: `https://i.ytimg.com/vi/${videoId}/5.jpg`,
            frame4sec: `https://i.ytimg.com/vi/${videoId}/4.jpg`,
            frame3sec: `https://i.ytimg.com/vi/${videoId}/3.jpg`,
        };
    }

    // Başlık kısaltma fonksiyonu
    function truncateTitle(title, maxLength = 50) {
        if (title.length <= maxLength) {
            return title;
        }
        return title.substring(0, maxLength).trim() + '...';
    }

    // Thumbnail hata durumunu yönetecek fonksiyon
    window.handleThumbnailError = function(img, videoId) {
        const thumbnails = getThumbnailUrl(videoId, 'youtube');
    
        if (!thumbnails || !videoId) return;
    
        // '_'' içeriyorsa sadece default kullan, fallback yapma
        if (videoId.includes('_')) {
            img.src = thumbnails.default;
            return;
        }
    
        const currentSrc = img.src;
    
        // Fallback sırası
        const fallbackSequence = [
            thumbnails.default,
            thumbnails.high,
            thumbnails.frame5sec,
            thumbnails.frame4sec,
            thumbnails.frame3sec,
            thumbnails.frame2sec,
            thumbnails.frame1sec,
            thumbnails.medium,
            thumbnails.standard
        ];
    
        // Şu anki src'nin sıralamadaki yerini bul
        const currentIndex = fallbackSequence.findIndex(url => currentSrc.endsWith(url));
    
        // Bir sonraki fallback varsa onu ayarla
        if (currentIndex >= 0 && currentIndex < fallbackSequence.length - 1) {
            img.src = fallbackSequence[currentIndex + 1];
        } else {
            // Tüm fallback'lar tükendi, placeholder göster
            img.src = '..images/3.jpg';
            img.alt = 'Video Thumbnail Yüklenemedi';
        }
    };
    

    // Her video için kart oluştur
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'swiper-slide';
        
        const thumbnails = getThumbnailUrl(video.id, video.type);
        const truncatedTitle = truncateTitle(video.title);
        
        let imgHTML = '';
        if (video.type === 'vimeo') {
            imgHTML = `<img src="${thumbnails}" alt="${video.title}">`;
        } else {
            imgHTML = `
                <img 
                    src="${thumbnails.default}" 
                    onerror="handleThumbnailError(this, '${video.id}')"
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
                    <h3 class="video-title" data-full-title="${video.title}">${truncatedTitle}</h3>
                    <div class="tooltip">${video.title}</div>
                </div>
            </div>
        `;

        document.getElementById('videoGrid').appendChild(videoCard);
    });

    // Tooltip CSS'ini ekle
    const tooltipStyle = document.createElement('style');
    tooltipStyle.textContent = `
        .video-info {
            position: relative;
        }
        
        .tooltip {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            line-height: 1.4;
            white-space: nowrap;
            max-width: 300px;
            word-wrap: break-word;
            white-space: normal;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
            z-index: 1000;
            pointer-events: none;
        }
        
        .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 5px solid transparent;
            border-top-color: rgba(0, 0, 0, 0.9);
        }
        
        .video-title:hover + .tooltip {
            opacity: 1;
            visibility: visible;
        }
    `;
    document.head.appendChild(tooltipStyle);

    // Hover event listener'ları ekle
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('video-title')) {
            const tooltip = e.target.nextElementSibling;
            if (tooltip && tooltip.classList.contains('tooltip')) {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            }
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('video-title')) {
            const tooltip = e.target.nextElementSibling;
            if (tooltip && tooltip.classList.contains('tooltip')) {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            }
        }
    });

    // Modal işlemleri
    const modal = document.getElementById('videoModalNormal');
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

